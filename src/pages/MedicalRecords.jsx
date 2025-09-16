
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, Download, Mail } from "lucide-react";

export default function MedicalRecordsPage() {
  return (
    <div className="bg-gray-50">
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-header text-center">
            Request Medical Records
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center font-body">
            Need copies of your medical records? Fill out the form below and we'll process your request.
          </p>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <Input type="date" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input placeholder="(555) 123-4567" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Records Requested</label>
                  <Textarea 
                    placeholder="Please specify what records you need (e.g., complete medical history, lab results from specific dates, etc.)"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of Request</label>
                  <Input placeholder="e.g., New doctor, insurance, personal records" />
                </div>

                <Button className="w-full bg-[#ee292e] hover:bg-[#d6252a] text-white">
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Records Request
                </Button>
              </form>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Processing Information</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Requests typically processed within 3-5 business days</li>
                  <li>• Records can be sent via secure email or mail</li>
                  <li>• Valid ID may be required for pickup</li>
                  <li>• Some fees may apply for extensive records</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
