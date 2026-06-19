import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import styles from './SingleTestimonial.module.css';

const SingleTestimonial = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>
            <Sparkles size={12} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
            Family Stories
          </span>
          <h2 className={styles.title}>What Families Say</h2>
        </div>

        <div className={styles.card}>
          <Quote className={styles.quoteIcon} size={48} />
          
          <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={styles.starIcon} size={18} fill="#FFB020" color="#FFB020" />
            ))}
          </div>

          <blockquote className={styles.quoteText}>
            "We were extremely worried about managing my father's recovery program after he was discharged. The Senior Citizen Care Plan gave us absolute peace of mind. The caregiver is incredibly supportive, the weekly clinical reviews are exceptionally thorough, and our care coordinator handles everything instantly."
          </blockquote>

          <div className={styles.authorBlock}>
            <div className={styles.avatar}>SM</div>
            <div className={styles.meta}>
              <h4 className={styles.authorName}>Suresh Menon</h4>
              <p className={styles.authorSub}>Son of patient (Senior Citizen Plan subscriber)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleTestimonial;
