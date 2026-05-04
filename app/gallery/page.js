'use client';
import { useState, useEffect } from 'react';
import styles from '@/styles/Gallery.module.css';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';
import { listImagesInFolder, STORAGE_BASE_URL } from '@/lib/supabase';

const GALLERY_DATA = {
  '2026': [
    { folder: 'Black_History_Workshop', label: 'Black History Workshop' },
    { folder: 'Links_Choclate_Hour', label: 'Links Chocolate Hour' },
    { folder: 'Self_Esteem', label: 'Self Esteem' }
  ],
  '2025': [
    { folder: 'Community_Reg', label: 'Community Registration' },
    { folder: 'Culmination_Ceremony', label: 'Culmination Ceremony' },
    { folder: 'Holiday_Party', label: 'Holiday Party' },
    { folder: 'Housekeeping', label: 'Housekeeping' },
    { folder: 'Ready_Set_Go', label: 'Ready Set Go' }
  ],
  '2024': [
    { folder: 'Chess_Life', label: 'Chess Life' },
    { folder: 'Edward_Ellis', label: 'Edward Ellis' },
    { folder: 'Michael_Morgan', label: 'Michael Morgan' },
    { folder: 'Peter_Davis_Mccormick', label: 'Peter Davis McCormick' },
    { folder: 'Rites_Passage', label: 'Rites of Passage' }
  ]
};

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

function EventGallery({ year, event }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const result = await listImagesInFolder(`${year}/${event.folder}`);
      setImages(result);
      setLoading(false);
    }
    fetchImages();
  }, [year, event.folder]);

  // If no Supabase key is set, fall back to trying numbered files
  const fallbackImages = images.length === 0 && !loading ? 
    Array.from({ length: 8 }, (_, i) => ({
      name: `${i + 1}`,
      url: `${STORAGE_BASE_URL}/${year}/${event.folder}/${i + 1}.jpg`
    })) : images;

  const displayImages = images.length > 0 ? images : fallbackImages;

  return (
    <div className={styles.eventSection}>
      <h3 className={styles.eventTitle}>{event.label}</h3>
      {loading ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading photos...</p>
        </div>
      ) : (
        <div className={styles.masonryGrid}>
          {displayImages.map((img, index) => (
            <GalleryImage 
              key={img.name || index} 
              src={img.url} 
              alt={`${event.label} photo ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// Lightbox component for full-screen image viewing
function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <button className={styles.lightboxClose} onClick={onClose}>✕</button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default function GalleryPage() {
  const years = ['2026', '2025', '2024'];

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

        {years.map(year => (
          <section key={year} className={styles.yearSection}>
            <FadeIn>
              <h2 className={styles.yearTitle}>{year}</h2>
            </FadeIn>
            <StaggerContainer>
              {GALLERY_DATA[year].map(event => (
                <StaggerItem key={event.folder}>
                  <EventGallery year={year} event={event} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        ))}
      </div>
    </div>
  );
}
