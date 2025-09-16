import Layout from "./Layout.jsx";

import Services from "./Services";

import About from "./About";

import Contact from "./Contact";

import Locations from "./Locations";

import Home from "./Home";

import ServiceDetail from "./ServiceDetail";

import Insurance from "./Insurance";

import MedicalRecords from "./MedicalRecords";

import ProviderNote from "./ProviderNote";

import FAQs from "./FAQs";

import YourCareTeam from "./YourCareTeam";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Services: Services,
    
    About: About,
    
    Contact: Contact,
    
    Locations: Locations,
    
    Home: Home,
    
    ServiceDetail: ServiceDetail,
    
    Insurance: Insurance,
    
    MedicalRecords: MedicalRecords,
    
    ProviderNote: ProviderNote,
    
    FAQs: FAQs,
    
    YourCareTeam: YourCareTeam,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Services />} />
                
                
                <Route path="/Services" element={<Services />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Locations" element={<Locations />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/ServiceDetail" element={<ServiceDetail />} />
                
                <Route path="/Insurance" element={<Insurance />} />
                
                <Route path="/MedicalRecords" element={<MedicalRecords />} />
                
                <Route path="/ProviderNote" element={<ProviderNote />} />
                
                <Route path="/FAQs" element={<FAQs />} />
                
                <Route path="/YourCareTeam" element={<YourCareTeam />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}