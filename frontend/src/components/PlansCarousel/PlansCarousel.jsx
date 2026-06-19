import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Activity, Bed, Baby, Gauge, Sparkles } from 'lucide-react';
import styles from './PlansCarousel.module.css';

const plansData = [
  {
    id: 1,
    title: "Senior Citizen Care Plan",
    desc: "Daily support, medicine reminders, and health monitoring for senior citizens.",
    image: "/images/plans/senior_care.png",
    link: "/home-care-plans/senior-citizen-care",
    themeColor: "#FFB000",
    badgeText: "Highly Requested"
  },
  {
    id: 2,
    title: "Recovery Care Plan",
    desc: "Post-surgery and recovery support with professional caregivers and nursing care.",
    image: "/images/plans/post_surgery.png",
    link: "/home-care-plans/recovery-care",
    themeColor: "#009A9F",
    badgeText: "Clinical Care"
  },
  {
    id: 3,
    title: "Bedridden Patient Care Plan",
    desc: "Complete support for bedridden patients including hygiene, feeding, and monitoring.",
    image: "/images/plans/bedridden.png",
    link: "/home-care-plans/bedridden-care",
    themeColor: "#0575E6",
    badgeText: "Full Support"
  },
  {
    id: 4,
    title: "Mother & Baby Care Plan",
    desc: "Compassionate care for newborn babies and mothers during recovery.",
    image: "/images/plans/mother_baby.png",
    link: "/home-care-plans/mother-baby-care",
    themeColor: "#FF7675",
    badgeText: "Postnatal Care"
  },
  {
    id: 5,
    title: "Diabetes Care Plan",
    desc: "Regular monitoring, medicine support, and healthcare assistance for diabetic patients.",
    image: "/images/plans/diabetes_care.png",
    link: "/home-care-plans/diabetes-care",
    themeColor: "#2ECC71",
    badgeText: "Preventative"
  }
];

const planTitleMap = {
  "Senior Citizen Care Plan": "Senior Citizen Care Plan",
  "Recovery Care Plan": "Post-Surgery Recovery Plan",
  "Bedridden Patient Care Plan": "Bedridden Patient Care Plan",
  "Mother & Baby Care Plan": "Mother & Baby Care Plan",
  "Diabetes Care Plan": "Diabetes Care & Monitoring Plan"
};


const renderPlanIcon = (id) => {
  switch(id) {
    case 1: return <Heart size={20} />;
    case 2: return <Activity size={20} />;
    case 3: return <Bed size={20} />;
    case 4: return <Baby size={20} />;
    case 5: return <Gauge size={20} />;
    default: return <Sparkles size={20} />;
  }
};

const PlansCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -390 : 390;
      const currentScroll = carouselRef.current.scrollLeft;
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (direction === 'right' && currentScroll >= maxScroll - 15) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Only enable auto-scroll on desktop screens to avoid running idle loops on mobile grid layouts
    if (window.innerWidth <= 768) return;

    const interval = setInterval(() => {
      scroll('right');
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      {/* Visual background layers */}
      <div className={styles.gridOverlay}></div>
      <div className={styles.ambientLight1}></div>
      <div className={styles.ambientLight2}></div>

      <div className={styles.header}>
        <div className={styles.badgeContainer}>
          <span className={styles.sectionBadge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            Exclusive Care Packages
          </span>
        </div>
        <h2 className={styles.title}>Personalized Home Care Plans</h2>
        <div className={styles.dividerWrapper}>
          <div className={styles.glowLine}></div>
          <div className={styles.dividerNode}></div>
        </div>
      </div>

      <div className={styles.carouselWrapper}>
        {/* Navigation Buttons for Manual Control */}
        <button 
          className={`${styles.navButton} ${styles.navLeft}`}
          onClick={() => scroll('left')}
          aria-label="Scroll Left"
        >
          <ChevronLeft size={22} />
        </button>
        
        <button 
          className={`${styles.navButton} ${styles.navRight}`}
          onClick={() => scroll('right')}
          aria-label="Scroll Right"
        >
          <ChevronRight size={22} />
        </button>

        <div className={styles.carouselContainer} ref={carouselRef}>
          {plansData.map((plan) => (
            <Link 
              to="/plans" 
              state={{ selectedPlan: planTitleMap[plan.title] || plan.title }}
              key={plan.id} 
              className={styles.card}
              style={{ '--plan-theme-color': plan.themeColor }}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imageOverlay}></div>
                <span className={styles.cardBadge}>{plan.badgeText}</span>
                <div className={styles.iconPlate}>
                  {renderPlanIcon(plan.id)}
                </div>
                <img src={plan.image} alt={plan.title} className={styles.cardImage} />
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{plan.title}</h3>
                <p className={styles.cardDesc}>{plan.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.cardFooterBtn}>
                    <span className={styles.desktopText}>Book Plan</span>
                    <span className={styles.mobileText}>Book</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.carouselBottom}>
        <Link to="/plans" className={styles.viewAllBtn}>
          Visit More →
        </Link>
      </div>
    </section>
  );
};

export default PlansCarousel;
