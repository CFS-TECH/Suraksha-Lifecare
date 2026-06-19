import React, { useState } from 'react';
import BookingForm from '../../components/BookingForm/BookingForm';
import { 
  Phone, 
  CheckCircle2, 
  Stethoscope, 
  Syringe, 
  FlaskConical, 
  Dumbbell,
  Droplets,
  Pill,
  HeartPulse,
  UserCheck,
  ClipboardList,
  Home,
  ArrowRight,
  Shield,
  Clock,
  Star,
  Activity,
  Send,
  ShieldCheck,
  Video,
  FileText,
  Microscope,
  BadgeCheck
} from 'lucide-react';
import styles from './HomeVisits.module.css';

const WHATSAPP_NUMBER = '919990782525';
const PHONE_NUMBER = '+919990782525';

const services = [
  {
    id: 1,
    icon: <Stethoscope size={28} />,
    title: 'Doctor Visit at Home',
    desc: 'Consult with qualified doctors without traveling to a clinic or hospital.',
  },
  {
    id: 2,
    icon: <HeartPulse size={28} />,
    title: 'Nurse Visit at Home',
    desc: 'Professional nursing support for medication administration, monitoring, and patient care.',
  },
  {
    id: 3,
    icon: <Syringe size={28} />,
    title: 'Injection & IV Administration',
    desc: 'Safe administration of prescribed injections and IV therapies at home.',
  },
  {
    id: 4,
    icon: <Shield size={28} />,
    title: 'Wound Dressing & Care',
    desc: 'Professional wound management and dressing changes.',
  },
  {
    id: 5,
    icon: <FlaskConical size={28} />,
    title: 'Lab Sample Collection',
    desc: 'Convenient blood and diagnostic sample collection from your home.',
  },
  {
    id: 6,
    icon: <Dumbbell size={28} />,
    title: 'Physiotherapy at Home',
    desc: 'Personalized rehabilitation and mobility support sessions.',
  },
  {
    id: 7,
    icon: <Activity size={28} />,
    title: 'Foley Catheter Care',
    desc: 'Catheter insertion, replacement, and maintenance by trained professionals.',
  },
  {
    id: 8,
    icon: <Droplets size={28} />,
    title: 'Enema Services',
    desc: 'Safe and hygienic enema procedures at home.',
  },
  {
    id: 9,
    icon: <Pill size={28} />,
    title: 'Medication Support',
    desc: 'Assistance with prescribed medication schedules and monitoring.',
  },
];

const whatWeProvide = [
  { 
    icon: <CheckCircle2 size={20} />, 
    text: 'Thorough clinical diagnosis & bedside consults',
    textMobile: 'Clinical diagnosis & consults'
  },
  { 
    icon: <CheckCircle2 size={20} />, 
    text: 'Chronic illness long-term tracking & treatment plans',
    textMobile: 'Chronic illness tracking'
  },
  { 
    icon: <CheckCircle2 size={20} />, 
    text: 'Post-discharge physical reviews & recovery audits',
    textMobile: 'Post-discharge reviews'
  },
  { 
    icon: <CheckCircle2 size={20} />, 
    text: 'Home diagnostic test recommendations',
    textMobile: 'Home diagnostic tests'
  },
  { 
    icon: <CheckCircle2 size={20} />, 
    text: 'Online primary audio/video consultations',
    textMobile: 'Online consultations'
  },
  { 
    icon: <CheckCircle2 size={20} />, 
    text: 'Prescription chart compilation & adjustments',
    textMobile: 'Prescription adjustments'
  },
];

const clinicalSafeguards = [
  'Fully registered General Practitioners (MD/MBBS) with active clinical backgrounds.',
  'Maintains detailed patient medical logs shared with your permanent specialist.',
  'Ample bedside consulting time with zero pressure or rushed checks.',
];

const whyChoose = [
  'No Travel Required',
  'Reduced Waiting Time',
  'Comfortable Home Environment',
  'Personalized Attention',
  'Professional Healthcare Staff',
];

const steps = [
  {
    num: '01',
    title: 'Request a Visit',
    desc: 'Book online or call us.',
    icon: <ClipboardList size={24} />,
  },
  {
    num: '02',
    title: 'Professional Assigned',
    desc: 'A qualified healthcare professional is scheduled.',
    icon: <UserCheck size={24} />,
  },
  {
    num: '03',
    title: 'Home Visit',
    desc: 'The service is delivered at your doorstep.',
    icon: <Home size={24} />,
  },
  {
    num: '04',
    title: 'Ongoing Support',
    desc: 'Receive follow-up guidance and care recommendations.',
    icon: <HeartPulse size={24} />,
  },
];

const conditions = [
  'Post-Surgery Recovery',
  'Elderly Care Needs',
  'Mobility Challenges',
  'Chronic Illness Management',
  'Temporary Medical Assistance',
];

const HomeVisits = () => {
  const handleBooking = () => {
    window.dispatchEvent(new CustomEvent('open-whatsapp-booking', { detail: { service: 'Doctor Visit at Home' } }));
  };

  const handleCall = () => {
    window.open(`tel:${PHONE_NUMBER}`, '_self');
  };

  return (
    <div className="animate-fade-in">
      {/* ===== HERO SECTION WITH FORM ===== */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left: Hero Text */}
            <div className={styles.heroContent}>
              <span className={styles.heroBadge}>
                <Star size={14} />
                Trusted Home Healthcare
              </span>
              <h1 className={styles.heroTitle}>
                Healthcare at Your <span className={styles.highlight}>Doorstep</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Get professional medical assistance in the comfort and safety of your home.
              </p>
              <div className={styles.heroCtas}>
                <button className={styles.primaryBtn} onClick={handleBooking}>
                  <svg viewBox="0 0 24 24" className={styles.waIcon} fill="currentColor">
                    <path d="M12.031 6c-3.314 0-6 2.686-6 6 0 1.037.263 2.012.724 2.86l-.772 2.82 2.887-.757a5.97 5.97 0 002.868.732c3.314 0 6-2.686 6-6s-2.686-6-6-6zM9.822 9.006c.162 0 .324.015.462.298.138.283.473 1.154.514 1.236.041.082.069.179.014.289-.055.11-.083.179-.166.275-.083.096-.174.215-.248.289-.083.082-.17.172-.073.338.097.165.429.708.92 1.144.63.56 1.162.735 1.328.818.165.083.262.069.359-.041.097-.11.414-.482.524-.647.11-.165.22-.138.373-.083.152.055.966.455 1.132.538.165.083.276.124.317.193.041.069.041.4-.124.868-.166.468-.813.868-1.118.896-.303.028-.593-.083-1.849-.578-1.503-.593-2.463-2.124-2.538-2.227-.076-.103-.607-.807-.607-1.537 0-.73.386-1.089.524-1.24.138-.152.303-.193.414-.193z" />
                    <path d="M12.004 2C6.48 2 2 6.48 2 12a9.94 9.94 0 001.7 5.5L2 22l4.67-1.23a9.92 9.92 0 005.33 1.53c5.52 0 10-4.48 10-10S17.52 2 12.004 2zm.027 18.03c-1.59 0-3.14-.42-4.51-1.22l-.32-.19-3.35.88.9-3.27-.21-.33a8.03 8.03 0 01-1.22-4.14c0-4.43 3.61-8.04 8.04-8.04 4.43 0 8.04 3.61 8.04 8.04-.01 4.43-3.62 8.04-8.05 8.04z" />
                  </svg>
                  Book a Home Visit
                </button>
                <button className={styles.secondaryBtn} onClick={handleCall}>
                  <Phone size={18} />
                  Call Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className={styles.trustRow}>
                <div className={styles.trustBadge}>
                  <ShieldCheck size={16} />
                  <span>Verified Professionals</span>
                </div>
                <div className={styles.trustBadge}>
                  <Clock size={16} />
                  <span>24/7 Available</span>
                </div>
                <div className={styles.trustBadge}>
                  <BadgeCheck size={16} />
                  <span>NABL Accredited</span>
                </div>
              </div>
            </div>
            {/* Right: Booking Form */}
            <div className={styles.formColumn}>
              <BookingForm serviceName="Doctor Visit at Home" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Home Visit Services</span>
            <h2 className={styles.sectionTitle}>Services Available for Home Visits</h2>
            <p className={styles.sectionSub}>
              Comprehensive healthcare services delivered right to your doorstep by certified professionals.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((svc) => (
              <div key={svc.id} className={styles.serviceCard}>
                <div className={styles.serviceIconWrap}>
                  {svc.icon}
                </div>
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceTitle}>{svc.title}</h3>
                  <p className={styles.serviceDesc}>{svc.desc}</p>
                </div>
                <button className={styles.serviceEnquire} onClick={handleBooking}>
                  Enquire <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE HOME VISITS ===== */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <span className={styles.sectionTag}>Benefits</span>
              <h2 className={styles.sectionTitle}>Why Choose Home Visits?</h2>
              <p className={styles.whyText}>
                Home visits eliminate the stress of hospital trips and provide a healing environment where patients feel most comfortable.
              </p>
              <ul className={styles.whyList}>
                {whyChoose.map((item, idx) => (
                  <li key={idx} className={styles.whyItem}>
                    <CheckCircle2 size={20} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.statsList}>
              <div className={styles.statItemRow}>
                <span className={styles.statNumBig}>10,000+</span>
                <span className={styles.statLabelText}>Home Visits Completed</span>
              </div>
              <div className={styles.statItemRow}>
                <span className={styles.statNumBig}>98%</span>
                <span className={styles.statLabelText}>Patient Satisfaction</span>
              </div>
              <div className={styles.statItemRow}>
                <span className={styles.statNumBig}>500+</span>
                <span className={styles.statLabelText}>Verified Professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className={styles.stepsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Process</span>
            <h2 className={styles.sectionTitle}>How It Works</h2>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step, idx) => (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepIconWrap}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONDITIONS WE SUPPORT ===== */}
      <section className={styles.conditionsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Conditions</span>
            <h2 className={styles.sectionTitle}>Common Conditions We Support</h2>
          </div>

          <div className={styles.conditionsGrid}>
            {conditions.map((cond, idx) => (
              <div key={idx} className={styles.conditionChip}>
                <CheckCircle2 size={18} className={styles.condCheckIcon} />
                <span>{cond}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className={styles.finalCtaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Need a Healthcare Professional to Visit Your Home?
              </h2>
              <p className={styles.ctaDesc}>
                Our experienced team is ready to provide safe, compassionate, and reliable care.
              </p>
              <div className={styles.ctaButtons}>
                <button className={styles.ctaPrimary} onClick={handleBooking}>
                  <svg viewBox="0 0 24 24" className={styles.waIcon} fill="currentColor">
                    <path d="M12.031 6c-3.314 0-6 2.686-6 6 0 1.037.263 2.012.724 2.86l-.772 2.82 2.887-.757a5.97 5.97 0 002.868.732c3.314 0 6-2.686 6-6s-2.686-6-6-6zM9.822 9.006c.162 0 .324.015.462.298.138.283.473 1.154.514 1.236.041.082.069.179.014.289-.055.11-.083.179-.166.275-.083.096-.174.215-.248.289-.083.082-.17.172-.073.338.097.165.429.708.92 1.144.63.56 1.162.735 1.328.818.165.083.262.069.359-.041.097-.11.414-.482.524-.647.11-.165.22-.138.373-.083.152.055.966.455 1.132.538.165.083.276.124.317.193.041.069.041.4-.124.868-.166.468-.813.868-1.118.896-.303.028-.593-.083-1.849-.578-1.503-.593-2.463-2.124-2.538-2.227-.076-.103-.607-.807-.607-1.537 0-.73.386-1.089.524-1.24.138-.152.303-.193.414-.193z" />
                    <path d="M12.004 2C6.48 2 2 6.48 2 12a9.94 9.94 0 001.7 5.5L2 22l4.67-1.23a9.92 9.92 0 005.33 1.53c5.52 0 10-4.48 10-10S17.52 2 12.004 2zm.027 18.03c-1.59 0-3.14-.42-4.51-1.22l-.32-.19-3.35.88.9-3.27-.21-.33a8.03 8.03 0 01-1.22-4.14c0-4.43 3.61-8.04 8.04-8.04 4.43 0 8.04 3.61 8.04 8.04-.01 4.43-3.62 8.04-8.05 8.04z" />
                  </svg>
                  Book a Home Visit Today
                </button>
                <button className={styles.ctaSecondary} onClick={handleCall}>
                  <Phone size={18} />
                  Call Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeVisits;
