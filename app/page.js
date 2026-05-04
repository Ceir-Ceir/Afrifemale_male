import Image from 'next/image';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import styles from '@/styles/Home.module.css';
import { FadeIn, StaggerContainer, StaggerItem, SlideInLeft, SlideInRight } from '@/components/Animations';

import ShowcaseSlideshow from '@/components/ShowcaseSlideshow';

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <SlideInLeft className={styles.heroContent}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', letterSpacing: '2px', fontSize: '0.9rem' }}>Empowering Future Leaders</span>
            <h1>Developing Purpose.<br/>Building Character.</h1>
            <p>We are a dual-gender inclusive institute serving youth ages 9-18 through comprehensive mentorship, life skills training, and community service.</p>
            <div className={styles.btnGroup} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/programs" className="primary-btn">Explore Programs</Link>
              <Link href="/about/leadership" className="secondary-btn" style={{ background: 'transparent', color: 'var(--color-secondary)', border: '2px solid var(--color-secondary)' }}>Meet Our Founder</Link>
            </div>
          </SlideInLeft>
          
          <SlideInRight className={styles.heroImageWrapper}>
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800" alt="Inclusive Youth Programs" className={styles.heroMainImage} />
            <div className={styles.heroBadge}>
              <div className={styles.heroBadgeIcon}>25+</div>
              <div>
                <div style={{ fontWeight: '800', color: 'var(--color-secondary)' }}>Years of</div>
                <div style={{ color: 'var(--color-muted)', fontSize: '0.85rem', fontWeight: '500' }}>Dedicated Service</div>
              </div>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* Showcase Slideshow Section */}
      <section className="container" style={{ marginTop: 'var(--space-xl)' }}>
        <ShowcaseSlideshow />
      </section>

      {/* Impact Section */}
      <section className={styles.impactSection}>
        <div className="container">
          <StaggerContainer className={styles.impactGrid}>
            <StaggerItem className={styles.impactItem}>
              <h3>25+</h3>
              <p>Years of Service</p>
            </StaggerItem>
            <StaggerItem className={styles.impactItem}>
              <h3>2</h3>
              <p>Active Locations</p>
            </StaggerItem>
            <StaggerItem className={styles.impactItem}>
              <h3>100%</h3>
              <p>Commitment</p>
            </StaggerItem>
            <StaggerItem className={styles.impactItem}>
              <h3>500+</h3>
              <p>Lives Impacted</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Teaser */}
      <section className={styles.missionTeaser}>
        <div className="container">
          <div className={styles.missionContent}>
            <SlideInLeft className={styles.missionText}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase' }}>Our Evolution</span>
              <h2>Inclusive Leadership for All</h2>
              <p>
                Founded in 1998 as a program for girls, Afri-Female Institute Inc. has evolved into a dual-gender inclusive institute. 
                We believe that empowering both young men and women is essential for building strong, vibrant communities.
              </p>
              <p>
                Our programs focus on the whole child, providing the tools they need to navigate the challenges of today and become the leaders of tomorrow.
              </p>
              <Link href="/about/leadership" className="secondary-btn" style={{ background: 'transparent', color: 'var(--color-secondary)', border: '2px solid var(--color-secondary)' }}>Learn Our Story</Link>
            </SlideInLeft>
            <SlideInRight className={styles.missionImage}>
               <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Empowered Diverse Youth" style={{ width: '100%', display: 'block' }} />
            </SlideInRight>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
