import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import { 
  Globe, Zap, ShoppingBag, Plane, Building2, Truck, 
  ArrowRight, ShieldCheck, Clock, Award, CheckCircle2 
} from 'lucide-react';

export default function HomePage({ onOpenPickupModal }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Chowra Logistics and Couriers Limited | Global Express Shipping & Cargo";
  }, []);

  const handleTrackSearch = (id) => {
    navigate(`/track/${id}`);
  };

  return (
    <div className="space-y-0 animate-fadeIn">
      {/* Hero Banner */}
      <Hero 
        onTrackSearch={handleTrackSearch} 
        onOpenPickupModal={onOpenPickupModal} 
      />

      {/* Services Overview Quick Cards */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Globe className="w-3.5 h-3.5" />
              <span>Comprehensive Logistics Network</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
              Explore Our Specialist Shipping Divisions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Click any logistics division below to view dedicated services, tariffs, customs rules, and delivery SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Courier */}
            <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-emerald-400 transition-colors">
                  Domestic &amp; International Courier
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Confidential document dispatch and door-to-door express parcel courier across 185+ countries with customs DDP/DDU clearance.
                </p>
              </div>
              <Link 
                to="/services/courier" 
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2"
              >
                <span>View Courier Rates &amp; Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 2. Express */}
            <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-emerald-400 transition-colors">
                  Express Same-Day Delivery
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Hyper-local 3-hour priority city dispatch, EV motorbike courier fleets, and point-to-point guaranteed speed.
                </p>
              </div>
              <Link 
                to="/services/express" 
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2"
              >
                <span>Explore Express Speeds</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3. E-Commerce */}
            <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-emerald-400 transition-colors">
                  E-Commerce Fulfillment &amp; COD
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Automated warehousing, 24-hour Cash-on-Delivery bank settlements, and Shopify/WooCommerce API sync.
                </p>
              </div>
              <Link 
                to="/services/ecommerce" 
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2"
              >
                <span>View E-Commerce API Hub</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 4. Freight */}
            <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Plane className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-emerald-400 transition-colors">
                  Air &amp; Ocean Freight Cargo
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Charter freighter aircraft, Ocean FCL/LCL containers, heavy ground flatbeds, and Cold Chain pharma (-80°C).
                </p>
              </div>
              <Link 
                to="/services/freight" 
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2"
              >
                <span>Inspect Freight Capacity</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 5. Doorstep Pickup */}
            <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-emerald-400 transition-colors">
                  Pickup &amp; Door-to-Door Delivery
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  On-demand doorstep parcel collection with on-site digital weighing, waybill barcode printing, and zero post office visits.
                </p>
              </div>
              <Link 
                to="/pickup" 
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2"
              >
                <span>Schedule Doorstep Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 6. Corporate */}
            <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-emerald-400 transition-colors">
                  Corporate B2B Solutions
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tiered enterprise volume discounts up to 45% off, dedicated account leads, custom SLAs, and SAP/ERP billing.
                </p>
              </div>
              <Link 
                to="/corporate" 
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-2"
              >
                <span>Request B2B SLA Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Reviews & Partners */}
      <Testimonials />

      {/* CTA App Banner */}
      <CTA onOpenPickupModal={onOpenPickupModal} />
    </div>
  );
}
