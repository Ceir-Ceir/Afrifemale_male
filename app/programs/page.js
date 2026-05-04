import styles from '@/styles/Programs.module.css';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function Programs() {
  const programs = [
    {
      title: "One-on-One Mentoring",
      icon: "🤝",
      description: "We link our youth with professionals and community leaders to develop supportive, one-on-one relationships. Mentors instill positive self-esteem and self-control."
    },
    {
      title: "Financial Literacy",
      icon: "💰",
      description: "From basic budgeting to entrepreneurship, we prepare our youth for economic independence and responsible wealth management."
    },
    {
      title: "Life Skills Training",
      icon: "🌱",
      description: "Addressing essential areas like communication, decision-making, healthy relationships, and conflict resolution."
    },
    {
      title: "Career Readiness",
      icon: "📋",
      description: "Resume writing, job interview skills, and job-shadowing opportunities to bridge the gap between education and employment."
    },
    {
      title: "Leadership Development",
      icon: "👑",
      description: "We provide opportunities for planning, decision-making, and community service to help youth become proud, self-confident leaders."
    },
    {
      title: "Violence Prevention",
      icon: "🛡️",
      description: "Our mentors strive to direct teens toward positive alternatives and teach them about delinquency prevention and healthy alternatives."
    }
  ];

  return (
    <div className={styles.programsPage}>
      <div className="container">
        <FadeIn className={styles.intro}>
          <h1>Our <span className="text-gradient">Programs</span></h1>
          <p>
            Our mission is to develop purpose and character in youth ages 9-18. Each program is designed to provide guidance and supportive mentoring relationships.
          </p>
        </FadeIn>

        <StaggerContainer className={styles.programGrid}>
          {programs.map((p, i) => (
            <StaggerItem key={i} className={styles.programCard}>
              <div className={styles.iconWrapper}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <a href="#" className={styles.cta}>Learn more <span>→</span></a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <section className="section-padding" style={{
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        textAlign: 'center',
        marginTop: 'var(--space-xl)',
        borderRadius: '20px',
        margin: 'var(--space-xl) var(--space-sm) 0',
        padding: 'var(--space-xl) var(--space-md)'
      }}>
        <FadeIn className="container">
          <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Help Us Make a Difference</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem', opacity: 0.9 }}>
            Your support helps us keep these programs free and accessible to the youth who need them most.
          </p>
          <a href="https://www.youhelp.com/mental-health-fair/donate" className="secondary-btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1rem 2.5rem' }}>
            Support Us
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
