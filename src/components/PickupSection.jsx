import React from 'react';
import { Truck, ArrowRight } from 'lucide-react';

export default function PickupSection({ onOpenPickupModal }) {
  const steps = [
    {
      step: '01',
      title: 'Schedule Pickup Online',
      desc: 'Fill in your origin address, preferred 3-hour time window, and parcel weight using our simple web modal or mobile app.'
    },
    {
      step: '02',
      title: 'Uniformed Driver Arrives',
      desc: 'Our certified logistics officer arrives at your door with digital scales, tamper-evident security flyers, and barcode printers.'
    },
    {
      step: '03',
      title: 'On-Site Weigh & Barcode Scan',
      desc: 'Your parcel is weighed on-site, affixed with an encrypted waybill barcode, and instantly synced to your Chowra live tracking app.'
    },
    {
      step: '04',
      title: 'Direct Dispatch to Corridor',
      desc: 'Item is dispatched directly to our nearest airport gateway or express city route with real-time status notifications sent via SMS.'
    }
  ];

  return (
    <section id="pickup-delivery" className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Pickup &amp; Door-to-Door Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            On-Demand Doorstep Collection Workflow
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Never visit a post office again. Chowra Logistics brings the dispatch terminal directly to your home, office, or factory doorstep.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 relative space-y-3 hover:border-emerald-500 transition-all shadow-md"
            >
              <div className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400 opacity-80">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit']">{s.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Action Trigger Banner */}
        <div className="bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-blue-500/15 border border-emerald-500/30 rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto space-y-4 shadow-xl">
          <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900 dark:text-white">
            Need a Courier at Your Door Within 30 Minutes?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Book now with zero prepayment required. Our driver prints your shipping labels and receipt at your doorstep.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenPickupModal}
              className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold text-sm rounded-xl shadow-xl shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Schedule Door Pickup Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
