import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import FreightCargo from '../components/FreightCargo';
import { Plane, Anchor, Truck, Thermometer, ShieldCheck } from 'lucide-react';

export default function FreightPage({ onOpenPickupModal }) {
  useEffect(() => {
    document.title = "Air Freight, Ocean Container & Heavy Cargo | Chowra Logistics";
  }, []);

  return (
    <div className="animate-fadeIn space-y-0">
      <Breadcrumbs 
        items={[
          { label: 'Services Overview', link: '/#services' },
          { label: 'Freight & Cargo Services' }
        ]} 
      />

      {/* Main Freight & Cargo Component */}
      <FreightCargo onOpenPickupModal={onOpenPickupModal} />

      {/* Additional SEO Section: Cold Chain Pharma & Hazardous Goods */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              Specialized Industrial Cargo
            </div>
            <h3 className="text-2xl font-bold font-['Outfit']">
              Pharma GDP &amp; Dangerous Goods (DG) Compliance
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Our freight division is licensed under IATA Dangerous Goods Regulations (DGR) and GDP Cold Chain standards to handle lithium batteries, bio-samples, and heavy machinery safely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-2">
              <div className="font-bold text-white text-sm font-['Outfit']">Active IoT Temperature Telemetry</div>
              <p className="text-slate-400">Continuous telemetry logging from -80°C ultra-low freezers up to +25°C ambient pharma transport with instant GPS alerts if excursions occur.</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-2">
              <div className="font-bold text-white text-sm font-['Outfit']">Full &amp; Shared Container Shipping</div>
              <p className="text-slate-400">20ft and 40ft High Cube containers (FCL) or economical shared consolidations (LCL) with customs harbor agent representation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
