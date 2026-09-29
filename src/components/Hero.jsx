import React, { useState } from 'react';
import { Search, ArrowRight, ShieldCheck, Clock, Globe2, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ onTrackSearch, onOpenPickupModal }) {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      onTrackSearch(trackingNumber.trim());
      const trackerEl = document.getElementById('tracking');
      if (trackerEl) {
        trackerEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const sampleTrackingNumbers = ['CW-9842-881', 'CW-7731-002', 'CW-4491-105'];

  return (
    <section id="hero" className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_bg.jpg" 
          alt="Chowra Logistics Global Freight Network" 
          className="w-full h-full object-cover object-center opacity-45 scale-105 transform transition-transform duration-10000 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Quick Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Next-Generation Courier &amp; Supply Chain Infrastructure</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-['Outfit']">
              Connecting Worlds, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Delivering Absolute Trust
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              CHOWRA LOGISTICS AND COURIERS LIMITED provides seamless domestic &amp; international express courier services, air freight forwarding, ocean container shipping, and automated e-commerce fulfillment with real-time GPS precision.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenPickupModal}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-1 flex items-center gap-2.5"
              >
                <span>Book Doorstep Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#calculator"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700/80 hover:border-emerald-500/40 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>Quick Rate Estimator</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ISO 9001:2026 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Carbon Offset Option</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24/7 Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Interactive Tracking Widget Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative">
              <div className="absolute -top-3 -right-3 bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-lg tracking-wider">
                Instant Tracking
              </div>

              <h3 className="text-xl font-bold text-white mb-2 font-['Outfit']">
                Track Your Parcel Live
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Enter your Chowra Tracking ID or Waybill number to inspect real-time location and estimated time of arrival.
              </p>

              {/* Form */}
              <form onSubmit={handleSearchSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="e.g. CW-9842-881"
                    className="w-full bg-slate-950/90 border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all font-mono"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center gap-1.5"
                  >
                    <Search className="w-4 h-4" />
                    <span>Track</span>
                  </button>
                </div>

                {/* Sample IDs Quick Click */}
                <div className="text-xs text-slate-400">
                  <span className="text-slate-500 mr-2">Try sample tracking IDs:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {sampleTrackingNumbers.map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => {
                          setTrackingNumber(id);
                          onTrackSearch(id);
                          document.getElementById('tracking')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-emerald-400 font-mono text-[11px] border border-slate-700 transition-colors"
                      >
                        {id}
                      </button>
                    ))}
                  </div>
                </div>
              </form>

              {/* Quick Hub Status Notice */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>All Global Custom Hubs Active</span>
                </div>
                <a href="#network" className="text-emerald-400 hover:underline">View Map</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Live Metrics Bar */}
      <div className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-slate-800/60 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">15.2M+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Packages Delivered</div>
          </div>
          <div className="border-r border-slate-800/60 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-['Outfit']">99.4%</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">On-Time Delivery SLA</div>
          </div>
          <div className="border-r border-slate-800/60 last:border-0">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">185+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Countries Served</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-['Outfit']">&lt; 30 Min</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">Average Door Dispatch</div>
          </div>
        </div>
      </div>
    </section>
  );
}
