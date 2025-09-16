
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // This import is no longer needed for the appointment links, but `createPageUrl` is still imported.
import { createPageUrl } from "@/utils"; // This utility is no longer used for the appointment links.
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Stethoscope,
  AlertCircle,
  Car
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Call us for appointments",
      color: "text-[#3854a4]",
      bgColor: "bg-blue-100"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@firstcaremedical.com",
      subtitle: "Send us a message",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Healthcare Ave",
      subtitle: "Medical City, MC 12345",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: AlertCircle,
      title: "Emergency",
      details: "Call 911",
      subtitle: "For life-threatening emergencies",
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  const hours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Holidays", hours: "Closed" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help you with all your healthcare needs. Get in touch with us today.
          </p>
          <Button asChild size="lg" className="bg-[#3854a4] hover:bg-[#324a93] px-8">
            <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Appointment
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Office Hours */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-[#3854a4]" />
                  <h2 className="text-2xl font-bold text-gray-900">Office Hours</h2>
                </div>
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-[#3854a4] mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900">Same-Day Appointments</p>
                      <p className="text-sm text-blue-700">Call before 2 PM for same-day availability</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Getting Here */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Car className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Getting Here</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">By Car</h3>
                    <p className="text-gray-600">
                      Free parking available in our lot. Enter from Healthcare Ave.
                      Handicap accessible spaces available near the entrance.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Public Transportation</h3>
                    <p className="text-gray-600">
                      Bus routes 15 and 22 stop directly in front of our building.
                      Metro station is a 5-minute walk.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                    <p className="text-gray-600">
                      Our facility is fully wheelchair accessible with ramps,
                      elevators, and accessible restrooms.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Medical City for your convenience
            </p>
          </div>
          
          <div className="bg-gray-300 rounded-2xl h-96 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1576395500603-9a4f61f58c73?q=80&w=2070" alt="Map to the clinic" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Schedule your appointment today and experience compassionate, comprehensive healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#3854a4] hover:bg-gray-100 px-8">
              <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer">Book Appointment</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
