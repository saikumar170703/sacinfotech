import React from 'react';
import { Building2, Users, FileText, ArrowRight, BarChart3, CreditCard } from 'lucide-react';

export default function CorporateSolutions({ onOpenPickupModal }) {
  const corporateBenefits = [
    {
      icon: Users,
      title: 'Dedicated Account Lead',
      desc: 'A single point of contact logistics expert assigned to manage your enterprise shipment corridors 24/7/365.'
    },
    {
      icon: BarChart3,
      title: 'Tiered Volume Discounts',
      desc: 'Tiered volume pricing up to 45% off standard rates with locked 12-month commercial shipping contracts.'
    },
    {
      icon: CreditCard,
      title: 'Automated Monthly Billing',
      desc: 'Consolidated monthly invoicing, customized cost-center allocations, and direct ERP/SAP integration.'
    },
    {
      icon: FileText,
      title: 'Custom Branded Tracking Portal',
      desc: 'Provide your enterprise buyers with white-labeled tracking pages featuring your corporate logo and domain.'
    }
  ];

  return (
    <section id="corporate-solutions" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Logistics Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            Tailored Enterprise B2B Supply Chain Contracts
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Empowering multinational corporations, medical networks, and high-growth brands with dedicated freight management, custom SLAs, and ERP integration.
          </p>
        </div>

        {/* 4 Corporate Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {corporateBenefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-6 transition-all space-y-3 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-['Outfit']">{b.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Enterprise Callout Box */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-xl font-bold font-['Outfit'] text-slate-900 dark:text-white">
              Request a Customized B2B Logistics Audit &amp; Proposal
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
              Our enterprise logistics engineers will audit your current shipping invoices and design an optimized multi-carrier strategy to cut costs by up to 35%.
            </p>
          </div>

          <button
            onClick={onOpenPickupModal}
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-all shrink-0 shadow-md flex items-center gap-2"
          >
            <span>Consult Corporate Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
