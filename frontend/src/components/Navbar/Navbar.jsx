import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, MapPin, Search, HeartHandshake, Syringe, Users, Activity, Stethoscope, Monitor, FlaskConical, Baby, Menu, X, Clock } from 'lucide-react';
import logoImage from '../../assets/SurakshaHealthcare logo.png';
import styles from './Navbar.module.css';

const servicesList = [
  { title: 'Patient Care', icon: <HeartHandshake size={20} />, items: ['Bedridden care', 'Daily assistance', 'Post-hospitalization'] },
  { title: 'Nursing Care', icon: <Syringe size={20} />, items: ['Injection at home', 'IV drip', 'Dressing care', 'ICU nurse'] },
  { title: 'Elder Care', icon: <Users size={20} />, items: ['Companion care', 'Daily monitoring', 'Emergency support'] },
  { title: 'Physiotherapy', icon: <Activity size={20} />, items: ['Back pain', 'Stroke rehab', 'Knee pain therapy'] },
  { title: 'Doctor Consultation', icon: <Stethoscope size={20} />, items: ['Home visit doctor', 'Online consultation'] },
  { title: 'Medical Equipment', icon: <Monitor size={20} />, items: ['Oxygen concentrator', 'Hospital bed', 'Wheelchair'] },
  { title: 'Lab Tests at Home', icon: <FlaskConical size={20} />, items: ['Blood tests', 'Sugar tests', 'ECG at home'] },
  { title: 'Mother & Baby Care', icon: <Baby size={20} />, items: ['Newborn care', 'Japa maid', 'Recovery care'] }
];

const serviceSlugMap = {
  'Patient Care': 'patient-care',
  'Nursing Care': 'nursing-care',
  'Elder Care': 'elder-care',
  'Physiotherapy': 'physiotherapy',
  'Doctor Consultation': 'doctor-consultation',
  'Medical Equipment': 'medical-equipment',
  'Lab Tests at Home': 'lab-tests',
  'Mother & Baby Care': 'mother-baby-care'
};

const Navbar = () => {
  const navigate = useNavigate();
  const routerLocation = useLocation();
  const currentPath = routerLocation.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [location, setLocation] = useState('Select City');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileSearchOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matched = Object.keys(serviceSlugMap).find(key => 
        key.toLowerCase().includes(query) || query.includes(key.toLowerCase())
      );
      if (matched) {
        navigate(`/services/${serviceSlugMap[matched]}`);
      } else {
        navigate('/');
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setSearchQuery('');
      setIsMobileSearchOpen(false);
    }
  };

  const triggerEnquiry = () => {
    navigate('/contact');
  };

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
      style={{ display: 'flex', flexDirection: 'column' }} // Inline safeguard to force stacking even if CSS caches
    >
      {/* Top Header Row */}
      <div className={styles.topHeader}>
        <div className={`container ${styles.topHeaderContainer}`}>
          {/* Left: Logo and Location Selector (grouped for perfect spacing) */}
          <div className={styles.logoAndLocation}>
            <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
              <div className={styles.logoWrapper}>
                <img src={logoImage} alt="Suraksha Lifecare Logo" className={styles.logoImage} />
              </div>
            </Link>

            {!isScrolled && <div className={styles.separator}></div>}

            {/* Location Selector (Desktop - hidden on scroll) */}
            {!isScrolled && (
              <div className={styles.locationSelector}>
                <MapPin size={16} className={styles.pinIcon} />
                <span className={styles.locationText}>{location}</span>
                <ChevronDown size={14} className={styles.chevronSmall} />
                <div className={styles.locationDropdown}>
                  <button onClick={() => setLocation('Delhi NCR')}>Delhi NCR</button>
                  <button onClick={() => setLocation('Bihar')}>Bihar</button>
                  <button onClick={() => setLocation('Dehradun')}>Dehradun</button>
                  <button onClick={() => setLocation('Kolkata')}>Kolkata</button>
                  <button onClick={() => setLocation('Mumbai')}>Mumbai</button>
                </div>
              </div>
            )}
          </div>

          {/* Center: Search Box (Desktop - hidden on scroll) */}
          {!isScrolled && (
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <div className={styles.searchWrapper}>
                <Search size={18} className={styles.searchIcon} />
                <input 
                  type="text" 
                  placeholder="typing...." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
                <button type="submit" className={styles.searchBtn}>Search</button>
              </div>
            </form>
          )}

          {/* Navigation Links (Desktop - ONLY shown in center on scroll) */}
          {isScrolled && (
            <nav className={styles.navLinksScrolled}>
              <Link to="/" className={`${styles.link} ${currentPath === '/' ? styles.activeLink : ''}`} onClick={closeMobileMenu}>
                Home
              </Link>

              <div className={styles.navItemDropdown}>
                <span className={`${styles.link} ${(currentPath.startsWith('/services') && currentPath !== '/home-visits') ? styles.activeLink : ''}`}>
                  Our Services
                  <ChevronDown size={14} className={styles.chevron} />
                </span>
                
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuGrid}>
                    {servicesList.map((service, index) => {
                      const servicePath = `/services/${serviceSlugMap[service.title]}`;
                      const isServiceActive = currentPath === servicePath;
                      return (
                        <Link key={index} to={servicePath} className={`${styles.serviceCategoryLink} ${isServiceActive ? styles.activeServiceLink : ''}`} onClick={closeMobileMenu}>
                          <span className={styles.serviceIcon}>{service.icon}</span>
                          <span className={styles.serviceTitle}>{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <Link to="/plans" className={`${styles.link} ${currentPath === '/plans' ? styles.activeLink : ''}`} onClick={closeMobileMenu}>
                Long Term Care
              </Link>

              <Link to="/home-visits" className={`${styles.link} ${currentPath === '/home-visits' ? styles.activeLink : ''}`} onClick={closeMobileMenu}>
                Home Visits
              </Link>

              <Link to="/blog" className={`${styles.link} ${currentPath === '/blog' ? styles.activeLink : ''}`} onClick={closeMobileMenu}>
                Blog
              </Link>

              <Link to="/contact" className={`${styles.link} ${currentPath === '/contact' ? styles.activeLink : ''}`} onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </nav>
          )}

          {/* Right: Actions & Helpline */}
          <div className={styles.topActions}>
            {!isScrolled && (
              <button onClick={triggerEnquiry} className={styles.enquiryBtn}>
                <span className={styles.greenDot}></span>
                <span>SEND ENQUIRY</span>
              </button>
            )}

            <a href="tel:+919990782525" className={styles.phoneBtn} aria-label="Call Helpline">
              <Phone size={14} className={styles.phoneBtnIcon} />
              <span>+91 99907 82525</span>
            </a>
          </div>

          {/* Mobile Right Actions and Hamburger */}
          <div className={styles.mobileRightActions}>
            <a href="tel:+919990782525" className={styles.mobilePhoneBtn} aria-label="Call Helpline">
              <Phone size={18} className={styles.mobilePhoneIcon} />
              <span className={styles.mobilePhoneText}>+91 99907 82525</span>
            </a>
            <button 
              className={styles.mobileSearchToggle} 
              onClick={() => {
                setIsMobileSearchOpen(!isMobileSearchOpen);
                setIsMobileMenuOpen(false);
              }}
              aria-label="Toggle Search"
            >
              {isMobileSearchOpen ? <X size={22} className={styles.searchToggleIcon} /> : <Search size={22} className={styles.searchToggleIcon} />}
            </button>
            <Link to="/contact" className={styles.mobileBookCareCTA}>
              Book Now
            </Link>
            <button 
              className={styles.hamburger} 
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsMobileSearchOpen(false);
              }} 
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar Row (Collapsible) */}
      {isMobileSearchOpen && (
        <div className={styles.mobileSearchContainer}>
          <form className={styles.mobileSearchForm} onSubmit={handleSearch}>
            <div className={styles.mobileSearchWrapper}>
              <Search size={16} className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="Search services..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.mobileSearchInput}
                autoFocus
              />
              <button type="submit" className={styles.mobileSearchBtn}>Search</button>
            </div>
          </form>
        </div>
      )}

      {/* Mobile Phone Helpline Badge Row (only on small screens) */}
      <a href="tel:+919990782525" className={styles.mobilePhoneBadge}>
        <div className={styles.badgeContent}>
          <div className={styles.badgeStatus}>
            <span className={styles.badgeLiveDot}></span>
            <span className={styles.badgeStatusText}>Talk to Us</span>
          </div>
          <div className={styles.badgeDivider}></div>
          <div className={styles.badgeCallInfo}>
            <Phone size={13} className={styles.mobilePhoneBadgeIcon} />
            <span className={styles.badgeNumber}>+91 99907 82525</span>
          </div>
        </div>
      </a>

      {/* Bottom Header Navigation Bar (Shown only when NOT scrolled on Desktop) */}
      {!isScrolled && (
        <div className={styles.bottomHeader}>
          <div className={`container ${styles.bottomHeaderContainer}`}>
            <nav className={styles.navLinks}>
              <Link to="/" className={`${styles.link} ${currentPath === '/' ? styles.activeLink : ''}`} onClick={closeMobileMenu}>
                Home
              </Link>

              <div className={styles.navItemDropdown}>
                <span className={`${styles.link} ${(currentPath.startsWith('/services') && currentPath !== '/home-visits') ? styles.activeLink : ''}`}>
                  Our Services
                  <ChevronDown size={14} className={styles.chevron} />
                </span>
                
                <div className={styles.megaMenu}>
                  <div className={styles.megaMenuGrid}>
                    {servicesList.map((service, index) => {
                      const servicePath = `/services/${serviceSlugMap[service.title]}`;
                      const isServiceActive = currentPath === servicePath;
                      return (
                        <Link key={index} to={servicePath} className={`${styles.serviceCategoryLink} ${isServiceActive ? styles.activeServiceLink : ''}`} onClick={closeMobileMenu}>
                          <span className={styles.serviceIcon}>{service.icon}</span>
                          <span className={styles.serviceTitle}>{service.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <Link to="/plans" className={`${styles.link} ${currentPath === '/plans' ? styles.activeLink : ''}`} onClick={closeMobileMenu}>
                Long Term Care
              </Link>

              <Link to="/home-visits" className={`${styles.link} ${currentPath === '/home-visits' ? styles.activeLink : ''}`} onClick={closeMobileMenu}>
                Home Visits
              </Link>

              <Link to="/blog" className={`${styles.link} ${currentPath === '/blog' ? styles.activeLink : ''}`} onClick={closeMobileMenu}>
                Blog
              </Link>

              <Link to="/contact" className={`${styles.link} ${currentPath === '/contact' ? styles.activeLink : ''}`} onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </nav>
            <div className={styles.supportBadge}>
              <Clock size={14} className={styles.supportIcon} />
              <span className={styles.supportDot}></span>
              <span className={styles.supportText}>24/7</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <div className={styles.mobileMenuContainer}>
          <div className={styles.mobileNavItem}>
            <Link to="/" className={`${styles.mobileNavLink} ${currentPath === '/' ? styles.mobileActiveLink : ''}`} onClick={closeMobileMenu}>
              Home
            </Link>
          </div>

          <div className={styles.mobileNavItem}>
            <button 
              className={`${styles.mobileNavLinkDropdown} ${(currentPath.startsWith('/services') && currentPath !== '/home-visits') ? styles.mobileActiveLink : ''}`} 
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              <span>Our Services</span>
              <ChevronDown size={18} className={`${styles.chevron} ${isMobileServicesOpen ? styles.chevronRotate : ''}`} />
            </button>
            
            <div className={`${styles.mobileSubMenu} ${isMobileServicesOpen ? styles.mobileSubMenuOpen : ''}`}>
              <div className={styles.mobileSubMenuGrid}>
                {servicesList.map((service, index) => {
                  const servicePath = `/services/${serviceSlugMap[service.title]}`;
                  const isServiceActive = currentPath === servicePath;
                  return (
                    <Link 
                      key={index} 
                      to={servicePath} 
                      className={`${styles.mobileServiceLink} ${isServiceActive ? styles.mobileActiveServiceLink : ''}`}
                      onClick={closeMobileMenu}
                    >
                      <span className={styles.mobileServiceIcon}>{service.icon}</span>
                      <span>{service.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.mobileNavItem}>
            <Link to="/plans" className={`${styles.mobileNavLink} ${currentPath === '/plans' ? styles.mobileActiveLink : ''}`} onClick={closeMobileMenu}>
              Long Term Care
            </Link>
          </div>

          <div className={styles.mobileNavItem}>
            <Link to="/home-visits" className={`${styles.mobileNavLink} ${currentPath === '/home-visits' ? styles.mobileActiveLink : ''}`} onClick={closeMobileMenu}>
              Home Visits
            </Link>
          </div>

          <div className={styles.mobileNavItem}>
            <Link to="/blog" className={`${styles.mobileNavLink} ${currentPath === '/blog' ? styles.mobileActiveLink : ''}`} onClick={closeMobileMenu}>
              Blog
            </Link>
          </div>

          <div className={styles.mobileNavItem}>
            <Link to="/contact" className={`${styles.mobileNavLink} ${currentPath === '/contact' ? styles.mobileActiveLink : ''}`} onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </div>

          <div className={styles.mobileActions}>
            <a href="tel:+919990782525" className={styles.mobilePhoneBlock}>
              <Phone size={20} className={styles.phoneIcon} />
              <span>+91 99907 82525</span>
            </a>
            <Link to="/contact" className={`btn btn-primary ${styles.mobileBookBtn}`} onClick={closeMobileMenu}>
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
