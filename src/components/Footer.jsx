import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenPickupModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400 border-t border-slate-800 text-xs transition-colors">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Contact Info (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-slate-950 font-bold shadow-lg">
                <Truck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <div className="font-extrabold text-lg text-white tracking-tight font-['Outfit']">
                  CHOWRA <span className="text-emerald-500 font-normal">LOGISTICS</span>
                </div>
                <div className="text-[10px] tracking-widest uppercase font-semibold text-slate-400">
                  &amp; COURIERS LIMITED
                </div>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Connecting Worlds, Delivering Trust. Premier international courier, air freight forwarding, ocean cargo transport, and automated supply chain solutions across 185+ countries.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Global HQ: 450 Logistics Parkway, Suite 100, NY 10001, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">+1 (800) 555-CHOWRA (24/7 Dispatch)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>support@chowralogistics.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Express Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Express Services
            </h4>
            <ul className="space-y-2">
              <li><Link to="/services/courier" className="hover:text-emerald-400 transition-colors">Domestic &amp; International Courier</Link></li>
              <li><Link to="/services/express" className="hover:text-emerald-400 transition-colors">Hyper-Local 3-Hour City Dispatch</Link></li>
              <li><Link to="/services/ecommerce" className="hover:text-emerald-400 transition-colors">E-Commerce Fulfillment &amp; COD</Link></li>
              <li><Link to="/pickup" className="hover:text-emerald-400 transition-colors">Doorstep Collection Workflow</Link></li>
              <li><button onClick={onOpenPickupModal} className="text-emerald-400 font-bold hover:underline">Schedule Door Pickup &rarr;</button></li>
            </ul>
          </div>

          {/* Column 3: Freight & Cargo */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Freight &amp; Cargo
            </h4>
            <ul className="space-y-2">
              <li><Link to="/services/freight" className="hover:text-emerald-400 transition-colors">Air Cargo &amp; Charter Flights</Link></li>
              <li><Link to="/services/freight" className="hover:text-emerald-400 transition-colors">Ocean FCL &amp; LCL Container</Link></li>
              <li><Link to="/services/freight" className="hover:text-emerald-400 transition-colors">Heavy Road Freight Transport</Link></li>
              <li><Link to="/services/freight" className="hover:text-emerald-400 transition-colors">Cold Chain Pharma Logistics</Link></li>
              <li><Link to="/rate-calculator" className="hover:text-emerald-400 transition-colors">Instant Rate SLA Calculator</Link></li>
            </ul>
          </div>

          {/* Column 4: Enterprise & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">
              Enterprise &amp; Support
            </h4>
            <ul className="space-y-2">
              <li><Link to="/corporate" className="hover:text-emerald-400 transition-colors">Corporate B2B Solutions</Link></li>
              <li><Link to="/coverage" className="hover:text-emerald-400 transition-colors">Global Network Coverage Map</Link></li>
              <li><Link to="/why-us" className="hover:text-emerald-400 transition-colors">Why Choose Chowra Logistics</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact &amp; Regional Offices</Link></li>
              <li><Link to="/track" className="hover:text-emerald-400 transition-colors">Live Shipment Tracker</Link></li>
            </ul>
          </div>

        </div>

        {/* Accreditations & Certifications Row */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span className="font-bold text-slate-300">Certified &amp; Licensed:</span>
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 font-mono">ISO 9001:2026 Quality</span>
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 font-mono">IATA Cargo Agent #4910</span>
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 font-mono">FMC Licensed Freight</span>
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-emerald-400 font-mono">100% Eco Green Fleet</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-xs font-semibold">Back to Top</span>
          </button>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-4 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} CHOWRA LOGISTICS AND COURIERS LIMITED. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-slate-200">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/corporate" className="hover:text-slate-200">Terms of Shipping SLA</Link>
            <span>&bull;</span>
            <Link to="/services/courier" className="hover:text-slate-200">Customs Brokerage Disclosure</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
