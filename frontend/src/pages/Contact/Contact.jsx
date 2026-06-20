import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock, Send, ShieldCheck } from 'lucide-react';
import { API_URL } from '../../config';
import styles from './Contact.module.css';

const WHATSAPP_NUMBER = '919990782525';
const PHONE_NUMBER = '+919990782525';

const serviceOptions = [
  'Patient Care at Home',
  'Nursing Care at Home',
  'Physiotherapy at Home',
  'Elder Care at Home',
  'Doctor Visit at Home',
  'Lab Tests at Home',
  'Equipment Rental at Home',
  'Mother & Baby Care at Home',
  'Other'
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', serviceType: '', city: 'Delhi NCR', address: '', message: '' });
  const [customService, setCustomService] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalService = formData.serviceType === 'Other' ? customService : formData.serviceType;
    if (!formData.name || !formData.phone || !formData.address || !finalService) {
      setStatus('error');
      return;
    }
    
    setStatus('Submitting...');
    try {
      const response = await fetch(`${API_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          serviceType: finalService,
          address: formData.address,
          message: formData.message || 'Inquiry from Contact Us page.'
        })
      });
      if (response.ok) {
        setStatus('success');
        
        // WhatsApp Redirect
        const waText = 
`Hello Suraksha Care, I want to submit a query.

📋 INQUIRY DETAILS:
• Name: ${formData.name}
• Phone: ${formData.phone}
• City: ${formData.city}
• Address: ${formData.address}
• Service: ${finalService}
• Message: ${formData.message || 'N/A'}`;
        const encodedText = encodeURIComponent(waText);
        setTimeout(() => {
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
          setFormData({ name: '', phone: '', serviceType: '', city: 'Delhi NCR', address: '', message: '' });
          setCustomService('');
          setStatus('');
        }, 1200);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleCall = () => {
    window.open(`tel:${PHONE_NUMBER}`, '_self');
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Background Glows */}
      <div className={styles.bgGlows}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.topBadge}>
            <ShieldCheck size={14} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
            24/7 Clinical Support
          </span>
          <h1 className={styles.title}>Contact Our Care Team</h1>
          <p className={styles.subtitle}>
            Have questions about home nursing, patient recovery, or doctor consults? Get in touch with us for immediate assistance.
          </p>
        </div>

        {/* Main Grid */}
        <div className={styles.contactGrid}>
          {/* Left: Contact Info */}
          <div className={styles.infoSidebar}>
            <div className={styles.sidebarHeader}>
              <h3>Connect Instantly</h3>
              <p>Choose your preferred way to connect with our care coordinators.</p>
            </div>

            <div className={styles.infoCards}>
              {/* Card 1: Phone */}
              <div className={styles.infoCard} onClick={handleCall}>
                <div className={styles.cardIconWrap}>
                  <PhoneCall size={20} />
                </div>
                <div className={styles.cardDetails}>
                  <h4>Call Our Helpline</h4>
                  <p className={styles.cardLink}>+91 99907 82525</p>
                  <span>Click to call instantly</span>
                </div>
              </div>

              {/* Card 2: Email */}
              <a href="mailto:support@surakshalifecare.com" className={styles.infoCard}>
                <div className={`${styles.cardIconWrap} ${styles.iconEmail}`}>
                  <Mail size={20} />
                </div>
                <div className={styles.cardDetails}>
                  <h4>Email Support</h4>
                  <p className={styles.cardLink}>support@surakshalifecare.com</p>
                  <span>Send us your clinical reports</span>
                </div>
              </a>

              {/* Card 3: Location */}
              <div className={styles.infoCard}>
                <div className={`${styles.cardIconWrap} ${styles.iconPin}`}>
                  <MapPin size={20} />
                </div>
                <div className={styles.cardDetails}>
                  <h4>Our Care Office</h4>
                  <p>Malviya Nagar, B-20</p>
                  <span>Coordinating care across regions</span>
                </div>
              </div>

              {/* Card 4: Hours */}
              <div className={styles.infoCard}>
                <div className={`${styles.cardIconWrap} ${styles.iconClock}`}>
                  <Clock size={20} />
                </div>
                <div className={styles.cardDetails}>
                  <h4>Operating Hours</h4>
                  <p>24/7 Emergency Helpline</p>
                  <span>Always available for your safety</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={styles.formContainer}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Book a Home Service</h3>
              <p className={styles.formSubtitle}>Fill the form below and we will call you back within 15 minutes.</p>

              <form onSubmit={handleSubmit} className={styles.bookingForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="c-name">Full Name</label>
                  <input 
                    type="text" 
                    id="c-name" 
                    required 
                    placeholder="Enter your name"
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="c-phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="c-phone" 
                    required 
                    placeholder="Enter your mobile number"
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="c-city">City</label>
                  <select 
                    id="c-city"
                    value={formData.city} 
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                  >
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Dehradun">Dehradun</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="c-address">Current Address</label>
                  <input
                    type="text"
                    id="c-address"
                    required
                    placeholder="Flat/House No, Colony, Area"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="c-service">Required Service</label>
                  <select 
                    id="c-service"
                    value={formData.serviceType} 
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  >
                    <option value="">Select service...</option>
                    {serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {formData.serviceType === 'Other' && (
                  <div className={styles.inputGroup}>
                    <label htmlFor="c-custom-service">Specify Service</label>
                    <input
                      type="text"
                      id="c-custom-service"
                      required
                      placeholder="Enter your required service"
                      value={customService}
                      onChange={(e) => setCustomService(e.target.value)}
                    />
                  </div>
                )}

                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                  <label htmlFor="c-message">Additional Notes (Optional)</label>
                  <textarea 
                    id="c-message" 
                    rows="3" 
                    placeholder="Any specific medical requirements or details..."
                    value={formData.message} 
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className={`${styles.submitBtn} ${styles.fullWidth}`}>
                  <Send size={16} />
                  <span>Submit Inquiry</span>
                </button>

                {status === 'Submitting...' && (
                  <p className={`${styles.submittingMsg} ${styles.fullWidth}`}>Submitting request...</p>
                )}
                {status === 'success' && (
                  <p className={`${styles.successMsg} ${styles.fullWidth}`}>✅ Submitted! Redirecting to WhatsApp...</p>
                )}
                {status === 'error' && (
                  <p className={`${styles.errorMsg} ${styles.fullWidth}`}>❌ Failed to submit. Redirecting to WhatsApp...</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
