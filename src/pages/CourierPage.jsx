import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import CourierServices from '../components/CourierServices';
import { ShieldCheck, FileText, CheckCircle2, Globe, Clock, Package } from 'lucide-react';

export default function CourierPage({ onOpenPickupModal }) {
  useEffect(() => {
    document.title = "Domestic & International Courier Services | Chowra Logistics";
  }, []);

  return (
    <div className="animate-fadeIn space-y-0">
      <Breadcrumbs 
        items={[
          { label: 'Services Overview', link: '/#services' },
          { label: 'Domestic & International Courier' }
        ]} 
      />

      {/* Main Courier Component */}
      <CourierServices onOpenPickupModal={onOpenPickupModal} />

      {/* Additional SEO Content Section: Customs & International Shipping Rules */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              Cross-Border Trade Compliance
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit']">
              Seamless International Customs &amp; Tariff Handling
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              CHOWRA LOGISTICS AND COURIERS LIMITED maintains direct electronic integration with customs clearance systems across the EU, US Customs &amp; Border Protection (CBP), HM Revenue &amp; Customs (UK), and Singapore Customs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
              <div className="font-bold text-white text-sm font-['Outfit']">Delivered Duty Paid (DDP)</div>
              <p className="text-slate-400">All import duties, tariffs, and VAT taxes are prepaid upfront by the sender so your international recipient receives their parcel with zero doorstep demands.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
              <div className="font-bold text-white text-sm font-['Outfit']">Commercial Invoice Generation</div>
              <p className="text-slate-400">Our web tools generate standardized HS-Code commercial invoices to eliminate border hold times and customs classification errors.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2">
              <div className="font-bold text-white text-sm font-['Outfit']">Prohibited Item Scanning</div>
              <p className="text-slate-400">Automated pre-flight AI X-ray screening ensuring strict adherence to international aviation security and dangerous goods safety.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
