
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Stethoscope,
  Smile,
  ShieldCheck,
  Baby,
  FlaskConical,
  Syringe,
  PlayCircle,
  MapPin,
  ArrowRight
} from "lucide-react";

// Mock Data - replace with entity fetches later
const services = [
  { icon: Smile, title: "Primary Care", tagline: "I want a checkup" },
  { icon: Heart, title: "Urgent Care", tagline: "I need care today" },
  { icon: Stethoscope, title: "Illness Treatment", tagline: "I'm feeling sick" },
  { icon: ShieldCheck, title: "Mental Health", tagline: "I need support" },
  { icon: Baby, title: "Pediatric Care", tagline: "My child needs care" },
  { icon: FlaskConical, title: "Testing & Screening", tagline: "I need a test" },
  { icon: Syringe, title: "Vaccines", tagline: "I need a vaccine" },
];

const locations = [
    { 
        name: "Nations Ford - First Care Medical Clinic",
        address: "9040 Nations Ford Road, Charlotte, NC 28273",
        mapUrl: "https://maps.app.goo.gl/2MaJNpnLYYzqszR7A",
    },
    { 
        name: "Plaza - First Care Medical Clinic",
        address: "2938 The Plaza, Charlotte, NC 28215",
        mapUrl: "https://maps.app.goo.gl/stLUTxbhZiiYxRzd9",
    },
    { 
        name: "Monroe - First Care Medical Clinic",
        address: "404 S Sutherland Ave, Monroe, NC 28112",
        mapUrl: "https://maps.app.goo.gl/qfHDwy7v1ahG2k8D7",
    },
    { 
        name: "Rock Hill - First Care Medical Clinic",
        address: "1462 Constitution Blvd, Rock Hill, SC 29732",
        mapUrl: "https://maps.app.goo.gl/cQgeGrFvAgTvF83p9",
    },
];

const testimonials = [
  { text: "First Care Medical Clinic is a great option for anyone. They were able to get me in on my checkup last week.", author: "Patient 1" },
  { text: "The staff was friendly and professional. I felt very comfortable during my entire visit.", author: "Patient 2" },
  { text: "Finding a location and booking an appointment was incredibly easy. Highly recommend!", author: "Patient 3" },
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-header">
            Experience Care That Grows With You.
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Button variant="outline" className="border-[#ee292e] text-[#ee292e] hover:bg-red-50 hover:text-[#ee292e] rounded-full font-body" asChild>
                <Link to={createPageUrl("Locations")}>Find a Location</Link>
            </Button>
            <Button variant="outline" className="border-[#ee292e] text-[#ee292e] hover:bg-red-50 hover:text-[#ee292e] rounded-full font-body" asChild>
                <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer">Book an Appointment</a>
            </Button>
            <Button variant="outline" className="border-[#ee292e] text-[#ee292e] hover:bg-red-50 hover:text-[#ee292e] rounded-full font-body">Find Virtual Care</Button>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/3fmOU7GrkBQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* How we can help Section */}
      <section className="py-12 md:py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 font-header">How we can help</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {services.map((service) => (
              <Link to={createPageUrl("Services")} key={service.title} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center">
                <service.icon className="w-8 h-8 text-[#ee292e] mb-2" />
                <span className="font-semibold text-gray-800 font-header">{service.title}</span>
                <span className="text-sm text-gray-500 font-body">{service.tagline}</span>
              </Link>
            ))}
            <Link to={createPageUrl("Services")} className="col-span-2 md:col-span-1 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center flex items-center justify-center font-semibold text-[#ee292e] font-body">
              See All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          <div className="text-center">
             <Button className="bg-[#3854a4] hover:bg-[#324a93] text-white rounded-full px-8 font-body">Check Your Coverage</Button>
          </div>
        </div>
      </section>

      {/* Where to find us Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-header">Where to find us</h2>
              <div className="mb-4 font-body">
                  <p className="font-semibold">Walk-ins Welcome - No Appointment Required</p>
                  <p className="text-sm text-gray-600">Monday-Friday 9:00AM - 6:00PM</p>
                  <p className="text-sm text-gray-600">Saturday 9:00AM - 5:00PM</p>
                  <p className="text-sm text-gray-600">Closed on Sundays</p>
              </div>
              
              <div className="bg-blue-100 rounded-lg p-3 mb-6">
                <p className="text-gray-700 font-body">
                  <strong>Book a Ride:</strong> If you need help getting to one of our offices, just give us a call! We are excited to welcome you: <a href="tel:704-291-9267" className="text-[#ee292e] hover:underline font-semibold">(704) 291-9267</a>
                </p>
              </div>
              
              <div className="rounded-lg overflow-hidden h-64 md:h-80">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d418298.3986884865!2d-81.1154561!3d35.203348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20NC!5e0!3m2!1sen!2sus!4v1672583848638!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>
            </div>
            <div className="space-y-4">
              {locations.map(loc => (
                  <Card key={loc.name}>
                      <CardContent className="p-4">
                          <h3 className="font-bold font-header">{loc.name}</h3>
                          <p className="text-sm text-gray-600 font-body">{loc.address}</p>
                          <div className="flex gap-4 mt-2">
                             <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer" className="text-[#ee292e] font-semibold text-sm font-body">Book a Visit</a>
                             <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[#ee292e] font-semibold text-sm font-body">View More</a>
                          </div>
                      </CardContent>
                  </Card>
              ))}
               <Link to={createPageUrl("Locations")} className="font-semibold text-[#ee292e] flex items-center font-body">
                    See All Locations <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 font-header">Hear from our Patients</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.author} className="bg-white">
                <CardContent className="p-6">
                  <p className="text-gray-600 italic font-body">"{testimonial.text}"</p>
                  <p className="font-semibold text-right mt-4 font-body">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
