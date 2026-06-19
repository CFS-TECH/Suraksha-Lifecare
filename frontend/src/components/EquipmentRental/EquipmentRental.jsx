import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, Bed, Accessibility, Wind, Gauge, Activity, X } from 'lucide-react';
import styles from './EquipmentRental.module.css';

const equipmentData = [
  {
    id: 1,
    title: "Hospital Bed",
    desc: "5-function motorized ICU bed with remote control, mattress, and sturdy safety side rails.",
    image: "/images/equipment/hospital_bed.png",
    price: "₹2,500/month",
    spec: "Motorized ICU Bed",
    themeColor: "#009A9F",
    badgeText: "Most Requested"
  },
  {
    id: 2,
    title: "Ergonomic Wheelchair",
    desc: "Lightweight, foldable wheelchair with adjustable footrests and premium padded seating.",
    image: "/images/equipment/wheelchair.png",
    price: "₹800/month",
    spec: "Foldable & Lightweight",
    themeColor: "#E28743",
    badgeText: "Highly Ergonomic"
  },
  {
    id: 3,
    title: "Oxygen Cylinder",
    desc: "High-capacity oxygen cylinder with regulator, humidifier bottle, mask, and mobile trolley.",
    image: "/images/equipment/oxygen_cylinder.png",
    price: "₹1,200/month",
    spec: "Complete Setup Kit",
    themeColor: "#0575E6",
    badgeText: "24/7 Supply"
  },
  {
    id: 4,
    title: "Oxygen Concentrator",
    desc: "High-purity 5L/10L continuous oxygen flow machine, portable and easy to operate at home.",
    image: "/images/equipment/oxygen_concentrator.png",
    price: "₹4,500/month",
    spec: "93% ± 3% Purity",
    themeColor: "#2ECC71",
    badgeText: "Clinically Certified"
  },
  {
    id: 5,
    title: "Patient Monitor",
    desc: "Multi-parameter patient vitals monitor displaying real-time ECG, SpO2, NIBP, and Temp.",
    image: "/images/equipment/patient_monitor.png",
    price: "₹3,000/month",
    spec: "Real-time vital tracking",
    themeColor: "#8B5CF6",
    badgeText: "ICU Grade"
  }
];

const renderEquipmentIcon = (id) => {
  switch(id) {
    case 1: return <Bed size={20} />;
    case 2: return <Accessibility size={20} />;
    case 3: return <Wind size={20} />;
    case 4: return <Gauge size={20} />;
    case 5: return <Activity size={20} />;
    default: return <Sparkles size={20} />;
  }
};

const EquipmentRental = () => {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
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
    const interval = setInterval(() => {
      scroll('right');
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRentClick = (id) => {
    navigate(`/rent-equipment/${id}`);
  };

  return (
    <section className={styles.section} id="equipment-rental">
      {/* Background patterns */}
      <div className={styles.gridOverlay}></div>
      <div className={styles.ambientLight1}></div>
      <div className={styles.ambientLight2}></div>

      <div className={styles.header}>
        <div className={styles.badgeContainer}>
          <span className={styles.sectionBadge}>
            <Sparkles size={14} className={styles.badgeIcon} />
            Premium Medical Devices
          </span>
        </div>
        <h2 className={styles.title}>Medical Equipment Rental</h2>
        <p className={styles.subtitle}>
          Hospital-grade medical equipment delivered, set up, and maintained right in the comfort of your home.
        </p>
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
          {equipmentData.map((item) => (
            <div 
              key={item.id} 
              className={styles.card}
              style={{ '--eq-theme-color': item.themeColor }}
              onClick={() => handleRentClick(item.id)}
            >
              <div className={styles.imageWrapper}>
                <div className={styles.imageOverlay}></div>
                <span className={styles.cardBadge}>{item.badgeText}</span>
                <div className={styles.iconPlate}>
                  {renderEquipmentIcon(item.id)}
                </div>
                <img src={item.image} alt={item.title} className={styles.cardImage} />
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                
                <div className={styles.cardMeta}>
                  <div className={styles.pricing}>
                    <span className={styles.priceLabel}>Rental Price</span>
                    <span className={styles.priceValue}>{item.price}</span>
                  </div>
                  <span className={styles.specLabel} style={{ backgroundColor: `${item.themeColor}10` }}>
                    {item.spec}
                  </span>
                </div>

                <div className={styles.cardFooter}>
                  <span>Rent Now</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default EquipmentRental;
