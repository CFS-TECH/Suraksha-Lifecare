import Hero from '../../components/Hero/Hero';
import ServiceGrid from '../../components/ServiceGrid/ServiceGrid';
import PlansCarousel from '../../components/PlansCarousel/PlansCarousel';
import EquipmentRental from '../../components/EquipmentRental/EquipmentRental';
import ConcernsSlider from '../../components/ConcernsSlider/ConcernsSlider';

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      <PlansCarousel />
      <ServiceGrid />
      <ConcernsSlider />
      <EquipmentRental />
    </div>
  );
};

export default Home;
