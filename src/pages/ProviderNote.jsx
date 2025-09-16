
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ClipboardCheck } from "lucide-react";

export default function ProviderNotePage() {
  return (
    <div className="bg-gray-50">
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-header text-center">
            Request a Provider Note
          </h1>
          <p className="text-lg text-gray-600 mb-8 text-center font-body">
            Need a note from your healthcare provider? Complete the form below with your request details.
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

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type of Note Requested</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select note type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="work-excuse">Work Excuse Note</SelectItem>
                      <SelectItem value="school-excuse">School Excuse Note</SelectItem>
                      <SelectItem value="fitness-duty">Fitness for Duty</SelectItem>
                      <SelectItem value="return-work">Return to Work</SelectItem>
                      <SelectItem value="medical-clearance">Medical Clearance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Visit</label>
                  <Input type="date" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Details</label>
                  <Textarea 
                    placeholder="Please provide details about your note request, including specific dates, restrictions, or accommodations needed"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Employer/School Name (if applicable)</label>
                  <Input placeholder="Name of employer or school" />
                </div>

                <Button className="w-full bg-[#ee292e] hover:bg-[#d6252a] text-white">
                  <ClipboardCheck className="w-4 h-4 mr-2" />
                  Submit Note Request
                </Button>
              </form>

              <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold text-yellow-900 mb-2">Important Notes</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Provider notes can only be issued for patients we have treated</li>
                  <li>• Requests processed within 1-2 business days</li>
                  <li>• Valid photo ID may be required for pickup</li>
                  <li>• Some employers/schools have specific note requirements</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
