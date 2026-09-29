import React, { useState } from 'react';
import { 
  Globe, Truck, Plane, ShoppingBag, Building2, PackageCheck, 
  ShieldCheck, ArrowRight, Zap, RefreshCw, Thermometer, Layers 
} from 'lucide-react';

export default function Services({ onOpenPickupModal }) {
  const [activeTab, setActiveTab] = useState('all');

  const servicesList = [
    {
      id: 'courier',
      category: 'courier',
      title: 'Domestic & International Courier',
      subtitle: 'Worldwide parcel & confidential document dispatch',
      image: '/images/express_delivery.jpg',
      icon: Globe,
      features: [
        'Door-to-door express delivery in 185+ countries',
        'Customs clearance documentation & duty payment options',
        'Real-time automated SMS & WhatsApp notification alerts',
        'Tamper-evident security packaging and insurance coverage'
      ],
      badge: 'Popular'
    },
    {
      id: 'express',
      category: 'express',
      title: 'Hyper-Local Express Delivery',
      subtitle: 'Ultra-fast same-day city delivery within 3 hours',
      image: '/images/express_delivery.jpg',
      icon: Zap,
      features: [
        'Dedicated EV motorbikes & sprinter vans',
        'Guaranteed 3-hour intra-city dispatch SLA',
        'Direct driver contact and live GPS pin map',
        'Proof of Delivery with photo & recipient signature'
      ],
      badge: 'Fastest'
    },
    {
      id: 'ecommerce',
      category: 'ecommerce',
      title: 'E-Commerce Logistics & Fulfillment',
      subtitle: 'End-to-end warehousing, COD & returns handling',
      image: '/images/smart_warehouse.jpg',
      icon: ShoppingBag,
      features: [
        'Automated Shopify, WooCommerce & Amazon API sync',
        'Multi-location smart warehousing & inventory pick-pack',
        'Cash-on-Delivery (COD) fast payout reconciliation',
        'Hassle-free reverse logistics & customer return hubs'
      ],
      badge: 'Enterprise'
    },
    {
      id: 'freight',
      category: 'freight',
      title: 'Global Air & Ocean Freight Cargo',
      subtitle: 'Heavy industrial cargo, FCL/LCL & charter flights',
      image: '/images/hero_bg.jpg',
      icon: Plane,
      features: [
        'Full Container Load (FCL) & Less than Container Load (LCL)',
        'Dangerous Goods (DG) certified air cargo transport',
        'Port-to-Port & Port-to-Door multimodal transport',
        'Dedicated freight customs broker handling'
      ],
      badge: 'Heavy Cargo'
    },
    {
      id: 'corporate',
      category: 'corporate',
      title: 'Corporate Logistics Solutions',
      subtitle: 'Tailored B2B contracts, bulk volume rates & account leads',
      image: '/images/smart_warehouse.jpg',
      icon: Building2,
      features: [
        'Dedicated Corporate Account Manager & 24/7 Hotline',
        'Volume-based tier discounts & customized SLAs',
        'Automated monthly invoicing & ERP integration',
        'Custom branded track & trace client portals'
      ],
      badge: 'B2B Custom'
    },
    {
      id: 'coldchain',
      category: 'freight',
      title: 'Pharma & Cold Chain Logistics',
      subtitle: 'Temperature-controlled transport from -80°C to +25°C',
      image: '/images/smart_warehouse.jpg',
      icon: Thermometer,
      features: [
        'Active & passive cooling containers with IoT sensors',
        'Real-time continuous temperature telemetry logging',
        'GDP (Good Distribution Practice) pharma certified',
        'Priority airport ramp clearance for medical shipments'
      ],
      badge: 'Specialized'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Shipping Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            Tailored Logistics Solutions For Every Need
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            From single express parcel deliveries to full-scale international container logistics, Chowra Logistics guarantees speed, security, and global reach.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'courier', label: 'Courier Services' },
            { id: 'express', label: 'Express Same-Day' },
            { id: 'ecommerce', label: 'E-Commerce Hub' },
            { id: 'freight', label: 'Air & Ocean Freight' },
            { id: 'corporate', label: 'Corporate B2B' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                      {service.badge}
                    </div>

                    {/* Category Icon */}
                    <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 shadow-xl group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white font-['Outfit'] group-hover:text-emerald-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Feature List */}
                    <ul className="space-y-2.5 pt-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <PackageCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={onOpenPickupModal}
                    className="w-full py-3 bg-slate-950 hover:bg-emerald-500 hover:text-slate-950 text-emerald-400 border border-slate-800 hover:border-emerald-500 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Booking</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
