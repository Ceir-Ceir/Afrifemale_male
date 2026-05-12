import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandInfo}>
            <Image src="/images/logo.png" alt="Afri-Female and Male Institute Logo" width={150} height={150} style={{ marginBottom: '1rem' }} />
            <p>Empowering youth ages 8–18 through mentoring, STEAM-based learning, and culturally grounded education. Building Purpose. Shaping Leaders.</p>
          </div>

          <div className={styles.footerCol}>
            <h4>Quick Links</h4>
            <ul className={styles.footerList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about/leadership">Leadership</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/transparency">Our Impact</Link></li>
              <li><a href="https://www.youhelp.com/mental-health-fair/donate">Support Us</a></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@afriprogram.org" className={styles.contactLink}>info@afriprogram.org</a></p>
            <p>Phone: (302) 697-2887</p>
            <p>PO Box 191, Magnolia, DE 19962</p>
          </div>

          <div className={styles.footerCol}>
            <h4>Locations</h4>
            <p>• Kent County, DE</p>
            <p>• Burlington County, NJ</p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>Afri-Female and Male Institute, Inc. is a registered 501(c)(3) non-profit organization.</p>
          <p>© 1998 - 2026 Afri-Female and Male Institute, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
