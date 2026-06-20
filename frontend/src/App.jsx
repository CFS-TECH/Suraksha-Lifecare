import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppBooking from './components/WhatsAppBooking/WhatsAppBooking';
import Home from './pages/Home/Home';
import HomeCarePlans from './pages/HomeCarePlans/HomeCarePlans';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Career from './pages/Career/Career';
import About from './pages/About/About';
import FAQsPage from './pages/FAQs/FAQsPage';
import Blog from './pages/Blog/Blog';
import HomeVisits from './pages/HomeVisits/HomeVisits';
import RentEquipment from './pages/RentEquipment/RentEquipment';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import EnquiryPopup from './components/EnquiryPopup/EnquiryPopup';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen/SplashScreen';
import './App.css';



function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const splashShown = sessionStorage.getItem('splashShown');
    if (!splashShown) {
      setShowSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('splashShown', 'true');
  };

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Services />} />
            <Route path="/home" element={<Home />} />
            <Route path="/plans" element={<HomeCarePlans />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/home-visits" element={<HomeVisits />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/rent-equipment" element={<RentEquipment />} />
            <Route path="/rent-equipment/:equipmentId" element={<RentEquipment />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppBooking />
        <EnquiryPopup />
      </div>
    </Router>
  );
}

export default App;
