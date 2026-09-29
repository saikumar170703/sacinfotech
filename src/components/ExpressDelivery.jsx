import React, { useState } from 'react';
import { Zap, Clock, MapPin, Truck, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ExpressDelivery({ onOpenPickupModal }) {
  const [selectedSpeed, setSelectedSpeed] = useState('3-hour');

  const speeds = [
    {
      id: '3-hour',
      title: '3-Hour HyperLocal Priority',
      sla: '< 180 Minutes',
      bestFor: 'Urgent medical samples, legal deeds, confidential keys, high-priority tech repairs',
      dispatchType: 'Direct Dedicated EV Motorbike / Courier Unit',
      priceEstimate: 'From $24.99',
      features: [
        'Courier assigned and dispatched within 10 minutes',
        'Direct point-to-point transit (zero hub stops)',
        'Live pin GPS driver location link sent via SMS',
        'One-time OTP security handoff verification'
      ]
    },
    {
      id: 'same-day',
      title: 'Same-Day City Express',
      sla: '< 6 Hours Guaranteed',
      bestFor: 'E-commerce local deliveries, corporate office mail, retail store transfers',
      dispatchType: 'City Sprinter Fleet Dispatch',
      priceEstimate: 'From $14.50',
      features: [
        'Cut-off time: Book before 14:00 for evening delivery',
        'Multi-stop route optimized by AI traffic telemetry',
        'Proof of Delivery photo & customer digital signature',
        'Green carbon-neutral electric vehicle transport'
      ]
    },
    {
      id: 'next-day-am',
      title: 'Next-Day Morning Priority (10:30 AM)',
      sla: 'Guaranteed by 10:30 AM',
      bestFor: 'Overnight regional cargo, business restocking, important customer orders',
      dispatchType: 'Overnight Regional Air / Trunk Corridor',
      priceEstimate: 'From $18.99',
      features: [
        'Evening pickup up to 20:00 local time',
        'First-mile priority processing at regional hub',
        'Money-back SLA guarantee if delayed past 10:30 AM',
        'Real-time automated status SMS notifications'
      ]
    }
  ];

  const activeSpeed = speeds.find(s => s.id === selectedSpeed);

  return (
    <section id="express-delivery" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 animate-bounce" />
            <span>Express Delivery Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            Ultra-Fast HyperLocal &amp; Same-Day Dispatch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            When minutes matter, Chowra Express Delivery guarantees rapid intra-city courier dispatch backed by automated AI route optimization and electric vehicle fleets.
          </p>
        </div>

        {/* Express Speed Options Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {speeds.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSpeed(s.id)}
              className={`p-5 rounded-2xl border text-left transition-all ${
                selectedSpeed === s.id
                  ? 'bg-white dark:bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-500/10'
                  : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className={`text-xs font-bold font-mono px-2.5 py-0.5 rounded ${
                  selectedSpeed === s.id ? 'bg-emerald-500 text-slate-950' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
                }`}>
                  {s.sla}
                </span>
                <Zap className={`w-4 h-4 ${selectedSpeed === s.id ? 'text-emerald-500' : 'text-slate-400'}`} />
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white font-['Outfit']">{s.title}</div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">{s.priceEstimate}</div>
            </button>
          ))}
        </div>

        {/* Detailed Showcase Box */}
        {activeSpeed && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-500/30">
                <Clock className="w-3.5 h-3.5" />
                <span>Guaranteed SLA: {activeSpeed.sla}</span>
              </div>

              <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900 dark:text-white">
                {activeSpeed.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <strong>Recommended For:</strong> {activeSpeed.bestFor}
              </p>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                <div className="text-slate-600 dark:text-slate-400">
                  Fleet Specification: <strong className="text-slate-900 dark:text-white font-semibold">{activeSpeed.dispatchType}</strong>
                </div>
                <div className="text-slate-600 dark:text-slate-400">
                  Pricing SLA: <strong className="text-emerald-600 dark:text-emerald-400 font-mono">{activeSpeed.priceEstimate}</strong>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Guarantee Features:</div>
                {activeSpeed.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onOpenPickupModal}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
                >
                  <span>Dispatch Express Courier Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Radar Widget */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Live Express Dispatch Radar</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>Active Drivers Nearby</span>
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <div className="text-slate-900 dark:text-white font-bold">EV-Courier Unit #104</div>
                    <div className="text-[10px] text-slate-500">Intra-City Zone 1</div>
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">2.4 km away (7 mins)</span>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <div className="text-slate-900 dark:text-white font-bold">Express Sprinter #88</div>
                    <div className="text-[10px] text-slate-500">Metro Business Corridor</div>
                  </div>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-[11px]">4.1 km away (12 mins)</span>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <div>
                    <div className="text-slate-900 dark:text-white font-bold">Prioritized Dispatch Hub</div>
                    <div className="text-[10px] text-slate-500">City Sorting Facility</div>
                  </div>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">100% Operational</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-900">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Zero delay warranty &bull; Instant SMS driver assignment</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
