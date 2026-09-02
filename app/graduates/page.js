import styles from '@/styles/Graduates.module.css';
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/Animations';

export const metadata = {
  title: 'Our Graduates | AfriFemale-Male Institute',
  description: 'Celebrating the achievements, scholarships, and resilience of our Rites of Passage graduates and scholars.',
};

export default function GraduatesPage() {
  return (
    <div className={styles.graduatesPage}>
      <div className="container">
        {/* Intro */}
        <FadeIn className={styles.intro}>
          <h1>Our <span className="text-gradient">Graduates & Scholars</span></h1>
          <p>
            Celebrating the milestones, resilience, and achievements of our alumni who embody our mission — building character, confidence, and lifelong leadership.
          </p>
        </FadeIn>

        {/* Rites of Passage Section */}
        <section className={styles.ropSection}>
          <div className={styles.ropFlex}>
            <SlideInLeft className={styles.ropText}>
              <h2>The Rites of Passage Program</h2>
              <p>
                The Rites of Passage program is a cornerstone of the AfriFemale-Male Institute. Designed to support youth who have grown with the Institute throughout their high school years, the program brings together family, mentors, and community members to celebrate their transition into adulthood.
              </p>
              <p>
                During this culminating program, students are recognized for their unique gifts and perseverance. Shared community resources and financial scholarships are awarded to send each graduate forward into college, vocational training, or career paths with confidence and tangible support.
              </p>
              <div className={styles.ropBadges}>
                <span className={styles.ropBadge}>🎓 Academic Scholarships</span>
                <span className={styles.ropBadge}>💻 Laptops & College Supplies</span>
                <span className={styles.ropBadge}>🌟 Community Send-Off</span>
                <span className={styles.ropBadge}>🤝 Lifelong Mentorship</span>
              </div>
            </SlideInLeft>

            <SlideInRight className={styles.ropCard}>
              <div className={styles.ropCardIcon}>👑</div>
              <h3>Preparing Future Leaders</h3>
              <p>
                &quot;Through forming nurturing, trusting relationships and involving them in meaningful community activities, our graduates enter adulthood with strong character, self-esteem, and clear purpose.&quot;
              </p>
            </SlideInRight>
          </div>
        </section>

        {/* Featured Graduate Profile: A'akyrah Jackson */}
        <section className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <span className={styles.profileTag}>Featured Alumni Story</span>
            <h2>A’akyrah Jackson</h2>
            <p className={styles.profileSubtitle}>
              AFMI Rites of Passage Graduate • Scholarship Recipient • Emerging Leader
            </p>
          </div>

          <div className={styles.profileBody}>
            {/* Story text */}
            <div className={styles.storyContent}>
              <p>
                A’akyrah Jackson joined the AfriFemale-Male Institute as a high school student and remained actively engaged in our workshops and programs from 9th through 12th grade. Throughout her time with AFMI, she demonstrated determination, leadership, and a deep commitment to personal growth. Her journey reflects the very purpose of our mission — to build character, confidence, cultural pride, and opportunity for youth.
              </p>
              
              <p>
                A’akyrah successfully completed the Institute’s Rites of Passage and Culminating Program, supported by her mother, siblings, and extended family. Upon graduation, she was awarded a $1,000 AFMI Scholarship in recognition of her academic promise, service, and perseverance. The Institute proudly adopted her as one of our continuing scholars, following her progress as she transitioned into Delaware Technical Community College.
              </p>

              <div className={styles.quoteBox}>
                &quot;To support her college journey, AFMI provided a laptop and essential supplies, ensuring she entered her first year equipped for success. A’akyrah has excelled in her studies and continues to make the organization proud.&quot;
              </div>

              <p>
                What makes her story even more remarkable is her commitment to giving back. A’akyrah has returned to AFMI on numerous occasions to speak to current students, lead workshops, and share her personal testimony. She openly discusses her life before joining the Institute and how the program helped shape her path, offering younger students encouragement, honesty, and hope.
              </p>

              <p>
                A’akyrah’s growth, resilience, and generosity embody the heart of the AfriFemale-Male Institute. We are honored to celebrate her achievements and grateful for her continued contributions to our community.
              </p>

              {/* Stat counters */}
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>$1,000</div>
                  <div className={styles.statLabel}>Scholarship Awarded</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>4 Years</div>
                  <div className={styles.statLabel}>9th – 12th Grade</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>DelTech</div>
                  <div className={styles.statLabel}>Continuing Scholar</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Mentor</div>
                  <div className={styles.statLabel}>Youth Workshop Leader</div>
                </div>
              </div>
            </div>

            {/* Media Gallery */}
            <div className={styles.mediaGallery}>
              <div className={styles.imageFrame}>
                <img 
                  src="https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/2024/Rites_Passage/1A6FA721-FCA3-44F1-94E5-22FDB0747CD9_1_105_c.jpeg" 
                  alt="A'akyrah Jackson Rites of Passage Ceremony" 
                />
                <div className={styles.imageCaption}>
                  A’akyrah Jackson at the AFMI Rites of Passage Graduation & Scholarship Ceremony.
                </div>
              </div>

              <div className={styles.imageFrame}>
                <img 
                  src="https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/2024/Rites_Passage/IMG_9670.jpeg" 
                  alt="A'akyrah Jackson receiving AFMI recognition" 
                />
                <div className={styles.imageCaption}>
                  Celebrating A’akyrah&apos;s achievement with family, mentors, and community leaders.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="section-padding" style={{
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          textAlign: 'center',
          borderRadius: '20px',
          padding: '3rem 2rem'
        }}>
          <FadeIn>
            <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '2.2rem' }}>Support Next Year&apos;s Graduates</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
              Your donation directly funds scholarships, college technology, and educational supplies for graduating high school seniors.
            </p>
            <a 
              href="https://www.youhelp.com/mental-health-fair/donate" 
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn" 
              style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '0.9rem 2.2rem' }}
            >
              Fund a Scholarship
            </a>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
