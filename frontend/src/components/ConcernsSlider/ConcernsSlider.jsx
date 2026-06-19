import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './ConcernsSlider.module.css';

const concernsData = [
  {
    id: 1,
    title: 'Period doubts or Pregnancy',
    bgClass: styles.bgPregnancy,
    icon: (
      <svg viewBox="0 0 64 64" className={styles.concernIcon}>
        <path d="M16 26 C12 22, 12 16, 16 16 C20 16, 22 20, 26 22 C30 23, 34 23, 38 22 C42 20, 44 16, 48 16 C52 16, 52 22, 48 26 C44 30, 38 34, 38 38 C38 42, 36 44, 32 44 C28 44, 26 42, 26 38 C26 34, 20 30, 16 26 Z" fill="none" stroke="#FF5C8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="20" r="3" fill="#00C2FF" />
        <circle cx="52" cy="20" r="3" fill="#00C2FF" />
        <path d="M32 32 C32 32, 29 36, 29 39 C29 41.5, 30.5 43, 32 43 C33.5 43, 35 41.5, 35 39 C35 36, 32 32, 32 32 Z" fill="#FF4B4B" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Acne, pimple or skin issues',
    bgClass: styles.bgSkin,
    icon: (
      <svg viewBox="0 0 64 64" className={styles.concernIcon}>
        <path d="M22 18 C22 18, 25 10, 34 10 C44 10, 46 18, 46 26 C46 36, 42 42, 38 44 C34 46, 30 46, 28 44 C24 41, 24 35, 24 32 C21 32, 18 28, 20 24 C22 20, 22 18, 22 18 Z" fill="none" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 16 C24 16, 28 14, 30 14" stroke="#2D3748" strokeWidth="2.5" />
        <path d="M28 44 L26 54 H38 L36 44" stroke="#2D3748" strokeWidth="2.5" fill="none" />
        <circle cx="34" cy="30" r="1.5" fill="#FF5C8A" />
        <circle cx="38" cy="28" r="1.5" fill="#FF5C8A" />
        <circle cx="36" cy="34" r="2" fill="#FF5C8A" />
        <circle cx="32" cy="36" r="1.5" fill="#FF5C8A" />
        <circle cx="40" cy="32" r="1.5" fill="#FF5C8A" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Performance issues in bed',
    bgClass: styles.bgPerformance,
    icon: (
      <svg viewBox="0 0 64 64" className={styles.concernIcon}>
        <circle cx="25" cy="38" r="8" fill="none" stroke="#FF5C8A" strokeWidth="2.5" />
        <path d="M25 46 V54 M21 50 H29" stroke="#FF5C8A" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="39" cy="24" r="8" fill="none" stroke="#4D96FF" strokeWidth="2.5" />
        <path d="M45 18 L52 11 M46 11 H52 V17" stroke="#4D96FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Cold, cough or fever',
    bgClass: styles.bgCold,
    icon: (
      <svg viewBox="0 0 64 64" className={styles.concernIcon}>
        <path d="M42 46 C40 43, 38 40, 38 35 C38 32, 40 30, 42 28 C43.5 26.5, 43 23, 40 21 C37 19, 32 19, 29 22 C26 25, 26 28, 25 31 C24 34, 21 35, 21 35 L20 37 H26 L27 41 C28 43, 30 45, 33 45 C35 45, 37 46, 39 48 L42 46 Z" fill="none" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 30 C12 31, 10 33, 12 35 M16 35 C14 37, 13 39, 15 40 M11 37 C8 38, 7 40, 9 41" stroke="#FF7676" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Child not feeling well',
    bgClass: styles.bgChild,
    icon: (
      <svg viewBox="0 0 64 64" className={styles.concernIcon}>
        <circle cx="32" cy="30" r="12" fill="none" stroke="#2D3748" strokeWidth="2.5" />
        <path d="M32 18 C32 14, 35 15, 35 15" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M27 28 Q28 29 29 28" stroke="#2D3748" strokeWidth="2" fill="none" />
        <path d="M35 28 Q36 29 37 28" stroke="#2D3748" strokeWidth="2" fill="none" />
        <path d="M29 36 Q32 33 35 36" stroke="#2D3748" strokeWidth="2" fill="none" />
        <circle cx="25" cy="32" r="2" fill="#FFA3A3" />
        <circle cx="39" cy="32" r="2" fill="#FFA3A3" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Depression or anxiety',
    bgClass: styles.bgMental,
    icon: (
      <svg viewBox="0 0 64 64" className={styles.concernIcon}>
        <path d="M38 46 C36 43, 34 40, 34 35 C34 27, 39 24, 36 18 C33 12, 24 12, 21 18 C18 24, 21 28, 21 32 C21 35, 18 36, 18 36 L17 38 H23 L24 42 C25 44, 27 46, 30 46 C32 46, 34 48, 36 50 L38 46 Z" fill="none" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 16 C16 16, 15 18, 16 20 C14 20, 13 22, 15 24 C14 26, 16 28, 18 28 C20 28, 21 26, 21 24 C22 24, 23 22, 22 20 C22 18, 20 16, 18 16 Z" fill="#FFA3A3" opacity="0.6" stroke="#FF5C8A" strokeWidth="1.5" />
        <path d="M17 20 H19 M18 19 V21" stroke="#FF4B4B" strokeWidth="1.5" />
      </svg>
    )
  }
];

const ConcernsSlider = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = 260 + 24; // Card width + gap
      const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleBooking = (concernTitle) => {
    window.dispatchEvent(new CustomEvent('open-whatsapp-booking', { detail: { service: `Doctor Consult - ${concernTitle}` } }));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        {/* Centered Header (Matches Home Page layout pattern) */}
        <div className={styles.header}>
          <div className={styles.badgeContainer}>
            <span className={styles.badge}>
              Online Consultations
            </span>
          </div>
          <h2 className={styles.title}>Consult Top Doctors for Any Concern</h2>
          <p className={styles.sub}>Private online consultations with verified doctors in all specialists</p>
          
          <div className={styles.dividerWrapper}>
            <div className={styles.glowLine}></div>
            <div className={styles.dividerNode}></div>
          </div>
        </div>

        {/* Scrollable Slider Track with absolute Nav Chevrons */}
        <div className={styles.carouselWrapper}>
          <button className={`${styles.navButton} ${styles.navLeft}`} onClick={() => scroll('left')} aria-label="Slide Left">
            <ArrowLeft size={20} />
          </button>
          <button className={`${styles.navButton} ${styles.navRight}`} onClick={() => scroll('right')} aria-label="Slide Right">
            <ArrowRight size={20} />
          </button>

          <div className={styles.sliderWrapper} ref={sliderRef}>
            {concernsData.slice(0, window.innerWidth <= 500 ? 4 : concernsData.length).map((item) => (
              <div key={item.id} className={styles.concernCard} onClick={() => handleBooking(item.title)}>
                <div className={`${styles.concernIconWrap} ${item.bgClass}`}>
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
                <button className={styles.consultBtn}>
                  CONSULT NOW
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottomContainer}>
          <button 
            className={styles.viewAllBtn} 
            onClick={() => navigate('/services/doctor-consultation')}
          >
            View All Specialties
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConcernsSlider;
