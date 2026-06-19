import React from 'react';
import { PhoneCall, Stethoscope, HeartHandshake, Sparkles } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    id: 1,
    icon: <PhoneCall size={26} />,
    title: "Request a Call",
    description: "Click \"Enquire Now\" or drop a quick message on WhatsApp to share your care needs with us."
  },
  {
    id: 2,
    icon: <Stethoscope size={26} />,
    title: "Doctor Assessment",
    description: "Our senior medical officer conducts a home visit to audit patient vitals and design a custom care chart."
  },
  {
    id: 3,
    icon: <HeartHandshake size={26} />,
    title: "Care Begins",
    description: "We deploy a verified, matched caregiver to your home, supervised by regular clinical reports and MD audits."
  }
];

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.ambientGlow}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>
            <Sparkles size={12} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
            Simple Process
          </span>
          <h2 className={styles.title}>How It Works</h2>
          <div className={styles.dividerWrapper}>
            <div className={styles.glowLine}></div>
            <div className={styles.dividerNode}></div>
          </div>
          <p className={styles.subtitle}>
            Onboarding professional home care is easy, transparent, and completely doctor-supervised.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, idx) => (
            <div key={step.id} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <div className={styles.iconContainer}>
                  <div className={styles.iconPlate}>
                    {step.icon}
                  </div>
                </div>
                <span className={styles.stepNumber}>0{step.id}</span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              
              {idx < steps.length - 1 && (
                <div className={styles.flowArrow}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

