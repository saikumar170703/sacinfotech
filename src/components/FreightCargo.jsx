import React from 'react';
import { Plane, Anchor, Truck, Thermometer, CheckCircle2, ArrowRight } from 'lucide-react';

export default function FreightCargo({ onOpenPickupModal }) {
  const freightOptions = [
    {
      icon: Plane,
      title: 'Global Air Cargo & Charter',
      sla: '24 - 72 Hours Global',
      desc: 'Priority air transport for heavy industrial cargo, automotive components, emergency aviation parts (AOG), and chartered freighter aircraft.',
      specs: ['IATA Licensed Cargo Agent', 'Air Charter Capacity Available', 'Dangerous Goods (DG) Certified']
    },
    {
      icon: Anchor,
      title: 'Ocean Container Freight (FCL & LCL)',
      sla: '12 - 25 Days Door-to-Door',
      desc: 'Full Container Load (20ft / 40ft High Cube) and Less than Container Load (LCL) consolidated shipping with deep-water port clearance.',
      specs: ['FMC Licensed Freight Forwarder', 'Port-to-Port & Port-to-Door', 'Customs Tariff Optimization']
    },
    {
      icon: Truck,
      title: 'Heavy Ground Road Freight',
      sla: '1 - 4 Days Regional',
      desc: 'Full Truck Load (FTL) and Less than Truck Load (LTL) interstate transport, flatbed trailers, and oversized machinery haulage.',
      specs: ['GPS Fleet Telemetry Locks', 'Intermodal Rail Connections', 'Dedicated Driver Teams']
    },
    {
      icon: Thermometer,
      title: 'Pharma & Cold Chain Logistics',
      sla: 'Continuous Temperature Monitoring',
      desc: 'Temperature-controlled logistics with active cooling containers (-80°C to +25°C) for vaccines, biopharma, and perishable food cargo.',
      specs: ['GDP Certified Facilities', 'IoT Real-Time Temp Alerts', 'Priority Ramp Airport Handling']
    }
  ];

  return (
    <section id="freight-cargo" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Plane className="w-3.5 h-3.5" />
            <span>Freight &amp; Cargo Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            Air, Ocean, Road &amp; Cold Chain Cargo
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Heavy industrial freight forwarder solutions built for high-volume corporate supply chains, raw materials, machinery, and pharma shipments.
          </p>
        </div>

        {/* 4 Freight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {freightOptions.map((opt, idx) => {
            const Icon = opt.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-3xl p-6 sm:p-8 transition-all space-y-4 shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-950 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800">
                      {opt.sla}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit'] group-hover:text-emerald-500 transition-colors">
                    {opt.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {opt.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                    {opt.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                  <button
                    onClick={onOpenPickupModal}
                    className="w-full py-3 bg-slate-100 dark:bg-slate-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-700 dark:text-emerald-400 border border-slate-300 dark:border-slate-800 hover:border-emerald-500 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Freight Capacity Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
