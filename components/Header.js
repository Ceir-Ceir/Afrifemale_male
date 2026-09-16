'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
          <Image src="/images/logo.png" alt="Afri-Female and Male Institute Logo" width={46} height={46} style={{ objectFit: 'contain', marginRight: '8px' }} />
          AFRI-FEMALE <span className={styles.logoHighlight}>AND MALE INSTITUTE</span>
        </Link>

        {/* Mobile Hamburger Button */}
        <button 
          className={styles.hamburgerBtn} 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navActive : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/about/leadership" className={styles.navLink} onClick={() => setMobileOpen(false)}>Leadership</Link>
          <Link href="/programs" className={styles.navLink} onClick={() => setMobileOpen(false)}>Programs</Link>
          <Link href="/graduates" className={styles.navLink} onClick={() => setMobileOpen(false)}>Our Graduates</Link>
          <Link href="/gallery" className={styles.navLink} onClick={() => setMobileOpen(false)}>Gallery</Link>
          <Link href="/transparency" className={styles.navLink} onClick={() => setMobileOpen(false)}>Our Impact</Link>
          <a href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-23892" target="_blank" rel="noopener noreferrer" className={styles.donateBtn} onClick={() => setMobileOpen(false)}>
            Support Us
          </a>
        </nav>
      </div>
    </header>
  );
}
