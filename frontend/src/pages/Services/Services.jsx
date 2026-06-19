import React from 'react';
import Hero from '../../components/Hero/Hero';
import ServiceGrid from '../../components/ServiceGrid/ServiceGrid';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import PlansCarousel from '../../components/PlansCarousel/PlansCarousel';
import EquipmentRental from '../../components/EquipmentRental/EquipmentRental';
import ConcernsSlider from '../../components/ConcernsSlider/ConcernsSlider';

const Services = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <PlansCarousel />
      <ServiceGrid />
      <ConcernsSlider />
      <EquipmentRental />
      <WhyChooseUs />
    </div>
  );
};

export default Services;