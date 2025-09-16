
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, LocateFixed, ExternalLink } from "lucide-react";

const API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // IMPORTANT: Replace with your actual Google Maps API key

const LOCATIONS = [
  { id: "nations-ford", name: "Nations Ford - First Care Medical Clinic", address: "9040 Nations Ford Rd, Charlotte, NC 28273", url: "https://maps.app.goo.gl/2MaJNpnLYYzqszR7A", position: { lat: 35.1343, lng: -80.89233 }},
  { id: "plaza", name: "Plaza - First Care Medical Clinic", address: "2938 The Plaza, Charlotte, NC 28205", url: "https://maps.app.goo.gl/stLUTxbhZiiYxRzd9", position: { lat: 35.23762, lng: -80.79962 }},
  { id: "monroe", name: "Monroe - First Care Medical Clinic", address: "404 S Sutherland Ave, Monroe, NC 28112", url: "https://maps.app.goo.gl/qfHDwy7v1ahG2k8D7", position: { lat: 34.97824, lng: -80.52506 }},
  { id: "albemarle", name: "Albemarle - First Care Medical Clinic", address: "1426 E Main St, Albemarle, NC 28001", url: "https://maps.app.goo.gl/ij2XNLf1Kc2Sp29S8", position: { lat: 35.351185, lng: -80.174908 }},
  { id: "gastonia", name: "Gastonia - First Care Medical Clinic", address: "2450 Aberdeen Blvd, Gastonia, NC 28054", url: "https://maps.app.goo.gl/8Z9LezCjERatJDrE8", position: { lat: 35.26913, lng: -81.13526 }},
  { id: "rock-hill", name: "Rock Hill - First Care Medical Clinic", address: "1462 Constitution Blvd, Rock Hill, SC 29732", url: "https://maps.app.goo.gl/cQgeGrFvAgTvF83p9", position: { lat: 34.9496, lng: -81.04593 }},
  { id: "northlake", name: "Northlake Village - ProMed by First Care", address: "7004 Smith Corners Blvd., Ste. A, Charlotte, NC 28269", url: "https://maps.app.goo.gl/aC9qBtcPUkT7rsLK6", position: { lat: 35.34925, lng: -80.84303 }},
  { id: "concord", name: "Concord - ProMed by First Care", address: "1000 Copperfield Blvd NE, #124, Concord, NC 28025", url: "https://maps.app.goo.gl/Yc9DTmJRKv1BnB3v8", position: { lat: 35.45788, lng: -80.58629 }},
  { id: "salisbury", name: "Salisbury - ProMed by First Care", address: "812 W Innes St, Salisbury, NC 28144", url: "https://maps.app.goo.gl/idhpVqayx7QUpFHK6", position: { lat: 35.67395, lng: -80.47762 }},
];

function LocationCard({ location, onFlyTo }) {
  return (
    <Card className="hover:shadow-lg transition-shadow border-gray-200 mb-3">
      <CardContent className="p-4">
        <h3 className="font-bold text-base mb-1 font-header">{location.name}</h3>
        <p className="text-sm text-gray-600 font-body mb-3">{location.address}</p>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm" onClick={() => onFlyTo(location)} className="text-[#ee292e] border-red-200 hover:bg-red-50 hover:text-[#d6252a]">
            <MapPin className="w-4 h-4 mr-2" /> Show on Map
          </Button>
          <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-[#ee292e]">
            <a href={location.url} target="_blank" rel="noopener noreferrer">
              Directions <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef(new Map());
  const infoWindowRef = useRef(null);

  const filteredLocations = useMemo(() =>
    LOCATIONS.filter(l =>
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.address.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  useEffect(() => {
    if (API_KEY === "YOUR_GOOGLE_MAPS_API_KEY") {
      console.error("Google Maps API key is missing. Please replace 'YOUR_GOOGLE_MAPS_API_KEY'.");
      if(mapRef.current) mapRef.current.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #f3f4f6; color: #dc2626; font-weight: bold;">Please provide a valid Google Maps API Key.</div>';
      return;
    }
    
    const initMap = () => {
      if (!window.google || !mapRef.current) return;

      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 35.3, lng: -80.8 },
        zoom: 9,
        mapTypeControl: false,
        streetViewControl: false,
      });

      infoWindowRef.current = new window.google.maps.InfoWindow();

      LOCATIONS.forEach(loc => {
        const marker = new window.google.maps.Marker({
          position: loc.position,
          map: mapInstance.current,
          title: loc.name,
        });
        
        marker.addListener("click", () => {
          infoWindowRef.current.setContent(`
            <div style="font-family: sans-serif; max-width: 250px;">
              <div style="font-weight: bold; margin-bottom: 4px;">${loc.name}</div>
              <div style="margin-bottom: 8px; color: #666;">${loc.address}</div>
              <a href="${loc.url}" target="_blank" rel="noopener" style="color: #ee292e; font-weight: 600;">Get Directions &rarr;</a>
            </div>
          `);
          infoWindowRef.current.open(mapInstance.current, marker);
        });

        markersRef.current.set(loc.id, marker);
      });
    };

    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=geometry`;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  const flyToLocation = (location) => {
    const marker = markersRef.current.get(location.id);
    if (mapInstance.current && marker) {
      mapInstance.current.panTo(location.position);
      mapInstance.current.setZoom(14);
      window.google.maps.event.trigger(marker, 'click');
    }
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      if (mapInstance.current) {
        mapInstance.current.setCenter(userLocation);
        mapInstance.current.setZoom(12);

        if (window.google && window.google.maps.geometry) {
          let nearestMarker = null;
          let minDistance = Infinity;

          markersRef.current.forEach((marker, id) => {
            const locationPosition = marker.getPosition();
            const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
              new window.google.maps.LatLng(userLocation),
              locationPosition
            );

            if (distance < minDistance) {
              minDistance = distance;
              nearestMarker = marker;
            }
          });

          if (nearestMarker) {
              setTimeout(() => {
                  mapInstance.current.panTo(nearestMarker.getPosition());
                  mapInstance.current.setZoom(14);
                  window.google.maps.event.trigger(nearestMarker, 'click');
              }, 1000)
          }
        }
      }
    }, () => {
      alert("Unable to retrieve your location.");
    });
  };

  return (
    <div className="bg-gray-50">
      {/* SECTION 1: TOP */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-header">Our Locations</h1>
          <p className="text-lg text-gray-600 mb-8 font-body">
            We have multiple convenient locations across North Carolina and South Carolina to serve you better.
          </p>
          
          <div className="bg-blue-100 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-3 font-header">Need Help Getting Here?</h2>
            <p className="text-gray-700 font-body">
              <strong>Book a Ride:</strong> If you need help getting to one of our offices, just give us a call!
              <br />
              We are excited to welcome you: <a href="tel:704-291-9267" className="text-[#ee292e] hover:underline font-semibold">(704) 291-9267</a>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: MIDDLE */}
      <section className="py-12 bg-gray-50 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '600px' }}>
            <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] h-full">
              {/* Sidebar */}
              <aside className="bg-white border-r border-gray-200 flex flex-col overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="text-lg font-bold font-header">Find a Location</h3>
                  <p className="text-sm text-gray-600 font-body">
                    {filteredLocations.length} clinics found. Click a clinic to see it on the map.
                  </p>
                </div>
                
                <div className="p-4 border-b border-gray-200 space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search by name or address..."
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" onClick={handleUseMyLocation} className="w-full">
                    <LocateFixed className="w-4 h-4 mr-2" /> Use My Location
                  </Button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50/70">
                  {filteredLocations.map(location => (
                    <LocationCard
                      key={location.id}
                      location={location}
                      onFlyTo={flyToLocation}
                    />
                  ))}
                </div>
              </aside>
              
              {/* Map */}
              <main ref={mapRef} className="w-full h-full overflow-hidden"></main>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 3: BOTTOM (Footer from Layout.js will render here) */}
    </div>
  );
}
