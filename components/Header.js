import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="Afri-Female and Male Institute Logo" width={50} height={50} style={{ objectFit: 'contain', marginRight: '10px' }} />
          AFRI-<span className={styles.logoHighlight}>FEMALE & MALE</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about/leadership" className={styles.navLink}>Leadership</Link>
          <Link href="/programs" className={styles.navLink}>Programs</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          <Link href="/transparency" className={styles.navLink}>Our Impact</Link>
          <a href="https://www.youhelp.com/mental-health-fair/donate" className={styles.donateBtn}>
            Support Us
          </a>
        </nav>
      </div>
    </header>
  );
}
