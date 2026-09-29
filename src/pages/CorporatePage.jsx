import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import CorporateSolutions from '../components/CorporateSolutions';
import { Building2, BarChart3, Users, CreditCard, ShieldCheck } from 'lucide-react';

export default function CorporatePage({ onOpenPickupModal }) {
  useEffect(() => {
    document.title = "Corporate B2B Logistics Solutions & SLAs | Chowra Logistics";
  }, []);

  return (
    <div className="animate-fadeIn space-y-0">
      <Breadcrumbs items={[{ label: 'Corporate B2B Logistics' }]} />

      {/* Main Corporate Solutions Component */}
      <CorporateSolutions onOpenPickupModal={onOpenPickupModal} />

      {/* Additional B2B Volume Tier Pricing Table */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-['Outfit']">
              Enterprise Volume Discount Tiers
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Corporate accounts enjoy guaranteed rate locks and volume incentives based on monthly shipping spend.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">Silver Tier</div>
              <div className="text-2xl font-black font-['Outfit'] text-white">15% Discount</div>
              <p className="text-slate-400 text-xs">For businesses shipping 50 - 250 parcels per month. Includes standard API integration and email account lead.</p>
            </div>

            <div className="bg-slate-950 border border-emerald-500/50 p-6 rounded-2xl space-y-3 relative shadow-xl shadow-emerald-500/10">
              <div className="absolute -top-3 right-4 bg-emerald-500 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">Most Popular</div>
              <div className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">Gold Enterprise</div>
              <div className="text-2xl font-black font-['Outfit'] text-white">30% Discount</div>
              <p className="text-slate-400 text-xs">For businesses shipping 250 - 1,000 parcels per month. Includes dedicated Account Lead, 24/7 hotline, &amp; SAP/ERP billing.</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">Platinum Global</div>
              <div className="text-2xl font-black font-['Outfit'] text-white">Up to 45% Off</div>
              <p className="text-slate-400 text-xs">For high-volume enterprise supply chains (1,000+ monthly shipments). Includes custom SLA guarantees &amp; white-labeled portals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
