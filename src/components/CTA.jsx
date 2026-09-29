import React, { useState } from 'react';
import { Smartphone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTA({ onOpenPickupModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Banner Box */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-emerald-500/30 dark:border-slate-800 rounded-3xl p-8 sm:p-14 shadow-2xl overflow-hidden relative text-white">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Text & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Seamless Mobile &amp; API Connectivity</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit'] tracking-tight leading-tight">
                Ready to Experience Next-Gen Logistics Speed?
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Join 12,000+ businesses and millions of individuals who rely on CHOWRA LOGISTICS AND COURIERS LIMITED for guaranteed on-time delivery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenPickupModal}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <span>Book Immediate Pickup</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#calculator"
                  className="px-6 py-4 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-white font-bold text-sm border border-slate-700 transition-all"
                >
                  Quick Rate Calculator
                </a>
              </div>

              {/* App Badges */}
              <div className="pt-6 border-t border-slate-700/60 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span>Download Chowra Mobile App:</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => alert('Chowra iOS App redirect link triggered.')}
                    className="px-4 py-2 bg-slate-950 hover:bg-slate-900 border border-slate-700 rounded-xl text-white font-semibold flex items-center gap-2 text-xs transition-colors"
                  >
                    <span>App Store (iOS)</span>
                  </button>
                  <button 
                    onClick={() => alert('Chowra Android App redirect link triggered.')}
                    className="px-4 py-2 bg-slate-950 hover:bg-slate-900 border border-slate-700 rounded-xl text-white font-semibold flex items-center gap-2 text-xs transition-colors"
                  >
                    <span>Google Play (Android)</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right Newsletter Box (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950/90 border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-xl font-bold font-['Outfit'] flex items-center gap-2 text-white">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span>Trade &amp; Freight Rate Alerts</span>
              </h3>
              <p className="text-xs text-slate-300">
                Subscribe to receive weekly international fuel surcharge updates, customs regulation alerts, and volume discount codes.
              </p>

              {subscribed ? (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs rounded-xl text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed successfully! Thank you.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email address..."
                    className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-lg"
                  >
                    Subscribe to Trade Insights
                  </button>
                </form>
              )}

              <div className="text-[10px] text-slate-400 text-center">
                We respect your privacy. Unsubscribe anytime with 1-click.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
