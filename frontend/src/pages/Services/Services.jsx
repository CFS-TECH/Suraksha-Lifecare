import React from 'react';
import Hero from '../../components/Hero/Hero';
import ServiceGrid from '../../components/ServiceGrid/ServiceGrid';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import PlansCarousel from '../../components/PlansCarousel/PlansCarousel';
import EquipmentRental from '../../components/EquipmentRental/EquipmentRental';
import ConcernsSlider from '../../components/ConcernsSlider/ConcernsSlider';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={`${styles.servicesLayout} animate-fade-in`}>
      <div className={styles.sectionHero}>
        <Hero />
      </div>
      <div className={styles.sectionPlans}>
        <PlansCarousel />
      </div>
      <div className={styles.sectionServices}>
        <ServiceGrid />
      </div>
      <div className={styles.sectionConcerns}>
        <ConcernsSlider />
      </div>
      <div className={styles.sectionEquipment}>
        <EquipmentRental />
      </div>
      <div className={styles.sectionWhyChooseUs}>
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Services;