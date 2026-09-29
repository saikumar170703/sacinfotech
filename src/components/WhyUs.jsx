import React from 'react';
import { Cpu, Leaf, Clock, Lock, Award, Check, X } from 'lucide-react';

export default function WhyUs() {
  const differentiators = [
    {
      icon: Cpu,
      title: 'AI-Powered Dynamic Dispatch',
      desc: 'Our neural routing engine recalculates weather, customs traffic, and flight schedules every 30 seconds to bypass bottlenecks.'
    },
    {
      icon: Leaf,
      title: 'Eco-Green Electric Logistics',
      desc: '100% zero-emission EV door delivery fleet in major metro cities, with carbon-neutral shipping options for every parcel.'
    },
    {
      icon: Lock,
      title: 'Tamper-Proof IoT Smart Lockers',
      desc: 'Real-time telemetry locks on high-value cargo with instant alerts triggered if unauthorized opening or shock occurs.'
    },
    {
      icon: Clock,
      title: 'Guaranteed 99.4% SLA Warranty',
      desc: 'We stand by our delivery windows. If an express shipment fails SLA due to carrier delay, receive a 100% freight refund.'
    }
  ];

  const comparisonRows = [
    { feature: 'Real-Time Telemetry Tracking', chowra: 'Live GPS Pin & Driver Phone', standard: 'Delayed Status Scans (Once Daily)' },
    { feature: 'Customs Clearance Support', chowra: 'In-House Dedicated Brokers', standard: 'Self-Service / Third-Party Agent' },
    { feature: 'On-Time SLA Reliability', chowra: '99.4% Verified On-Time Rate', standard: '82% - 87% Average' },
    { feature: 'Green Carbon Offset Fleet', chowra: 'Electric Fleet + Carbon Certificates', standard: 'Diesel Fleet Only' },
    { feature: 'Dedicated B2B Concierge', chowra: '24/7 Account Lead Assigned', standard: 'Automated Call Queue' },
  ];

  return (
    <section id="why-us" className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>The Chowra Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            Why Leading Global Enterprises Choose Chowra
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Combining cutting-edge supply chain technology with unyielding customer commitment to redefine global logistics.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div 
                key={index}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 space-y-4 shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit']">
                  {diff.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table Grid */}
        <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900 dark:text-white">
              Chowra Logistics vs. Traditional Carriers
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              See how our technology-driven infrastructure outperforms conventional legacy couriers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase tracking-wider">
                  <th className="pb-4 font-bold">Service Feature</th>
                  <th className="pb-4 font-bold text-emerald-600 dark:text-emerald-400">CHOWRA LOGISTICS</th>
                  <th className="pb-4 font-bold text-slate-400">Traditional Couriers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/80">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-100 dark:hover:bg-slate-950/40 transition-colors">
                    <td className="py-4 font-semibold text-slate-900 dark:text-white">{row.feature}</td>
                    <td className="py-4 text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{row.chowra}</span>
                    </td>
                    <td className="py-4 text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <X className="w-4 h-4 text-slate-400 dark:text-slate-600 shrink-0" />
                      <span>{row.standard}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
