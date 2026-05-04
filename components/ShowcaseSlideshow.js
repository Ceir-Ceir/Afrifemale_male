'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from '@/styles/Gallery.module.css';
import { listImagesInFolder, STORAGE_BASE_URL } from '@/lib/supabase';

// Fallback images if Supabase listing fails (no anon key, etc.)
const FALLBACK_SLIDES = [
  { name: 'slide1', url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=1200' },
  { name: 'slide2', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200' },
  { name: 'slide3', url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200' },
  { name: 'slide4', url: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1200' },
];

export default function ShowcaseSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState(FALLBACK_SLIDES);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetch real images from Supabase
  useEffect(() => {
    async function fetchSlides() {
      const result = await listImagesInFolder('Showcase/SlideShow');
      if (result.length > 0) {
        setSlides(result);
      }
      setIsLoaded(true);
    }
    fetchSlides();
  }, []);

  // Auto-advance timer
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      {slides.map((slide, index) => (
        <div 
          key={slide.name} 
          className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
        >
          <img 
            src={slide.url} 
            alt={`Showcase ${index + 1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            onError={(e) => {
              if (!e.target.dataset.fallback) {
                e.target.dataset.fallback = 'true';
                e.target.src = FALLBACK_SLIDES[index % FALLBACK_SLIDES.length]?.url || FALLBACK_SLIDES[0].url;
              }
            }}
          />
          <div className={styles.slideOverlay}>
            <h2>Empowering Our Youth</h2>
            <p>Highlights from our community events and programs.</p>
          </div>
        </div>
      ))}

      {slides.length > 1 && (
        <div className={styles.slideshowControls}>
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}
