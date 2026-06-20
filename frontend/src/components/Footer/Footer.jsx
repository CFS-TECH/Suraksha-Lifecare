import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Send,
  ShieldCheck,
  Clock,
  Award
} from 'lucide-react';
import logo from '../../assets/footerlogo.png';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Newsletter Section */}
      <div className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterContent}>
              <h3>Stay Updated with Health Tips</h3>
              <p>Subscribe to our newsletter for the latest healthcare insights and exclusive plan offers.</p>
            </div>
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              {subscribed ? (
                <div className={styles.subscribeSuccess}>
                  <ShieldCheck size={20} />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <div className={styles.inputGroup}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                  <button type="submit" className={styles.subscribeBtn}>
                    <Send size={18} />
                    <span>Subscribe</span>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="Suraksha Healthcare" />
            </Link>
            <p className={styles.brandDesc}>
              Your trusted partner in professional home healthcare. We provide compassionate care tailored to your needs, ensuring dignity and comfort at every step.
            </p>
            <div className={styles.trustBadges}>
              <div className={styles.badge}>
                <ShieldCheck size={16} />
                <span>Certified Care</span>
              </div>
              <div className={styles.badge}>
                <Clock size={16} />
                <span>24/7 Support</span>
              </div>
              <div className={styles.badge}>
                <Award size={16} />
                <span>Award Winning</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className={styles.linksCol}>
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/services/patient-care"><ArrowRight size={14} /> Patient Care</Link></li>
              <li><Link to="/services/nursing-care"><ArrowRight size={14} /> Nursing Care</Link></li>
              <li><Link to="/services/elder-care"><ArrowRight size={14} /> Elder Care</Link></li>
              <li><Link to="/services/physiotherapy"><ArrowRight size={14} /> Physiotherapy</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksCol}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about"><ArrowRight size={14} /> About Us</Link></li>
              <li><Link to="/plans"><ArrowRight size={14} /> Long Term Care</Link></li>
              <li><Link to="/contact"><ArrowRight size={14} /> Contact Us</Link></li>
              <li><Link to="/career"><ArrowRight size={14} /> Career</Link></li>
              <li><Link to="/faqs"><ArrowRight size={14} /> FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.contactCol}>
            <h3>Contact Us</h3>
            <div className={styles.contactInfo}>
              <a href="tel:+919990782525" className={styles.contactItem}>
                <div className={styles.iconBox}><Phone size={18} /></div>
                <div className={styles.contactText}>
                  <span className={styles.label}>Call Us</span>
                  <span className={styles.value}>+91 99907 82525</span>
                </div>
              </a>
              <a href="mailto:info@surakshahealthcare.com" className={styles.contactItem}>
                <div className={styles.iconBox}><Mail size={18} /></div>
                <div className={styles.contactText}>
                  <span className={styles.label}>Email Us</span>
                  <span className={styles.value}>info@surakshahealthcare.com</span>
                </div>
              </a>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><MapPin size={18} /></div>
                <div className={styles.contactText}>
                  <span className={styles.label}>Location</span>
                  <span className={styles.value}>123 Healthcare Tower, Kolkata</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} <strong>Suraksha Healthcare</strong>. All rights reserved.</p>
          </div>
          
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Linkedin">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>

          <div className={styles.bottomLinks}>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

