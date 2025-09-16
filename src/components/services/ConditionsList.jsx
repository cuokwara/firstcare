
import React from "react";
import { Check } from "lucide-react";

export default function ConditionsList({ conditions, title = "Conditions We Treat" }) {
  if (!conditions || conditions.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 font-header">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {conditions.map((condition, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#ee292e] mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-body">{condition}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
