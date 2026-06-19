import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import styles from './ServiceGrid.module.css';
import BookingForm from '../BookingForm/BookingForm';
import { 
  HeartPulse, 
  Users, 
  Activity, 
  Stethoscope, 
  ShieldCheck, 
  Syringe, 
  Monitor,
  Microscope,
  Baby,
  Thermometer,
  HeartHandshake,
  Droplet,
  X,
  Send,
  ClipboardList
} from 'lucide-react';

const otherServices = [
  { id: 1, title: "Patient Care at Home", icon: <HeartHandshake size={26} />, desc: "Hospital-grade daily bedridden & recovery assistance.", color: "#1A4B6E" },
  { id: 2, title: "Nursing Care at Home", icon: <HeartPulse size={26} />, desc: "ICU critical care & clinical nursing at home.", color: "#009A9F" },
  { id: 3, title: "Physiotherapy at Home", icon: <Activity size={26} />, desc: "Neuro & ortho rehabilitation programs.", color: "#10B981" },
  { id: 5, title: "Elder Care at Home", icon: <Users size={26} />, desc: "Companion care & monitoring.", color: "#E28743" },
  { id: 6, title: "Doctor Visit at Home", icon: <Stethoscope size={26} />, desc: "Qualified home physicians.", color: "#009A9F" },
  { id: 7, title: "Recovery Care at Home", icon: <ShieldCheck size={26} />, desc: "Post-hospital transition support.", color: "#1A4B6E" },
  { id: 8, title: "Vaccination at Home", icon: <Syringe size={26} />, desc: "Safe home immunizations.", color: "#10B981" },
  { id: 9, title: "Lab Tests at Home", icon: <Microscope size={26} />, desc: "NABL certified collection.", color: "#8B5CF6" },
  { id: 10, title: "Mother & Baby Care at Home", icon: <Baby size={26} />, desc: "Postnatal specialized care.", color: "#EC4899" },
  { id: 11, title: "Equipment Rental at Home", icon: <Monitor size={26} />, desc: "Hospital-grade device rentals.", color: "#64748B" },
  { id: 12, title: "Wound Care at Home", icon: <Activity size={26} />, desc: "Professional dressing care.", color: "#EF4444" },
  { id: 13, title: "Foley Catheter at Home", icon: <HeartPulse size={26} />, desc: "Hygienic catheter care.", color: "#06B6D4" },
  { id: 14, title: "Enema Care at Home", icon: <Droplet size={26} />, desc: "Bowel relief & comfort care.", color: "#F59E0B" },
  { id: 15, title: "Injection at Home", icon: <Syringe size={26} />, desc: "Safe and timely injections.", color: "#D946EF" },
  { id: 16, title: "Ryles Tube Care at Home", icon: <Thermometer size={26} />, desc: "Feeding tube care & insertion.", color: "#84CC16" }
];

const serviceSlugMap = {
  "Patient Care at Home": "patient-care",
  "Nursing Care at Home": "nursing-care",
  "Physiotherapy at Home": "physiotherapy",
  "Elder Care at Home": "elder-care",
  "Doctor Visit at Home": "doctor-consultation",
  "Recovery Care at Home": "patient-care",
  "Vaccination at Home": "nursing-care",
  "Lab Tests at Home": "lab-tests",
  "Mother & Baby Care at Home": "mother-baby-care",
  "Equipment Rental at Home": "medical-equipment",
  "Wound Care at Home": "nursing-care",
  "Foley Catheter at Home": "nursing-care",
  "Enema Care at Home": "nursing-care",
  "Injection at Home": "nursing-care",
  "Ryles Tube Care at Home": "nursing-care"
};

const MedicalIcon = ({ id, className }) => {
  switch (id) {
    case 1: // Patient Care
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M6 42h52M10 42v10M54 42v10M10 24v18M54 30v12" />
          <rect x="10" y="32" width="44" height="6" rx="2" />
          <path d="M12 28h8a2 2 0 0 1 2 2v2h-10v-2a2 2 0 0 1 2-2z" />
          <circle cx="28" cy="22" r="4" />
          <path d="M22 32c0-4 3-6 6-6h4c3 0 4 2 4 6" />
          <path d="M48 10v22M44 10h8M45 14h6M48 14v6M46 20h4v4h-4z" />
          <path d="M48 24c-.5 2-1 3.5-1.5 5" strokeDasharray="2 2" />
          <path d="M26 10c-1.5-1.5-3.5-1.5-5 0s-1.5 3.5 0 5l5 5 5-5c1.5-1.5 1.5-3.5 0-5s-3.5-1.5-5 0z" strokeWidth="1" fill="currentColor" fillOpacity="0.08" />
        </svg>
      );
    case 2: // Nursing Care
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M8 32v22h48V32M4 34L32 10l28 24" />
          <path d="M24 24h16l2 8H22z" />
          <path d="M30 28h4M32 26v4" />
          <path d="M22 36c0 6 4 10 10 10s10-4 10-10M32 46v6" />
          <circle cx="32" cy="54" r="2" />
          <path d="M32 34c-1-1-2.5-1-3.5 0s-1 2.5 0 3.5l3.5 3.5 3.5-3.5c1-1 1-2.5 0-3.5s-2.5-1-3.5 0z" />
        </svg>
      );
    case 3: // Physiotherapy
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 48l16-16 20 8" />
          <circle cx="12" cy="48" r="3" fill="currentColor" />
          <circle cx="28" cy="32" r="4" fill="currentColor" />
          <circle cx="48" cy="40" r="3" fill="currentColor" />
          <path d="M28 20c3-3 8-3 11 0l3 3" />
          <path d="M44 26l-3-3m0 0h4m-4 0v4" />
          <path d="M24 12v4M18 15l3 3M34 15l-3 3" />
          <path d="M8 54h12l3-6 4 10 3-7 2 3h24" />
        </svg>
      );
    case 5: // Elder Care
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M10 36v18h44V36M6 38L32 16l26 22" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="26" cy="22" r="3" />
          <path d="M22 34c1-4 3-7 6-7h2c2 0 3 2 3 5v14M22 52h6M33 52h4" />
          <path d="M35 30v22M32 30h4" />
          <path d="M16 46c4 4 10 4 14 2l12-8c2-1 3-3 2-5s-3-2-5-1l-10 6" />
        </svg>
      );
    case 6: // Doctor Visit
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 52c0-8 6-12 16-12s16 4 16 12M32 40v12M24 40l8 6 8-6" />
          <circle cx="32" cy="26" r="6" />
          <path d="M28 25h8M29 25a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM39 25a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" strokeWidth="1" />
          <path d="M22 28v6c0 6 4 10 10 10s10-4 10-10v-6" />
          <path d="M48 18h6v6h-6zM51 16v10" strokeWidth="1" />
          <rect x="10" y="12" width="10" height="14" rx="1" />
          <path d="M12 10h6" />
        </svg>
      );
    case 7: // Recovery Care
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M32 8c12 0 20 4 20 4v22c0 12-8 20-20 22C20 56 12 48 12 34V12s8-4 20-4z" />
          <path d="M20 44c0-4 4-6 8-6h8c4 0 8 2 8 6M32 34c4 0 6-2 6-6s-2-6-6-6-6 2-6 6 2 6 6 6z" />
          <path d="M44 18l3-3M48 24h4M44 30l3 3" />
          <path d="M26 30l4 4 8-8" strokeWidth="2" stroke="#10B981" />
        </svg>
      );
    case 8: // Vaccination
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M18 46l24-24M38 18l8 8M34 26l4 4" />
          <rect x="22" y="26" width="8" height="20" rx="1" transform="rotate(-45 26 36)" />
          <path d="M12 52l6-6M10 50l4 4" />
          <path d="M42 22l6-6" />
          <circle cx="50" cy="12" r="1.5" fill="currentColor" />
          <path d="M40 38c6 0 10 4 10 10v4H30v-4c0-6 4-10 10-10z" strokeWidth="1" strokeDasharray="3 3" />
        </svg>
      );
    case 9: // Lab Tests
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 52h20M20 52V20c0-4 4-6 8-6h4" />
          <path d="M18 40h16M28 20v14M26 22h4" />
          <rect x="24" y="42" width="8" height="3" rx="1" />
          <path d="M44 14c4 4 4 10 0 14s-8 4-8 8" />
          <path d="M36 14c4 4 4 10 8 14s0 8-4 8" strokeDasharray="2 2" />
          <path d="M40 18h4M38 23h5M38 28h5" strokeWidth="1" />
        </svg>
      );
    case 10: // Mother & Baby Care
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="32" cy="18" r="5" />
          <path d="M24 38c0-8 6-12 12-12s10 4 10 10v16H24V38z" />
          <circle cx="28" cy="34" r="3.5" />
          <path d="M24 40c2 0 4 2 4 4v4h-8v-4c0-2 2-4 4-4z" />
          <path d="M32 32c-1.5-1.5-3.5-1.5-5 0s-1.5 3.5 0 5l5 5 5-5c1.5-1.5 1.5-3.5 0-5s-3.5-1.5-5 0z" strokeWidth="1" fill="currentColor" fillOpacity="0.08" />
        </svg>
      );
    case 11: // Equipment Rental
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="12" y="16" width="10" height="28" rx="5" />
          <path d="M17 12v4M14 16h6M17 24h3M17 32h3" />
          <circle cx="44" cy="42" r="10" />
          <circle cx="44" cy="42" r="6" strokeDasharray="3 3" />
          <path d="M36 24h10M40 24v14M36 32h12M38 52h8" />
        </svg>
      );
    case 12: // Wound Care
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="12" y="24" width="40" height="16" rx="8" transform="rotate(-45 32 32)" />
          <rect x="24" y="24" width="16" height="16" rx="2" transform="rotate(-45 32 32)" fill="currentColor" fillOpacity="0.08" />
          <path d="M32 28v8M28 32h8" />
          <circle cx="18" cy="22" r="1" fill="currentColor" />
          <circle cx="20" cy="20" r="1" fill="currentColor" />
          <circle cx="44" cy="44" r="1" fill="currentColor" />
          <circle cx="46" cy="42" r="1" fill="currentColor" />
        </svg>
      );
    case 13: // Foley Catheter
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="22" y="26" width="20" height="24" rx="4" />
          <path d="M26 26v-6M38 26v-6" />
          <path d="M32 10c0 4-6 6-6 10s6 4 6 8" />
          <path d="M26 32h4M26 38h6M26 44h4" />
          <path d="M32 16a2 2 0 0 0-2 2c0 2 2 4 2 4s2-2 2-4a2 2 0 0 0-2-2z" />
        </svg>
      );
    case 14: // Enema Care
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M32 20c-8 0-14 6-14 14s6 16 14 16 14-8 14-16-6-14-14-14z" />
          <path d="M32 20V8M30 8h4" />
          <path d="M32 4c-.5 1-1 2-1 3s.5 1 1 1 1-1 1-2-.5-1-1-2z" />
        </svg>
      );
    case 15: // Injection
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="24" y="20" width="8" height="24" rx="1" transform="rotate(45 28 32)" />
          <path d="M18 46l-6 6" />
          <path d="M38 26l8-8M42 18l4 4" />
          <path d="M28 28l-2 2M31 31l-2 2M34 34l-2 2" strokeWidth="1" />
          <path d="M12 54a1.5 1.5 0 0 0-1.5 1.5c0 1.5 1.5 2.5 1.5 2.5s1.5-1 1.5-2.5a1.5 1.5 0 0 0-1.5-1.5z" />
        </svg>
      );
    case 16: // Ryles Tube
      return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M20 12h8c2 0 4 2 4 4v4l6 6v4h-6v16" />
          <path d="M38 28c0 4-4 6-4 10v12c0 4 4 6 4 10" strokeWidth="1.8" />
          <rect x="34" y="14" width="8" height="10" rx="1" />
          <path d="M38 10v4" />
        </svg>
      );
    default:
      return null;
  }
};

const ServiceGrid = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleEnquiryClick = (e, serviceTitle) => {
    e.stopPropagation(); // Prevent card navigation
    setSelectedService(serviceTitle);
    setIsDrawerOpen(true);
  };

  return (
    <section className={styles.section} id="services">
      <div className={styles.bgElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>

      <div className="container">
        {/* Unified Services Header */}
        <div className={styles.header}>
          <span className={styles.topTitle}>Our Clinical Expertise</span>
          <h2 className={styles.title}>Home Healthcare Services</h2>
          <p className={styles.subtitle}>
            Premium hospital-grade clinical care and professional home support tailored for your recovery, safety, and well-being.
          </p>
        </div>

        {/* Services Grid Section */}
        <div className={styles.otherGrid}>
          {otherServices.map((service) => {
            const slug = serviceSlugMap[service.title] || 'patient-care';
            return (
              <div 
                key={service.id} 
                className={styles.otherCard}
                style={{ '--card-theme-color': service.color }}
                onClick={() => navigate(`/services/${slug}`)}
              >
                <div className={styles.cardIconCircle}>
                  <MedicalIcon id={service.id} className={styles.cardIcon} />
                </div>
                <h4 className={styles.cardTitle}>{service.title}</h4>
                <button 
                  className={styles.enquireBtn} 
                  onClick={(e) => handleEnquiryClick(e, service.title)}
                  aria-label={`Enquire about ${service.title}`}
                >
                  Enquire Now
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide-out Enquiry Drawer (Rendered via Portal to avoid stacking context issues) */}
      {createPortal(
        <div 
          className={`${styles.drawerBackdrop} ${isDrawerOpen ? styles.drawerOpen : ''}`} 
          onClick={closeDrawer}
        >
          <div className={styles.drawerPanel} onClick={(e) => e.stopPropagation()}>
            <button className={styles.drawerCloseBtn} onClick={closeDrawer} aria-label="Close Enquiry Form">
              <X size={20} />
            </button>
            
            <BookingForm serviceName={selectedService} onSuccess={closeDrawer} isCard={false} />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default ServiceGrid;


