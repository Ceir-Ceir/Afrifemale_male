'use client';
import { useState, useEffect } from 'react';
import styles from '@/styles/Programs.module.css';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProgram(null);
      }
    };
    if (selectedProgram) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProgram]);

  const programs = [
    {
      id: 'steam',
      title: "STEAM Education",
      icon: "🔬",
      description: "We use Science, Technology, Engineering, Art, and Math as powerful training tools to help students discover their gifts, strengthen their confidence, and expand their future opportunities.",
      targetAge: "Target Ages: 8–18",
      frequency: "Bi-Weekly Workshops & Hands-on Labs",
      detailedWriteup: "Our STEAM Education initiative provides students with hands-on learning experiences in robotics, coding, creative arts, and scientific discovery. By integrating artistic expression with technical disciplines, we foster critical thinking, problem-solving, and innovation in a supportive team environment.",
      highlights: [
        "Hands-on science experiments and robotics builds",
        "Interactive workshops led by professional engineers and educators",
        "Field trips to regional science centers and technology hubs"
      ],
      image: "https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/2024/Edward_Ellis/9D00D53E-7AD8-4532-BAC4-5BCB8EC7A5C7_1_105_c.jpeg",
      imageCaption: "Youth participating in interactive STEAM learning workshops."
    },
    {
      id: 'aviation',
      title: "Aviation Exploration",
      icon: "✈️",
      description: "Our students receive hands-on instruction in aviation, opening their eyes to careers in aerospace and building discipline through the precision of flight education.",
      comingSoon: true,
      targetAge: "Target Ages: 10–18",
      frequency: "Coming Soon — Launching Fall Cohort",
      detailedWriteup: "The Aviation Exploration program is designed to introduce youth to aerospace technology, flight simulation, aerodynamics, and aviation careers. Participants will work with certified flight instructors, explore cockpit navigation tools, and visit active airfields to inspire tomorrow's pilots and aerospace engineers.",
      highlights: [
        "Interactive flight simulator training and cockpit fundamentals",
        "Mentorship from commercial pilots and military flight veterans",
        "Guided tours of regional airports and aviation academies"
      ],
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200",
      imageCaption: "Aviation Exploration preview — introducing flight fundamentals."
    },
    {
      id: 'mentoring',
      title: "One-on-One Mentoring",
      icon: "🤝",
      description: "We link our youth with professionals and community leaders — including doctors, lawyers, clergy, and educators — to develop supportive, one-on-one relationships that instill positive self-esteem.",
      targetAge: "Target Ages: 8–18",
      frequency: "Year-Round Personal Mentorship",
      detailedWriteup: "Through our structured one-on-one mentorship program, young people build meaningful, trusting relationships with positive adult role models. Mentors meet regularly with mentees to offer career guidance, academic support, personal encouragement, and constructive life wisdom.",
      highlights: [
        "Personalized matching based on career interests and character goals",
        "Monthly group activities, sporting events, and cultural outings",
        "Focus on self-worth, emotional intelligence, and goal setting"
      ],
      image: "https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/2025/Ready_Set_Go/IMG_7236.jpeg",
      imageCaption: "Youth engaging with dedicated mentors during community gatherings."
    },
    {
      id: 'lifeskills',
      title: "Life Skills & Cultural Education",
      icon: "🌱",
      description: "Addressing essential areas like communication, decision-making, healthy relationships, conflict resolution, and cultural heritage through engaging, twice-monthly workshops.",
      targetAge: "Target Ages: 8–18",
      frequency: "Twice-Monthly Interactive Sessions",
      detailedWriteup: "This program equips youth with practical life skills essential for personal development and social responsibility. From effective communication and conflict resolution to celebrating cultural heritage, workshops empower youth to navigate life's challenges with poise and dignity.",
      highlights: [
        "Etiquette, posture, public speaking, and professional presentation",
        "Cultural heritage workshops and Black History celebrations",
        "Conflict resolution, emotional wellness, and positive peer relationship tools"
      ],
      image: "https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/2026/Black_History_Workshop/BHM_workshop_2026.jpeg",
      imageCaption: "Students during our annual Black History and Cultural Heritage Workshop."
    },
    {
      id: 'financial',
      title: "Financial Literacy",
      icon: "💰",
      description: "From basic budgeting to entrepreneurship, we prepare our youth for economic independence and responsible wealth management.",
      targetAge: "Target Ages: 10–18",
      frequency: "Quarterly Workshops & Business Labs",
      detailedWriteup: "Our Financial Literacy program introduces young minds to the foundational concepts of money management, personal budgeting, saving, credit fundamentals, and entrepreneurship. Through real-world simulations, students learn how to create business plans and make smart economic choices.",
      highlights: [
        "Interactive budgeting exercises and youth entrepreneurship challenges",
        "Understanding savings, investments, and banking basics",
        "Guest lectures from finance professionals, bankers, and local business owners"
      ],
      image: "https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/2024/Peter_Davis_Mccormick/1B8D2CF0-7683-4F66-9130-59EB8A202B56_1_105_c.jpeg",
      imageCaption: "Financial Literacy and Youth Entrepreneurship session in action."
    },
    {
      id: 'leadership',
      title: "Leadership Development",
      icon: "👑",
      description: "We empower youth to lead with confidence, courage, and compassion through planning, decision-making, and community service opportunities.",
      targetAge: "Target Ages: 10–18",
      frequency: "Monthly Leadership Labs & Community Projects",
      detailedWriteup: "We believe every child possesses inherent leadership qualities. Our Leadership Development program offers hands-on training in team building, public service, community organizing, and ethical decision-making, helping youth step forward as courageous community leaders.",
      highlights: [
        "Community service projects and civic engagement initiatives",
        "Public speaking and team leadership exercises",
        "Opportunities to plan and coordinate institute events"
      ],
      image: "https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/2025/Community_Reg/IMG_6839.jpeg",
      imageCaption: "Youth leaders organizing community outreach and registration."
    }
  ];

  return (
    <div className={styles.programsPage}>
      <div className="container">
        <FadeIn className={styles.intro}>
          <h1>Our <span className="text-gradient">Programs</span></h1>
          <p>
            The AfriFemale-Male Institute empowers youth ages 8–18 through mentoring, STEAM-based learning, and culturally grounded education. Each session is led by qualified professionals who bring real-world knowledge and inspiration directly to our youth.
          </p>
        </FadeIn>

        <StaggerContainer className={styles.programGrid}>
          {programs.map((p) => (
            <StaggerItem key={p.id} className={styles.programCard}>
              {p.comingSoon && <div className={styles.comingSoonRibbon}>Coming Soon</div>}
              <div className={styles.iconWrapper}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <button 
                type="button"
                className={styles.cta}
                onClick={() => setSelectedProgram(p)}
              >
                Learn more <span>→</span>
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Program Detail Modal Popout */}
      {selectedProgram && (
        <div 
          className={styles.modalBackdrop}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProgram(null);
          }}
        >
          <div className={styles.modalContent} role="dialog" aria-modal="true">
            <button 
              type="button" 
              className={styles.closeButton}
              onClick={() => setSelectedProgram(null)}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.modalGrid}>
              {/* Left Column: Detailed Write-Up & Program Info */}
              <div className={styles.modalLeft}>
                <div>
                  <div className={styles.modalHeader}>
                    <div className={styles.modalHeaderTop}>
                      <span className={styles.modalIcon}>{selectedProgram.icon}</span>
                      <h2 className={styles.modalTitle}>{selectedProgram.title}</h2>
                    </div>

                    <div className={styles.badgeRow}>
                      <span className={styles.ageBadge}>{selectedProgram.targetAge}</span>
                      <span className={styles.freqBadge}>{selectedProgram.frequency}</span>
                    </div>
                  </div>

                  <p className={styles.modalBodyText}>
                    {selectedProgram.detailedWriteup}
                  </p>

                  <h4 className={styles.highlightsTitle}>Program Highlights:</h4>
                  <ul className={styles.highlightsList}>
                    {selectedProgram.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="https://www.youhelp.com/mental-health-fair/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn" 
                  style={{ display: 'inline-block', textAlign: 'center', marginTop: '1rem' }}
                >
                  Support This Program
                </a>
              </div>

              {/* Right Column: Event Photo */}
              <div className={styles.modalRight}>
                <img 
                  src={selectedProgram.image} 
                  alt={`${selectedProgram.title} Event Photo`} 
                  className={styles.modalImage}
                />
                <div className={styles.imageOverlayLabel}>
                  {selectedProgram.imageCaption}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
