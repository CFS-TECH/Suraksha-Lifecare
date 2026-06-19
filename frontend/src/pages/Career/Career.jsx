import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Briefcase, 
  Send, 
  X, 
  CheckCircle,
  FileText,
  User,
  Phone,
  Mail,
  GraduationCap,
  UploadCloud,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Award,
  Star,
  Users,
  UserCheck,
  Wallet,
  ShieldCheck,
  Stethoscope,
  ChevronDown
} from 'lucide-react';
import styles from './Career.module.css';

const statsData = [
  { value: "1,200+", label: "Attendants Deployed" },
  { value: "Daily", label: "Payout Settlement" },
  { value: "24/7", label: "Supervisor Support" }
];

const careerFaqs = [
  {
    question: "How fast are Daily Payout earnings credited?",
    answer: "Daily payout earnings are processed via UPI or direct bank transfer within 4 hours of completing and logging your shift in our care portal. There are no weekly delays."
  },
  {
    question: "Can I choose patient shifts in my local neighborhood?",
    answer: "Yes. Our placement algorithm maps active home care calls based on your pincode, matching caregivers to patients within a 5km to 8km radius to reduce travel time."
  },
  {
    question: "What items are provided in the free Suraksha Care Kit?",
    answer: "On successful background checking, you receive two premium sets of medical scrubs, a branded high-fidelity stethoscope, a digital BP monitor, an infrared thermometer, and sanitization kits."
  },
  {
    question: "Are GNM/ANM certificates mandatory for all bedside roles?",
    answer: "Critical ICU shifting and injection visits strictly require verified council registrations (GNM/B.Sc/ANM). However, general elderly companion assistant assignments are open to candidates with verified caregiver credentials or standard training certs."
  }
];

const jobsData = {
  fulltime: [
    {
      id: 1,
      title: "Senior ICU Care Nurse",
      department: "Nursing Services",
      location: "Kolkata, India",
      experience: "2-4 Years",
      compensation: "₹32,000 - ₹45,000 / month",
      badge: "Full-Time Career",
      badgeType: "primary",
      details: [
        "Monitor critical patient vitals, manage IV fluids, and administer ICU level care at patient homes.",
        "Must hold a GNM or B.Sc in Nursing with active medical council registrations.",
        "Comfortable with rotational 12-hour or 24-hour shifting allocations."
      ]
    },
    {
      id: 2,
      title: "Elderly Care Attendant",
      department: "Supportive Care",
      location: "Kolkata, India",
      experience: "1+ Years",
      compensation: "₹18,000 - ₹24,000 / month",
      badge: "Full-Time Career",
      badgeType: "primary",
      details: [
        "Assist elderly clients with daily living tasks (personal hygiene, feeding, mobility assistance).",
        "Participate in physical companionship routines, medication alerts, and lifestyle logging.",
        "Requires background-verified caregiver certificate or equivalent training."
      ]
    }
  ],
  internship: [
    {
      id: 3,
      title: "Clinical Physiotherapy Intern",
      department: "Rehabilitation",
      location: "Kolkata, India",
      experience: "Final Year Students (BPT/MPT)",
      compensation: "Stipend: ₹8,000 / month",
      badge: "Academic Program",
      badgeType: "warning",
      details: [
        "Assist senior neuro-physiotherapists with restoring motor functions and active rehab programs.",
        "Chart patient progress reports and coordinates baseline postural reviews.",
        "Duration: 3 months, with a high possibility of conversion to full-time post internship."
      ]
    },
    {
      id: 4,
      title: "Home Nursing Assistant Intern",
      department: "Clinical Assistant",
      location: "Kolkata, India",
      experience: "Nursing Students (ANM/GNM)",
      compensation: "Stipend: ₹6,500 / month",
      badge: "Academic Program",
      badgeType: "warning",
      details: [
        "Learn specialized bedside manner, wound dressing procedures, and baseline vital monitoring.",
        "Accompany senior nursing supervisors on home audit evaluations.",
        "Duration: 2 months, including intensive certified homecare simulation training."
      ]
    }
  ],
  freelance: [
    {
      id: 5,
      title: "Physiotherapist (Daily Payout)",
      department: "Rehabilitation",
      location: "Kolkata, India (Flexible)",
      experience: "1+ Years",
      compensation: "₹1,500 - ₹2,500 / Day",
      badge: "Daily wage settlement",
      badgeType: "success",
      details: [
        "Conduct targeted home physiotherapy calls (neuro/ortho restoration) based on your calendar.",
        "Paid daily on a per-patient visited basis. Choose your own schedules and coverage areas.",
        "Requires Bachelor of Physiotherapy (BPT) with active practice registrations."
      ]
    },
    {
      id: 6,
      title: "Patient Care Attendant (Daily Payout)",
      department: "Supportive Care",
      location: "Kolkata, India",
      experience: "Entry Level Welcome",
      compensation: "₹1,200 - ₹1,800 / Day",
      badge: "Daily wage settlement",
      badgeType: "success",
      details: [
        "Cover ad-hoc 12-hour shifts for bedside assistance and grooming support based on active patient needs.",
        "Immediate daily wage settlement at the end of every completed care shift.",
        "Backup attendants reserve list allocation for immediate emergency coverage."
      ]
    },
    {
      id: 7,
      title: "Injection & IV Nurse (Daily Payout)",
      department: "Nursing Services",
      location: "Kolkata, India (Area-wise)",
      experience: "1+ Years",
      compensation: "₹800 - ₹1,500 / Day",
      badge: "Daily wage settlement",
      badgeType: "success",
      details: [
        "Deploy on area-specific brief home visits for injection setups, IV setups, or complex wound care dressings.",
        "payout scales per visit completed. Highly flexible, ideal for clinical staff seeking part-time daily earnings.",
        "Requires certified ANM/GNM qualification with active nursing credentials."
      ]
    }
  ]
};

const Career = () => {
  const [activeTab, setActiveTab] = useState('freelance'); // default to freelance to highlight daily wage payout!
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [cvFile, setCvFile] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '0-1 Years',
    notes: ''
  });

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setFormStatus('idle');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setCvFile(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      experience: '0-1 Years',
      notes: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      {/* Premium Split Hero Section */}
      <section className={styles.heroSection}>
        {/* Animated ambient glowing mesh orbs */}
        <div className={styles.heroGlowOrb1} />
        <div className={styles.heroGlowOrb2} />
        <div className={styles.heroGlowOrb3} />
        
        <div className={styles.heroOverlay} />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.topTag}>
                <Sparkles size={14} className={styles.sparkleIcon} />
                Careers at Suraksha
              </span>
              <h1 className={styles.heroTitle}>
                Empowering Care Heroes <br />
                <span className={styles.gradientText}>Work on Your Own Terms</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Secure a rewarding Full-Time clinical career, a structured student Internship, or highly flexible Daily Payout work paid on a per-day basis.
              </p>
              
              {/* Stats Grid inside Hero */}
              <div className={styles.statsGrid}>
                {statsData.map((stat, idx) => (
                  <div key={idx} className={styles.statCard}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons Group */}
              <div className={styles.heroBtnGroup}>
                <a href="#open-roles" className={styles.heroBtnPrimary}>
                  <Briefcase size={18} />
                  Browse Positions
                </a>
                <a href="#open-roles" className={styles.heroBtnSecondary}>
                  <Sparkles size={18} className={styles.sparkleIcon} />
                  Daily Wage Roles
                </a>
              </div>
            </div>
            
            {/* High-Fidelity Visual Container with Floating Perks */}
            <div className={styles.heroVisual}>
              <div className={styles.imageCardContainer}>
                <div className={styles.imageCardGlow} />
                <img 
                  src="/images/plans/senior_care.png" 
                  alt="Compassionate healthcare professional supporting home patient" 
                  className={styles.heroImageMain} 
                />
                
                {/* Floating Glassmorphic Perks */}
                <div className={`${styles.floatingBadge} ${styles.badge1}`}>
                  <div className={styles.floatingBadgeIcon}>💰</div>
                  <div className={styles.floatingBadgeText}>
                    <h4>Daily Payouts</h4>
                    <p>Immediate Settlement</p>
                  </div>
                </div>

                <div className={`${styles.floatingBadge} ${styles.badge2}`}>
                  <div className={styles.floatingBadgeIcon}>🕒</div>
                  <div className={styles.floatingBadgeText}>
                    <h4>Flexible Shifts</h4>
                    <p>Choose Your Hours</p>
                  </div>
                </div>

                <div className={`${styles.floatingBadge} ${styles.badge3}`}>
                  <div className={styles.floatingBadgeIcon}>🛡️</div>
                  <div className={styles.floatingBadgeText}>
                    <h4>100% Verified</h4>
                    <p>Secure Placements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust guarantees bar */}
      <div className={styles.trustGuarantees}>
        <div className={styles.container}>
          <div className={styles.guaranteeGrid}>
            <div className={styles.guaranteeItem}>
              <Clock className={styles.guaranteeIcon} size={20} />
              <span className={styles.longText}>Rotational shifting calendars</span>
              <span className={styles.shortText}>Flexible Shifts</span>
            </div>
            <div className={styles.guaranteeItem}>
              <ShieldAlert className={styles.guaranteeIcon} size={20} />
              <span className={styles.longText}>100% verified placements</span>
              <span className={styles.shortText}>100% Verified</span>
            </div>
            <div className={styles.guaranteeItem}>
              <Award className={styles.guaranteeIcon} size={20} />
              <span className={styles.longText}>HR Onboarding Certification</span>
              <span className={styles.shortText}>HR Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Process Section */}
      <section className={styles.stepperSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtag}>How to Join</span>
            <h2 className={styles.sectionTitle}>Simple Onboarding Process</h2>
            <p className={styles.sectionDesc}>Get verified, set up your calendar, and start receiving daily settlements within 48 hours.</p>
          </div>
          
          <div className={styles.stepperGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepIconWrapper}>
                <FileText size={24} className={styles.stepIcon} />
              </div>
              <h3 className={styles.stepTitle}>Quick Apply</h3>
              <p className={styles.stepText}>Submit your qualifications and credentials in less than 60 seconds.</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepIconWrapper}>
                <UserCheck size={24} className={styles.stepIcon} />
              </div>
              <h3 className={styles.stepTitle}>Brief Interview</h3>
              <p className={styles.stepText}>A quick verification phone call with our clinical HR team to review nursing credentials.</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepIconWrapper}>
                <GraduationCap size={24} className={styles.stepIcon} />
              </div>
              <h3 className={styles.stepTitle}>Care Simulation</h3>
              <p className={styles.stepText}>Participate in a 1-day briefing regarding advanced home care simulated safety protocols.</p>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepIconWrapper}>
                <Wallet size={24} className={styles.stepIcon} />
              </div>
              <h3 className={styles.stepTitle}>Deploy & Earn</h3>
              <p className={styles.stepText}>Accept local patient home visits via your calendar and receive secure payouts daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section id="open-roles" className={styles.rolesSection}>
        {/* Ambient Glow Orbs */}
        <div className={styles.rolesGlowOrb1}></div>
        <div className={styles.rolesGlowOrb2}></div>

        <div className={styles.container}>
          {/* Header & Tabs */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Explore <span className={styles.sectionTitleGradient}>Open Openings</span>
            </h2>
            <p className={styles.sectionDesc}>Select a tab below to filter open nurse, physiotherapist, and caregiver roles.</p>
            
            <div className={styles.tabsWrapper}>
              <button
                type="button"
                onClick={() => setActiveTab('freelance')}
                className={`${styles.tabBtn} ${activeTab === 'freelance' ? styles.activeTab : ''}`}
              >
                <span className={styles.longText}>Daily Payout</span>
                <span className={styles.shortText}>Daily Payout</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('fulltime')}
                className={`${styles.tabBtn} ${activeTab === 'fulltime' ? styles.activeTab : ''}`}
              >
                <span className={styles.longText}>Full-Time Careers</span>
                <span className={styles.shortText}>Full-Time</span>
              </button>
              
              <button
                type="button"
                onClick={() => setActiveTab('internship')}
                className={`${styles.tabBtn} ${activeTab === 'internship' ? styles.activeTab : ''}`}
              >
                <span className={styles.longText}>Academic Internships</span>
                <span className={styles.shortText}>Internships</span>
              </button>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className={styles.jobsGrid}>
            {jobsData[activeTab].map((job) => (
              <div key={job.id} className={styles.jobCard}>
                <div className={styles.cardHeaderRow}>
                  <div className={styles.jobMeta}>
                    <span className={styles.jobLocation}>
                      <MapPin size={14} className={styles.metaIcon} />
                      {job.location}
                    </span>
                    <span className={styles.experienceBadge}>
                      <Briefcase size={14} className={styles.metaIcon} />
                      {job.experience}
                    </span>
                  </div>
                  <span className={`${styles.badge} ${styles[job.badgeType]}`}>
                    {job.badge}
                  </span>
                </div>

                <h3 className={styles.jobTitle}>{job.title}</h3>
                <span className={styles.departmentName}>{job.department}</span>

                <div className={styles.compensationBlock}>
                  <span className={styles.compensationLabel}>Expected Compensation:</span>
                  <span className={job.badgeType === 'success' ? styles.dailyWagePrice : styles.priceText}>
                    {job.compensation}
                  </span>
                </div>

                <div className={styles.divider} />

                <div className={styles.jobDetails}>
                  <h4 className={styles.detailsHeader}>In this role you will:</h4>
                  <ul className={styles.detailsList}>
                    {job.details.map((detail, index) => (
                      <li key={index} className={styles.detailItem}>
                        <CheckCircle2 className={styles.checkIcon} size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenModal(job)}
                  className={styles.applyBtn}
                >
                  Quick Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suraksha Perks Grid */}
      <section className={styles.perksSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtag}>Suraksha Benefits</span>
            <h2 className={styles.sectionTitle}>Why Caregivers Choose Us</h2>
            <p className={styles.sectionDesc}>We provide advanced support, equipment kits, and full safety coverage for our care providers.</p>
          </div>

          <div className={styles.perksGrid}>
            <div className={styles.perkCard}>
              <div className={styles.perkIconWrapper}>
                <Stethoscope size={28} className={styles.perkIcon} />
              </div>
              <h3 className={styles.perkTitle}>Suraksha Care Kit</h3>
              <p className={styles.perkText}>Receive high-quality custom scrub sets, advanced digital BP monitors, stethoscopes, and protective sanitization setups free of cost.</p>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkIconWrapper}>
                <ShieldCheck size={28} className={styles.perkIcon} />
              </div>
              <h3 className={styles.perkTitle}>Transit Insurance</h3>
              <p className={styles.perkText}>Your safety is paramount. All active homecare providers are protected by our accidental and transit insurance coverage plans.</p>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkIconWrapper}>
                <Award size={28} className={styles.perkIcon} />
              </div>
              <h3 className={styles.perkTitle}>Weekly Training</h3>
              <p className={styles.perkText}>Participate in clinical upgrade modules, ICU ventilator briefings, and safety workshops hosted by our senior advisory board.</p>
            </div>

            <div className={styles.perkCard}>
              <div className={styles.perkIconWrapper}>
                <Users size={28} className={styles.perkIcon} />
              </div>
              <h3 className={styles.perkTitle}>Career Progression</h3>
              <p className={styles.perkText}>Clear assessment milestones to transition from daily care provider roles to permanent Senior Lead Supervisor assignments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlights Testimonial Slider */}
      <section className={styles.spotlightSection}>
        <div className={styles.narrowContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionSubtag}>Spotlights</span>
            <h2 className={styles.sectionTitle}>Voices of Our Caregivers</h2>
            <p className={styles.sectionDesc}>Hear from our nursing and therapy teams about working with the daily payout model.</p>
          </div>

          <div className={styles.spotlightGrid}>
            <div className={styles.spotlightCard}>
              <div className={styles.starRow}>
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <Star size={16} fill="#FFD700" color="#FFD700" />
              </div>
              <span className={styles.quoteMark}>“</span>
              <p className={styles.spotlightQuote}>
                Being a mother, the daily payout physiotherapy schedule lets me select visits that sync with my home timings. Getting my payouts credited every single evening keeps my family financials completely steady.
              </p>
              <div className={styles.spotlightProfile}>
                <div className={styles.spotlightAvatar}>SR</div>
                <div className={styles.spotlightMeta}>
                  <h4 className={styles.spotlightName}>Sunita Roy</h4>
                  <span className={styles.spotlightTitle}>Physiotherapist (Daily Payout)</span>
                </div>
              </div>
            </div>

            <div className={styles.spotlightCard}>
              <div className={styles.starRow}>
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <Star size={16} fill="#FFD700" color="#FFD700" />
                <Star size={16} fill="#FFD700" color="#FFD700" />
              </div>
              <span className={styles.quoteMark}>“</span>
              <p className={styles.spotlightQuote}>
                ICU bedside nursing is a highly specialized craft. Suraksha ensures we are equipped with digital monitors and scrub kits. The supervisor team matches shifts within my district, making transit extremely convenient.
              </p>
              <div className={styles.spotlightProfile}>
                <div className={styles.spotlightAvatar}>AD</div>
                <div className={styles.spotlightMeta}>
                  <h4 className={styles.spotlightName}>Amit Das</h4>
                  <span className={styles.spotlightTitle}>Senior ICU Nurse (Full-Time)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career FAQs Accordion */}
      <section className={styles.faqSection}>
        <div className={styles.narrowContainer}>
          <div className={styles.faqGrid}>
            <div className={styles.faqInfo}>
              <span className={styles.sectionSubtag}>Help Center</span>
              <h2 className={styles.faqSectionTitle}>Recruitment FAQs</h2>
              <p className={styles.faqSectionDesc}>
                Have queries regarding bank transfers, area mappings, or shift allocations? We have summarized active answers here.
              </p>
              <div className={styles.faqSupportCard}>
                <h4>Need Recruitment Help?</h4>
                <p>Speak directly with our clinical supervisor coordinators.</p>
                <a href="tel:+919990782525" className={styles.faqSupportLink}>Call Recruiter: +91 99907 82525</a>
              </div>
            </div>

            <div className={styles.faqAccordionList}>
              {careerFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`${styles.accordionCard} ${isOpen ? styles.accordionCardOpen : ''}`}>
                    <button
                      type="button"
                      className={styles.accordionHeader}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={18} className={`${styles.accordionChevron} ${isOpen ? styles.chevronRotate : ''}`} />
                    </button>
                    <div className={`${styles.accordionBody} ${isOpen ? styles.bodyOpen : ''}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal Overlay */}
      {isModalOpen && selectedJob && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <button
              type="button"
              onClick={handleCloseModal}
              className={styles.closeBtn}
              aria-label="Close application form"
            >
              <X size={20} />
            </button>

            {formStatus !== 'success' ? (
              <form onSubmit={handleSubmit} className={styles.modalForm}>
                <div className={styles.formHeader}>
                  <span className={`${styles.badge} ${styles[selectedJob.badgeType]}`}>{selectedJob.badge}</span>
                  <h3 className={styles.formTitle}>Apply for {selectedJob.title}</h3>
                  <p className={styles.formSubtitle}>Submit your coordinates. Our clinical HR supervisor will call you back.</p>
                </div>

                <div className={styles.formFields}>
                  {/* Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="name"><User size={16} /> Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Contact Row */}
                  <div className={styles.formRow}>
                    {/* Phone */}
                    <div className={styles.formGroup}>
                      <label htmlFor="phone"><Phone size={16} /> Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Mobile number"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className={styles.formGroup}>
                      <label htmlFor="email"><Mail size={16} /> Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div className={styles.formGroup}>
                    <label htmlFor="experience"><GraduationCap size={16} /> Relevant Experience</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                    >
                      <option value="0-1 Years">ANM/BPT Student or Entry-level (0-1 yrs)</option>
                      <option value="1-3 Years">Experienced caregiver/physio (1-3 yrs)</option>
                      <option value="3-5 Years">Skilled ICU Attendant / Staff Nurse (3-5 yrs)</option>
                      <option value="5+ Years">Senior clinical lead / MD (5+ yrs)</option>
                    </select>
                  </div>

                  {/* Modern CV Upload trigger */}
                  <div className={styles.formGroup}>
                    <label><FileText size={16} /> Attach CV / Certification (Optional)</label>
                    <div className={styles.uploadWrapper}>
                      <input 
                        type="file" 
                        id="cv-file" 
                        accept=".pdf,.doc,.docx,.png,.jpg" 
                        onChange={handleFileChange}
                        className={styles.hiddenFileInput} 
                      />
                      <label htmlFor="cv-file" className={styles.uploadLabel}>
                        <UploadCloud size={24} className={styles.uploadIcon} />
                        <span className={styles.uploadText}>
                          {cvFile ? cvFile : "Click to select or drop CV file here"}
                        </span>
                        <span className={styles.uploadLimit}>PDF, DOCX, or JPG (Max 5MB)</span>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={styles.submitBtn}
                >
                  {formStatus === 'submitting' ? "Registering Application..." : (
                    <>
                      <Send size={18} /> Submit Application
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className={styles.successState}>
                <CheckCircle size={56} className={styles.successIcon} />
                <h3 className={styles.successTitle}>Application Registered!</h3>
                <p className={styles.successDesc}>
                  Your application for **{selectedJob.title}** has been successfully recorded under reference Suraksha Care.
                </p>
                <div className={styles.successActions}>
                  <p className={styles.hrCallNote}>
                    Our HR Supervisor will contact you via phone within 24 working hours to coordinate baseline assessments and credential verification checks.
                  </p>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className={styles.doneBtn}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
