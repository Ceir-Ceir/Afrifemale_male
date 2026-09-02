'use client';
import { useState } from 'react';
import styles from '@/styles/Transparency.module.css';
import { FadeIn, SlideInLeft, SlideInRight } from '@/components/Animations';
import FlipbookModal from '@/components/FlipbookModal';

export default function Transparency() {
  const [showBylawsModal, setShowBylawsModal] = useState(false);

  const allocations = [
    { label: "Direct Youth Programs", value: "85%", class: "" },
    { label: "Mentorship & Guidance", value: "10%", class: "secondary" },
    { label: "Community Outreach", value: "5%", class: "muted" }
  ];

  const bylawsPdfUrl = "https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/Documents/AFMI%20Signed%20ByLaws.pdf";

  const documents = [
    { name: 'AFMI Official Signed Bylaws', status: 'View PDF', url: bylawsPdfUrl, isPdf: true },
    { name: 'IRS 501(c)3 Tax-Exempt Status', status: 'Active 501(c)(3)', url: '#', isPdf: false },
    { name: 'Financial Governance Statement', status: 'Verified', url: '#', isPdf: false },
    { name: 'Community Impact Report', status: 'Published', url: '#', isPdf: false }
  ];

  return (
    <div className={styles.transparencyPage}>
      <div className="container">
        <FadeIn className={styles.intro}>
          <h1>Financial <span className="text-gradient">Transparency</span></h1>
          <p>
            At the AfriFemale-Male Institute, Inc., we believe in radical accountability. Your donations are an investment in the next generation, and we treat them with the utmost professional care.
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
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#64748b', fontStyle: 'italic' }}>
              *Fiscal management led by a Founder with 38 years of experience in DoD budget administration.
            </p>
          </SlideInLeft>

          <SlideInRight className={styles.reportsSection}>
            <h2>Annual Reports & Bylaws</h2>
            <p style={{ marginBottom: '1.5rem', color: '#475569' }}>
              Explore our official governance bylaws, financial statements, and organizational filings.
            </p>

            {/* Featured Bylaws Card */}
            <div style={{
              background: 'linear-gradient(135deg, #1e3a8a, #213e8c)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '16px',
              marginBottom: '1.5rem',
              boxShadow: '0 10px 25px rgba(30, 58, 138, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.75rem' }}>📜</span>
                <div>
                  <h3 style={{ color: 'white', fontSize: '1.25rem', margin: 0 }}>AFMI Signed Bylaws</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.9 }}>Official Governance Document</p>
                </div>
              </div>
              <p style={{ fontSize: '0.95rem', opacity: 0.9, lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Access the official signed bylaws of the AfriFemale-Male Institute, Inc., establishing our non-profit governance, board structure, and operational standards.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setShowBylawsModal(true)}
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    padding: '0.6rem 1.25rem',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  📖 Open 3D Flipbook
                </button>
                <a
                  href={bylawsPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: '0.6rem 1.25rem',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  📥 Download PDF
                </a>
              </div>
            </div>

            <div className={styles.docsList}>
              {documents.map((doc, i) => (
                <a 
                  key={i} 
                  href={doc.url} 
                  target={doc.isPdf ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={styles.reportLink}
                  onClick={(e) => {
                    if (doc.name.includes('Bylaws')) {
                      e.preventDefault();
                      setShowBylawsModal(true);
                    }
                  }}
                >
                  <span>{doc.name}</span>
                  <span className={styles.status} style={doc.isPdf ? { backgroundColor: 'rgba(200, 72, 105, 0.12)', color: 'var(--color-primary)', fontWeight: 700 } : {}}>
                    {doc.status}
                  </span>
                </a>
              ))}
            </div>
          </SlideInRight>
        </div>

        {/* Bylaws 3D Flipbook Modal */}
        {showBylawsModal && (
          <FlipbookModal 
            pdfUrl={bylawsPdfUrl}
            onClose={() => setShowBylawsModal(false)}
          />
        )}

        <FadeIn>
          <section style={{ 
            backgroundColor: 'white', 
            textAlign: 'center', 
            padding: 'var(--space-lg)', 
            borderRadius: '20px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.02)',
            marginTop: '2rem'
          }}>
            <h2 style={{ marginBottom: '1.5rem' }}>Our Commitment to You</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: 0.8 }}>
              AfriFemale-Male Institute, Inc. is a registered 501(c)(3) tax-exempt organization. All donations are tax-deductible to the extent allowed by law.
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
