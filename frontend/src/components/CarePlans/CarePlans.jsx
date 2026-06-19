import React from 'react';
import styles from './CarePlans.module.css';
import { CheckCircle2, Sparkles, Info } from 'lucide-react';


const tooltipData = {
  "Weekly doctor consultations": "A certified general physician audits vital records and updates recovery protocols weekly.",
  "Monthly BP & sugar checks": "Routine screening to log cardiovascular and diabetic fluctuations.",
  "Bed sore prevention & dressing": "Frequent postural shifting and medical-grade wound care dressing.",
  "Continuous vital charting": "Real-time logging of blood pressure, oxygen saturation, and pulse parameters.",
  "HbA1c & glucose charting": "Tracking average sugar levels and blood sugar fluctuations to manage insulin.",
  "Dietitian meal planning": "Monthly personalized meal cards curated by certified health nutritionists.",
  "Palliative care & pain relief": "Specialized supportive care focused on comfort and active symptom management.",
  "Heart vital & ECG charting": "High-fidelity vital tracking including home-level ECG audits.",
  "Weekly cardiac reviews": "Comprehensive reports audited by associated cardiologists."
};

const plans = [
  {
    id: 1,
    title: "Senior Citizen Care Plan",
    image: "/images/plans/senior_care.png",
    description: "Daily support, vital checks & medicine alerts for elders.",
    features: [
      "Daily caregiver support",
      "Medicine alerts & reminders",
      "Weekly doctor consultations",
      "Monthly BP & sugar checks"
    ],
    badges: ["Basic", "Advanced", "Premium"]
  },
  {
    id: 2,
    title: "Post-Surgery Recovery Plan",
    image: "/images/plans/post_surgery.png",
    description: "Skilled nursing, advanced dressing & rehabilitation support.",
    features: [
      "Skilled nurse visits",
      "Advanced wound dressings",
      "Physiotherapy exercises",
      "Routine vital tracking"
    ],
    badges: ["Post-Op", "Recovery Focus"]
  },
  {
    id: 3,
    title: "Bedridden Patient Care Plan",
    image: "/images/plans/bedridden.png",
    description: "24/7 dedicated personal attendants & vital tracking.",
    features: [
      "12/24 hour attendant",
      "Bed sore prevention & dressing",
      "Hygienic feeding & grooming",
      "Continuous vital charting"
    ],
    badges: ["Full Attendant", "Hygiene Focus"]
  },
  {
    id: 4,
    title: "Mother & Baby Care Plan",
    image: "/images/plans/mother_baby.png",
    description: "Newborn care, gentle massage & postnatal recovery support.",
    features: [
      "Specialized newborn care",
      "Mother recovery support",
      "Lactation & diet guidance",
      "Gentle baby massages"
    ],
    badges: ["Postnatal Care", "Newborn Care"]
  },
  {
    id: 5,
    title: "Diabetes Care & Monitoring Plan",
    image: "/images/plans/diabetes_monitoring.png",
    description: "Glucose level charting, diet charting & chronic care coaching.",
    features: [
      "HbA1c & glucose charting",
      "Dietitian meal planning",
      "Insulin coaching & tracking",
      "Routine diagnostic tests"
    ],
    badges: ["Preventative", "Chronic Control"]
  },
  {
    id: 6,
    title: "Stroke Rehabilitation Plan",
    image: "/images/plans/stroke_rehab.png",
    description: "Intensive neuro physiotherapy, physical & speech therapy.",
    features: [
      "Targeted physical rehab",
      "Speech & cognitive therapy",
      "Daily coordination workouts",
      "Weekly neuro specialist review"
    ],
    badges: ["Neuro Specialist", "Intensive Recovery"]
  },
  {
    id: 7,
    title: "Neuro Physiotherapy Plan",
    image: "/images/plans/neuro_physio.png",
    description: "Balance training & physical coordination restoration workouts.",
    features: [
      "Motor function restoration",
      "Postural & balance training",
      "Neural stimulation routines",
      "Dedicated physiotherapists"
    ],
    badges: ["Physio Care", "Active Therapy"]
  },
  {
    id: 8,
    title: "Cancer Care Support Plan",
    image: "/images/plans/cancer_care.png",
    description: "Palliative pain care, chemo symptoms logs & diet guidance.",
    features: [
      "Palliative care & pain relief",
      "Chemo side-effect tracking",
      "Immunity boosting nutrition",
      "Mental health counseling"
    ],
    badges: ["Critical Nursing", "Compassionate Care"]
  },
  {
    id: 9,
    title: "Cardiac Care Plan",
    image: "/images/plans/cardiac_care.png",
    description: "Weekly cardiologist audits, vital tracking & ECG logs.",
    features: [
      "Heart vital & ECG charting",
      "Cardio-safe diet planning",
      "24/7 emergency response",
      "Weekly cardiac reviews"
    ],
    badges: ["Heart Care", "Clinical Safety"]
  }
];

const CarePlans = ({ onChoosePlan }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.topTag}>
            <Sparkles size={14} style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
            Comprehensive Home Care
          </span>
          <h2 className={styles.title}>Personalized Long Term Care Plans</h2>
          <p className={styles.subtitle}>
            Professional, recurring care packages designed to provide tailored medical support, intensive clinical rehabilitation, and absolute peace of mind for you and your family.
          </p>
          <p className={styles.subtitleMobile}>
            Professional recurring home care packages.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.id} className={styles.card}>
              <img src={plan.image} alt={plan.title} className={styles.cardImage} />
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{plan.title}</h3>
                  {plan.description && (
                    <p className={styles.cardDescription}>{plan.description}</p>
                  )}
                </div>

                <h4 className={styles.listHeader}>Includes:</h4>
                <ul className={styles.featureList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <CheckCircle2 className={styles.checkIcon} size={18} />
                      <span className={styles.featureTextWrapper}>
                        <span>{feature}</span>
                        {tooltipData[feature] && (
                          <span className={styles.tooltipContainer} data-tooltip={tooltipData[feature]}>
                            <Info size={13} className={styles.infoIcon} />
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.badges && (
                  <div className={styles.badges}>
                    {plan.badges.map((badge, index) => (
                      <span key={index} className={styles.badge}>{badge}</span>
                    ))}
                  </div>
                )}

                <button 
                  className={styles.subscribeBtn}
                  onClick={() => onChoosePlan(plan.title)}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarePlans;

