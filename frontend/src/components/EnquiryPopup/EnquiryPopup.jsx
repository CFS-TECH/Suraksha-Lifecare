import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { API_URL } from '../../config';
import styles from './EnquiryPopup.module.css';

const EnquiryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Show popup 1.5 seconds after page loads, only if not shown in current session
    const hasBeenShown = sessionStorage.getItem('enquiryPopupShown');
    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('enquiryPopupShown', 'true');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch(`${API_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          city: 'Delhi NCR',
          serviceType: 'Popup Enquiry',
          address: 'Instant Enquiry',
          purpose: 'General Enquiry',
          message: 'Authorized to contact/WhatsApp'
        })
      });

      if (response.ok) {
        setStatus('Thank you! We will contact you shortly.');
        setFormData({ name: '', phone: '' });
        // Close the popup after a brief delay so they see the success message
        setTimeout(() => {
          setIsOpen(false);
        }, 1800);
      } else {
        setStatus('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.warn('Enquiry submission failed.', error);
      setStatus('Failed to connect. Please try again.');
    }
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.popupCard}>
        <button 
          className={styles.closeButton} 
          onClick={() => setIsOpen(false)}
          aria-label="Close Enquiry Form"
        >
          <X size={16} />
        </button>

        <h3 className={styles.formTitle}>Enquire Now</h3>
        <form onSubmit={handleFormSubmit} className={styles.enquiryForm}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              required
              placeholder="Name*"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleInputChange}
              className={styles.formInput}
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
          </button>

          {status && (
            <p className={`${styles.statusText} ${status.includes('Failed') || status.includes('failed') ? styles.errorStatus : styles.successStatus}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EnquiryPopup;
