import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/footerlogo.png';

const SplashScreen = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState("Caring for Your Health...");
  const navigate = useNavigate();

  useEffect(() => {
    // Transition elegant text
    const textTimer = setTimeout(() => {
      setLoadingText("Initializing Wellness...");
    }, 1200);

    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
      navigate('/');
    }, 2800); // 2.5 seconds active + 0.3 seconds fade-out transition buffer

    return () => {
      clearTimeout(textTimer);
      clearTimeout(completeTimer);
    };
  }, [navigate, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 bg-black z-[999999] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center justify-center max-w-md px-6 text-center">
        {/* Animated White Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, filter: "drop-shadow(0 0 0px rgba(255,255,255,0))" }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            filter: [
              "drop-shadow(0 0 10px rgba(255,255,255,0.05))",
              "drop-shadow(0 0 25px rgba(255,255,255,0.25))",
              "drop-shadow(0 0 15px rgba(255,255,255,0.1))"
            ]
          }}
          transition={{
            opacity: { duration: 1.2, ease: "easeOut" },
            scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            filter: { repeat: Infinity, duration: 3, ease: "easeInOut" }
          }}
          className="relative mb-12 flex justify-center"
        >
          {/* Subtle Outer Pulse Ring */}
          <div className="absolute inset-0 bg-white/5 rounded-full filter blur-xl scale-125 animate-pulse"></div>
          
          <img 
            src={logoImg} 
            alt="Suraksha Healthcare Logo" 
            className="h-20 md:h-24 w-auto object-contain select-none pointer-events-none brightness-100"
          />
        </motion.div>

        {/* Premium Loading Spinner */}
        <div className="relative w-12 h-12 mb-6 flex items-center justify-center">
          {/* Inner ring */}
          <div className="absolute w-10 h-10 border-2 border-white/10 rounded-full"></div>
          {/* Spinning segment */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="absolute w-10 h-10 border-2 border-transparent border-t-white border-r-white/30 rounded-full"
          ></motion.div>
        </div>

        {/* Elegant typography loading text */}
        <motion.p
          key={loadingText}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.8, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.4 }}
          className="text-white text-xs font-semibold tracking-[0.25em] uppercase select-none font-sans"
        >
          {loadingText}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
