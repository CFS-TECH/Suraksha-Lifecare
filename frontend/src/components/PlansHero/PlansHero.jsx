import React from 'react';
import styles from './PlansHero.module.css';

const PlansHero = () => {
  const handleEnquireClick = () => {
    const element = document.getElementById('booking-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.breadcrumbTab}>
        <span className={styles.breadcrumbText}>Home &gt;</span>
        <span className={styles.breadcrumbActive}>Long Term Care</span>
      </div>
      
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h1 className={styles.headline}>Expert Healthcare, Right at Your Doorstep</h1>
          <p className={styles.subtext}>
            Convenient, personalized medical care delivered in the comfort of your home.
          </p>
          <button onClick={handleEnquireClick} className={styles.ctaButton}>Enquire Now</button>
        </div>
      </div>

      <div className={styles.imageContent}>
        <img 
          src="/images/plans/plans_hero_bg.png" 
          alt="Professional nurse caring for an elderly patient at home" 
          className={styles.heroImage} 
        />
      </div>
    </section>
  );
};

export default PlansHero;
