import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Phone, Mail, Globe, Moon, Sun, Menu, X, Package, 
  ChevronDown, Truck, ArrowRight, Zap, ShoppingBag, Plane, Building2, MapPin, Award
} from 'lucide-react';

export default function Header({ darkMode, setDarkMode, onOpenPickupModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD ($)');
  const [language, setLanguage] = useState('EN');
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  const currencies = ['USD ($)', 'EUR (€)', 'GBP (£)', 'INR (₹)', 'AED (د.إ)', 'CAD ($)'];
  const languages = ['EN', 'ES', 'FR', 'DE', 'ZH'];

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300">
      
      {/* Top Utility Bar */}
      <div className={`${darkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-900 text-slate-200 border-slate-800'} text-xs border-b py-2 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
          
          {/* Left Contact Details */}
          <div className="flex items-center gap-4 flex-wrap text-slate-300 whitespace-nowrap">
            <a href="tel:+18005552469" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors shrink-0">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="font-semibold">+1 (800) 555-CHOWRA</span>
            </a>

            <span className="hidden md:inline text-slate-700">|</span>

            <a href="mailto:support@chowralogistics.com" className="hidden sm:flex items-center gap-1.5 hover:text-emerald-400 transition-colors shrink-0">
              <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>support@chowralogistics.com</span>
            </a>

            <span className="hidden lg:inline text-slate-700">|</span>

            <div className="hidden lg:flex items-center gap-1.5 text-emerald-400 font-medium shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>24/7 Global Control Active</span>
            </div>
          </div>

          {/* Right Utility Options */}
          <div className="flex items-center gap-3 text-slate-300 whitespace-nowrap shrink-0">
            
            {/* Currency Selector */}
            <div className="relative">
              <button 
                onClick={() => setCurrencyDropdown(!currencyDropdown)} 
                className="flex items-center gap-1 hover:text-emerald-400 transition-colors py-0.5"
              >
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
              {currencyDropdown && (
                <div className="absolute right-0 mt-1 w-28 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl py-1 z-50 text-white">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => { setCurrency(curr); setCurrencyDropdown(false); }}
                      className="w-full text-left px-3 py-1.5 text-xs hover:bg-slate-700 hover:text-emerald-400"
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-slate-700">|</span>

            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent hover:text-emerald-400 cursor-pointer focus:outline-none text-xs text-white"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang} className="bg-slate-800 text-white">{lang}</option>
                ))}
              </select>
            </div>

            <span className="text-slate-700">|</span>

            {/* Theme Switcher */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded-full hover:bg-slate-800 text-amber-400 hover:text-amber-300 transition-colors"
              title="Toggle Light/Dark Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-300" />}
            </button>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`${darkMode ? 'bg-slate-950/95 border-slate-800/80 text-white' : 'bg-white/95 border-slate-200 text-slate-900'} backdrop-blur-md border-b shadow-md transition-colors`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white shrink-0">
              <Truck className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight leading-none font-['Outfit'] whitespace-nowrap">
                CHOWRA <span className="text-emerald-500 font-normal">LOGISTICS</span>
              </div>
              <div className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold mt-0.5 whitespace-nowrap ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                &amp; COURIERS LIMITED
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-7 text-xs font-semibold">
            
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'text-emerald-500 font-bold border-b-2 border-emerald-500 pb-1' : 'hover:text-emerald-500 transition-colors pb-1'}
            >
              Home
            </NavLink>

            <NavLink 
              to="/track" 
              className={({ isActive }) => isActive ? 'text-emerald-500 font-bold border-b-2 border-emerald-500 pb-1' : 'hover:text-emerald-500 transition-colors pb-1'}
            >
              Track Shipment
            </NavLink>

            {/* Dropdown 1: Shipping Services */}
            <div 
              className="relative" 
              onMouseEnter={() => setServicesDropdown(true)} 
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors py-1">
                <span>Shipping Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {servicesDropdown && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className={`${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-2xl'} border rounded-2xl p-2 space-y-1 backdrop-blur-xl`}>
                    <Link 
                      to="/services/courier" 
                      onClick={() => setServicesDropdown(false)}
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
                    >
                      <Globe className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-bold text-xs">Courier Services</div>
                        <div className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Domestic &amp; International</div>
                      </div>
                    </Link>

                    <Link 
                      to="/services/express" 
                      onClick={() => setServicesDropdown(false)}
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
                    >
                      <Zap className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-bold text-xs">Express Delivery</div>
                        <div className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>3-Hour City Dispatch</div>
                      </div>
                    </Link>

                    <Link 
                      to="/services/ecommerce" 
                      onClick={() => setServicesDropdown(false)}
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
                    >
                      <ShoppingBag className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-bold text-xs">E-Commerce Hub</div>
                        <div className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Fulfillment &amp; COD Payouts</div>
                      </div>
                    </Link>

                    <Link 
                      to="/services/freight" 
                      onClick={() => setServicesDropdown(false)}
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
                    >
                      <Plane className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-bold text-xs">Freight &amp; Cargo</div>
                        <div className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Air, Ocean &amp; Cold Chain</div>
                      </div>
                    </Link>

                    <Link 
                      to="/pickup" 
                      onClick={() => setServicesDropdown(false)}
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
                    >
                      <Truck className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-bold text-xs">Doorstep Collection</div>
                        <div className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>On-Demand Pickup</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown 2: Solutions & Network */}
            <div 
              className="relative" 
              onMouseEnter={() => setSolutionsDropdown(true)} 
              onMouseLeave={() => setSolutionsDropdown(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors py-1">
                <span>Solutions &amp; Network</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {solutionsDropdown && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className={`${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800 shadow-2xl'} border rounded-2xl p-2 space-y-1 backdrop-blur-xl`}>
                    <Link 
                      to="/corporate" 
                      onClick={() => setSolutionsDropdown(false)}
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
                    >
                      <Building2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-bold text-xs">Corporate B2B</div>
                        <div className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Tier Discounts &amp; SLAs</div>
                      </div>
                    </Link>

                    <Link 
                      to="/coverage" 
                      onClick={() => setSolutionsDropdown(false)}
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
                    >
                      <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-bold text-xs">Global Coverage</div>
                        <div className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Hub &amp; Port Directory</div>
                      </div>
                    </Link>

                    <Link 
                      to="/why-us" 
                      onClick={() => setSolutionsDropdown(false)}
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${darkMode ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
                    >
                      <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-bold text-xs">Why Chowra</div>
                        <div className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>AI Telemetry &amp; ESG</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink 
              to="/rate-calculator" 
              className={({ isActive }) => isActive ? 'text-emerald-500 font-bold border-b-2 border-emerald-500 pb-1' : 'hover:text-emerald-500 transition-colors pb-1'}
            >
              Rate Quote
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'text-emerald-500 font-bold border-b-2 border-emerald-500 pb-1' : 'hover:text-emerald-500 transition-colors pb-1'}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link 
              to="/track"
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 whitespace-nowrap ${
                darkMode 
                  ? 'border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 text-white' 
                  : 'border-slate-300 hover:border-emerald-500 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Package className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Track Order</span>
            </Link>
            
            <button
              onClick={onOpenPickupModal}
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Book Pickup</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="xl:hidden flex items-center gap-2 shrink-0">
            <button 
              onClick={onOpenPickupModal}
              className="sm:hidden px-3 py-1.5 text-xs font-bold rounded-lg bg-emerald-500 text-slate-950"
            >
              Pickup
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-800'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className={`xl:hidden border-t px-4 pt-4 pb-6 space-y-2 animate-fadeIn text-xs font-semibold max-h-[80vh] overflow-y-auto ${
            darkMode ? 'border-slate-800 bg-slate-950 text-slate-200' : 'border-slate-200 bg-white text-slate-800'
          }`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-emerald-500/10">
              Home
            </Link>
            <Link to="/track" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-emerald-500/10">
              Shipment Tracking
            </Link>
            <div className="pt-2 pb-1 text-[10px] font-bold text-emerald-500 uppercase tracking-wider px-3">Shipping Services</div>
            <Link to="/services/courier" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 rounded-md hover:bg-emerald-500/10 pl-6">
              Domestic &amp; International Courier
            </Link>
            <Link to="/services/express" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 rounded-md hover:bg-emerald-500/10 pl-6">
              Express Delivery (3-Hour City)
            </Link>
            <Link to="/services/ecommerce" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 rounded-md hover:bg-emerald-500/10 pl-6">
              E-Commerce Fulfillment &amp; COD
            </Link>
            <Link to="/services/freight" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 rounded-md hover:bg-emerald-500/10 pl-6">
              Freight &amp; Cargo (Air, Ocean, Cold Chain)
            </Link>
            <Link to="/pickup" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 rounded-md hover:bg-emerald-500/10 pl-6">
              Doorstep Collection Workflow
            </Link>

            <div className="pt-2 pb-1 text-[10px] font-bold text-emerald-500 uppercase tracking-wider px-3">Enterprise &amp; Network</div>
            <Link to="/corporate" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 rounded-md hover:bg-emerald-500/10 pl-6">
              Corporate B2B Solutions
            </Link>
            <Link to="/coverage" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 rounded-md hover:bg-emerald-500/10 pl-6">
              Global Coverage &amp; Hub Map
            </Link>
            <Link to="/why-us" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 px-3 rounded-md hover:bg-emerald-500/10 pl-6">
              Why Choose Chowra Logistics
            </Link>

            <div className="pt-2 border-t border-slate-800 space-y-2">
              <Link to="/rate-calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-emerald-500/10">
                Rate Calculator / Quick Quote
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded-md hover:bg-emerald-500/10">
                Contact &amp; Global Offices
              </Link>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenPickupModal(); }}
                className="w-full py-3 text-center text-xs font-bold rounded-xl bg-emerald-500 text-slate-950 shadow-lg"
              >
                Schedule Door Pickup Now
              </button>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
