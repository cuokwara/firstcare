

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Heart, Phone, Clock, MapPin, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { key: "Primary_Care", title: "Primary Care", description: "Comprehensive health management and checkups." },
  { key: "Urgent_Care", title: "Urgent Care", description: "Immediate care for non-life-threatening issues." },
  { key: "Mental_Health", title: "Mental Health", description: "Confidential support for emotional well-being." },
  { key: "Pediatric_Care", title: "Pediatric Care", description: "Specialized healthcare for children." },
  { key: "Telemedicine", title: "Telemedicine", description: "Virtual consultations from the comfort of home." },
  { key: "All_Services", title: "See All Services", description: "Explore our full range of medical services." },
];

const whoWeAre = [
  { title: "Our Standard of Care", url: createPageUrl("About"), description: "The principles that guide our practice." },
  { title: "Your Care Team", url: createPageUrl("YourCareTeam"), description: "Meet our experienced medical professionals." },
  { title: "Locations", url: createPageUrl("Locations"), description: "Find a clinic near you." },
];

const quickLinks = [
  { title: "Book an Appointment", url: "https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2", description: "Schedule your visit online", external: true },
  { title: "Patient Portal", url: "https://mycw108.ecwcloud.com/portal14729/jsp/100mp/login_otp.jsp", description: "Access your medical records", external: true },
  { title: "Pay your Bill", url: "https://mycw108.ecwcloud.com/portal14729/jsp/100mp/login_otp.jsp", description: "Make a payment online", external: true },
  { title: "Contact Us", url: createPageUrl("Contact"), description: "Get in touch with our team" },
  { title: "Accepted Insurance", url: createPageUrl("Insurance"), description: "View accepted insurance plans" },
  { title: "Request Medical Records", url: createPageUrl("MedicalRecords"), description: "Request your medical records" },
  { title: "Request a Provider Note", url: createPageUrl("ProviderNote"), description: "Request a note from your provider" },
  { title: "FAQs", url: createPageUrl("FAQs"), description: "Frequently asked questions" },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);

  React.useEffect(() => {
    document.title = "First Care Medical Clinic | Your Primary Care Partner in NC & SC";
  }, []);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800&display=swap');
          
          * {
            --font-georgia: 'Georgia', 'Times New Roman', serif;
            --font-open-sans: 'Open Sans', sans-serif;
          }
          
          body, p, span, div, a, button, input, textarea, select {
            font-family: var(--font-open-sans);
          }
          
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-georgia);
          }
        `}
      </style>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Toggle (Left) */}
            <div className="md:hidden">
                <button
                className="p-2 -ml-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                <Menu className="w-6 h-6" />
                </button>
            </div>
            
            {/* Logo */}
            <div className="flex-1 md:flex-initial">
              <Link to={createPageUrl("Home")}>
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c42f9d2467a3929932fc81/0ab239ebf_FCMCLogo1.png" alt="First Care Medical Clinic Logo" className="h-12" />
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex items-center space-x-8">
                <Link to={createPageUrl("Locations")} className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                  Find a Location
                </Link>
                
                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                    onClick={() => handleDropdownToggle('services')}
                  >
                    Services
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {activeDropdown === 'services' && (
                    <div className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="grid grid-cols-2 gap-3 p-4">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            to={service.key === "All_Services" ? createPageUrl("Services") : createPageUrl(`ServiceDetail?service=${service.key}`)}
                            className="block p-3 rounded-md hover:bg-gray-50"
                            onClick={closeDropdown}
                          >
                            <div className="text-sm font-bold leading-none font-header">{service.title}</div>
                            <p className="text-sm leading-snug text-gray-600 font-body mt-1">{service.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Who We Are Dropdown */}
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                    onClick={() => handleDropdownToggle('about')}
                  >
                    Who We Are
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {activeDropdown === 'about' && (
                    <div className="absolute top-full left-0 mt-2 w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="p-4 space-y-3">
                        {whoWeAre.map((item) => (
                          <Link
                            key={item.title}
                            to={item.url}
                            className="block p-3 rounded-md hover:bg-gray-50"
                            onClick={closeDropdown}
                          >
                            <div className="text-sm font-bold leading-none font-header">{item.title}</div>
                            <p className="text-sm leading-snug text-gray-600 font-body mt-1">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Links Dropdown */}
                <div className="relative">
                  <button
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                    onClick={() => handleDropdownToggle('links')}
                  >
                    Quick Links
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  {activeDropdown === 'links' && (
                    <div className="absolute top-full left-0 mt-2 w-[300px] bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="p-4 space-y-3">
                        {quickLinks.map((item) => (
                          item.external ? (
                            <a
                              key={item.title}
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-3 rounded-md hover:bg-gray-50"
                              onClick={closeDropdown}
                            >
                              <div className="text-sm font-bold leading-none font-header">{item.title}</div>
                              <p className="text-sm leading-snug text-gray-600 font-body mt-1">{item.description}</p>
                            </a>
                          ) : (
                            <Link
                              key={item.title}
                              to={item.url}
                              className="block p-3 rounded-md hover:bg-gray-50"
                              onClick={closeDropdown}
                            >
                              <div className="text-sm font-bold leading-none font-header">{item.title}</div>
                              <p className="text-sm leading-snug text-gray-600 font-body mt-1">{item.description}</p>
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button asChild className="bg-[#ee292e] hover:bg-[#d6252a] text-white rounded-full px-6">
                <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer">Book An Appointment</a>
              </Button>
            </div>
            
            {/* Mobile CTA (Right) */}
            <div className="md:hidden">
              <Button asChild size="sm" className="bg-[#ee292e] hover:bg-[#d6252a] text-white rounded-full px-4">
                <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer">Book</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Click overlay to close dropdown */}
        {activeDropdown && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={closeDropdown}
          />
        )}

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
               <Link to={createPageUrl("Home")}>
                 <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c42f9d2467a3929932fc81/0ab239ebf_FCMCLogo1.png" alt="First Care Medical Clinic Logo" className="h-12" />
               </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <Link to={createPageUrl("Home")} className="py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to={createPageUrl("Locations")} className="py-2" onClick={() => setMobileMenuOpen(false)}>Find a Location</Link>
              <Link to={createPageUrl("Services")} className="py-2" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to={createPageUrl("About")} className="py-2" onClick={() => setMobileMenuOpen(false)}>Who We Are</Link>
              
              <div className="mt-2 mb-1 text-base font-semibold text-gray-800">Quick Links</div>
              <div className="flex flex-col gap-2 pl-2 text-base">
                {quickLinks.map((item) => (
                  item.external ? (
                    <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-[#ee292e]" onClick={() => setMobileMenuOpen(false)}>
                      {item.title}
                    </a>
                  ) : (
                    <Link key={item.title} to={item.url} className="block text-gray-700 hover:text-[#ee292e]" onClick={() => setMobileMenuOpen(false)}>
                      {item.title}
                    </Link>
                  )
                ))}
              </div>

              <Button asChild className="bg-[#ee292e] hover:bg-[#d6252a] text-white rounded-full px-6 mt-4 w-full">
                <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Book An Appointment</a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <div className="bg-red-600 h-px"></div>

      <main className="flex-grow">{children}</main>

      <div className="bg-red-600 h-px"></div>

      <footer className="bg-[#8aa4ef] text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="mb-4">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c42f9d2467a3929932fc81/0ab239ebf_FCMCLogo1.png" alt="First Care Medical Clinic Logo" className="h-12" />
              </div>
              <p className="text-gray-800 text-sm">
                Providing comprehensive primary care services with compassion and excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2 text-sm">
                <Link to={createPageUrl("About")} className="block text-gray-800 hover:text-black">About Us</Link>
                <Link to={createPageUrl("Services")} className="block text-gray-800 hover:text-black">Our Services</Link>
                <Link to={createPageUrl("Locations")} className="block text-gray-800 hover:text-black">Find a Location</Link>
                <a href="https://healow.com/apps/practice/first-care-medical-clinic-monroe-monroe-nc-17123?v=2&t=1" target="_blank" rel="noopener noreferrer" className="block text-gray-800 hover:text-black">Book an Appointment</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm text-gray-800">
                <p><span className="font-semibold">Hours:</span><br/>Mon-Fri 9AM-6PM, Sat 9AM-5PM</p>
                <p><span className="font-semibold">Call:</span> 704-291-9267</p>
                <p><span className="font-semibold">Email:</span> callcenter@firstcarecanhelp.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-black/20 mt-8 pt-8 text-center text-xs text-gray-800">
            <p>&copy; 2024 First Care Medical Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

