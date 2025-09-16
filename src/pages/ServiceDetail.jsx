import React from "react";
import ServiceHero from "../components/services/ServiceHero";
import ConditionsList from "../components/services/ConditionsList";
import HelpSection from "../components/services/HelpSection";

const serviceData = {
  "Urgent_Care": {
    title: "Urgent Care",
    subtitle: "Fast, Affordable Urgent Care in NC & SC",
    description: "When sudden illness or injury strikes, First Care Medical Clinic provides same-day treatment without the long wait of an ER. Our urgent care providers treat a wide range of non-life-threatening issues for adults and children, keeping your family healthy and safe. With multiple locations across North and South Carolina, care is always nearby.",
    callToAction: "Walk in today or book your urgent care visit online.",
    buttonText: "Find Your Nearest Clinic",
    conditionsTitle: "Conditions Treated",
    conditions: [
      "Cold and flu symptoms",
      "Ear infections", 
      "Cough, sore throat, strep",
      "Cuts, scrapes, burns",
      "Sprains, strains, minor fractures",
      "Rashes, skin infections, insect bites",
      "Pink eye & minor eye injuries",
      "Work-related injuries"
    ]
  },
  "Primary_Care": {
    title: "Primary Care & Annual Physicals",
    subtitle: "Your Primary Care Home in NC & SC",
    description: "Long-term health starts with a strong relationship with a trusted provider. At First Care, our primary care team offers annual wellness exams, preventive screenings, and ongoing care tailored to your needs.",
    callToAction: "Schedule your annual checkup today and stay ahead of your health.",
    buttonText: "Book an Appointment",
    conditionsTitle: "Conditions/Needs Treated",
    conditions: [
      "Annual checkups",
      "Immigration physicals (USCIS-approved)",
      "School & sports clearance exams",
      "Weight loss & nutrition support",
      "Preventive screenings (blood pressure, cholesterol, diabetes)"
    ]
  },
  "Chronic_Care_Management": {
    title: "Chronic Condition Management",
    subtitle: "Managing Chronic Conditions with Compassion",
    description: "Living with a chronic condition requires regular support. Our providers partner with you to manage long-term health concerns, helping you feel your best every day.",
    callToAction: "Take control of your health—it starts today.",
    buttonText: "Book An Appointment",
    conditionsTitle: "Conditions Treated",
    conditions: [
      "High blood pressure (hypertension)",
      "Diabetes (Type 1, Type 2, prediabetes)",
      "Asthma & chronic lung conditions",
      "Chronic pain & arthritis",
      "Hormone imbalances (men & women)"
    ]
  },
  "Pediatric_Care": {
    title: "Pediatric Care",
    subtitle: "Caring for Kids, from Newborns to Teens",
    description: "Our pediatric providers understand the unique needs of children at every stage. Whether it's a well-child checkup or urgent care, your child's health is in expert hands.",
    callToAction: "Take control of your child's health—walk in or book an appointment.",
    buttonText: "Find Your Nearest Clinic",
    conditionsTitle: "Conditions Treated",
    conditions: [
      "Well-child visits & growth checks",
      "Immunizations & vaccines",
      "Fevers, coughs, ear infections",
      "Allergies & asthma in children",
      "Minor injuries & urgent care needs"
    ]
  },
  "Illness_Treatment": {
    title: "Illness Treatment",
    subtitle: "Fast Relief for Everyday Illnesses",
    description: "Don't wait to feel better. From seasonal allergies to COVID-19, we provide testing, diagnosis, and treatment to get you back on your feet quickly.",
    callToAction: "Walk in today for testing and treatment.",
    buttonText: "Find Your Nearest Clinic",
    conditionsTitle: "Conditions Treated",
    conditions: [
      "Allergies & sinus issues",
      "Asthma flare-ups",
      "Sore throat, strep, colds, flu",
      "COVID-19 testing & treatment",
      "Nausea, vomiting, stomach pain",
      "Urinary tract infections (UTIs)"
    ]
  },
  "Vaccines": {
    title: "Vaccines & Immunizations",
    subtitle: "Protection for the Whole Family",
    description: "Stay protected against preventable diseases with up-to-date vaccines. We offer immunizations for children, adults, and travelers.",
    callToAction: "Visit us today for your vaccines—no appointment needed.",
    buttonText: "Find Your Nearest Clinic",
    conditionsTitle: "Conditions/Needs Covered",
    conditions: [
      "Flu shots",
      "Routine childhood vaccines",
      "Adult boosters (tetanus, shingles, hepatitis)",
      "Travel vaccines",
      "School & work-required vaccinations"
    ]
  },
  "Testing_&_Screening": {
    title: "Lab Testing & Screenings",
    subtitle: "On-Site Lab Services for Fast Results",
    description: "No need for a separate lab visit—our clinics provide in-house testing with quick, accurate results.",
    callToAction: "Get your results faster—schedule your lab test today.",
    buttonText: "Book An Appointment",
    conditionsTitle: "Tests & Screenings Offered",
    conditions: [
      "Blood work & urinalysis",
      "Allergy testing",
      "Cholesterol & blood sugar screening",
      "STD/STI testing",
      "Asbestos health exams (work-related)"
    ]
  },
  "Imaging_&_Ultrasound": {
    title: "Imaging & Ultrasound",
    subtitle: "Accurate Imaging, Right in Our Clinics",
    description: "We provide diagnostic imaging on-site, making it easy to get answers and start treatment quickly.",
    callToAction: "Schedule your imaging appointment today.",
    buttonText: "Book An Appointment",
    conditionsTitle: "Imaging Services Offered",
    conditions: [
      "Ultrasound imaging (abdominal, pelvic, pregnancy)",
      "Heart ultrasounds (echocardiograms)",
      "Vascular imaging",
      "Soft tissue and organ scans"
    ]
  },
  "Mental_Health": {
    title: "Mental Health Services",
    subtitle: "Compassionate Mental Health Care in NC & SC",
    description: "Your mental wellbeing matters. Our licensed providers offer counseling, therapy, and treatment for a range of mental health concerns, with confidential and supportive care.",
    callToAction: "Take the first step—we are here to help.",
    buttonText: "Book An Appointment",
    conditionsTitle: "Conditions Treated",
    conditions: [
      "Anxiety & depression",
      "Bipolar disorder",
      "Substance use & addiction",
      "Stress & burnout",
      "Behavioral concerns in children & teens"
    ]
  },
  "Telemedicine": {
    title: "Telemedicine",
    subtitle: "Virtual Care Wherever You Are",
    description: "Skip the trip to the clinic—connect with a provider online for many common health needs.",
    callToAction: "Book a telemedicine visit today—convenient care from home.",
    buttonText: "Book An Appointment",
    conditionsTitle: "Conditions Treated via Telehealth",
    conditions: [
      "Cold & flu symptoms",
      "Prescription refills",
      "Chronic condition follow-ups",
      "Mental health counseling & medication management",
      "General checkups"
    ]
  },
  "Workers_Compensation": {
    title: "Worker's Compensation",
    subtitle: "Expert Workers' Compensation Care in NC & SC",
    description: "When employees are injured on the job, timely care is essential. We provide comprehensive workers' compensation services, helping employees recover quickly while supporting employers with clear communication and efficient claims processing.",
    callToAction: "Injured on the job? Visit us today or schedule your appointment.",
    buttonText: "Book An Appointment",
    conditionsTitle: "Services & Care Offered",
    conditions: [
      "On-site Workers' Compensation Coordinator",
      "Laceration repair & wound care",
      "X-rays and diagnostic imaging",
      "Medication management & treatment plans",
      "Drug and alcohol testing (DOT & non-DOT)",
      "Medical reporting for HR/insurance",
      "Return-to-work evaluations"
    ]
  },
  "Occupational_Medicine": {
    title: "Occupational Medicine",
    subtitle: "Healthy Employees Make a Stronger Workforce",
    description: "Our occupational medicine program offers employment health screenings, DOT physicals, certified MRO oversight, and corporate wellness services for businesses of all sizes. We help employers meet compliance standards while keeping employees safe and productive.",
    callToAction: "Looking for employee health solutions? Partner with us today.",
    buttonText: "Book An Appointment",
    conditionsTitle: "Services & Care Offered",
    conditions: [
      "Pre-employment & post-offer physicals",
      "DOT physicals & compliance testing",
      "Return-to-work and fitness-for-duty exams",
      "Immunizations (flu, Hepatitis A & B, TB testing)",
      "Pulmonary function testing & asbestos exams",
      "Respiratory screenings & respirator fittings",
      "Audiograms (hearing conservation)",
      "Drug & alcohol screenings (DOT & non-DOT)",
      "Heavy metal & chemical exposure testing",
      "Certified Medical Review Officer (MRO) oversight"
    ]
  },
  "Weight_Management": {
    title: "Weight Management & Wellness",
    subtitle: "Your Personalized Medical Weight Loss Program",
    description: "Struggling with weight loss? You're not alone—and you don't have to do it alone. Our physician-supervised program combines medical treatment, nutrition counseling, and lifestyle support to help patients lose weight safely and sustainably.",
    callToAction: "Ready to start your weight loss journey? Book your consultation today.",
    buttonText: "Start My Program",
    conditionsTitle: "Program Features",
    conditions: [
      "Comprehensive weight & health assessment",
      "Nutrition & lifestyle counseling",
      "Medically assisted weight loss programs",
      "Prescription weight loss medications (when appropriate)",
      "Monthly progress check-ins & lab monitoring",
      "Ongoing support for long-term results"
    ]
  }
};

export default function ServiceDetailPage() {
  const [serviceName, setServiceName] = React.useState(null);
  
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    setServiceName(service);
  }, []);

  const service = serviceName ? serviceData[serviceName] : null;

  if (!serviceName) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 font-body">Loading...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 font-header">Service Not Found</h1>
          <p className="text-gray-600 font-body">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <ServiceHero service={service} />
      <ConditionsList 
        conditions={service.conditions} 
        title={service.conditionsTitle} 
      />
      <HelpSection serviceName={service.title} />
    </div>
  );
}