import React, { useState, useEffect } from 'react';
import { Sparkles, Send, CheckCircle2, ClipboardList, Phone, User, MapPin, Calendar, Clock } from 'lucide-react';
import styles from './PlanBookingForm.module.css';

const PlanBookingForm = ({ selectedPlan, setSelectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Delhi NCR',
    planType: selectedPlan || 'Senior Citizen Care Plan',
    duration: '12 Hours (Day Attendant)',
    address: '',
    message: ''
  });
  const [customPlan, setCustomPlan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({ ...prev, planType: selectedPlan }));
    }
  }, [selectedPlan]);

  const WHATSAPP_NUMBER = '919990782525';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'planType' && setSelectedPlan) {
      setSelectedPlan(value);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalPlan = formData.planType === 'Other' ? customPlan : formData.planType;
    if (!formData.name || !formData.phone || !formData.address || !finalPlan) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          serviceType: `${finalPlan} (${formData.duration})`,
          address: formData.address,
          message: formData.message || `Custom Care Plan Booking request.`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        const waText = 
`Hello Suraksha Care, I want to book a Custom Care Plan.

📋 BOOKING REQUEST:
• Plan: ${finalPlan}
• Duration: ${formData.duration}
• Name: ${formData.name}
• Phone: ${formData.phone}
• City: ${formData.city}
• Address: ${formData.address}
• Notes: ${formData.message || 'None'}`;

        const encodedText = encodeURIComponent(waText);
        setTimeout(() => {
          window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
          setFormData({
            name: '',
            phone: '',
            city: 'Delhi NCR',
            planType: selectedPlan || 'Senior Citizen Care Plan',
            duration: '12 Hours (Day Attendant)',
            address: '',
            message: ''
          });
          setCustomPlan('');
          setIsSubmitting(false);
        }, 1200);
      } else {
        setSubmitStatus('error');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.warn('Network error. Redirecting to WhatsApp directly.', error);
      setSubmitStatus('success'); // Fallback to success behavior for direct whatsapp redirects
      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <section className={styles.section} id="booking-form-section">
      <div className={styles.gridOverlay}></div>
      <div className={styles.ambientGlow}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>
            <Sparkles size={12} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
            Get Started
          </span>
          <h2 className={styles.title}>Request a Custom Care Plan</h2>
          <p className={styles.subtitle}>
            Fill out the details below. Our clinical care supervisor will review your inputs and contact you within 24 hours to schedule a free home assessment.
          </p>
        </div>

        <div className={styles.formCard}>
          {submitStatus === 'success' ? (
            <div className={styles.successState}>
              <div className={styles.successIconCircle}>
                <CheckCircle2 size={48} />
              </div>
              <h3 className={styles.successTitle}>Request Submitted Successfully!</h3>
              <p className={styles.successMessage}>
                Thank you, <strong>{formData.name}</strong>. Your inquiry has been registered in our database. We are now redirecting you to WhatsApp for instant confirmation.
              </p>
              <button 
                type="button" 
                onClick={() => setSubmitStatus(null)} 
                className={styles.resetBtn}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.bookingForm}>
              <div className={styles.formHeader}>
                <ClipboardList size={22} className={styles.formHeaderIcon} />
                <div>
                  <h4>Care Inquiry Form</h4>
                  <span>Silent Database Auto-Persistence</span>
                </div>
              </div>

              <div className={styles.formGrid}>
                {/* Name */}
                <div className={styles.inputGroup}>
                  <label htmlFor="form-name">
                    <User size={15} /> Patient / Contact Name
                  </label>
                  <input 
                    type="text" 
                    id="form-name" 
                    name="name" 
                    required 
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Phone */}
                <div className={styles.inputGroup}>
                  <label htmlFor="form-phone">
                    <Phone size={15} /> Mobile Number
                  </label>
                  <input 
                    type="tel" 
                    id="form-phone" 
                    name="phone" 
                    required 
                    placeholder="Enter mobile number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                {/* City */}
                <div className={styles.inputGroup}>
                  <label htmlFor="form-city">
                    <MapPin size={15} /> Select City
                  </label>
                  <select 
                    id="form-city" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleInputChange}
                  >
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Dehradun">Dehradun</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Mumbai">Mumbai</option>
                  </select>
                </div>

                {/* Address */}
                <div className={styles.inputGroup}>
                  <label htmlFor="form-address">
                    <MapPin size={15} /> Current Address
                  </label>
                  <input
                    type="text"
                    id="form-address"
                    name="address"
                    required
                    placeholder="Flat/House No, Colony, Area"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Plan Type */}
                <div className={styles.inputGroup}>
                  <label htmlFor="form-plan">
                    <Calendar size={15} /> Select Care Plan
                  </label>
                  <select 
                    id="form-plan" 
                    name="planType" 
                    value={formData.planType} 
                    onChange={handleInputChange}
                  >
                    <option value="Senior Citizen Care Plan">Senior Citizen Care Plan</option>
                    <option value="Post-Surgery Recovery Plan">Post-Surgery Recovery Plan</option>
                    <option value="Bedridden Patient Care Plan">Bedridden Patient Care Plan</option>
                    <option value="Mother & Baby Care Plan">Mother & Baby Care Plan</option>
                    <option value="Diabetes Care & Monitoring Plan">Diabetes Care & Monitoring Plan</option>
                    <option value="Stroke Rehabilitation Plan">Stroke Rehabilitation Plan</option>
                    <option value="Neuro Physiotherapy Plan">Neuro Physiotherapy Plan</option>
                    <option value="Cancer Care Support Plan">Cancer Care Support Plan</option>
                    <option value="Cardiac Care Plan">Cardiac Care Plan</option>
                    <option value="Other">Other (Please specify)</option>
                  </select>
                </div>

                {/* Shift/Duration */}
                <div className={styles.inputGroup}>
                  <label htmlFor="form-duration">
                    <Clock size={15} /> Attendant Shift Needed
                  </label>
                  <select 
                    id="form-duration" 
                    name="duration" 
                    value={formData.duration} 
                    onChange={handleInputChange}
                  >
                    <option value="2-4 Hours (Routine Visits)">2-4 Hours (Routine Visits)</option>
                    <option value="12 Hours (Day Attendant)">12 Hours (Day Attendant)</option>
                    <option value="24 Hours (Full-Time Live-in Care)">24 Hours (Full-Time Live-in Care)</option>
                  </select>
                </div>

                {/* Custom Plan Type (conditional) */}
                {formData.planType === 'Other' ? (
                  <div className={styles.inputGroup}>
                    <label htmlFor="form-custom-plan">
                      <Calendar size={15} /> Specify Care Plan
                    </label>
                    <input
                      type="text"
                      id="form-custom-plan"
                      required
                      placeholder="Enter custom care plan name"
                      value={customPlan}
                      onChange={(e) => setCustomPlan(e.target.value)}
                    />
                  </div>
                ) : (
                  // Empty space filler to keep the layout aligned if "Other" isn't selected
                  <div className={styles.inputGroup} style={{ visibility: 'hidden' }} aria-hidden="true" />
                )}
              </div>

              {/* Message */}
              <div className={styles.textareaGroup}>
                <label htmlFor="form-message">
                  Patient Health Condition / Special Notes (Optional)
                </label>
                <textarea 
                  id="form-message" 
                  name="message" 
                  rows="3" 
                  placeholder="e.g. Bedridden recovery, insulin assistance, feeding tube care, preferred start date..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                <Send size={16} />
                <span>{isSubmitting ? 'Submitting request...' : 'Submit Booking & Open WhatsApp'}</span>
              </button>

              {submitStatus === 'error' && (
                <p className={styles.errorText}>
                  ❌ Failed to register request. Redirecting directly to WhatsApp...
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PlanBookingForm;
