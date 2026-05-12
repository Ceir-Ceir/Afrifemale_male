import styles from '@/styles/Programs.module.css';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function Programs() {
  const programs = [
    {
      title: "STEAM Education",
      icon: "🔬",
      description: "We use Science, Technology, Engineering, Art, and Math as powerful training tools to help students discover their gifts, strengthen their confidence, and expand their future opportunities."
    },
    {
      title: "Aviation Exploration",
      icon: "✈️",
      description: "Our students receive hands-on instruction in aviation, opening their eyes to careers in aerospace and building discipline through the precision of flight education."
    },
    {
      title: "One-on-One Mentoring",
      icon: "🤝",
      description: "We link our youth with professionals and community leaders — including doctors, lawyers, clergy, and educators — to develop supportive, one-on-one relationships that instill positive self-esteem."
    },
    {
      title: "Life Skills & Cultural Education",
      icon: "🌱",
      description: "Addressing essential areas like communication, decision-making, healthy relationships, conflict resolution, and cultural heritage through engaging, twice-monthly workshops."
    },
    {
      title: "Financial Literacy",
      icon: "💰",
      description: "From basic budgeting to entrepreneurship, we prepare our youth for economic independence and responsible wealth management."
    },
    {
      title: "Leadership Development",
      icon: "👑",
      description: "We empower youth to lead with confidence, courage, and compassion through planning, decision-making, and community service opportunities."
    }
  ];

  return (
    <div className={styles.programsPage}>
      <div className="container">
        <FadeIn className={styles.intro}>
          <h1>Our <span className="text-gradient">Programs</span></h1>
          <p>
            The Afri-Female and Male Institute empowers youth ages 8–18 through mentoring, STEAM-based learning, and culturally grounded education. Each session is led by qualified professionals who bring real-world knowledge and inspiration directly to our youth.
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
