
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const insurancePlans = [
  "Aetna", "Anthem Blue Cross Blue Shield", "Cigna", "Humana", "UnitedHealthcare",
  "Medicare", "Medicaid", "Tricare", "BlueCross BlueShield", "Kaiser Permanente",
  "Molina Healthcare", "WellCare", "Ambetter", "Oscar Health", "Bright Health"
];

export default function InsurancePage() {
  return (
    <div className="bg-gray-50">
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-header text-center">
            Accepted Insurance Plans
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center font-body">
            We accept most major insurance plans. Please verify your coverage before your visit.
          </p>

          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 font-header">Major Insurance Plans We Accept</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {insurancePlans.map((plan, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700 font-body">{plan}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-gray-600 mb-6 font-body">
              Don't see your insurance listed? Please call us to verify coverage.
            </p>
            <Button className="bg-[#ee292e] hover:bg-[#d6252a] text-white rounded-full px-8">
              Call (704) 291-9267
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
