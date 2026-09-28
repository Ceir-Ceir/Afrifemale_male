import styles from '@/styles/Graduates.module.css';
import { FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/Animations';

export const metadata = {
  title: 'Our Graduates | Afri-Female and Male Institute',
  description: 'Celebrating the achievements, scholarships, and resilience of our Rite of Passage graduates and scholars.',
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

        {/* Rite of Passage Section */}
        <section className={styles.ropSection}>
          <div className={styles.ropFlex}>
            <SlideInLeft className={styles.ropText}>
              <h2>The Rite of Passage Program</h2>
              <p>
                The Rite of Passage program is a cornerstone of the Afri-Female and Male Institute. Designed to support youth who have grown with the Institute throughout their high school years, the program brings together family, mentors, and community members to celebrate their transition into adulthood.
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

        {/* Featured Graduate Profile: Adriana P. Bradford, MBA */}
        <section className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <span className={styles.profileTag}>Featured Alumni Story</span>
            <h2>Adriana P. Bradford, MBA</h2>
            <p className={styles.profileSubtitle}>
              She/Her • AFMI Rite of Passage Alumna • Private Chef • Author & Entrepreneur
            </p>
          </div>

          <div className={styles.profileBody}>
            {/* Story text */}
            <div className={styles.storyContent}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(33, 62, 140, 0.05), rgba(200, 72, 105, 0.08))',
                borderRadius: '16px',
                padding: '1.5rem 1.75rem',
                borderLeft: '4px solid var(--color-secondary)',
                marginBottom: '2rem'
              }}>
                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                  💭 My Experience Summary
                </h4>
                <p style={{ fontStyle: 'italic', color: '#2d3748', margin: 0, lineHeight: 1.7 }}>
                  &quot;One of my fondest childhood memories includes getting up early on Saturday mornings to attend Afri - female Institute while connecting with other Afri - Females. Learning to embrace who I was becoming through singing, dancing, and attending workshops helped mold the woman I am today. Grateful to have had the opportunity to be a part of such a fulfilling organization dedicated to enhancing the growth and lives of boys and girls who look like me.&quot;
                </p>
              </div>

              <div className={styles.quoteBox}>
                &quot;Anything that does not change does not grow. If you do not grow you will remain stagnant.&quot; <br />
                <strong style={{ display: 'block', marginTop: '0.5rem', fontStyle: 'normal' }}>— Adrie B.</strong>
              </div>

              <h3 style={{ color: 'var(--color-secondary)', margin: '2rem 0 1rem', fontSize: '1.5rem' }}>Biography</h3>

              <p>
                Adriana is a New Jersey native, wife, mother, private chef, self-published author, public servant, philanthropist, social media content creator, human resources practitioner, motivator, and public speaker. She was raised in a West Indian household where her Jamaican immigrant parents instilled the value of hard work, determination, and dedication.
              </p>
              
              <p>
                In her adolescent years Adriana participated in many extra curricular activities including drill team, cheerleading and spent Saturday mornings in Afri - Female institute learning the true value of being an Afri - Female. In High School Adriana&apos;s electives were Cosmetology and Theatre Arts. She performed with The Heritage Players and traveled for shows and competitions. Successfully graduating from Rowan University with her Bachelor&apos;s degree in Communications, Adriana was determined to acquire two academic degrees by the age of 25. At the age of 23 she enrolled at Strayer University to pursue her Master&apos;s degree in Business Administration and Human Resources Management. Adriana successfully completed her educational goal. She then moved to the DMV where she settled in her career, met her husband, and had two beautiful daughters.
              </p>

              <p>
                Adriana would then become a self-published author. She wrote a poem recipe book titled &quot;And She Writes, a book of her works and recipes&quot; which features her poems and recipes for a Sunday dinner in a Jamaican household. Adriana is also an entrepreneur, owning and operating a private catering company called AnK Entertainment with her husband.
              </p>

              <p>
                It&apos;s all about the details, the spices, the herbs, and the authenticity for Adriana.
              </p>

              <p>
                Adriana&apos;s book is available for purchase by visiting her website <a href="http://www.adrianabradford.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}>www.adrianabradford.com</a>. If you live in Southern Maryland, you can also rent her book for FREE from the Charles County Public Library, Waldorf West. All you need is a Library card!
              </p>

              {/* Stat counters */}
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>B.S. & MBA</div>
                  <div className={styles.statLabel}>Rowan & Strayer</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Author</div>
                  <div className={styles.statLabel}>&quot;And She Writes&quot;</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>AnK Ent.</div>
                  <div className={styles.statLabel}>Catering Entrepreneur</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Alumna</div>
                  <div className={styles.statLabel}>Rite of Passage</div>
                </div>
              </div>
            </div>

            {/* Media Gallery */}
            <div className={styles.mediaGallery}>
              <div className={styles.imageFrame}>
                <img 
                  src="https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/headshots/Adrie%20B%20pic.jpeg" 
                  alt="Adriana P. Bradford, MBA" 
                />
                <div className={styles.imageCaption}>
                  Adriana P. Bradford, MBA — AFMI Rite of Passage Alumna
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Graduate Profile: A'akyrah Jackson */}
        <section className={styles.profileSection}>
          <div className={styles.profileHeader}>
            <span className={styles.profileTag}>Featured Alumni Story</span>
            <h2>A’akyrah Jackson</h2>
            <p className={styles.profileSubtitle}>
              AFMI Rite of Passage Graduate • Scholarship Recipient • Emerging Leader
            </p>
          </div>

          <div className={styles.profileBody}>
            {/* Story text */}
            <div className={styles.storyContent}>
              <p>
                A’akyrah Jackson joined the Afri-Female and Male Institute as a high school student and remained actively engaged in our workshops and programs from 9th through 12th grade. Throughout her time with AFMI, she demonstrated determination, leadership, and a deep commitment to personal growth. Her journey reflects the very purpose of our mission — to build character, confidence, cultural pride, and opportunity for youth.
              </p>
              
              <p>
                A’akyrah successfully completed the Institute’s Rite of Passage and Culminating Program, supported by her mother, siblings, and extended family. Upon graduation, she was awarded a $1,000 AFMI Scholarship in recognition of her academic promise, service, and perseverance. The Institute proudly adopted her as one of our continuing scholars, following her progress as she transitioned into Delaware Technical Community College.
              </p>

              <div className={styles.quoteBox}>
                &quot;To support her college journey, AFMI provided a laptop and essential supplies, ensuring she entered her first year equipped for success. A’akyrah has excelled in her studies and continues to make the organization proud.&quot;
              </div>

              <p>
                What makes her story even more remarkable is her commitment to giving back. A’akyrah has returned to AFMI on numerous occasions to speak to current students, lead workshops, and share her personal testimony. She openly discusses her life before joining the Institute and how the program helped shape her path, offering younger students encouragement, honesty, and hope.
              </p>

              <p>
                A’akyrah’s growth, resilience, and generosity embody the heart of the Afri-Female and Male Institute. We are honored to celebrate her achievements and grateful for her continued contributions to our community.
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
                  alt="A'akyrah Jackson Rite of Passage Ceremony" 
                />
                <div className={styles.imageCaption}>
                  A’akyrah Jackson at the AFMI Rite of Passage Graduation & Scholarship Ceremony.
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
              href="https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-23892" 
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
