import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PlansHero from '../../components/PlansHero/PlansHero';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import CarePlans from '../../components/CarePlans/CarePlans';
import PlanBookingForm from '../../components/PlanBookingForm/PlanBookingForm';
import SingleTestimonial from '../../components/SingleTestimonial/SingleTestimonial';
import ConsultationCTA from '../../components/ConsultationCTA/ConsultationCTA';

const HomeCarePlans = () => {
  const location = useLocation();
  const [selectedPlan, setSelectedPlan] = useState('Senior Citizen Care Plan');

  useEffect(() => {
    if (location.state?.selectedPlan) {
      setSelectedPlan(location.state.selectedPlan);
      const element = document.getElementById('booking-form-section');
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location.state]);

  const handleChoosePlan = (planTitle) => {
    setSelectedPlan(planTitle);
    const element = document.getElementById('booking-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in">
      <PlansHero />
      <HowItWorks />
      <CarePlans onChoosePlan={handleChoosePlan} />
      <PlanBookingForm selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <SingleTestimonial />
      <ConsultationCTA />
    </div>
  );
};

export default HomeCarePlans;



