
import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function HelpSection({ serviceName }) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-header">
          Need More Help?
        </h2>
        <p className="text-gray-600 mb-8 font-body">
          {`If you have a question about our ${serviceName ? serviceName.toLowerCase() : 'services'}, please feel free to reach out via phone or email.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="border-[#ee292e] text-[#ee292e] hover:bg-red-50 rounded-full px-6">
            <Phone className="w-4 h-4 mr-2" />
            Call 704-291-9267
          </Button>
          <Button variant="outline" className="border-[#ee292e] text-[#ee292e] hover:bg-red-50 rounded-full px-6">
            <Mail className="w-4 h-4 mr-2" />
            Email Us
          </Button>
        </div>
      </div>
    </section>
  );
}
