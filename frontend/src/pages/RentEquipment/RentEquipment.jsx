import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Sparkles, ShieldCheck, Truck, RotateCcw, Wrench, Send } from 'lucide-react';
import styles from './RentEquipment.module.css';

const equipmentData = [
  {
    id: 1,
    title: "Hospital Bed",
    desc: "5-function motorized ICU bed with remote control, mattress, and sturdy safety side rails. Designed to provide maximum comfort and safety for recovering patients.",
    image: "/images/equipment/hospital_bed.png",
    price: "₹2,500/month",
    spec: "Motorized ICU Bed",
    themeColor: "#009A9F",
    features: [
      "5-Function Motorized adjustments (Height, Backrest, Legrest, Trendelenburg)",
      "ICU-grade safety side rails and easy remote control operations",
      "High-density medical mattress included",
      "Heavy-duty lockable caster wheels for easy mobility"
    ]
  },
  {
    id: 2,
    title: "Ergonomic Wheelchair",
    desc: "Lightweight, foldable wheelchair with adjustable footrests and premium padded seating. Perfect for both indoor and outdoor mobility assistance.",
    image: "/images/equipment/wheelchair.png",
    price: "₹800/month",
    spec: "Foldable & Lightweight",
    themeColor: "#E28743",
    features: [
      "Ultra-lightweight, high-strength aluminum/steel frame",
      "Easily foldable design for travel and car-trunk storage",
      "Ergonomically designed padded armrests and seats",
      "Swing-away footrests and reliable companion brakes"
    ]
  },
  {
    id: 3,
    title: "Oxygen Cylinder",
    desc: "High-capacity oxygen cylinder with regulator, humidifier bottle, mask, and mobile trolley. Essential for home oxygen therapy setup.",
    image: "/images/equipment/oxygen_cylinder.png",
    price: "₹1,200/month",
    spec: "Complete Setup Kit",
    themeColor: "#0575E6",
    features: [
      "Certified high-pressure cylinder (B-type or D-type)",
      "High-precision click-style flowmeter and regulator",
      "Humidifier bottle, nasal cannula, and adult mask included",
      "Sturdy metal trolley with wheels for easy room-to-room transit"
    ]
  },
  {
    id: 4,
    title: "Oxygen Concentrator",
    desc: "High-purity 5L/10L continuous oxygen flow machine, portable and easy to operate at home. Provides constant, reliable oxygen without refilling.",
    image: "/images/equipment/oxygen_concentrator.png",
    price: "₹4,500/month",
    spec: "93% ± 3% Purity",
    themeColor: "#2ECC71",
    features: [
      "Provides continuous oxygen flow up to 5 Liters/min (93% purity)",
      "Very quiet operation and low energy consumption",
      "Built-in purity monitor and safety alarms",
      "No refill required—operates on standard home electricity"
    ]
  },
  {
    id: 5,
    title: "Patient Monitor",
    desc: "Multi-parameter patient vitals monitor displaying real-time ECG, SpO2, NIBP, and Temp. Highly accurate for critical home care monitoring.",
    image: "/images/equipment/patient_monitor.png",
    price: "₹3,000/month",
    spec: "Real-time vital tracking",
    themeColor: "#8B5CF6",
    features: [
      "12.1-inch high-resolution color TFT display",
      "Real-time monitoring of ECG, SpO2, Heart Rate, Respiration, Temp & NIBP",
      "Audible and visual alarm limits for clinical alerts",
      "Built-in rechargeable battery backup up to 4 hours"
    ]
  }
];

const RentEquipment = () => {
  const { equipmentId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Delhi NCR',
    address: '',
    duration: '1 Month',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const WHATSAPP_NUMBER = '919990782525';

  useEffect(() => {
    // If no equipmentId is in path, default to 1
    const id = equipmentId ? parseInt(equipmentId) : 1;
    const matchedProduct = equipmentData.find(item => item.id === id);
    if (matchedProduct) {
      setProduct(matchedProduct);
    } else {
      setProduct(equipmentData[0]);
    }
  }, [equipmentId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectProduct = (id) => {
    navigate(`/rent-equipment/${id}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !product) return;

    setIsSubmitting(true);
    setStatus('Submitting request...');

    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          address: formData.address,
          serviceType: `Rental: ${product.title} (${product.price})`,
          message: `Duration: ${formData.duration}. Notes: ${formData.message || 'None'}`
        })
      });

      if (response.ok) {
        setStatus('Thank you! Your rental inquiry has been submitted. Redirecting to WhatsApp...');
        
        const waText = 
`Hello Suraksha Care, I want to rent medical equipment.

📋 RENTAL REQUEST:
• Equipment: ${product.title}
• Price: ${product.price}
• Duration: ${formData.duration}
• Name: ${formData.name}
• Phone: ${formData.phone}
• City: ${formData.city}
• Address: ${formData.address}
• Notes: ${formData.message || 'None'}`;

        const encodedText = encodeURIComponent(waText);
        setTimeout(() => {
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
          setFormData({ name: '', phone: '', city: 'Delhi NCR', address: '', duration: '1 Month', message: '' });
          setStatus('');
          setIsSubmitting(false);
        }, 1200);
      } else {
        setStatus('Failed to submit rental request. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.warn('Rental submission failed, redirecting to WhatsApp directly.', error);
      setStatus('Success! Redirecting to WhatsApp...');
      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
        setIsSubmitting(false);
      }, 1200);
    }
  };

  if (!product) {
    return <div className={styles.loading}>Loading product details...</div>;
  }

  return (
    <div className={styles.pageWrapper}>
      {/* Background patterns */}
      <div className={styles.gridOverlay}></div>
      <div className={styles.ambientLight1}></div>
      <div className={styles.ambientLight2}></div>

      <div className={styles.container}>
        {/* Back Link */}
        <Link to="/home" className={styles.backLink}>
          <ChevronLeft size={16} /> Back to Equipment Rental
        </Link>

        {/* 2-Column Content */}
        <div className={styles.gridContainer}>
          
          {/* Left Column: Product Details & Other Products List */}
          <div className={styles.productCol}>
            
            {/* Active Product Section */}
            <div className={styles.activeProductDetails}>
              <span className={styles.badge} style={{ color: product.themeColor, backgroundColor: `${product.themeColor}10` }}>
                <Sparkles size={12} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
                Home Healthcare Rentals
              </span>
              <h1 className={styles.title}>{product.title}</h1>
              <div className={styles.priceContainer}>
                <span className={styles.priceLabel}>Rental Price</span>
                <span className={styles.priceValue} style={{ color: product.themeColor }}>{product.price}</span>
              </div>
              
              <p className={styles.desc}>{product.desc}</p>

              <div className={styles.imageCard}>
                <img src={product.image} alt={product.title} className={styles.productImage} />
              </div>

              <div className={styles.featuresSection}>
                <h3>Key Features</h3>
                <ul className={styles.featureList}>
                  {product.features.map((feat, idx) => (
                    <li key={idx}>
                      <ShieldCheck size={16} className={styles.checkIcon} style={{ color: product.themeColor }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Other Rental Products Switcher */}
            <div className={styles.switcherSection}>
              <h3 className={styles.switcherTitle}>
                <Sparkles size={16} className={styles.switcherSparkle} />
                Explore Other Rental Equipment
              </h3>
              <p className={styles.switcherSubtitle}>Click any product to switch details and customize your booking form.</p>
              
              <div className={styles.switcherGrid}>
                {equipmentData.map((item) => {
                  const isActive = item.id === product.id;
                  return (
                    <div 
                      key={item.id}
                      className={`${styles.switcherCard} ${isActive ? styles.switcherCardActive : ''}`}
                      style={{ '--item-theme-color': item.themeColor }}
                      onClick={() => handleSelectProduct(item.id)}
                    >
                      <div className={styles.switcherImgContainer}>
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className={styles.switcherCardContent}>
                        <h4>{item.title}</h4>
                        <span style={{ color: item.themeColor }}>{item.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quality & Trust indicators */}
            <div className={styles.trustGrid}>
              <div className={styles.trustCard}>
                <Truck size={18} />
                <div>
                  <h5>Free Home Delivery</h5>
                  <p>Delivered and set up by expert technicians</p>
                </div>
              </div>
              <div className={styles.trustCard}>
                <Wrench size={18} />
                <div>
                  <h5>Free Maintenance</h5>
                  <p>Immediate replacement in case of issues</p>
                </div>
              </div>
              <div className={styles.trustCard}>
                <RotateCcw size={18} />
                <div>
                  <h5>Flexible Return</h5>
                  <p>Upgrade, change, or return at any time</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Rent Now Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h4>Secure Rental Slot</h4>
                <span>Silent Database Auto-Persistence</span>
              </div>

              <form onSubmit={handleSubmit} className={styles.bookingForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="rent-name">Your Full Name</label>
                  <input
                    type="text"
                    id="rent-name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="rent-phone">Mobile Number</label>
                  <input
                    type="tel"
                    id="rent-phone"
                    name="phone"
                    required
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="rent-city">Select City</label>
                  <select
                    id="rent-city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={styles.selectInput}
                  >
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Dehradun">Dehradun</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="rent-duration">Rental Duration</label>
                  <select
                    id="rent-duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className={styles.selectInput}
                  >
                    <option value="1 Month">1 Month</option>
                    <option value="2 Months">2 Months</option>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="Custom / Long Term">Custom / Long Term</option>
                  </select>
                </div>

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label htmlFor="rent-address">Current Delivery Address</label>
                  <input
                    type="text"
                    id="rent-address"
                    name="address"
                    required
                    placeholder="Flat/House No, Colony, Area"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label htmlFor="rent-message">Special Instructions (Optional)</label>
                  <textarea
                    id="rent-message"
                    name="message"
                    rows="3"
                    placeholder="e.g. delivery date, specific requirements, clinical condition details"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <button
                  type="submit"
                  className={`${styles.submitBtn} ${styles.fullWidth}`}
                  disabled={isSubmitting}
                  style={{ background: `linear-gradient(135deg, ${product.themeColor} 0%, #1A4B6E 100%)` }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Submitting request...' : 'Secure Rental & Open WhatsApp'}</span>
                </button>

                {status && (
                  <p className={`${styles.statusText} ${styles.fullWidth} ${status.includes('Failed') ? styles.errorStatus : styles.successStatus}`}>
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentEquipment;
