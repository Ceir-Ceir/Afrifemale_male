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
          <Image src="/images/logo.png" alt="AfriFemale-Male Institute Logo" width={50} height={50} style={{ objectFit: 'contain', marginRight: '10px' }} />
          AFRI<span className={styles.logoHighlight}>FEMALE-MALE</span>
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
          <a href="https://www.youhelp.com/mental-health-fair/donate" className={styles.donateBtn} onClick={() => setMobileOpen(false)}>
            Support Us
          </a>
        </nav>
      </div>
    </header>
  );
}
