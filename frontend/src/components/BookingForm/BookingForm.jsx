import React, { useState } from 'react';
import { ClipboardList, Send } from 'lucide-react';
import { API_URL } from '../../config';
import styles from './BookingForm.module.css';

const WHATSAPP_NUMBER = '919990782525';

const BookingForm = ({ serviceName, onSuccess, isCard = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Delhi NCR',
    address: '',
    purpose: '',
    message: ''
  });
  const [customPurpose, setCustomPurpose] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const finalPurpose = formData.purpose === 'Other' ? customPurpose : formData.purpose;
    if (!formData.name || !formData.phone || !formData.address || !finalPurpose) return;

    setIsSubmitting(true);
    setStatus('');

    // Attempt to save to backend database
    try {
      const response = await fetch(`${API_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: formData.city,
          serviceType: serviceName || 'General Enquiry',
          address: formData.address,
          purpose: finalPurpose,
          message: formData.message || `Instant Inquiry for ${serviceName}`
        })
      });

      if (response.ok) {
        setStatus('Thank you! Your booking request has been successfully submitted. We will contact you shortly.');
        
        // Trigger success callback if passed (e.g. to close modals/drawers after a delay)
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 2000);
        }
        
        // Reset Form
        setFormData({ name: '', phone: '', city: 'Delhi NCR', address: '', purpose: '', message: '' });
        setCustomPurpose('');
      } else {
        setStatus('Failed to submit booking request. Please check fields and try again.');
      }
    } catch (error) {
      console.warn('Backend database entry failed.', error);
      setStatus('Failed to connect to server. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className={`${styles.bookingCard} ${isCard ? styles.cardContainer : styles.flatContainer}`}>
      <div className={styles.formHeader}>
        <ClipboardList size={22} className={styles.formHeaderIcon} />
        <div>
          <h4>Secure Booking Slot</h4>
          <span>Silent Database Auto-Persistence</span>
        </div>
      </div>

      <form onSubmit={handleFormSubmit} className={styles.bookingForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="booking-name">Your Full Name</label>
          <input
            type="text"
            id="booking-name"
            name="name"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="booking-phone">Mobile Number</label>
          <input
            type="tel"
            id="booking-phone"
            name="phone"
            required
            placeholder="Enter your mobile number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="booking-city">Select City</label>
          <select
            id="booking-city"
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
          <label htmlFor="booking-address">Current Address</label>
          <input
            type="text"
            id="booking-address"
            name="address"
            required
            placeholder="Flat/House No, Colony, Area"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="booking-service">Service Category</label>
          <input
            type="text"
            id="booking-service"
            disabled
            value={serviceName || ''}
            className={styles.disabledInput}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="booking-purpose">Home Visit Purpose</label>
          <select
            id="booking-purpose"
            name="purpose"
            required
            value={formData.purpose}
            onChange={handleInputChange}
            className={styles.selectInput}
          >
            <option value="">Select purpose...</option>
            <option value="Routine Doctor Consult">Routine Doctor Consult</option>
            <option value="Nursing / Dressing Care">Nursing / Dressing Care</option>
            <option value="Physiotherapy Session">Physiotherapy Session</option>
            <option value="Elder Care / Companion">Elder Care / Companion</option>
            <option value="Lab Sample Collection">Lab Sample Collection</option>
            <option value="Post-Op Recovery Check">Post-Op Recovery Check</option>
            <option value="Other">Other (Please specify)</option>
          </select>
        </div>

        {formData.purpose === 'Other' && (
          <div className={styles.inputGroup}>
            <label htmlFor="booking-custom-purpose">Specify Purpose</label>
            <input
              type="text"
              id="booking-custom-purpose"
              name="customPurpose"
              required
              placeholder="Enter your visit purpose"
              value={customPurpose}
              onChange={(e) => setCustomPurpose(e.target.value)}
            />
          </div>
        )}

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label htmlFor="booking-message">Special Instructions (Optional)</label>
          <textarea
            id="booking-message"
            name="message"
            rows="3"
            placeholder="e.g. daily shifts, dressing preferences, post-op details"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className={`${styles.submitButton} ${styles.fullWidth}`}
          disabled={isSubmitting}
        >
          <Send size={16} />
          <span>{isSubmitting ? 'Securing Slot...' : 'Secure Booking Slot'}</span>
        </button>

        {status && (
          <p className={`${styles.statusText} ${styles.fullWidth} ${status.includes('Failed') || status.includes('failed') ? styles.errorStatus : styles.successStatus}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
