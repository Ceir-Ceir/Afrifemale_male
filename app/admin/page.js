'use client';
import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { uploadFile, deleteFile, listFolders, listImagesInFolder, STORAGE_BASE_URL } from '@/lib/supabase';
import styles from '@/styles/Admin.module.css';

const ADMIN_PIN = '1998'; // Founding year as default PIN
const EXCLUDED_FOLDERS = ['Showcase', 'headshots', 'board_headshots'];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState('upload'); // 'upload' | 'manage'

  // Upload form state
  const [eventTitle, setEventTitle] = useState('');
  const [eventYear, setEventYear] = useState(new Date().getFullYear().toString());
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
  const [uploadResults, setUploadResults] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  // Manage state
  const [manageYears, setManageYears] = useState([]);
  const [manageEvents, setManageEvents] = useState({});
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventImages, setEventImages] = useState([]);
  const [loadingManage, setLoadingManage] = useState(false);
  const [deletingFile, setDeletingFile] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // ===== PIN =====
  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Incorrect PIN. Please try again.');
    }
  };

  // ===== UPLOAD LOGIC =====
  const handleDragOver = useCallback((e) => { e.preventDefault(); setIsDragging(true); }, []);
  const handleDragLeave = useCallback((e) => { e.preventDefault(); setIsDragging(false); }, []);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    setFiles(prev => [...prev, ...droppedFiles]);
  }, []);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files).filter(f => f.type.startsWith('image/'));
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => setFiles(prev => prev.filter((_, i) => i !== index));

  const formatFolderName = (title) => title.trim().replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!eventTitle.trim() || files.length === 0) return;

    setUploading(true);
    setUploadResults([]);
    setSuccessMessage('');

    const folderName = formatFolderName(eventTitle);
    const folderPath = `${eventYear}/${folderName}`;
    const results = [];

    setUploadProgress({ current: 0, total: files.length });

    for (let i = 0; i < files.length; i++) {
      setUploadProgress({ current: i + 1, total: files.length });
      const result = await uploadFile(folderPath, files[i]);
      results.push({ name: files[i].name, ...result });
    }

    setUploadResults(results);
    const successCount = results.filter(r => r.success).length;

    if (successCount > 0) {
      setSuccessMessage(
        `Successfully uploaded ${successCount} of ${files.length} photo${files.length > 1 ? 's' : ''} to "${eventTitle}" (${eventYear}).`
      );
      setEventTitle('');
      setFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
    setUploading(false);
  };

  // ===== MANAGE LOGIC =====
  const loadYears = async () => {
    setLoadingManage(true);
    const rootFolders = await listFolders('');
    const yearFolders = rootFolders
      .filter(f => /^\d{4}$/.test(f) && !EXCLUDED_FOLDERS.includes(f))
      .sort((a, b) => parseInt(b) - parseInt(a));
    setManageYears(yearFolders);
    setLoadingManage(false);
  };

  const loadEvents = async (year) => {
    setSelectedYear(year);
    setSelectedEvent(null);
    setEventImages([]);
    setLoadingManage(true);
    const events = await listFolders(year);
    setManageEvents(prev => ({ ...prev, [year]: events }));
    setLoadingManage(false);
  };

  const loadEventImages = async (year, event) => {
    setSelectedEvent(event);
    setLoadingManage(true);
    const images = await listImagesInFolder(`${year}/${event}`);
    setEventImages(images);
    setLoadingManage(false);
  };

  const handleDeleteImage = async (image) => {
    const filePath = `${selectedYear}/${selectedEvent}/${image.name}`;
    setDeletingFile(image.name);

    const result = await deleteFile(filePath);
    if (result.success) {
      setEventImages(prev => prev.filter(img => img.name !== image.name));
    } else {
      alert(`Failed to delete: ${result.error}`);
    }

    setDeletingFile(null);
    setDeleteConfirm(null);
  };

  useEffect(() => {
    if (activeTab === 'manage' && isAuthenticated) {
      loadYears();
    }
  }, [activeTab, isAuthenticated]);

  // ===== PIN GATE =====
  if (!isAuthenticated) {
    return (
      <div className={styles.adminPage}>
        <div className={styles.pinGate}>
          <div className={styles.pinCard}>
            <div className={styles.lockIcon}>🔒</div>
            <h1>Admin Access</h1>
            <p>Enter your PIN to manage event photos.</p>
            <form onSubmit={handlePinSubmit} className={styles.pinForm}>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN"
                className={styles.pinInput}
                maxLength={10}
                autoFocus
              />
              {pinError && <p className={styles.pinError}>{pinError}</p>}
              <button type="submit" className={styles.pinButton}>Unlock</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // ===== MAIN INTERFACE =====
  return (
    <div className={styles.adminPage}>
      <div className={styles.adminContainer}>
        <div className={styles.adminHeader}>
          <div>
            <h1>📸 Photo Manager</h1>
            <p>Upload new event photos or manage existing ones.</p>
          </div>
          <Link href="/gallery" className={styles.viewGalleryBtn}>View Gallery →</Link>
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabBar}>
          <button
            className={`${styles.tab} ${activeTab === 'upload' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            ⬆️ Upload Photos
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'manage' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('manage')}
          >
            🗂️ Manage Events
          </button>
        </div>

        {/* ===== UPLOAD TAB ===== */}
        {activeTab === 'upload' && (
          <>
            <form onSubmit={handleUpload} className={styles.uploadForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="eventTitle">Event Title</label>
                  <input
                    id="eventTitle"
                    type="text"
                    value={eventTitle}
                    onChange={(e) => setEventTitle(e.target.value)}
                    placeholder="e.g. Holiday Party, Chess Tournament"
                    required
                    className={styles.textInput}
                  />
                  {eventTitle && (
                    <span className={styles.folderPreview}>
                      Will save to: <strong>{eventYear}/{formatFolderName(eventTitle)}/</strong>
                    </span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="eventYear">Year</label>
                  <select
                    id="eventYear"
                    value={eventYear}
                    onChange={(e) => setEventYear(e.target.value)}
                    className={styles.selectInput}
                  >
                    {[2026, 2025, 2024, 2023, 2022, 2021, 2020].map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div
                className={`${styles.dropZone} ${isDragging ? styles.dropZoneActive : ''} ${files.length > 0 ? styles.dropZoneHasFiles : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input type="file" ref={fileInputRef} onChange={handleFileSelect} multiple accept="image/*" className={styles.fileInput} />
                {files.length === 0 ? (
                  <div className={styles.dropZoneContent}>
                    <div className={styles.dropIcon}>📁</div>
                    <p className={styles.dropText}>Drag & drop photos here, or <span>click to browse</span></p>
                    <p className={styles.dropHint}>JPG, JPEG, PNG — up to 50MB each</p>
                  </div>
                ) : (
                  <div className={styles.dropZoneContent}>
                    <p className={styles.fileCount}>{files.length} photo{files.length > 1 ? 's' : ''} selected</p>
                    <p className={styles.dropHint}>Click or drag to add more</p>
                  </div>
                )}
              </div>

              {files.length > 0 && (
                <div className={styles.previewGrid}>
                  {files.map((file, index) => (
                    <div key={`${file.name}-${index}`} className={styles.previewItem}>
                      <img src={URL.createObjectURL(file)} alt={file.name} className={styles.previewImage} />
                      <button type="button" className={styles.removeBtn} onClick={(e) => { e.stopPropagation(); removeFile(index); }}>✕</button>
                      <span className={styles.previewName}>{file.name}</span>
                    </div>
                  ))}
                </div>
              )}

              <button type="submit" className={styles.uploadBtn} disabled={uploading || files.length === 0 || !eventTitle.trim()}>
                {uploading ? (
                  <><span className={styles.spinner}></span> Uploading {uploadProgress.current} of {uploadProgress.total}...</>
                ) : (
                  <>Upload {files.length} Photo{files.length !== 1 ? 's' : ''}</>
                )}
              </button>
            </form>

            {successMessage && (
              <div className={styles.successBanner}>
                <span>✅</span>
                <p>{successMessage}</p>
                <Link href="/gallery">View in Gallery →</Link>
              </div>
            )}

            {uploadResults.length > 0 && uploadResults.some(r => !r.success) && (
              <div className={styles.errorList}>
                <h3>Some uploads had issues:</h3>
                {uploadResults.filter(r => !r.success).map((r, i) => (
                  <p key={i} className={styles.errorItem}>❌ <strong>{r.name}</strong>: {r.error}</p>
                ))}
              </div>
            )}
          </>
        )}

        {/* ===== MANAGE TAB ===== */}
        {activeTab === 'manage' && (
          <div className={styles.manageSection}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
              <button
                className={styles.breadcrumbItem}
                onClick={() => { setSelectedYear(null); setSelectedEvent(null); setEventImages([]); }}
              >
                All Years
              </button>
              {selectedYear && (
                <>
                  <span className={styles.breadcrumbSep}>›</span>
                  <button
                    className={styles.breadcrumbItem}
                    onClick={() => { setSelectedEvent(null); setEventImages([]); }}
                  >
                    {selectedYear}
                  </button>
                </>
              )}
              {selectedEvent && (
                <>
                  <span className={styles.breadcrumbSep}>›</span>
                  <span className={styles.breadcrumbCurrent}>
                    {selectedEvent.replace(/_/g, ' ')}
                  </span>
                </>
              )}
            </div>

            {loadingManage && (
              <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner}></div>
                <p>Loading...</p>
              </div>
            )}

            {/* Year list */}
            {!selectedYear && !loadingManage && (
              <div className={styles.folderGrid}>
                {manageYears.length === 0 ? (
                  <p className={styles.emptyState}>No events found. Upload some photos first!</p>
                ) : (
                  manageYears.map(year => (
                    <button key={year} className={styles.folderCard} onClick={() => loadEvents(year)}>
                      <span className={styles.folderIcon}>📅</span>
                      <span className={styles.folderName}>{year}</span>
                    </button>
                  ))
                )}
              </div>
            )}

            {/* Event list */}
            {selectedYear && !selectedEvent && !loadingManage && (
              <div className={styles.folderGrid}>
                {(manageEvents[selectedYear] || []).length === 0 ? (
                  <p className={styles.emptyState}>No events in {selectedYear}.</p>
                ) : (
                  (manageEvents[selectedYear] || []).map(event => (
                    <button key={event} className={styles.folderCard} onClick={() => loadEventImages(selectedYear, event)}>
                      <span className={styles.folderIcon}>📂</span>
                      <span className={styles.folderName}>{event.replace(/_/g, ' ')}</span>
                    </button>
                  ))
                )}
              </div>
            )}

            {/* Image grid with delete */}
            {selectedEvent && !loadingManage && (
              <>
                <p className={styles.imageCount}>{eventImages.length} photo{eventImages.length !== 1 ? 's' : ''}</p>
                {eventImages.length === 0 ? (
                  <p className={styles.emptyState}>No images in this event.</p>
                ) : (
                  <div className={styles.manageGrid}>
                    {eventImages.map(image => (
                      <div key={image.name} className={styles.manageItem}>
                        <img src={image.url} alt={image.name} className={styles.manageImage} />
                        <div className={styles.manageOverlay}>
                          <span className={styles.manageName}>{image.name}</span>
                          {deleteConfirm === image.name ? (
                            <div className={styles.confirmRow}>
                              <button
                                className={styles.confirmYes}
                                onClick={() => handleDeleteImage(image)}
                                disabled={deletingFile === image.name}
                              >
                                {deletingFile === image.name ? '...' : 'Yes, delete'}
                              </button>
                              <button
                                className={styles.confirmNo}
                                onClick={() => setDeleteConfirm(null)}
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <button
                              className={styles.deleteBtn}
                              onClick={() => setDeleteConfirm(image.name)}
                            >
                              🗑️ Delete
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
