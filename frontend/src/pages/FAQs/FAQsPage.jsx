import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, ArrowRight, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import styles from './FAQsPage.module.css';

const faqCategories = {
  general: [
    {
      id: 1,
      q: "What is Suraksha Lifecare?",
      a: "Suraksha Lifecare is a premier professional home healthcare provider. We bring hospital-grade clinical precision, background-vetted caregivers, and MD-level doctor supervision directly to your home."
    },
    {
      id: 2,
      q: "How do I book a service or plan?",
      a: "Booking is simple. You can call our toll-free line (+1800 121 2323), submit a request on our contact page, or click \"Request Callback\" via WhatsApp. Our team will schedule a free doctor baseline home assessment."
    },
    {
      id: 3,
      q: "What cities or areas do you deliver services in?",
      a: "We currently cover all major city zones and residential neighborhoods in Kolkata and surrounding regions. You can ask our helpline to verify immediate deployment availability in your specific sector."
    }
  ],
  medical: [
    {
      id: 4,
      q: "Do you provide advanced ICU home nursing setups?",
      a: "Yes. We specialize in home ICU setups, which include deploying highly skilled ICU-trained nurses, oxygen concentrators, hospital beds, and telemetry monitoring, all audited by chief clinical nurse supervisors."
    },
    {
      id: 5,
      q: "Are home visits by general doctors included?",
      a: "Yes, our Advanced Recovery and ICU Care plans feature routine weekly or bi-weekly home doctor audits. For basic plans, doctor consultations are available on-call or as simple add-on integration packages."
    }
  ],
  billing: [
    {
      id: 7,
      q: "Can we pause or adjust plan hours mid-month?",
      a: "Absolutely. If the patient is re-hospitalized or needs to travel, you can pause your care plan with a 24-hour advance notice. We will hold your credits and resume caregiver services whenever you return."
    },
    {
      id: 8,
      q: "What are the common exclusions in the plans?",
      a: "To ensure clear expectations, plan charges cover caregiver shift hours, nurse visits, coordinator logs, and doctor reviews. Exclusions include daily patient medicines, diagnostic panels, and direct disposable clinical consumables (diapers, syringes, dressings)."
    },
    {
      id: 9,
      q: "Do you offer discounts on long-term bookings?",
      a: "Yes. While monthly cycles are standard, choosing our Quarterly billing cycle unlocks a 10% discount, and choosing our Half-Yearly billing cycle unlocks a 15% discount across all home care plans."
    }
  ],
  safety: [
    {
      id: 10,
      q: "How do you screen and vet caregivers?",
      a: "All care attendants undergo a strict triple-screening protocol: (1) Mandatory official police background checks, (2) Detailed identity checks, and (3) A rigorous 15-day practical clinical assessment at our simulation hubs."
    },
    {
      id: 11,
      q: "What happens if a deployed caregiver is absent?",
      a: "We maintain a dedicated reserve pool of vetted, standby caregivers. If your regular caregiver falls ill or takes scheduled leave, we arrange an identical certified backup who is fully briefed on your patient's records."
    },
    {
      id: 12,
      q: "What is your clinical emergency protocol?",
      a: "In the event of an emergency, your caregiver and our 24/7 coordination desk trigger immediate emergency protocols. Advanced/ICU plans feature priority ICU ambulance dispatch and immediate transfer coordination."
    }
  ]
};

const FAQsPage = () => {
  const [activeCategory, setActiveCategory] = useState('general'); // general, medical, billing, safety
  const [openFaqId, setOpenFaqId] = useState(1); // pre-open first item by default

  const toggleFAQ = (id) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const handleWhatsApp = () => {
    const message = "Hello! I am reading the FAQs page and have a specific question about home care services.";
    const whatsappUrl = `https://wa.me/9118001212323?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.topTag}>Help Center</span>
            <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
            <p className={styles.heroSubtitle}>
              Find detailed explanations regarding our medical protocols, caregiver vetting, custom plan pricing, and emergency assistance routines.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQs Grid */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Left Category Sidebar */}
            <div className={styles.sidebar}>
              <h3 className={styles.sidebarTitle}>Categories</h3>
              <div className={styles.categoriesList}>
                <button
                  type="button"
                  onClick={() => setActiveCategory('general')}
                  className={`${styles.categoryBtn} ${activeCategory === 'general' ? styles.activeCategory : ''}`}
                >
                  <span className={styles.categoryName}>General Info</span>
                  <ArrowRight size={16} className={styles.arrowIcon} />
                </button>
                
                <button
                  type="button"
                  onClick={() => setActiveCategory('medical')}
                  className={`${styles.categoryBtn} ${activeCategory === 'medical' ? styles.activeCategory : ''}`}
                >
                  <span className={styles.categoryName}>Medical & Care</span>
                  <ArrowRight size={16} className={styles.arrowIcon} />
                </button>
                
                <button
                  type="button"
                  onClick={() => setActiveCategory('billing')}
                  className={`${styles.categoryBtn} ${activeCategory === 'billing' ? styles.activeCategory : ''}`}
                >
                  <span className={styles.categoryName}>Plans & Billing</span>
                  <ArrowRight size={16} className={styles.arrowIcon} />
                </button>
                
                <button
                  type="button"
                  onClick={() => setActiveCategory('safety')}
                  className={`${styles.categoryBtn} ${activeCategory === 'safety' ? styles.activeCategory : ''}`}
                >
                  <span className={styles.categoryName}>Vetting & Safety</span>
                  <ArrowRight size={16} className={styles.arrowIcon} />
                </button>
              </div>
            </div>

            {/* Right Accordion List */}
            <div className={styles.faqList}>
              {faqCategories[activeCategory].map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      className={styles.questionButton}
                      aria-expanded={isOpen}
                    >
                      <div className={styles.questionContent}>
                        <HelpCircle size={18} className={styles.helpIcon} />
                        <span className={styles.questionText}>{faq.q}</span>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`${styles.chevron} ${isOpen ? styles.chevronRotate : ""}`} 
                      />
                    </button>
                    
                    <div 
                      className={styles.answerWrapper}
                      style={{
                        maxHeight: isOpen ? '160px' : '0px',
                        opacity: isOpen ? 1 : 0
                      }}
                    >
                      <p className={styles.answerText}>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA Bottom Banner */}
      <section className={styles.supportSection}>
        <div className={styles.container}>
          <div className={styles.supportCard}>
            <div className={styles.supportContent}>
              <span className={styles.supportTag}>Still Have Questions?</span>
              <h2 className={styles.supportTitle}>Talk Directly to Our Medical Supervisors</h2>
              <p className={styles.supportDesc}>
                We understand that coordinating care for a family member involves many unique details. Our care helpline is active 24/7 to resolve all your concerns.
              </p>
            </div>
            
            <div className={styles.supportActions}>
              <button 
                type="button" 
                onClick={handleWhatsApp} 
                className={styles.supportCta}
              >
                <HeartHandshake size={18} /> Chat with a Coordinator
              </button>
              <a href="tel:+18001212323" className={styles.supportPhone}>
                <PhoneCall size={16} /> Or Call +1800 121 2323
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
