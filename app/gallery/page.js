'use client';
import { useState, useEffect } from 'react';
import styles from '@/styles/Gallery.module.css';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { listImagesInFolder, listFolders, STORAGE_BASE_URL } from '@/lib/supabase';

// Fallback data if dynamic listing fails
const FALLBACK_DATA = {
  '2026': ['Black_History_Workshop', 'Links_Choclate_Hour', 'Self_Esteem'],
  '2025': ['Community_Reg', 'Culmination_Ceremony', 'Holiday_Party', 'Housekeeping', 'Ready_Set_Go'],
  '2024': ['Chess_Life', 'Edward_Ellis', 'Michael_Morgan', 'Peter_Davis_Mccormick', 'Rites_Passage']
};

// Convert folder name to display label
function folderToLabel(folder) {
  return folder
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

// Excluded folders that aren't year-based event galleries
const EXCLUDED_FOLDERS = ['Showcase', 'headshots', 'board_headshots'];

// Individual image card that handles its own error state
function GalleryImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  return (
    <div className={styles.masonryItem}>
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
        onError={() => setHasError(true)}
      />
      <div className={styles.imageOverlay}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          <path d="M11 8v6"/><path d="M8 11h6"/>
        </svg>
      </div>
    </div>
  );
}

function EventGallery({ year, eventFolder }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const result = await listImagesInFolder(`${year}/${eventFolder}`);
      setImages(result);
      setLoading(false);
    }
    fetchImages();
  }, [year, eventFolder]);

  // Don't render the section if there are no images
  if (!loading && images.length === 0) return null;

  return (
    <div className={styles.eventSection}>
      <h3 className={styles.eventTitle}>{folderToLabel(eventFolder)}</h3>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading photos...</p>
        </div>
      ) : (
        <div className={styles.masonryGrid}>
          {images.map((img, index) => (
            <GalleryImage 
              key={img.name || index} 
              src={img.url} 
              alt={`${folderToLabel(eventFolder)} photo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const [galleryData, setGalleryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [years, setYears] = useState([]);

  useEffect(() => {
    async function discoverGallery() {
      // Try to dynamically discover years and events
      const rootFolders = await listFolders('');
      
      // Filter to only year-like folders (4 digits) and exclude non-gallery folders
      const yearFolders = rootFolders
        .filter(f => /^\d{4}$/.test(f) && !EXCLUDED_FOLDERS.includes(f))
        .sort((a, b) => parseInt(b) - parseInt(a)); // newest first

      if (yearFolders.length > 0) {
        const data = {};
        for (const year of yearFolders) {
          const events = await listFolders(year);
          if (events.length > 0) {
            data[year] = events;
          }
        }
        setGalleryData(data);
        setYears(yearFolders.filter(y => data[y]));
      } else {
        // Fall back to hardcoded data
        setGalleryData(FALLBACK_DATA);
        setYears(Object.keys(FALLBACK_DATA).sort((a, b) => parseInt(b) - parseInt(a)));
      }

      setLoading(false);
    }
    discoverGallery();
  }, []);

  return (
    <div className={styles.galleryPage}>
      <div className="container">
        <FadeIn className={styles.galleryHeader}>
          <span className={styles.headerLabel}>Our Memories</span>
          <h1>Event Gallery</h1>
          <p>
            Explore the memorable moments, programs, and workshops that make up the Afri-Female Institute&apos;s rich history.
          </p>
        </FadeIn>

        {loading ? (
          <div className={styles.loadingContainer} style={{ minHeight: '40vh' }}>
            <div className={styles.loadingSpinner}></div>
            <p>Loading gallery...</p>
          </div>
        ) : (
          years.map(year => (
            <section key={year} className={styles.yearSection}>
              <FadeIn>
                <h2 className={styles.yearTitle}>{year}</h2>
              </FadeIn>
              <StaggerContainer>
                {(galleryData[year] || []).map(eventFolder => (
                  <StaggerItem key={eventFolder}>
                    <EventGallery year={year} eventFolder={eventFolder} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
