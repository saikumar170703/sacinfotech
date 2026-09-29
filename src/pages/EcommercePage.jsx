import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import EcommerceLogistics from '../components/EcommerceLogistics';
import { ShoppingBag, Code2, RefreshCw, Layers, ShieldCheck } from 'lucide-react';

export default function EcommercePage({ onOpenPickupModal }) {
  useEffect(() => {
    document.title = "E-Commerce Fulfillment, COD & API Integration | Chowra Logistics";
  }, []);

  return (
    <div className="animate-fadeIn space-y-0">
      <Breadcrumbs 
        items={[
          { label: 'Services Overview', link: '/#services' },
          { label: 'E-Commerce Logistics' }
        ]} 
      />

      {/* Main E-Commerce Component */}
      <EcommerceLogistics onOpenPickupModal={onOpenPickupModal} />

      {/* Additional API Workflow SEO Section */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              Automated Store Integrations
            </div>
            <h3 className="text-2xl font-bold font-['Outfit']">
              Seamless 1-Click Sync for Shopify &amp; WooCommerce
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              Install the Chowra Logistics plugin to automatically fetch unfulfilled orders, push live tracking numbers to your buyers, and handle returns without manual data entry.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-xs text-slate-300 space-y-2">
            <div className="text-slate-500">// Example Webhook Payload Payload (JSON)</div>
            <div className="text-emerald-400">POST /api/v1/shipments/create</div>
            <pre className="text-[11px] text-slate-400 overflow-x-auto p-3 bg-slate-950 rounded-xl border border-slate-800">
{`{
  "order_id": "SHOP-90412",
  "service": "EXPRESS_DOOR",
  "cod_amount": 149.99,
  "currency": "USD",
  "recipient": {
    "name": "Sarah Jenkins",
    "address": "450 5th Ave, NY 10001",
    "phone": "+19175550144"
  }
}`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
