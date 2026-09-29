import React, { useState } from 'react';
import { Globe, Package, ShieldCheck, FileText, CheckCircle2, ArrowRight, Truck, Clock } from 'lucide-react';

export default function CourierServices({ onOpenPickupModal }) {
  const [selectedTab, setSelectedTab] = useState('international');

  const courierTiers = [
    {
      id: 'int-express',
      type: 'international',
      title: 'Global Express Priority Courier',
      sla: '1 - 3 Business Days Worldwide',
      coverage: '185+ Countries Supported',
      desc: 'Time-critical international document & parcel delivery with end-to-end priority air transit and expedited customs pre-clearance.',
      features: [
        'Guaranteed morning delivery slot in major international commerce hubs',
        'In-house automated customs brokerage & duty tax payment (DDP/DDU)',
        'Tamper-evident flight-safe security packaging included',
        'Real-time automated WhatsApp & SMS tracking alerts'
      ],
      badge: 'Popular for Express'
    },
    {
      id: 'int-econ',
      type: 'international',
      title: 'International Saver Economy',
      sla: '4 - 7 Business Days',
      coverage: 'Global Network',
      desc: 'Cost-effective cross-border shipping for non-urgent merchandise, commercial samples, and personal goods.',
      features: [
        'Consolidated international air corridors for maximum cost savings',
        'Full tracking telemetry with door delivery signature',
        'Hassle-free customs documentation guidelines',
        'Insurance coverage included up to $1,000 standard'
      ],
      badge: 'Cost-Effective'
    },
    {
      id: 'dom-same',
      type: 'domestic',
      title: 'Domestic Same-Day Metro Courier',
      sla: 'Same Day (< 6 Hours)',
      coverage: 'All Major Cities',
      desc: 'Immediate point-to-point courier dispatch for urgent contracts, medical supplies, legal files, and high-value tech devices.',
      features: [
        'Dedicated courier unit assigned within 15 minutes of booking',
        'Direct live phone contact with your assigned courier driver',
        'Photo & digital PIN proof of handover upon arrival',
        'Zero hub sorting delays — direct point A to point B transport'
      ],
      badge: 'Ultra Fast'
    },
    {
      id: 'dom-standard',
      type: 'domestic',
      title: 'Domestic Express Overnight',
      sla: 'Next Business Day (10:30 AM)',
      coverage: 'Nationwide Coverage',
      desc: 'Reliable nationwide overnight parcel and document delivery backed by our 99.4% on-time arrival guarantee.',
      features: [
        'Late evening pickup collection with early morning door delivery',
        'Multi-package shipment consolidation discounts',
        'Doorstep pickup included at no extra charge',
        'Automated address verification to eliminate wrong-address returns'
      ],
      badge: 'Nationwide Standard'
    }
  ];

  const filtered = courierTiers.filter(t => t.type === selectedTab);

  return (
    <section id="courier-services" className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Domestic &amp; International Courier Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            Express Parcel &amp; Confidential Document Shipping
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Whether sending urgent legal contracts across town or commercial parcels across continents, Chowra Courier Services delivers unmatched speed, security, and customs expertise.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedTab('international')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedTab === 'international'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>International Courier Solutions</span>
          </button>
          <button
            onClick={() => setSelectedTab('domestic')}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              selectedTab === 'domestic'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                : 'bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Domestic Nationwide Courier</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filtered.map((tier) => (
            <div
              key={tier.id}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                    {tier.badge}
                  </span>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold block">{tier.coverage}</span>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{tier.sla}</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit'] group-hover:text-emerald-500 transition-colors">
                    {tier.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 dark:border-slate-900 space-y-2.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Service Highlights:</div>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-900 flex items-center justify-between">
                <span className="text-xs text-slate-500">Zero hidden surcharges</span>
                <button
                  onClick={onOpenPickupModal}
                  className="px-5 py-2.5 bg-emerald-500/15 hover:bg-emerald-500 text-emerald-700 dark:text-emerald-400 hover:text-slate-950 font-bold rounded-xl text-xs transition-all border border-emerald-500/30 flex items-center gap-2"
                >
                  <span>Book This Courier</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Customs & Packaging Info Banner */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 dark:text-slate-300">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm font-['Outfit']">Automated Customs Brokerage</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Paperless electronic invoice transmission to international customs checkpoints to ensure zero border holds.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm font-['Outfit']">Complimentary Secure Packaging</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Waterproof flyers, reinforced cardboard boxes, and bubble wraps provided free of charge at doorstep pickup.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm font-['Outfit']">Declared Value Insurance</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">Full coverage options up to $50,000 against loss, theft, or physical damage with instant claims processing.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
