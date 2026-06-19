import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import styles from './ConsultationCTA.module.css';

const ConsultationCTA = () => {
  const handleWhatsApp = () => {
    const message = "Hello! I would like to request a free callback to discuss a custom home care plan for my family member.";
    const whatsappUrl = `https://wa.me/9118001212323?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.textContent}>
            <span className={styles.tag}>
              <Sparkles size={12} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
              Custom Solutions
            </span>
            <h2 className={styles.title}>Need a Custom Care Package?</h2>
            <p className={styles.subtitle}>
              Every family is unique. Talk to a care supervisor today to design a completely bespoke plan built around your patient's specific routines and medical requirements.
            </p>
          </div>

          <div className={styles.actions}>
            <button 
              type="button" 
              onClick={handleWhatsApp} 
              className={styles.ctaBtn}
            >
              <MessageSquare size={18} /> Request Free Callback
            </button>
            <a href="tel:+18001212323" className={styles.phoneLink}>
              <Phone size={16} /> Or call +1800 121 2323
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
