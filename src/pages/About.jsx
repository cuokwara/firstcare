
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";

const principles = [
    {
        title: "You Are The Top Priority",
        content: "The patient is the most important person at First Care Medical Clinic. The patient needs and well-being are the absolute top priority in every decision and action we take. Everything we do must be in service of the patient."
    },
    {
        title: "Responsibility for Patient Health",
        content: "There is no place for patient blame. There is no concept of 'patient non-compliance' at First Care Medical Clinic. Instead, we see it as our professional duty to consistently meet the patients needs. If a patient misses an appointment, it is our responsibility to reschedule. If we do not hear from a patient, it is our responsibility to keep calling to make contact. If a patient does not talk openly, it is our responsibility to create an environment where a patient feels comfortable sharing. We are dedicated to doing everything possible to provide patients with the highest quality of care."
    },
    {
        title: "It's Our Privilege to Serve",
        content: "Patients choose to come to First Care Medical Clinic for care. It is a privilege to have the opportunity to take care of a patient’s health. Patients can go anywhere, so we are deeply grateful for every individual who chooses to walk into one of our clinics."
    },
    {
        title: "Behavioral Health is Medical Health",
        content: "Addiction is a medical issue. Depression is a medical issue. Behavioral health issues are not moral failings. We unequivocally recognize behavioral health conditions as medical problems. Behavioral health challenges are health challenges that deserve the same level of attention, understanding, and evidence-based treatment as any other physical health condition."
    },
    {
        title: "Constant Patient Engagement",
        content: "We will call patients, text patients, and email patients. Delivering best-in-class healthcare requires consistent, constant patient engagement. We are committed to actively listening, understanding your perspective, and consistently working to earn your trust. Patient trust is earned not given. We have to earn it."
    }
]

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-[#ee292e] font-semibold mb-2">A Promise</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Standard of Care</h1>
                        <p className="text-gray-600">Our standard of care is built upon five fundamental principles that guide every patient encounter, every decision, and every treatment plan. These principles represent our unwavering commitment to excellence and our dedication to transforming healthcare delivery.</p>
                    </div>
                    <div>
                        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c42f9d2467a3929932fc81/cfc9d5679_WEB-ABOUTUS.png" alt="First Care team" className="rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </section>

        <section className="py-12 md:py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                {principles.map(principle => (
                    <div key={principle.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <h2 className="text-xl font-bold text-[#ee292e] mb-2">{principle.title}</h2>
                        <p className="text-gray-700">{principle.content}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">We would love to hear from you! Please feel free to reach out via phone or email.</p>
                <div className="flex justify-center gap-4">
                     <Button asChild className="bg-[#ee292e] hover:bg-[#d6252a] text-white rounded-full px-6">
                        <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer">Book An Appointment</a>
                    </Button>
                    <Button variant="outline" className="rounded-full px-6">Call Us</Button>
                </div>
            </div>
        </section>
    </div>
  );
}
