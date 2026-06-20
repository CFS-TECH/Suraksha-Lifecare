import { useState, useEffect } from 'react';
import { ArrowRight, Stethoscope, ShieldCheck, Clock, Award } from 'lucide-react';
import styles from './Hero.module.css';

import patientCareImg from '../../assets/patient_care.png';
import nursingCareImg from '../../assets/nursing_care.png';
import physioImg from '../../assets/physiotherapy.png';

const slides = [
  {
    id: 1,
    headline: "Professional Home Healthcare You Can Trust",
    subtext: "Experience hospital-grade clinical excellence in the comfort of your home with our certified medical professionals.",
    ctaText: "Explore Services",
    ctaIcon: <ArrowRight size={18} />,
    image: patientCareImg,
  },
  {
    id: 2,
    headline: "Expert Nursing Care at Your Doorstep",
    subtext: "From post-surgical recovery to elderly assistance, our ICU-trained nurses provide compassionate 24/7 support.",
    ctaText: "Book a Nurse",
    ctaIcon: <Stethoscope size={18} />,
    image: nursingCareImg,
  },
  {
    id: 3,
    headline: "Personalized Rehabilitation Programs",
    subtext: "Regain your independence with specialized physiotherapy and stroke recovery plans tailored to your needs.",
    ctaText: "Consult Now",
    ctaIcon: <Award size={18} />,
    image: physioImg,
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleCtaClick = (ctaText) => {
    if (ctaText === "Explore Services") {
      const el = document.getElementById('services');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#services';
      }
    } else {
      window.dispatchEvent(new CustomEvent('open-whatsapp-booking'));
    }
  };

  return (
    <section className={styles.heroSection}>
      {/* Subtle Background Elements */}
      <div className={styles.bgGradient}></div>
      <div className={styles.gridPattern}></div>
      
      <div className={`container ${styles.carouselContainer}`}>
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;

          return (
            <div 
              key={slide.id} 
              className={`${styles.slide} ${isActive ? styles.active : ''}`}
            >
              <div className={styles.textContent}>
                <div className={styles.tagline}>
                  <ShieldCheck size={16} />
                  <span>NABL Accredited Partners</span>
                </div>
                <h1 className={styles.headline}>{slide.headline}</h1>
                <p className={styles.subtext}>{slide.subtext}</p>
                <div className={styles.ctaGroup}>
                  <button 
                    className={styles.ctaButtonPrimary}
                    onClick={() => handleCtaClick(slide.ctaText)}
                  >
                    {slide.ctaText}
                    <span className={styles.ctaIconWrapper}>{slide.ctaIcon}</span>
                  </button>
                  <button 
                    className={styles.ctaButtonSecondary}
                    onClick={() => window.location.href = '/plans'}
                  >
                    View Plans
                  </button>
                </div>

                {/* Authority metrics to fill the empty space and add visual credibility */}
                <div className={styles.heroMetrics}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricNumber}>15K+</span>
                    <span className={styles.metricLabel}>Happy Patients</span>
                  </div>
                  <div className={styles.metricDivider}></div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricNumber}>4.9★</span>
                    <span className={styles.metricLabel}>Google Rating</span>
                  </div>
                  <div className={styles.metricDivider}></div>
                  <div className={styles.metricItem}>
                    <span className={styles.metricNumber}>200+</span>
                    <span className={styles.metricLabel}>ICU Caregivers</span>
                  </div>
                </div>
              </div>

              <div className={styles.imageContent}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageOverlay}></div>
                  <img src={slide.image} alt={slide.headline} className={styles.heroImage} />
                  
                  {/* Trust Badge Floating */}
                  <div className={styles.trustFloatingCard}>
                    <div className={styles.trustIcon}>
                      <Clock size={20} />
                    </div>
                    <div className={styles.trustText}>
                      <strong>24/7 Support</strong>
                      <span>Always here for you</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation & Trust Bar */}
      <div className={styles.heroBottom}>
        <div className="container">
          <div className={styles.bottomFlex}>
            <div className={styles.navigation}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.navDot} ${index === currentSlide ? styles.activeDot : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <div className={styles.trustBar}>
              <div className={styles.trustItem}>
                <Award size={20} />
                <span>10+ Years Excellence</span>
              </div>
              <div className={styles.trustItem}>
                <ShieldCheck size={20} />
                <span>Verified Caregivers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
