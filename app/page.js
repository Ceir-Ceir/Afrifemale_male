import Image from 'next/image';
import Link from 'next/link';
import Newsletter from '@/components/Newsletter';
import styles from '@/styles/Home.module.css';
import { FadeIn, StaggerContainer, StaggerItem, SlideInLeft, SlideInRight } from '@/components/Animations';

import ShowcaseSlideshow from '@/components/ShowcaseSlideshow';

export default function Home() {
  const values = [
    { icon: "🎯", title: "Purpose", desc: "We help youth discover who they are and the unique gifts they carry." },
    { icon: "💎", title: "Character", desc: "We cultivate integrity, discipline, and respect in every student." },
    { icon: "👑", title: "Leadership", desc: "We empower youth to lead with confidence, courage, and compassion." },
    { icon: "🌍", title: "Culture", desc: "We honor heritage, identity, and community as sources of strength." },
    { icon: "⭐", title: "Excellence", desc: "We encourage students to strive, achieve, and rise to their highest potential." }
  ];

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <SlideInLeft className={styles.heroContent}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', letterSpacing: '2px', fontSize: '0.9rem' }}>Empowering Future Leaders</span>
            <h1>Building Purpose.<br/>Shaping Leaders.</h1>
            <p>The Afri-Female and Male Institute empowers youth ages 8–18 through mentoring, STEAM-based learning, and culturally grounded education.</p>
            <div className={styles.btnGroup} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/programs" className="primary-btn">Explore Programs</Link>
              <Link href="/about/leadership" className="secondary-btn" style={{ background: 'transparent', color: 'var(--color-secondary)', border: '2px solid var(--color-secondary)' }}>Meet Our Founder</Link>
            </div>
          </SlideInLeft>
          
          <SlideInRight className={styles.heroImageWrapper}>
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=800" alt="Youth STEAM Learning Programs" className={styles.heroMainImage} />
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
              <h3>2x</h3>
              <p>Monthly Workshops</p>
            </StaggerItem>
            <StaggerItem className={styles.impactItem}>
              <h3>STEAM</h3>
              <p>Based Learning</p>
            </StaggerItem>
            <StaggerItem className={styles.impactItem}>
              <h3>500+</h3>
              <p>Lives Impacted</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.missionTeaser}>
        <div className="container">
          <div className={styles.missionContent}>
            <SlideInLeft className={styles.missionText}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>Our Mission</span>
              <h2>Purpose-Driven &amp; Strong</h2>
              <p>
                The Afri-Female and Male Institute empowers youth ages 8–18 through mentoring, STEAM-based learning, and culturally grounded education. Through twice-monthly workshops led by dedicated professionals — including doctors, lawyers, clergy, educators, and community experts — we equip young people with life skills, confidence, purpose, and strong character to thrive in school, in their communities, and in life.
              </p>
              <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', display: 'block', marginTop: '2rem' }}>Our Vision</span>
              <p>
                We envision a generation of young leaders who know their worth, embrace their gifts, and confidently shape their futures. By nurturing purpose, character, and cultural pride, we aim to build a community where every child has the tools, support, and opportunities to rise, lead, and succeed.
              </p>
              <Link href="/about/leadership" className="secondary-btn" style={{ background: 'transparent', color: 'var(--color-secondary)', border: '2px solid var(--color-secondary)' }}>Learn Our Story</Link>
            </SlideInLeft>
            <SlideInRight className={styles.missionImage}>
               <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Empowered Diverse Youth" style={{ width: '100%', display: 'block' }} />
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>What We Stand For</span>
              <h2 style={{ marginTop: '0.5rem' }}>Our Core Values</h2>
              <p style={{ maxWidth: '700px', margin: '1rem auto 0', opacity: 0.8, fontSize: '1.1rem' }}>
                At the Afri-Female and Male Institute, we uphold values that shape strong, confident, and culturally grounded young leaders.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className={styles.valuesGrid}>
            {values.map((v, i) => (
              <StaggerItem key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
