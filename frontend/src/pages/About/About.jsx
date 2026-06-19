import React from 'react';
import { Sparkles, Shield, Heart, Award, Users, Star } from 'lucide-react';
import styles from './About.module.css';

const leaders = [
  {
    id: 1,
    name: "Dr. Ananya Sen",
    role: "Chief Medical Officer",
    qual: "MD, Internal Medicine (15+ Years Exp.)",
    desc: "Oversees all clinical protocols and ensures that home recovery programs align with international hospital standards."
  },
  {
    id: 2,
    name: "Prof. Rajeev Dutta",
    role: "Director of Rehabilitation",
    qual: "MPT, Neurology (18+ Years Exp.)",
    desc: "Spearheads our home physiotherapy, stroke rehabilitation, and motor recovery programs with advanced neural protocols."
  },
  {
    id: 3,
    name: "Sister Mary Joseph",
    role: "Chief Nursing Officer",
    qual: "B.Sc Nursing, Critical Care (20+ Years Exp.)",
    desc: "Manages our team of ICU-trained home nurses, conducting weekly quality audits and practical clinical vetting."
  }
];

const values = [
  {
    id: 1,
    icon: <Heart size={24} />,
    title: "Compassionate Care",
    desc: "We prioritize patient dignity, mental well-being, and active companionship, treating your family like our own."
  },
  {
    id: 2,
    icon: <Shield size={24} />,
    title: "Clinical Safety First",
    desc: "All attendants undergo police background checks and clinical training. Active vital telemetry ensures absolute safety."
  },
  {
    id: 3,
    icon: <Award size={24} />,
    title: "Medical Precision",
    desc: "Weekly audits by MD-level doctors and customized nursing charts bring professional hospital rigor home."
  },
  {
    id: 4,
    icon: <Users size={24} />,
    title: "Absolute Accessibility",
    desc: "From 2-hour daily therapeutic visits to full 24/7 ICU shifting care, we adapt completely to your home environment."
  }
];

const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.topTag}>About Suraksha Lifecare</span>
            <h1 className={styles.heroTitle}>Hospital-Grade Healthcare, Right at Home</h1>
            <p className={styles.heroSubtitle}>
              We are dedicated to setting the standard for professional homecare, combining advanced medical protocols, continuous clinical oversight, and deep compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <h2 className={styles.sectionTitle}>Our Vision</h2>
              <p className={styles.sectionText}>
                To be the most trusted and reliable clinical home healthcare partner in India, empowering families to access high-precision medical recovery and supportive elder care in the comfort and dignity of their own homes.
              </p>
            </div>
            
            <div className={styles.visionCard}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p className={styles.sectionText}>
                We bring hospital-grade clinical precision home. Through background-vetted attendants, ICU-trained nurses, dedicated care managers, and active MD doctor supervisions, we provide absolute clinical safety and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>
              <Sparkles size={12} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
              Our Pillars
            </span>
            <h2 className={styles.mainTitle}>Core Values We Live By</h2>
            <p className={styles.subtitle}>
              Our commitment to your family's health is built upon these four solid pillars of clinical excellence.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((val) => (
              <div key={val.id} className={styles.valueCard}>
                <div className={styles.iconWrapper}>
                  {val.icon}
                </div>
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.valueDesc}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className={styles.leadershipSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Clinical Oversight</span>
            <h2 className={styles.mainTitle}>Our Medical Advisory Board</h2>
            <p className={styles.subtitle}>
              Meet the senior medical officers and clinical directors who design our protocols and audit every home care plan.
            </p>
          </div>

          <div className={styles.leadersGrid}>
            {leaders.map((leader) => (
              <div key={leader.id} className={styles.leaderCard}>
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatar}>
                    <Users size={32} />
                  </div>
                  <div className={styles.starBadge}>
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
                <div className={styles.leaderInfo}>
                  <h3 className={styles.leaderName}>{leader.name}</h3>
                  <span className={styles.leaderRole}>{leader.role}</span>
                  <span className={styles.leaderQual}>{leader.qual}</span>
                  <div className={styles.leaderDivider} />
                  <p className={styles.leaderDesc}>{leader.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
