export default function Impact() {
  const stories = [
    {
      name: "Marcus R.",
      year: "2018 Alumnus",
      quote: "The Afri-Female and Male Institute gave me the confidence to pursue my degree in Engineering. The STEAM workshops and one-on-one mentoring were a game-changer for me.",
      impact: "Now a practicing Civil Engineer in Delaware."
    },
    {
      name: "Sarah L.",
      year: "2020 Alumna",
      quote: "I learned how to manage my finances and start my own small business while still in high school. This program truly cares about our future.",
      impact: "Currently running a successful online boutique."
    },
    {
      name: "Darnell T.",
      year: "2022 Alumnus",
      quote: "The leadership workshops helped me find my voice. I never thought I could be a community leader until I joined the Institute.",
      impact: "Serving as a Student Government President."
    }
  ];

  return (
    <div className="impact-page">
      <section className="section-padding" style={{ backgroundColor: 'var(--color-accent)' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Our <span className="text-gradient">Impact</span></h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', opacity: 0.8 }}>
            Since 1998, we have been more than just a program—we have been a family. Our greatest success is the success of our alumni.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Success Stories</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-md)'
          }}>
            {stories.map((story, i) => (
              <div key={i} style={{
                padding: '2.5rem',
                backgroundColor: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #f1f1f1',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: 1 }}>“</div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1.5rem', flex: 1 }}>{story.quote}</p>
                <div style={{ borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                  <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.2rem' }}>{story.name}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>{story.year}</p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{story.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Over 25 Years of Community Growth</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem', opacity: 0.9 }}>
            From our founding in 1998 to our expansion across Delaware and New Jersey, our mission remains the same: empowering youth through mentoring, STEAM-based learning, and culturally grounded education.
          </p>
          <div style={{
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '3rem',
            width: '100%',
            maxWidth: '600px'
          }}>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'white', marginBottom: '0.5rem' }}>500+</h3>
              <p style={{ opacity: 0.8, textTransform: 'uppercase', fontSize: '0.8rem' }}>Alumni Empowered</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'white', marginBottom: '0.5rem' }}>15k+</h3>
              <p style={{ opacity: 0.8, textTransform: 'uppercase', fontSize: '0.8rem' }}>Mentoring Hours</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'white', marginBottom: '0.5rem' }}>2</h3>
              <p style={{ opacity: 0.8, textTransform: 'uppercase', fontSize: '0.8rem' }}>States Served</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
