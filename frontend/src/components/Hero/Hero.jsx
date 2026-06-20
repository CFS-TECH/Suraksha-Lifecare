import { useState, useEffect } from 'react';
import { ArrowRight, Stethoscope, ShieldCheck, Clock, Award } from 'lucide-react';
import { API_URL } from '../../config';
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
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [authorized, setAuthorized] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !authorized) return;

    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch(`${API_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: 'Delhi NCR',
          serviceType: 'Hero Enquiry',
          address: 'Instant Enquiry',
          purpose: 'General Enquiry',
          message: 'Authorized to contact/WhatsApp'
        })
      });

      if (response.ok) {
        setStatus('Thank you! We will contact you shortly.');
        setFormData({ name: '', phone: '' });
      } else {
        setStatus('Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      console.warn('Enquiry submission failed.', error);
      setStatus('Failed to connect. Please try again.');
    }
    setIsSubmitting(false);
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
        {/* Left: Slides for Text Content */}
        <div className={styles.slidesWrapper}>
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
              </div>
            );
          })}
        </div>

        {/* Right: Static Enquiry Form Card */}
        <div className={styles.formContainer}>
          <div className={styles.enquiryCard}>
            <h3 className={styles.formTitle}>Enquire Now</h3>
            <form onSubmit={handleFormSubmit} className={styles.enquiryForm}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.inputGroup}>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.formInput}
                />
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={authorized}
                    onChange={(e) => setAuthorized(e.target.checked)}
                    required
                    className={styles.checkboxInput}
                  />
                  <span className={styles.checkboxText}>
                    I authorize Suraksha representative to contact/WhatsApp me.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
              </button>

              {status && (
                <p className={`${styles.statusText} ${status.includes('Failed') || status.includes('failed') ? styles.errorStatus : styles.successStatus}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
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
