
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans including Aetna, Anthem Blue Cross Blue Shield, Cigna, Humana, UnitedHealthcare, Medicare, and Medicaid. Please call us to verify your specific coverage."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "Yes! We welcome walk-ins Monday-Friday 9:00AM - 6:00PM and Saturday 9:00AM - 5:00PM. However, we recommend scheduling an appointment to minimize wait times."
  },
  {
    question: "What should I bring to my appointment?",
    answer: "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records from other providers."
  },
  {
    question: "How can I access my medical records?",
    answer: "You can access your medical records through our patient portal or by requesting them through our medical records request form. Processing typically takes 3-5 business days."
  },
  {
    question: "Do you offer telehealth appointments?",
    answer: "Yes, we offer telemedicine appointments for many conditions including follow-up visits, prescription refills, and certain urgent care needs."
  },
  {
    question: "What are your hours of operation?",
    answer: "Monday-Friday: 9:00AM - 6:00PM, Saturday: 9:00AM - 5:00PM, Sunday: Closed. We're also closed on major holidays."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule online through our booking system, call us at (704) 291-9267, or walk in during our operating hours."
  },
  {
    question: "Do you provide same-day appointments?",
    answer: "Yes, we offer same-day appointments when available. Call before 2 PM for the best chance of same-day availability."
  },
  {
    question: "What services do you provide for children?",
    answer: "We provide comprehensive pediatric care including well-child visits, immunizations, sick visits, and urgent care for children of all ages."
  },
  {
    question: "Can I get lab work done at your clinic?",
    answer: "Yes, we have on-site lab services for most common tests including blood work, urinalysis, and rapid testing for quick results."
  }
];

export default function FAQsPage() {
  const [openItems, setOpenItems] = React.useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="bg-gray-50">
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#ee292e] mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-header">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 font-body">
              Find answers to common questions about our services, appointments, and policies.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full"
                    onClick={() => toggleItem(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 text-left font-header">
                          {faq.question}
                        </h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            openItems.has(index) ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <p className="text-gray-600 font-body">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4 font-body">Still have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:704-291-9267"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ee292e] text-white rounded-full hover:bg-[#d6252a] transition-colors"
              >
                Call (704) 291-9267
              </a>
              <a
                href="mailto:callcenter@firstcarecanhelp.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#ee292e] text-[#ee292e] rounded-full hover:bg-red-50 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
