import React from 'react';
import { UserCheck, Heart, ShieldCheck, Award, Clock, Star, ChevronRight } from 'lucide-react';
import styles from './WhyChooseUs.module.css';
import sideImage from '../../assets/nursing_care.png';

const features = [
  {
    id: 1,
    icon: <UserCheck size={24} />,
    title: "Certified Specialists",
    desc: "ICU-trained nurses and background-verified caregivers you can rely on."
  },
  {
    id: 2,
    icon: <Heart size={24} />,
    title: "Compassionate Care",
    desc: "Personalized care plans that prioritize emotional well-being and dignity."
  },
  {
    id: 3,
    icon: <ShieldCheck size={24} />,
    title: "NABL Accredited Partners",
    desc: "Partnered with certified labs for accurate and reliable diagnostics."
  },
  {
    id: 4,
    icon: <Clock size={24} />,
    title: "24/7 Availability",
    desc: "Round-the-clock support for emergencies and critical patient care."
  }
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.imageSide}>
            <div className={styles.imageCard}>
              <img src={sideImage} alt="Professional Medical Care" className={styles.mainImg} />
              <div className={styles.experienceBadge}>
                <Star size={20} fill="currentColor" />
                <div className={styles.badgeText}>
                  <strong>10+ Years</strong>
                  <span>of Clinical Excellence</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contentSide}>
            <span className={styles.topTag}>Why Suraksha Lifecare?</span>
            <h2 className={styles.title}>Setting the Standard for Homecare</h2>
            <p className={styles.desc}>
              We bring the precision and reliability of hospital-grade care directly to your doorstep. 
              Our systematic approach ensures that your loved ones receive the highest level of 
              medical attention without leaving their comfort zone.
            </p>

            <div className={styles.featuresList}>
              {features.map((feature) => (
                <div key={feature.id} className={styles.featureItem}>
                  <div className={styles.iconWrapper}>
                    {feature.icon}
                  </div>
                  <div className={styles.featureInfo}>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className={styles.actionBtn}>
              <span>Learn About Our Process</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

