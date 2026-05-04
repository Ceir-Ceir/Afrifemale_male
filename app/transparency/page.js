import styles from '@/styles/Transparency.module.css';
import { FadeIn, SlideInLeft, SlideInRight } from '@/components/Animations';

export default function Transparency() {
  const allocations = [
    { label: "Direct Youth Programs", value: "85%", class: "" },
    { label: "Mentorship & Guidance", value: "10%", class: "secondary" },
    { label: "Community Outreach", value: "5%", class: "muted" }
  ];

  const documents = [
    { name: '2025 Impact Report', status: 'Coming Soon' },
    { name: '2024 Financial Statement', status: 'PDF' },
    { name: 'IRS 501(c)3 Letter', status: 'PDF' },
    { name: 'Organization Bylaws', status: 'PDF' }
  ];

  return (
    <div className={styles.transparencyPage}>
      <div className="container">
        <FadeIn className={styles.intro}>
          <h1>Financial <span className="text-gradient">Transparency</span></h1>
          <p>
            At Afri-Female Institute Inc., we believe in radical accountability. Your donations are an investment in the next generation, and we treat them with the utmost professional care.
          </p>
        </FadeIn>

        <div className={styles.transparencyGrid}>
          <SlideInLeft className={styles.chartCard}>
            <h2>Where the Money Goes</h2>
            <div className={styles.chartContainer}>
              {allocations.map((item, i) => (
                <div key={i} className={styles.barWrapper}>
                  <div className={styles.barLabel}>
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div className={styles.barBg}>
                    <div 
                      className={`${styles.barFill} ${item.class ? styles[item.class] : ''}`} 
                      style={{ width: item.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7, fontStyle: 'italic' }}>
              *Fiscal management led by a Founder with 38 years of experience in DoD budget administration.
            </p>
          </SlideInLeft>

          <SlideInRight className={styles.reportsSection}>
            <h2>Annual Reports & Filings</h2>
            <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
              Download our latest financial statements, impact reports, and legal documentation.
            </p>
            <div className={styles.docsList}>
              {documents.map((doc, i) => (
                <a key={i} href="#" className={styles.reportLink}>
                  <span>{doc.name}</span>
                  <span className={styles.status}>{doc.status}</span>
                </a>
              ))}
            </div>
          </SlideInRight>
        </div>

        <FadeIn>
          <section style={{ 
            backgroundColor: 'white', 
            textAlign: 'center', 
            padding: 'var(--space-lg)', 
            borderRadius: '20px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.02)'
          }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Our Commitment to You</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.8 }}>
              Afri-Female Institute Inc. is a registered 501(c)(3) tax-exempt organization. All donations are tax-deductible to the extent allowed by law.
            </p>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ fontWeight: 800, color: 'var(--color-secondary)' }}>EIN: 302-697-2887</div>
              <div style={{ fontWeight: 800, color: 'var(--color-secondary)' }}>Candid / GuideStar Gold</div>
              <div style={{ fontWeight: 800, color: 'var(--color-secondary)' }}>Charity Navigator Rated</div>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
