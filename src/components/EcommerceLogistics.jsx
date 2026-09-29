import React from 'react';
import { ShoppingBag, ArrowRight, Code2 } from 'lucide-react';

export default function EcommerceLogistics({ onOpenPickupModal }) {
  const integrations = [
    { name: 'Shopify Store Sync', speed: 'Real-Time Webhooks' },
    { name: 'WooCommerce Plugin', speed: 'Instant Order Push' },
    { name: 'Amazon FBA / FBM', speed: 'Automated Prep & Ship' },
    { name: 'Custom REST API', speed: '< 50ms Telemetry' }
  ];

  const corePillars = [
    {
      title: 'Automated Smart Fulfillment',
      desc: 'Barcode-scanned inventory picking, custom branded unboxing presentation, and automated label generation within 120 minutes of purchase.'
    },
    {
      title: 'Cash-on-Delivery (COD) Payouts',
      desc: 'Secure cash collection at doorstep with 24-hour automated bank transfer payouts and transparent online portal reconciliation.'
    },
    {
      title: 'Reverse Logistics & Returns Hub',
      desc: 'Pre-printed return shipping labels, doorstep item quality inspection, re-stocking, and instant customer refund confirmations.'
    },
    {
      title: 'Multi-Warehouse Inventory Split',
      desc: 'Distribute inventory across 18 regional fulfillment centers to ensure 1-day ground shipping for 94% of your online shoppers.'
    }
  ];

  return (
    <section id="ecommerce-logistics" className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>E-commerce Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            End-to-End Fulfillment, COD &amp; API Integration
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Scale your online store faster with automated warehousing, same-day order pick-pack-ship, instant COD settlements, and automated returns.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {corePillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl p-6 sm:p-8 transition-all space-y-3 shadow-md"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit']">{pillar.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* E-Commerce API Integration Bar */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-slate-200 dark:border-slate-900">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                <Code2 className="w-4 h-4" />
                <span>Developer-Friendly API Suite</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">Connect Your Storefront in 5 Minutes</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Automatic order import, live rate checkout widgets, and instant tracking webhooks.</p>
            </div>

            <button
              onClick={onOpenPickupModal}
              className="px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-emerald-400 transition-colors shrink-0 flex items-center gap-2 shadow-md"
            >
              <span>Request E-Commerce SLA Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            {integrations.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center space-y-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white font-['Outfit']">{item.name}</div>
                <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">{item.speed}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
