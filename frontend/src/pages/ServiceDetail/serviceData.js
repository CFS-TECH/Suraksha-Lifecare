import patientCareImg from '../../assets/patient_care.png';
import nursingCareImg from '../../assets/nursing_care.png';
import physioImg from '../../assets/physiotherapy.png';
import elderImg from '../../assets/categories/elder.png';
import childImg from '../../assets/categories/child.png';
import bpImg from '../../assets/categories/bp.png';
import essentialsImg from '../../assets/categories/essentials.png';
import liverImg from '../../assets/categories/liver.png';
import womenImg from '../../assets/categories/women.png';
import vitaminsImg from '../../assets/categories/vitamins.png';
import skinImg from '../../assets/categories/skin.png';
import stomachImg from '../../assets/categories/stomach.png';
import nutritionImg from '../../assets/categories/nutrition.png';


export const serviceSlugMap = {
  'patient-care': 'patient-care',
  'nursing-care': 'nursing-care',
  'elder-care': 'elder-care',
  'physiotherapy': 'physiotherapy',
  'doctor-consultation': 'doctor-consultation',
  'medical-equipment': 'medical-equipment',
  'lab-tests': 'lab-tests',
  'mother-baby-care': 'mother-baby-care',
  'recovery-care': 'recovery-care',
  'vaccination': 'vaccination',
  'wound-care': 'wound-care',
  'catheter-care': 'catheter-care',
  'enema-care': 'enema-care',
  'injection-care': 'injection-care',
  'ryles-tube-care': 'ryles-tube-care'
};

export const serviceData = {
  'patient-care': {
    title: "Patient Care at Home",
    subtitle: "Hospital-Grade Bedside Assistance & Clinical Comfort",
    image: patientCareImg,
    themeColor: "#1A4B6E",
    description: "Get certified medical attendants and bedside caregivers who provide compassionate, round-the-clock physical support for bedridden patients, seniors, and individuals transitioning from hospital to home.",
    features: [
      "Bedridden daily support & posture turning",
      "Grooming, sponge baths & personal hygiene",
      "Clinical vital tracking (BP, Sugar, SpO2)",
      "Diet and enteral feeding management",
      "Post-surgical recovery assistance",
      "Mobility and transfers support"
    ],
    metrics: [
      { value: "15K+", label: "Bedridden Patients Assisted" },
      { value: "24/7", label: "Dedicated On-Call Attendants" },
      { value: "100%", label: "Background Verified Staff" }
    ],
    whyUs: [
      "ICU-trained home caregivers with continuous skill assessments.",
      "Customized patient care plans aligned with your doctor's prescriptions.",
      "Compassionate, respectful professionals supporting dignity at home."
    ]
  },
  'nursing-care': {
    title: "Professional Nursing Care",
    subtitle: "ICU Critical Care & Advanced Clinical Home Support",
    image: nursingCareImg,
    themeColor: "#009A9F",
    description: "Experience premium clinical excellence at home with our registered, ICU-experienced nurses. From complex respiratory therapies to regular injections, we ensure your safety and quick healing.",
    features: [
      "ICU-level critical vital monitoring & care",
      "Tracheostomy and ventilator support at home",
      "IV drip administration & safe clinical infusions",
      "Advanced wound management & post-op dressings",
      "Foley catheter care & hygienic insertions",
      "Ryles Tube feeding & gastric support"
    ],
    metrics: [
      { value: "8K+", label: "ICU Recoveries at Home" },
      { value: "100%", label: "Registered & Certified Nurses" },
      { value: "NABL", label: "Hospital-Grade Guidelines" }
    ],
    whyUs: [
      "Supervised directly by clinical team leaders and consulting physicians.",
      "Emergency backup support and 24/7 care executive assistance.",
      "Continuous hygiene training to prevent home-acquired infections."
    ]
  },
  'elder-care': {
    title: "Elder Care at Home",
    subtitle: "Empathetic Companionship, Safety & Active Health Monitoring",
    image: elderImg,
    themeColor: "#E28743",
    description: "Ensure your aging parents and loved ones are safe, happy, and healthy. Our specialized elder care attendants provide companionship, safety monitoring, physiological tracking, and mobility support.",
    features: [
      "Warm, active companionship & conversations",
      "Strict daily medication compliance tracking",
      "BP, sugar, and oxygen physiological charts",
      "Assistance in bathing, mobility & walks",
      "Support with doctor visits & clinic logistics",
      "Dementia & Alzheimer's supportive routines"
    ],
    metrics: [
      { value: "10K+", label: "Seniors Living Dignified Lives" },
      { value: "4.9★", label: "Client Love & Care Rating" },
      { value: "24/7", label: "Emergency Helpline Access" }
    ],
    whyUs: [
      "Focuses heavily on mental well-being and active cognitive engagement.",
      "Frequent supervisor check-ins to monitor patient-attendant compatibility.",
      "Immediate ambulance and physician backup systems ready."
    ]
  },
  'physiotherapy': {
    title: "Physiotherapy at Home",
    subtitle: "Clinical Rehabilitation Programs to Restore Physical Freedom",
    image: physioImg,
    themeColor: "#10B981",
    description: "Regain your structural mobility and independence. Our clinical, post-graduate physiotherapists visit your home to conduct advanced neuro, ortho, and sports rehabilitation sessions tailored to your needs.",
    features: [
      "Neurological stroke rehabilitation & gait coaching",
      "Orthopedic post-op recovery & knee/hip therapies",
      "Targeted chronic back, neck & shoulder relief",
      "Balance restoration and geriatric physical therapy",
      "Pulmonary exercises for breathing enhancement",
      "Joint mobilization & personalized muscle training"
    ],
    metrics: [
      { value: "6K+", label: "Joint/Stroke Recoveries" },
      { value: "100%", label: "Certified BPT & MPT Therapists" },
      { value: "Custom", label: "Personalized Progression Charts" }
    ],
    whyUs: [
      "Equipped with modern therapeutic tools brought directly to your home.",
      "Objective monthly assessment metrics to prove rehabilitation results.",
      "Direct consultation matching with orthopedic and neuro surgeons."
    ]
  },
  'doctor-consultation': {
    title: "Doctor Consultation & Home Visit",
    subtitle: "Experienced General Physicians & Specialists Available Online & At Home",
    image: bpImg,
    themeColor: "#009A9F",
    description: "Skip stressful clinic lines and traffic. Connect with certified General Physicians and specialized doctors—including Gynecologists, Pediatricians, Sexologists, and Dentists—for virtual audio/video consults or comprehensive bedside care right in the comfort of your home.",
    features: [
      "Thorough clinical diagnosis & bedside consults",
      "Chronic illness long-term tracking & treatment plans",
      "Post-discharge physical reviews & recovery audits",
      "Home diagnostic test recommendations",
      "Online primary audio/video consultations",
      "Prescription chart compilation & adjustments"
    ],
    metrics: [
      { value: "5K+", label: "Bedside Consultations Concluded" },
      { value: "15+ Yrs", label: "Average Physician Experience" },
      { value: "Immediate", label: "Clinical Review & Referral Support" }
    ],
    whyUs: [
      "Fully registered General Practitioners (MD/MBBS) with active clinical backgrounds.",
      "Maintains detailed patient medical logs shared with your permanent specialist.",
      "Ample bedside consulting time with zero pressure or rushed checks."
    ]
  },
  'medical-equipment': {
    title: "Medical Equipment Rentals & Purchase",
    subtitle: "Certified Hospital Beds, Breathing Support & ICU Setups at Home",
    image: essentialsImg,
    themeColor: "#64748B",
    description: "Rent or buy hospital-grade equipment to transform your patient's bedroom into a clinical recovery room. We manage immediate delivery, setup, and technical troubleshooting.",
    features: [
      "Oxygen Concentrators & cylinder delivery",
      "ICU multi-functional hospital beds (Manual/Remote)",
      "BiPAP & CPAP sleep apnea breathing setups",
      "Multipara patient monitors with vital alert systems",
      "Wheelchairs, commode chairs, walkers & air beds",
      "Clinical suction machines & nebulizers"
    ],
    metrics: [
      { value: "100%", label: "Sterilized & Certified Equipment" },
      { value: "24 Hrs", label: "Immediate Technical Support" },
      { value: "Flexible", label: "Rental and Purchasing Options" }
    ],
    whyUs: [
      "All medical equipment is strictly sterilized and calibrated after every rental.",
      "Trained, certified medical technicians handle home assembly and teaching.",
      "No-fuss refund policy on refundable security deposits."
    ]
  },
  'lab-tests': {
    title: "Lab Tests at Home",
    subtitle: "NABL Certified Sample Collections & Secure Digital Reports",
    image: liverImg,
    themeColor: "#8B5CF6",
    description: "Access a wide spectrum of diagnostic lab testing with painless, hygienic collections in the comfort of your living room. Digital medical reports are delivered securely to your device.",
    features: [
      "Home blood collection by hygienic phlebotomists",
      "Diabetes monitoring profiles (Fasting sugar, HbA1c)",
      "ECG diagnostics conducted directly at your home",
      "Full body health screens & annual wellness panels",
      "Liver, kidney, thyroid, and lipid physiological profiles",
      "Secure digital PDF reports delivered inside 12-24 hours"
    ],
    metrics: [
      { value: "100%", label: "NABL Accredited Lab Partners" },
      { value: "12 Hrs", label: "Fastest Report Dispatch Time" },
      { value: "Sterile", label: "Single-Use Smart Vacuum Needles" }
    ],
    whyUs: [
      "Strict temperature-controlled vaccine carrier boxes for samples.",
      "Highly experienced phlebotomists skilled at locating deep veins painlessly.",
      "Transparent pricing with zero hidden sample collection fee."
    ]
  },
  'mother-baby-care': {
    title: "Mother & Baby Care",
    subtitle: "Specialized Postnatal Nurturing, Lactation Support & Caregiving",
    image: childImg,
    themeColor: "#EC4899",
    description: "Provide the absolute safest and warmest start for your newborn. Our postnatal caregivers support new mothers through maternal recovery, diet preparation, and essential infant care routines.",
    features: [
      "Clinical newborn vital tracking & pediatrician alerts",
      "Hygienic infant sponge baths, grooming & clothing",
      "Postpartum mother recovery diet planning & support",
      "Lactation adjustments & proper latching coaching",
      "Traditional Japa maid massage & caregiving",
      "Sterile baby bottle feeding & sleep scheduling"
    ],
    metrics: [
      { value: "4K+", label: "Healthy Newborns Nurtured" },
      { value: "100%", label: "Pediatric-Screened Attendants" },
      { value: "Compassion", label: "Focus on Postnatal Mother Recovery" }
    ],
    whyUs: [
      "Caregivers undergo detailed pre-employment medical checks and background sweeps.",
      "Regular pediatrician advisor check-ins to monitor developmental milestones.",
      "Balanced traditional wisdom combined with NABL-backed pediatric safety."
    ]
  },
  'recovery-care': {
    title: "Recovery Care at Home",
    subtitle: "Post-Hospitalization Transitional Support & Clinical Nurturing",
    image: womenImg,
    themeColor: "#1A4B6E",
    description: "Recover comfortably in your home environment. We bridge the gap between hospital discharge and full independence with custom clinical vital tracking, wound support, and safe physical rehabilitation plans.",
    features: [
      "Post-operative vital monitoring & chart audits",
      "Surgical wound healing assessment & dressing support",
      "Discharge summary adherence & medicine tracking",
      "Restoration of gradual movement & posture turning",
      "High-nutrition recovery diet planning",
      "Complication early detection & GP consult backups"
    ],
    metrics: [
      { value: "5K+", label: "Transitional Recoveries Managed" },
      { value: "100%", label: "Physician discharge compliance" },
      { value: "24/7", label: "Critical Care Advisory Backup" }
    ],
    whyUs: [
      "Attendants thoroughly trained in posture adjustments and bedsore safety.",
      "Ensures absolute continuity of care aligned exactly with your hospital discharge note.",
      "Includes routine physiotherapist progression reviews to speed up physical healing."
    ]
  },
  'vaccination': {
    title: "Vaccination at Home",
    subtitle: "Convenient, Safe & Certified Home Immunization Services",
    image: vitaminsImg,
    themeColor: "#10B981",
    description: "Get vital vaccines in absolute comfort. We maintain NABL-grade cold chains and dispatch registered nurses equipped with sterile safety tools to vaccinate pediatric, adult, and geriatric patients safely.",
    features: [
      "Pediatric routine immunization schedule tracking",
      "Annual adult influenza & pneumonia vaccines",
      "Cervical cancer HPV protective vaccinations",
      "Geriatric shingles & Hepatitis immunization",
      "Hygienic single-use sterile syringe admin",
      "Post-administration anaphylaxis monitoring checks"
    ],
    metrics: [
      { value: "12K+", label: "Safe Home Immunizations" },
      { value: "100%", label: "Certified Pediatric Nurses" },
      { value: "Cold Chain", label: "WHO Vaccine Cold Box Storage" }
    ],
    whyUs: [
      "Vaccines are kept strictly in temperature-monitored carriers to protect potency.",
      "Administered only by registered nurses trained to manage allergy or shock reactions.",
      "Instant issuance of authentic immunization certificates sent to your inbox."
    ]
  },
  'wound-care': {
    title: "Wound Care at Home",
    subtitle: "Sterile Dressings for Surgical & Chronic Ulcer Healing",
    image: skinImg,
    themeColor: "#EF4444",
    description: "Speed up complex wound recovery in your living room. Our clinical wound care nurses provide pain-free, completely sterile dressings utilizing premium medical materials and proven tissue repair protocols.",
    features: [
      "Sterile dressing for post-operative surgical cuts",
      "Chronic diabetic foot ulcer advanced clinical care",
      "Pressure bedsore therapeutic wound dressings",
      "Vacuum-assisted closure (VAC) modern device support",
      "Painless aseptic wound cleaning & cell activation",
      "Burn recovery specialized compression dressings"
    ],
    metrics: [
      { value: "9K+", label: "Healed Ulcers & Open Wounds" },
      { value: "0%", label: "In-home Infection Track Record" },
      { value: "Certified", label: "Wound Specialist Attendants" }
    ],
    whyUs: [
      "We utilize only single-use disposable surgical dressing trays to guarantee safety.",
      "Weekly photographic progression mapping shared securely with your surgeon.",
      "Undergoes supervision by clinical team leaders to determine dressing intervals."
    ]
  },
  'catheter-care': {
    title: "Foley Catheter Care at Home",
    subtitle: "Sterile Urinary Catheterization & Hygienic Bladder Management",
    image: nursingCareImg,
    themeColor: "#06B6D4",
    description: "Access gentle and infection-free catheter insertions and changes. Our registered clinical nurses adhere to strict aseptic standards to guarantee safety, vital monitoring, and maximum patient comfort.",
    features: [
      "Aseptic Foley catheter insertion & safe removal",
      "Regular bladder irrigation & therapeutic wash",
      "Urinary tract infection (UTI) symptom prevention",
      "Clinical drainage bag emptying & aseptic checks",
      "Comfortable tube securing & skin erosion safeguards",
      "Hydration level audits & output charting"
    ],
    metrics: [
      { value: "4K+", label: "Urinary Insertions Managed" },
      { value: "100%", label: "Clinical Aseptic Safety Rating" },
      { value: "Zero Pain", label: "Lubricated Procedural Comfort" }
    ],
    whyUs: [
      "Procedures performed using only premium siliconized and latex-free medical tubes.",
      "Rigid double-check protocol to verify sterile fields before insertion.",
      "Attendants emphasize gentle, patient-first care to prevent urethral trauma."
    ]
  },
  'enema-care': {
    title: "Enema Care at Home",
    subtitle: "Gentle Bowel Evacuation & Advanced Constipation Relief",
    image: stomachImg,
    themeColor: "#F59E0B",
    description: "Find immediate relief from painful impactions and chronic bowel blockage. Our clinical caregivers handle enema administrative processes with absolute privacy, clinical hygiene, and utmost dignity.",
    features: [
      "Clinical enema fluid administration & vital tracking",
      "Severe fecal impaction bedside manual relief",
      "Pre-operative or diagnostic bowel preparations",
      "Gentle temperature-controlled warm saline infusions",
      "Patient hydration tracking & colon health tips",
      "Absolute clinical privacy & diaper management"
    ],
    metrics: [
      { value: "3K+", label: "Bowel Impaction Cases Solved" },
      { value: "100%", label: "Single-Use Sterile Tube Kits" },
      { value: "Gentle", label: "Discreet & Dignified Bedside Care" }
    ],
    whyUs: [
      "Attendants use specialized lubricated micro-tips to eliminate painful insertion.",
      "Protects colon health with balanced pH solutions tailored for elder care.",
      "Accompanied by custom nutritional counseling to prevent future blockage."
    ]
  },
  'injection-care': {
    title: "Injection at Home",
    subtitle: "Aseptic, Precise & Painless Home Injection Services",
    image: nursingCareImg,
    themeColor: "#D946EF",
    description: "Ensure your daily or weekly medical doses are administered right on time. Our clinical nurses visit your home to deliver precise intravenous (IV), intramuscular (IM), and subcutaneous injections.",
    features: [
      "Intramuscular (IM) antibiotic & vitamin injections",
      "Subcutaneous (SC) insulin and blood thinner admin",
      "Intravenous (IV) therapeutic fluid injections",
      "Continuous vital monitoring before and after dose",
      "Sterile single-use medical needle disposals",
      "Allergic response detection & monitoring support"
    ],
    metrics: [
      { value: "20K+", label: "Painless Home Injections" },
      { value: "0.15s", label: "Fastest Response Nurses" },
      { value: "100%", label: "Aseptic Triple-Check Standards" }
    ],
    whyUs: [
      "Rigid safety process to verify medication identity, expiration date, and prescription.",
      "Nurses carry fully loaded emergency medication packages to manage rare side-effects.",
      "Saves you from travel anxiety, matching seamlessly with your prescription times."
    ]
  },
  'ryles-tube-care': {
    title: "Ryles Tube Care at Home",
    subtitle: "Safe Nasogastric (NG) Tube Insertion & Enteral Feeding Support",
    image: nutritionImg,
    themeColor: "#84CC16",
    description: "Ensure safe and aspiration-free nutrition for patients who cannot swallow. Our senior registered nurses handle nasogastric (NG) tube insertions, position checks, and feeding management.",
    features: [
      "Sterile Ryles (NG) tube insertion & testing",
      "Tube positioning verify checks (pH/Auscultation)",
      "High-nutrition enteral liquid food feed setups",
      "Safe Ryles tube flushing & blockage prevention",
      "Hygienic nose tape changes & skin friction checks",
      "Safe nasogastric tube removals and changes"
    ],
    metrics: [
      { value: "2.5K+", label: "NG Tube Procedures Finished" },
      { value: "100%", label: "Safe Aspiration-Free Feeding" },
      { value: "Senior", label: "Registered Experienced Nurses Only" }
    ],
    whyUs: [
      "Insertions handled only by ICU-specialist nurses to ensure smooth, trauma-free placement.",
      "Empowers family members with detailed workshops on safe liquid preparation and feed speed.",
      "Routine clinical check-ups to monitor patient digestion comfort."
    ]
  }
};
