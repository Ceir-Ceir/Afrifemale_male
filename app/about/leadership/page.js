import styles from '@/styles/Leadership.module.css';
import { SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from '@/components/Animations';

export default function Leadership() {
  const boardMembers = [
    {
      name: "Jessie Green",
      role: "Executive Director / Founder",
      bio: "Jessie Green is a retired Budget Analyst who served the Department of Defense U.S. Army for 38 years. She has an associate degree from the Atlanta Business College and a Bachelor of Art degree in Christian studies and Business from Grand Canyon University. She founded the Afri-Female and Male Institute in 1998 with the sole purpose of addressing the long-range needs of at-risk youth and their families. Jessie has many years of leadership roles in nonprofits and government, including serving as an elected official for the Willingboro Board of Education for nine years.",
      img: "https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/headshots/jessie.JPG"
    },
    {
      name: "Pastor Kevin L. Kelley",
      role: "Board Member",
      bio: "Pastor Kevin L. Kelley is a certified life coach, motivational speaker, and founder of Life By Design Coaching. With over 30 years of professional IT experience and as a U.S. Air Force Veteran, Kevin brings leadership, discipline, and real-world wisdom to his roles. He is the host of The Father's Coach Podcast and proudly serves as a mentor.",
      img: "https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/headshots/kelley.JPG"
    },
    {
      name: "Rev. Michael Morgan",
      role: "Board Member",
      bio: "Reverend Michael Morgan is a veteran of the United States Air Force and has had several Pastoral Assignments across Delaware and Pennsylvania. He holds a Bachelor of Arts in Sociology, two Master's degrees, and a Master of Divinity. He brings a deep commitment to faith, education, and community service to the organization.",
      img: "https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/headshots/morgan.jpeg"
    },
    {
      name: "Tanya S. Ellis",
      role: "Board Member",
      bio: "Tanya S. Ellis has over 40 years of experience in Quality Assurance and Food Safety, holding regional leadership roles with global organizations. She holds a B.S. in Industrial Engineering from The University of Dayton. Tanya was appointed an Examiner for the prestigious Malcolm Baldrige National Quality Award and brings her expertise in organizational excellence.",
      img: "https://tapkdjdhyyxmsnbjbxae.supabase.co/storage/v1/object/public/client-images/headshots/tanya.jpg"
    }
  ];

  return (
    <div className={styles.leadershipPage}>
      <div className="container">
        <section className={styles.founderSection}>
          <div className={styles.founderFlex}>
            <SlideInLeft className={styles.founderImage}>
              <img src={boardMembers[0].img} alt="Jessie Green" style={{ width: '100%', display: 'block' }} />
            </SlideInLeft>
            <SlideInRight className={styles.founderInfo}>
              <h1>{boardMembers[0].name}</h1>
              <span className={styles.title}>{boardMembers[0].role}</span>
              <p>
                Jessie Green founded the Afri-Female and Male Institute in 1998 with a vision to create a safe space for young people to grow, learn, and lead. 
                Her professional background in budget administration for the Department of Defense provided the foundational trust and discipline required to build a sustainable non-profit.
              </p>
              <p>
                Currently, she serves on the Board of Directors for DIMH where she volunteers at the Resource Center for Homeless Men, and she is an active leader and licensed Evangelist in the A.M.E. Church. Today, she leads the institute's mission of empowering youth ages 8–18 through mentoring, STEAM-based learning, and culturally grounded education.
              </p>
              <p>
                "Our mission is simple yet profound: to build purpose, character, and strong leaders. When a child knows who they are and what they are capable of, there is no limit to what they can achieve." — Jessie Green
              </p>
            </SlideInRight>
          </div>
        </section>

        <section className={styles.historySection}>
          <div className={styles.historyContainer}>
            <SlideInLeft>
              <h2>Our History & Purpose</h2>
              <div className={styles.historyText}>
                <p>
                  In 1998, after witnessing a cafeteria brawl involving several girls, she knew as an Educator, she had to step in. Jessie Green reached out to professional colleagues with her vision to teach girls that this type of behavior is not the norm. Seeing a need to help young girls project and conduct themselves in a manner that spoke of respect and self worth the Afri-Female and Male Institute was born.
                </p>
                <p>
                  Partnering with community members, professional colleagues and associates Jessie sought to change how these young girls saw and outwardly portrayed themselves. Introducing the girls to professional speakers, models and even video-taping them as they sat with unladylike postures all were part of a program to educate, uplift and bring out the best in these girls that Jessie and the original founders believed was within each one of them.
                </p>
                <p>
                  They wanted each girl to look in the &quot;mirror&quot; and see what others saw. They wanted the girls to show the world their best selves. More importantly, they wanted the girls to recognize their worth and love themselves.
                </p>
                <p>
                  Since that time, &quot;The institute&quot; has evolved and expanded its outreach but its purpose has remained the same, &quot;Through forming nurturing, trusting relationships, and involving them in meaningful, personal and community activities, they will improve their skills, self-esteem and the ability to pursue safe, healthy, happy lives&quot;.
                </p>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className={styles.charterMembers}>
                <h3>Founding & Charter Members</h3>
                <ul className={styles.charterList}>
                  <li>Thelma Allen*</li>
                  <li>Jessie Arnold*</li>
                  <li>Aldrean Attaway</li>
                  <li>Olivia Baxter</li>
                  <li>Ruth Brown</li>
                  <li>Jessie Green</li>
                  <li>Pat Linsey-Harvey</li>
                  <li>Beatrice Holley*</li>
                  <li>Elenor Johnson*</li>
                  <li>Beverly Lynch*</li>
                  <li>Deidre Milanes</li>
                  <li>Alton Payne</li>
                  <li>Ida Peace*</li>
                  <li>Everline Reid-Smith*</li>
                  <li>Linda Taylor</li>
                  <li>Michelle Walker</li>
                </ul>
                <p className={styles.charterNote}>*Deceased</p>
              </div>
            </SlideInRight>
          </div>
        </section>

        <section className={styles.boardSection}>
          <h2>Board of Directors</h2>
          <StaggerContainer className={styles.boardGrid}>
            {boardMembers.slice(1).map((member, index) => (
              <StaggerItem key={index} className={styles.boardCard}>
                <div 
                  className={styles.boardCardImg} 
                  style={{ backgroundImage: `url(${member.img})` }}
                ></div>
                <div className={styles.boardCardContent}>
                  <h3>{member.name}</h3>
                  <span>{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>
    </div>
  );
}

