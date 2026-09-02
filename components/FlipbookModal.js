'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import styles from '@/styles/Flipbook.module.css';

export default function FlipbookModal({ pdfUrl, onClose }) {
  const [pdfLib, setPdfLib] = useState(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);
  const flipFrontCanvasRef = useRef(null);
  const flipBackCanvasRef = useRef(null);

  const touchStartX = useRef(0);

  // Load PDF.js library dynamically in browser
  useEffect(() => {
    if (window.pdfjsLib) {
      setPdfLib(window.pdfjsLib);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.async = true;
    script.onload = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        setPdfLib(window.pdfjsLib);
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  // Load PDF Document once pdfLib is ready
  useEffect(() => {
    if (!pdfLib) return;
    let isMounted = true;
    setLoading(true);

    async function loadPdf() {
      try {
        const loadingTask = pdfLib.getDocument(pdfUrl);
        const doc = await loadingTask.promise;
        if (isMounted) {
          setPdfDoc(doc);
          setNumPages(doc.numPages);
          setLoading(false);
        }
      } catch (err) {
        console.error('Error loading PDF flipbook:', err);
        if (isMounted) setLoading(false);
      }
    }

    loadPdf();
    return () => { isMounted = false; };
  }, [pdfLib, pdfUrl]);

  // Render a specific page number onto a canvas element
  const renderPageToCanvas = useCallback(async (pageNo, canvas) => {
    if (!pdfDoc || !canvas || pageNo < 1 || pageNo > numPages) return;
    try {
      const page = await pdfDoc.getPage(pageNo);
      const viewport = page.getViewport({ scale: 1.5 });
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({
        canvasContext: context,
        viewport: viewport
      }).promise;
    } catch (err) {
      console.error(`Error rendering page ${pageNo}:`, err);
    }
  }, [pdfDoc, numPages]);

  // Render current spread (Left page & Right page)
  useEffect(() => {
    if (!pdfDoc || loading) return;

    if (currentPage === 1) {
      if (leftCanvasRef.current) {
        const ctx = leftCanvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, leftCanvasRef.current.width, leftCanvasRef.current.height);
      }
      renderPageToCanvas(1, rightCanvasRef.current);
    } else {
      const leftPageNo = currentPage % 2 === 0 ? currentPage : currentPage - 1;
      const rightPageNo = leftPageNo + 1;

      renderPageToCanvas(leftPageNo, leftCanvasRef.current);
      if (rightPageNo <= numPages) {
        renderPageToCanvas(rightPageNo, rightCanvasRef.current);
      } else if (rightCanvasRef.current) {
        const ctx = rightCanvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, rightCanvasRef.current.width, rightCanvasRef.current.height);
      }
    }
  }, [pdfDoc, currentPage, loading, renderPageToCanvas, numPages]);

  // Handle Page Turn Animation
  const turnPage = useCallback((dir) => {
    if (isFlipping || !pdfDoc) return;

    if (dir === 'next' && currentPage < numPages) {
      const nextPageNo = currentPage === 1 ? 2 : currentPage + 2;
      if (nextPageNo > numPages + 1) return;

      setIsFlipping(true);
      setFlipDirection('next');

      renderPageToCanvas(currentPage % 2 === 0 ? currentPage + 1 : currentPage, flipFrontCanvasRef.current);
      renderPageToCanvas(nextPageNo, flipBackCanvasRef.current);

      setTimeout(() => {
        setCurrentPage(Math.min(nextPageNo, numPages));
        setIsFlipping(false);
      }, 550);

    } else if (dir === 'prev' && currentPage > 1) {
      const prevPageNo = currentPage === 2 ? 1 : Math.max(1, currentPage - 2);

      setIsFlipping(true);
      setFlipDirection('prev');

      renderPageToCanvas(currentPage % 2 === 0 ? currentPage : currentPage, flipFrontCanvasRef.current);
      renderPageToCanvas(prevPageNo, flipBackCanvasRef.current);

      setTimeout(() => {
        setCurrentPage(prevPageNo);
        setIsFlipping(false);
      }, 550);
    }
  }, [currentPage, numPages, isFlipping, pdfDoc, renderPageToCanvas]);

  // Keyboard navigation & ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') turnPage('next');
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') turnPage('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, turnPage]);

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      if (currentPage >= numPages) {
        setIsAutoPlay(false);
      } else {
        turnPage('next');
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, currentPage, numPages, turnPage]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) turnPage('next');
    if (diff < -50) turnPage('prev');
  };

  return (
    <div 
      className={styles.flipbookBackdrop}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className={styles.flipbookContainer} role="dialog" aria-modal="true">
        {/* Top Header */}
        <div className={styles.topBar}>
          <div className={styles.titleArea}>
            <span className={styles.journalIcon}>📖</span>
            <div>
              <h3>2026 Community Recognition Banquet Souvenir Journal</h3>
              <p>AfriFemale-Male Institute • 3D Interactive Flipbook</p>
            </div>
          </div>

          <div className={styles.topActions}>
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.openPdfBtn}
            >
              Raw PDF ↗
            </a>
            <button 
              type="button" 
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close flipbook"
            >
              ✕
            </button>
          </div>
        </div>

        {/* 3D Book Stage */}
        <div 
          className={styles.stage}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {loading ? (
            <div className={styles.loader}>
              <div className={styles.spinner}></div>
              <p>Loading 3D Banquet Flipbook Journal...</p>
            </div>
          ) : (
            <div className={styles.bookWrapper}>
              {/* Prev / Next Page Buttons */}
              <button 
                type="button" 
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={() => turnPage('prev')}
                disabled={currentPage <= 1}
                aria-label="Previous Page"
              >
                ‹
              </button>

              <button 
                type="button" 
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={() => turnPage('next')}
                disabled={currentPage >= numPages}
                aria-label="Next Page"
              >
                ›
              </button>

              {/* Hardcover Spread */}
              <div className={styles.bookSpread}>
                <div className={styles.spineShadow}></div>

                {/* Left Page Box */}
                <div className={`${styles.pageBox} ${styles.leftPage}`}>
                  <canvas ref={leftCanvasRef} className={styles.pageCanvas} />
                </div>

                {/* Right Page Box */}
                <div className={`${styles.pageBox} ${styles.rightPage}`}>
                  <canvas ref={rightCanvasRef} className={styles.pageCanvas} />
                </div>

                {/* 3D Animated Flip Sheet */}
                {isFlipping && (
                  <div className={`${styles.flipperSheet} ${
                    flipDirection === 'next' ? styles.flipperSheetRight : styles.flipperSheetLeft
                  } ${isFlipping ? (flipDirection === 'next' ? styles.flipperFlippedRight : styles.flipperFlippedLeft) : ''}`}>
                    <div className={styles.flipperFace}>
                      <canvas ref={flipFrontCanvasRef} className={styles.pageCanvas} />
                    </div>
                    <div className={`${styles.flipperFace} ${styles.flipperBack}`}>
                      <canvas ref={flipBackCanvasRef} className={styles.pageCanvas} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Control Toolbar */}
        <div className={styles.toolbar}>
          <div className={styles.pageControls}>
            <span className={styles.pageCounter}>
              Page {currentPage} of {numPages}
            </span>
            <input 
              type="range" 
              min="1" 
              max={numPages} 
              value={currentPage} 
              onChange={(e) => setCurrentPage(parseInt(e.target.value))}
              className={styles.pageSlider}
              disabled={loading}
            />
          </div>

          <div className={styles.toolGroup}>
            <button 
              type="button" 
              className={`${styles.toolBtn} ${isAutoPlay ? styles.activeToolBtn : ''}`}
              onClick={() => setIsAutoPlay(!isAutoPlay)}
            >
              {isAutoPlay ? '⏸ Pause Auto-Turn' : '▶ Auto-Turn Pages'}
            </button>
            <button 
              type="button" 
              className={styles.toolBtn}
              onClick={() => turnPage('prev')}
              disabled={currentPage <= 1}
            >
              ◀ Prev
            </button>
            <button 
              type="button" 
              className={styles.toolBtn}
              onClick={() => turnPage('next')}
              disabled={currentPage >= numPages}
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
