import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ExpressDelivery from '../components/ExpressDelivery';
import { Zap, ShieldCheck, Clock, Navigation, CheckCircle2 } from 'lucide-react';

export default function ExpressPage({ onOpenPickupModal }) {
  useEffect(() => {
    document.title = "Express Same-Day & 3-Hour Delivery | Chowra Logistics";
  }, []);

  return (
    <div className="animate-fadeIn space-y-0">
      <Breadcrumbs 
        items={[
          { label: 'Services Overview', link: '/#services' },
          { label: 'Express Delivery Services' }
        ]} 
      />

      {/* Main Express Component */}
      <ExpressDelivery onOpenPickupModal={onOpenPickupModal} />

      {/* Additional SEO Content: EV Electric Fleet Telemetry */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-['Outfit']">
              100% Zero-Emission Electric Express Fleet
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Our hyper-local city couriers operate eco-friendly electric motorbikes and sprinter vans equipped with live telemetry locks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-2 text-center">
              <div className="text-2xl font-black text-emerald-400 font-mono">15 Mins</div>
              <div className="font-bold text-white">Average Driver Allocation</div>
              <p className="text-slate-500 text-[11px]">Courier assigned to your door immediately upon booking verification.</p>
            </div>
            <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-2 text-center">
              <div className="text-2xl font-black text-emerald-400 font-mono">100% EV</div>
              <div className="font-bold text-white">Zero Carbon Footprint</div>
              <p className="text-slate-500 text-[11px]">Zero emission city dispatch certified under ISO 14001 ESG standards.</p>
            </div>
            <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-2 text-center">
              <div className="text-2xl font-black text-emerald-400 font-mono">99.8%</div>
              <div className="font-bold text-white">HyperLocal Arrival SLA</div>
              <p className="text-slate-500 text-[11px]">Backed by 100% freight fee refund if delayed by carrier error.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
