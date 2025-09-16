import React, { useState, useEffect } from "react";
import { TeamMember } from "@/api/entities";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function YourCareTeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [activeSection, setActiveSection] = useState('physical');

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    const members = await TeamMember.list();
    setTeamMembers(members);
  };

  const physicalHealthProviders = teamMembers.filter(member => 
    !member.specialization?.toLowerCase().includes('mental') && 
    !member.specialization?.toLowerCase().includes('behavioral') &&
    !member.specialization?.toLowerCase().includes('therapy') &&
    !member.specialization?.toLowerCase().includes('counseling')
  );

  const behavioralHealthProviders = teamMembers.filter(member => 
    member.specialization?.toLowerCase().includes('mental') || 
    member.specialization?.toLowerCase().includes('behavioral') ||
    member.specialization?.toLowerCase().includes('therapy') ||
    member.specialization?.toLowerCase().includes('counseling')
  );

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section + '-health');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ProviderCard = ({ provider }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6 text-center">
        <div className="mb-4">
          <img
            src={provider.image_url || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070"}
            alt={`Dr. ${provider.name}`}
            className="w-32 h-32 rounded-full mx-auto object-cover shadow-md group-hover:shadow-lg transition-shadow"
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 font-header">{provider.name}</h3>
        <p className="text-[#3854a4] font-semibold mb-2 font-body">{provider.title}</p>
        {provider.specialization && (
          <p className="text-gray-600 text-sm mb-3 font-body">{provider.specialization}</p>
        )}
        {provider.credentials && (
          <p className="text-gray-500 text-sm font-body">{provider.credentials}</p>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-header">
            Your Care Team
          </h1>
          <p className="text-lg text-gray-600 mb-8 font-body">
            Meet our experienced healthcare professionals dedicated to providing you with comprehensive, compassionate care.
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('physical')}
              variant={activeSection === 'physical' ? 'default' : 'outline'}
              className={activeSection === 'physical' 
                ? "bg-[#3854a4] hover:bg-[#324a93] text-white rounded-full px-8"
                : "border-[#3854a4] text-[#3854a4] hover:bg-blue-50 rounded-full px-8"
              }
            >
              Physical Health
            </Button>
            <Button
              onClick={() => scrollToSection('behavioral')}
              variant={activeSection === 'behavioral' ? 'default' : 'outline'}
              className={activeSection === 'behavioral' 
                ? "bg-[#ee292e] hover:bg-[#d6252a] text-white rounded-full px-8"
                : "border-[#ee292e] text-[#ee292e] hover:bg-red-50 rounded-full px-8"
              }
            >
              Behavioral Health
            </Button>
          </div>
        </div>
      </section>

      {/* Physical Health Section */}
      <section id="physical-health" className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-header">
              Physical Health Providers
            </h2>
            <p className="text-gray-600 font-body">
              Our medical team specializes in primary care, urgent care, and specialized medical services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {physicalHealthProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
          
          {physicalHealthProviders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-body">Physical health providers will be listed here.</p>
            </div>
          )}
        </div>
      </section>

      {/* Behavioral Health Section */}
      <section id="behavioral-health" className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-header">
              Behavioral Health Providers
            </h2>
            <p className="text-gray-600 font-body">
              Our mental health professionals provide compassionate care for emotional and psychological wellbeing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {behavioralHealthProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
          
          {behavioralHealthProviders.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-body">Behavioral health providers will be listed here.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-header">
            Ready to Meet Your Care Team?
          </h2>
          <p className="text-lg text-gray-600 mb-8 font-body">
            Schedule an appointment today and experience personalized, comprehensive healthcare.
          </p>
          <Button asChild className="bg-[#ee292e] hover:bg-[#d6252a] text-white rounded-full px-8">
            <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer">
              Book An Appointment
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}