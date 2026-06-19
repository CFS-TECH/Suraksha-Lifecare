import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Send, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  ArrowRight,
  ClipboardList
} from 'lucide-react';
import { serviceData } from './serviceData';
import styles from './ServiceDetail.module.css';

const WHATSAPP_NUMBER = '919990782525';
const PHONE_NUMBER = '+919990782525';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Scroll to top on page load/service update
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  // Find the service in our data repository
  const service = serviceData[serviceId];

  // Fallback if serviceId is not recognized
  if (!service) {
    return (
      <div className={`container section ${styles.notFoundContainer}`}>
        <h2 className={styles.notFoundTitle}>Service Page Not Found</h2>
        <p className={styles.notFoundText}>The home healthcare service you are looking for is currently being updated or has moved.</p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} style={{ marginRight: '8px' }} />
          Return to Services
        </Link>
      </div>
    );
  }

  const triggerWhatsAppBooking = () => {
    // Open global booking widget with this service preselected
    window.dispatchEvent(new CustomEvent('open-whatsapp-booking', { detail: { service: service.title } }));
  };

  const handleCallSupport = () => {
    window.open(`tel:${PHONE_NUMBER}`, '_self');
  };

  return (
    <div className={`animate-fade-in ${styles.pageWrapper}`}>
      {/* Background Decorative Rings */}
      <div className={styles.bgGlow1} style={{ '--glow-color': service.themeColor }}></div>
      <div className={styles.bgGlow2}></div>

      {/* Breadcrumb Navigation */}
      <div className="container">
        <div className={styles.breadcrumb}>
          <Link to="/" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to Services</span>
          </Link>
          <span className={styles.separator}>/</span>
          <span className={styles.currentCrumb}>{service.title}</span>
        </div>
      </div>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroGrid}`}>
          {/* Text Content */}
          <div className={styles.heroText}>
            <div className={styles.tagline} style={{ color: service.themeColor, backgroundColor: `${service.themeColor}12` }}>
              <Sparkles size={16} />
              <span>Suraksha Clinical Excellence</span>
            </div>
            
            <h1 className={styles.headline}>{service.title}</h1>
            <h2 className={styles.subheadline}>{service.subtitle}</h2>
            <p className={styles.description}>{service.description}</p>

            {/* Micro CTAs */}
            <div className={styles.ctaGroup}>
              <button 
                onClick={triggerWhatsAppBooking} 
                className={styles.primaryCta}
              >
                <svg viewBox="0 0 24 24" className={styles.waIcon} fill="currentColor">
                  <path d="M12.031 6c-3.314 0-6 2.686-6 6 0 1.037.263 2.012.724 2.86l-.772 2.82 2.887-.757a5.97 5.97 0 002.868.732c3.314 0 6-2.686 6-6s-2.686-6-6-6zM9.822 9.006c.162 0 .324.015.462.298.138.283.473 1.154.514 1.236.041.082.069.179.014.289-.055.11-.083.179-.166.275-.083.096-.174.215-.248.289-.083.082-.17.172-.073.338.097.165.429.708.92 1.144.63.56 1.162.735 1.328.818.165.083.262.069.359-.041.097-.11.414-.482.524-.647.11-.165.22-.138.373-.083.152.055.966.455 1.132.538.165.083.276.124.317.193.041.069.041.4-.124.868-.166.468-.813.868-1.118.896-.303.028-.593-.083-1.849-.578-1.503-.593-2.463-2.124-2.538-2.227-.076-.103-.607-.807-.607-1.537 0-.73.386-1.089.524-1.24.138-.152.303-.193.414-.193z" />
                  <path d="M12.004 2C6.48 2 2 6.48 2 12a9.94 9.94 0 001.7 5.5L2 22l4.67-1.23a9.92 9.92 0 005.33 1.53c5.52 0 10-4.48 10-10S17.52 2 12.004 2zm.027 18.03c-1.59 0-3.14-.42-4.51-1.22l-.32-.19-3.35.88.9-3.27-.21-.33a8.03 8.03 0 01-1.22-4.14c0-4.43 3.61-8.04 8.04-8.04 4.43 0 8.04 3.61 8.04 8.04-.01 4.43-3.62 8.04-8.05 8.04z" />
                </svg>
                <span>Instant WhatsApp Booking</span>
              </button>
              
              <button 
                onClick={handleCallSupport} 
                className={styles.secondaryCta}
              >
                <Phone size={18} />
                <span>Call Care Desk</span>
              </button>
              
              {serviceId === 'doctor-consultation' && (
                <button 
                  onClick={() => document.getElementById('specialties')?.scrollIntoView({ behavior: 'smooth' })} 
                  className={styles.tertiaryCta}
                >
                  <ClipboardList size={18} />
                  <span>Explore Specialties</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: In-page Appointment Booking Form (Moved Above the Fold) */}
          <div className={styles.formColumn}>
            <BookingForm serviceName={service.title} />
          </div>
        </div>
      </section>

      {/* Visual Statistics Bar */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsCard}>
            {service.metrics.map((metric, idx) => (
              <div key={idx} className={styles.statItem}>
                <span className={styles.statValue} style={{ color: service.themeColor }}>{metric.value}</span>
                <span className={styles.statLabel}>{metric.label}</span>
                {idx < service.metrics.length - 1 && <div className={styles.statDivider}></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section for Doctor Consultation */}
      {serviceId === 'doctor-consultation' && (
        <>
          <section id="specialties" className={styles.specialtiesSection}>
            <div className="container">
              <div className={styles.specialtiesHeader}>
                <span className={styles.specialtiesTag}>Doctor Specialties</span>
                <h2 className={styles.specialtiesTitle}>Find experienced doctors across all specialties</h2>
                <p className={styles.specialtiesSub}>
                  Access dedicated medical experts specialized in dental care, women's health, and family medicine at home.
                </p>
              </div>
              <div className={styles.specialtiesGrid}>
                <div className={styles.specialtyCard} onClick={triggerWhatsAppBooking}>
                  <div className={styles.specialtyImgWrap}>
                    <img 
                      src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80" 
                      alt="Dentist" 
                      className={styles.specialtyImage}
                    />
                  </div>
                  <div className={styles.specialtyContent}>
                    <h4>Dentist</h4>
                    <p>Teething troubles? Schedule a dental checkup</p>
                    <div className={styles.specialtyFee}>Consultation Fee: <strong>₹599</strong></div>
                    <span className={styles.bookText} style={{ color: service.themeColor }}>Book Consult →</span>
                  </div>
                </div>

                <div className={styles.specialtyCard} onClick={triggerWhatsAppBooking}>
                  <div className={styles.specialtyImgWrap}>
                    <img 
                      src="https://images.unsplash.com/photo-1579684389782-64d84b5e901a?w=600&q=80" 
                      alt="Gynecologist/Obstetrician" 
                      className={styles.specialtyImage}
                    />
                  </div>
                  <div className={styles.specialtyContent}>
                    <h4>Gynecologist/Obstetrician</h4>
                    <p>Explore for women’s health, pregnancy and infertility treatments</p>
                    <div className={styles.specialtyFee}>Consultation Fee: <strong>₹699</strong></div>
                    <span className={styles.bookText} style={{ color: service.themeColor }}>Book Consult →</span>
                  </div>
                </div>

                <div className={styles.specialtyCard} onClick={triggerWhatsAppBooking}>
                  <div className={styles.specialtyImgWrap}>
                    <img 
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80" 
                      alt="General Physician" 
                      className={styles.specialtyImage}
                    />
                  </div>
                  <div className={styles.specialtyContent}>
                    <h4>General Physician</h4>
                    <p>Consult for general illnesses, flu, health checkups & prescriptions</p>
                    <div className={styles.specialtyFee}>Consultation Fee: <strong>₹499</strong></div>
                    <span className={styles.bookText} style={{ color: service.themeColor }}>Book Consult →</span>
                  </div>
                </div>

                <div className={styles.specialtyCard} onClick={triggerWhatsAppBooking}>
                  <div className={styles.specialtyImgWrap}>
                    <img 
                      src="https://images.unsplash.com/photo-1622960206509-796760b1172f?w=600&q=80" 
                      alt="Pediatrician" 
                      className={styles.specialtyImage}
                    />
                  </div>
                  <div className={styles.specialtyContent}>
                    <h4>Pediatrician</h4>
                    <p>Expert care, growth tracking, and health consults for children</p>
                    <div className={styles.specialtyFee}>Consultation Fee: <strong>₹599</strong></div>
                    <span className={styles.bookText} style={{ color: service.themeColor }}>Book Consult →</span>
                  </div>
                </div>

                <div className={styles.specialtyCard} onClick={triggerWhatsAppBooking}>
                  <div className={styles.specialtyImgWrap}>
                    <img 
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" 
                      alt="Sexologist" 
                      className={styles.specialtyImage}
                    />
                  </div>
                  <div className={styles.specialtyContent}>
                    <h4>Sexologist</h4>
                    <p>Discreet consultations for intimacy, sexual health & performance concerns</p>
                    <div className={styles.specialtyFee}>Consultation Fee: <strong>₹699</strong></div>
                    <span className={styles.bookText} style={{ color: service.themeColor }}>Book Consult →</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Online Concerns Section */}
          <section className={styles.onlineConsultSection}>
            <div className="container">
              <div className={styles.onlineHeader}>
                <div className={styles.onlineHeaderLeft}>
                  <h2 className={styles.onlineTitle}>Consult top doctors online for any health concern</h2>
                  <p className={styles.onlineSub}>Private online consultations with verified doctors in all specialists</p>
                </div>
                <button className={styles.viewAllBtn} onClick={triggerWhatsAppBooking}>
                  View All Specialities
                </button>
              </div>

              <div className={styles.concernsGrid}>
                {/* Concern 1 */}
                <div className={styles.concernCard} onClick={triggerWhatsAppBooking}>
                  <div className={`${styles.concernIconWrap} ${styles.bgPregnancy}`}>
                    <svg viewBox="0 0 64 64" className={styles.concernIcon}>
                      <path d="M16 26 C12 22, 12 16, 16 16 C20 16, 22 20, 26 22 C30 23, 34 23, 38 22 C42 20, 44 16, 48 16 C52 16, 52 22, 48 26 C44 30, 38 34, 38 38 C38 42, 36 44, 32 44 C28 44, 26 42, 26 38 C26 34, 20 30, 16 26 Z" fill="none" stroke="#FF5C8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="20" r="3" fill="#00C2FF" />
                      <circle cx="52" cy="20" r="3" fill="#00C2FF" />
                      <path d="M32 32 C32 32, 29 36, 29 39 C29 41.5, 30.5 43, 32 43 C33.5 43, 35 41.5, 35 39 C35 36, 32 32, 32 32 Z" fill="#FF4B4B" />
                    </svg>
                  </div>
                  <h4>Period doubts or Pregnancy</h4>
                  <div className={styles.concernFee}>₹399 onwards</div>
                  <span className={styles.consultLink}>CONSULT NOW</span>
                </div>

                {/* Concern 2 */}
                <div className={styles.concernCard} onClick={triggerWhatsAppBooking}>
                  <div className={`${styles.concernIconWrap} ${styles.bgSkin}`}>
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
                  </div>
                  <h4>Acne, pimple or skin issues</h4>
                  <div className={styles.concernFee}>₹349 onwards</div>
                  <span className={styles.consultLink}>CONSULT NOW</span>
                </div>

                {/* Concern 3 */}
                <div className={styles.concernCard} onClick={triggerWhatsAppBooking}>
                  <div className={`${styles.concernIconWrap} ${styles.bgPerformance}`}>
                    <svg viewBox="0 0 64 64" className={styles.concernIcon}>
                      <circle cx="25" cy="38" r="8" fill="none" stroke="#FF5C8A" strokeWidth="2.5" />
                      <path d="M25 46 V54 M21 50 H29" stroke="#FF5C8A" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="39" cy="24" r="8" fill="none" stroke="#4D96FF" strokeWidth="2.5" />
                      <path d="M45 18 L52 11 M46 11 H52 V17" stroke="#4D96FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4>Performance issues in bed</h4>
                  <div className={styles.concernFee}>₹499 onwards</div>
                  <span className={styles.consultLink}>CONSULT NOW</span>
                </div>

                {/* Concern 4 */}
                <div className={styles.concernCard} onClick={triggerWhatsAppBooking}>
                  <div className={`${styles.concernIconWrap} ${styles.bgCold}`}>
                    <svg viewBox="0 0 64 64" className={styles.concernIcon}>
                      <path d="M42 46 C40 43, 38 40, 38 35 C38 32, 40 30, 42 28 C43.5 26.5, 43 23, 40 21 C37 19, 32 19, 29 22 C26 25, 26 28, 25 31 C24 34, 21 35, 21 35 L20 37 H26 L27 41 C28 43, 30 45, 33 45 C35 45, 37 46, 39 48 L42 46 Z" fill="none" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M14 30 C12 31, 10 33, 12 35 M16 35 C14 37, 13 39, 15 40 M11 37 C8 38, 7 40, 9 41" stroke="#FF7676" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <h4>Cold, cough or fever</h4>
                  <div className={styles.concernFee}>₹299 onwards</div>
                  <span className={styles.consultLink}>CONSULT NOW</span>
                </div>

                {/* Concern 5 */}
                <div className={styles.concernCard} onClick={triggerWhatsAppBooking}>
                  <div className={`${styles.concernIconWrap} ${styles.bgChild}`}>
                    <svg viewBox="0 0 64 64" className={styles.concernIcon}>
                      <circle cx="32" cy="30" r="12" fill="none" stroke="#2D3748" strokeWidth="2.5" />
                      <path d="M32 18 C32 14, 35 15, 35 15" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M27 28 Q28 29 29 28" stroke="#2D3748" strokeWidth="2" fill="none" />
                      <path d="M35 28 Q36 29 37 28" stroke="#2D3748" strokeWidth="2" fill="none" />
                      <path d="M29 36 Q32 33 35 36" stroke="#2D3748" strokeWidth="2" fill="none" />
                      <circle cx="25" cy="32" r="2" fill="#FFA3A3" />
                      <circle cx="39" cy="32" r="2" fill="#FFA3A3" />
                    </svg>
                  </div>
                  <h4>Child not feeling well</h4>
                  <div className={styles.concernFee}>₹399 onwards</div>
                  <span className={styles.consultLink}>CONSULT NOW</span>
                </div>

                {/* Concern 6 */}
                <div className={styles.concernCard} onClick={triggerWhatsAppBooking}>
                  <div className={`${styles.concernIconWrap} ${styles.bgMental}`}>
                    <svg viewBox="0 0 64 64" className={styles.concernIcon}>
                      <path d="M38 46 C36 43, 34 40, 34 35 C34 27, 39 24, 36 18 C33 12, 24 12, 21 18 C18 24, 21 28, 21 32 C21 35, 18 36, 18 36 L17 38 H23 L24 42 C25 44, 27 46, 30 46 C32 46, 34 48, 36 50 L38 46 Z" fill="none" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M18 16 C16 16, 15 18, 16 20 C14 20, 13 22, 15 24 C14 26, 16 28, 18 28 C20 28, 21 26, 21 24 C22 24, 23 22, 22 20 C22 18, 20 16, 18 16 Z" fill="#FFA3A3" opacity="0.6" stroke="#FF5C8A" strokeWidth="1.5" />
                      <path d="M17 20 H19 M18 19 V21" stroke="#FF4B4B" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h4>Depression or anxiety</h4>
                  <div className={styles.concernFee}>₹499 onwards</div>
                  <span className={styles.consultLink}>CONSULT NOW</span>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Main Content & Features Grid */}
      <section className={styles.contentSection}>
        <div className={`container ${styles.contentGrid}`}>
          
          {/* Left Column: What we provide */}
          <div className={styles.featuresColumn}>
            <h3 className={styles.sectionTitle}>What We Provide</h3>
            <p className={styles.sectionSubtext}>Every service is performed using meticulous medical procedures and compassionate protocols to foster rapid patient recovery.</p>
            
            <div className={styles.featuresList}>
              {service.features.map((feature, idx) => (
                <div key={idx} className={styles.featureItem} style={{ '--hover-color': service.themeColor }}>
                  <CheckCircle2 size={22} className={styles.featureIcon} style={{ color: service.themeColor }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Why Choose us bullet details */}
            <div className={styles.whyUsCard}>
              <h4 className={styles.whyUsTitle}>
                <Award size={18} />
                Clinical Safeguards
              </h4>
              <ul className={styles.whyUsList}>
                {service.whyUs.map((item, idx) => (
                  <li key={idx}>
                    <ArrowRight size={14} className={styles.bulletIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Hero Image Container (Moved below the fold) */}
          <div className={styles.heroImageWrapper}>
            <div className={styles.glowCardBorder}></div>
            <img src={service.image} alt={service.title} className={styles.heroImage} />
            <div className={styles.floatingIndicator} style={{ borderLeft: `4px solid ${service.themeColor}` }}>
              <ShieldCheck size={20} style={{ color: service.themeColor }} />
              <div>
                <strong>NABL Accredited</strong>
                <span>Certified Standard Partners</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
