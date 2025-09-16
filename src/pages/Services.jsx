
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Stethoscope,
  Smile,
  Baby,
  FlaskConical,
  Syringe,
  MonitorSmartphone,
  Repeat,
  Scan,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  ClipboardCheck,
  Scale
} from "lucide-react";

const services = [
  { key: "Urgent_Care", icon: Heart, title: "Urgent Care", description: "When you need care fast, for non-life-threatening illnesses and injuries." },
  { key: "Primary_Care", icon: Smile, title: "Primary Care", description: "Checkups, preventive screenings, and ongoing wellness guidance." },
  { key: "Illness_Treatment", icon: Stethoscope, title: "Illness Treatment", description: "Diagnosis and treatment for common illnesses to help you feel better, faster." },
  { key: "Mental_Health", icon: ShieldCheck, title: "Mental Health", description: "Compassionate, confidential care for your emotional and mental wellbeing." },
  { key: "Pediatric_Care", icon: Baby, title: "Pediatric Care", description: "Routine checkups, urgent care, and allergy testing for your child." },
  { key: "Telemedicine", icon: MonitorSmartphone, title: "Telemedicine", description: "See a provider from home for primary care, urgent care, and mental health." },
  { key: "Testing_&_Screening", icon: FlaskConical, title: "Testing & Screening", description: "Fast, accurate results from on-site testing without an extra trip to a lab." },
  { key: "Chronic_Care_Management", icon: Repeat, title: "Chronic Care", description: "Ongoing treatment plans and support for long-term health conditions." },
  { key: "Vaccines", icon: Syringe, title: "Vaccines", description: "Protect yourself and your family with vaccines for all ages." },
  { key: "Imaging_&_Ultrasound", icon: Scan, title: "Imaging & Ultrasound", description: "On-site imaging for faster diagnosis and treatment plans." },
  { key: "Workers_Compensation", icon: Briefcase, title: "Worker's Compensation", description: "Comprehensive care for on-the-job injuries to support employees." },
  { key: "Occupational_Medicine", icon: ClipboardCheck, title: "Occupational Medicine", description: "Health screenings and wellness services for businesses of all sizes." },
  { key: "Weight_Management", icon: Scale, title: "Weight Management", description: "Physician-supervised programs for safe and sustainable weight loss." },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-header">Your one-stop shop for feeling better.</h1>
              <p className="text-gray-600 mb-6 font-body">First Care Medical Clinic offers comprehensive services, from aches and pains to yearly checkups.</p>
              <Button asChild className="bg-[#ee292e] hover:bg-[#d6252a] text-white rounded-full px-8">
                <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </div>
            <div>
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c42f9d2467a3929932fc81/734934953_WEB-SERVICES.png" alt="First Care team" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 font-header">Browse Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map(service => (
                    <Link to={createPageUrl(`ServiceDetail?service=${service.key}`)} key={service.title} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-[#ee292e] transition-colors flex items-center group">
                        <service.icon className="w-10 h-10 text-[#ee292e] flex-shrink-0 mr-4"/>
                        <div className="flex-grow">
                            <h3 className="font-bold text-gray-800 font-header">{service.title}</h3>
                            <p className="text-sm text-gray-600 font-body">{service.description}</p>
                        </div>
                        <ArrowRight className="w-6 h-6 text-[#ee292e] flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
