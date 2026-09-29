import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PickupModal from './components/PickupModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import TrackingPage from './pages/TrackingPage';
import CourierPage from './pages/CourierPage';
import ExpressPage from './pages/ExpressPage';
import EcommercePage from './pages/EcommercePage';
import FreightPage from './pages/FreightPage';
import PickupPage from './pages/PickupPage';
import CorporatePage from './pages/CorporatePage';
import CoveragePage from './pages/CoveragePage';
import CalculatorPage from './pages/CalculatorPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // Default theme is explicitly Dark Mode (true)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('chowra_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  const [pickupModalOpen, setPickupModalOpen] = useState(false);
  const [pickupModalData, setPickupModalData] = useState(null);

  // Sync dark mode class on html element and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('chowra_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('chowra_theme', 'light');
    }
  }, [darkMode]);

  const handleOpenPickupModal = () => {
    setPickupModalData(null);
    setPickupModalOpen(true);
  };

  const handleBookWithQuote = (quoteData) => {
    setPickupModalData(quoteData);
    setPickupModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col justify-between transition-colors duration-300 font-['Plus_Jakarta_Sans'] ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}>
        
        {/* Persistent Global Header & Nav */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenPickupModal={handleOpenPickupModal}
        />

        {/* Multi-Page Client-Side Routes */}
        <main className="flex-1">
          <Routes>
            {/* 1. Home Page */}
            <Route 
              path="/" 
              element={<HomePage onOpenPickupModal={handleOpenPickupModal} />} 
            />

            {/* 2. Live Tracking Page */}
            <Route path="/track" element={<TrackingPage />} />
            <Route path="/track/:trackingId" element={<TrackingPage />} />

            {/* 3. Shipping Services Pages */}
            <Route 
              path="/services/courier" 
              element={<CourierPage onOpenPickupModal={handleOpenPickupModal} />} 
            />
            <Route 
              path="/services/express" 
              element={<ExpressPage onOpenPickupModal={handleOpenPickupModal} />} 
            />
            <Route 
              path="/services/ecommerce" 
              element={<EcommercePage onOpenPickupModal={handleOpenPickupModal} />} 
            />
            <Route 
              path="/services/freight" 
              element={<FreightPage onOpenPickupModal={handleOpenPickupModal} />} 
            />

            {/* 4. Standalone Doorstep Pickup Workflow Page */}
            <Route 
              path="/pickup" 
              element={<PickupPage onOpenPickupModal={handleOpenPickupModal} />} 
            />

            {/* 5. Corporate B2B Solutions Page */}
            <Route 
              path="/corporate" 
              element={<CorporatePage onOpenPickupModal={handleOpenPickupModal} />} 
            />

            {/* 6. Global Network Coverage Map Page */}
            <Route path="/coverage" element={<CoveragePage />} />

            {/* 7. Rate Calculator & SLA Estimator Page */}
            <Route 
              path="/rate-calculator" 
              element={<CalculatorPage onBookWithQuote={handleBookWithQuote} />} 
            />

            {/* 8. Why Choose Chowra Logistics Page */}
            <Route path="/why-us" element={<WhyUsPage />} />

            {/* 9. Contact & Support Directory Page */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Catch-all Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Global Footer */}
        <Footer onOpenPickupModal={handleOpenPickupModal} />

        {/* Global Doorstep Pickup Booking Modal */}
        <PickupModal
          isOpen={pickupModalOpen}
          onClose={() => setPickupModalOpen(false)}
          initialData={pickupModalData}
        />
      </div>
    </Router>
  );
}
