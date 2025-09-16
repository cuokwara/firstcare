
import React from "react";
import { Button } from "@/components/ui/button";

export default function ServiceHero({ service }) {
  if (!service) return null;

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-sm font-semibold text-[#ee292e] mb-2 font-body">Services</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-header">
              {service.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6 font-header">
              {service.subtitle}
            </h2>
            <p className="text-gray-600 mb-6 font-body">
              {service.description}
            </p>
            <p className="text-gray-800 mb-6 font-body italic">
              {service.callToAction}
            </p>
            <Button asChild className="bg-[#ee292e] hover:bg-[#d6252a] text-white rounded-full px-8">
              <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer">
                {service.buttonText}
              </a>
            </Button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070" 
              alt="Healthcare professional with patient" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
