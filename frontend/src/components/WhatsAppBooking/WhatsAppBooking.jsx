import React, { useState, useEffect, useRef } from 'react';
import { PhoneCall } from 'lucide-react';
import styles from './WhatsAppBooking.module.css';

const WHATSAPP_NUMBER = '919990782525';
const PHONE_NUMBER = '+919990782525';

const WhatsAppBooking = () => {
  const [showBadge, setShowBadge] = useState(false);
  const fabRef = useRef(null);

  // Show a pulsing notification badge after 4 seconds to catch the user's attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for global custom events to open WhatsApp instantly
  useEffect(() => {
    const handleOpenTrigger = (e) => {
      if (showBadge) setShowBadge(false);

      let message = 'Hello Suraksha Care, I would like to inquire about your healthcare services.';
      if (e.detail && e.detail.service) {
        message = `Hello Suraksha Care, I want to book the service: ${e.detail.service}. Please assist me.`;
      }

      const encodedText = encodeURIComponent(message);
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
      window.open(waUrl, '_blank');
    };

    window.addEventListener('open-whatsapp-booking', handleOpenTrigger);
    return () => window.removeEventListener('open-whatsapp-booking', handleOpenTrigger);
  }, [showBadge]);

  const handleWhatsAppClick = () => {
    if (showBadge) setShowBadge(false);
    
    const message = 'Hello Suraksha Care, I would like to inquire about your healthcare services.';
    const encodedText = encodeURIComponent(message);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className={styles.container}>
      {/* Floating Buttons Stack */}
      <div className={styles.fabStack}>
        {/* Phone Call Button */}
        <button 
          className={styles.phoneButton} 
          onClick={() => window.open(`tel:${PHONE_NUMBER}`, '_self')}
          aria-label="Call Suraksha Support"
          title="Call Us Now"
        >
          <PhoneCall size={24} />
        </button>

        {/* WhatsApp Button */}
        <button 
          ref={fabRef}
          className={styles.floatingButton} 
          onClick={handleWhatsAppClick}
          aria-label="WhatsApp Chat"
        >
          <div className={styles.btnContent}>
            <svg 
              viewBox="0 0 24 24" 
              className={styles.whatsappIcon}
              fill="currentColor"
            >
              <path d="M12.031 6c-3.314 0-6 2.686-6 6 0 1.037.263 2.012.724 2.86l-.772 2.82 2.887-.757a5.97 5.97 0 002.868.732c3.314 0 6-2.686 6-6s-2.686-6-6-6zM9.822 9.006c.162 0 .324.015.462.298.138.283.473 1.154.514 1.236.041.082.069.179.014.289-.055.11-.083.179-.166.275-.083.096-.174.215-.248.289-.083.082-.17.172-.073.338.097.165.429.708.92 1.144.63.56 1.162.735 1.328.818.165.083.262.069.359-.041.097-.11.414-.482.524-.647.11-.165.22-.138.373-.083.152.055.966.455 1.132.538.165.083.276.124.317.193.041.069.041.4-.124.868-.166.468-.813.868-1.118.896-.303.028-.593-.083-1.849-.578-1.503-.593-2.463-2.124-2.538-2.227-.076-.103-.607-.807-.607-1.537 0-.73.386-1.089.524-1.24.138-.152.303-.193.414-.193z" />
              <path d="M12.004 2C6.48 2 2 6.48 2 12a9.94 9.94 0 001.7 5.5L2 22l4.67-1.23a9.92 9.92 0 005.33 1.53c5.52 0 10-4.48 10-10S17.52 2 12.004 2zm.027 18.03c-1.59 0-3.14-.42-4.51-1.22l-.32-.19-3.35.88.9-3.27-.21-.33a8.03 8.03 0 01-1.22-4.14c0-4.43 3.61-8.04 8.04-8.04 4.43 0 8.04 3.61 8.04 8.04-.01 4.43-3.62 8.04-8.05 8.04z" />
            </svg>
          </div>
          {showBadge && (
            <span className={styles.badge}>1</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default WhatsAppBooking;
