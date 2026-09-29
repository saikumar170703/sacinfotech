import React, { useState, useMemo } from 'react';
import { Calculator, Truck, Plane, Anchor, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function RateCalculator({ onBookWithQuote }) {
  const [origin, setOrigin] = useState('United States');
  const [destination, setDestination] = useState('United Kingdom');
  const [serviceType, setServiceType] = useState('air-express');
  const [weight, setWeight] = useState(5.0);
  const [length, setLength] = useState(30);
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(15);
  const [isFragile, setIsFragile] = useState(false);
  const [isColdChain, setIsColdChain] = useState(false);
  const [declaredValue, setDeclaredValue] = useState(250);

  const countries = [
    'United States', 'United Kingdom', 'Germany', 'Singapore', 
    'United Arab Emirates', 'China', 'Australia', 'Nigeria', 
    'India', 'Canada', 'France', 'Japan'
  ];

  // Dynamic calculation logic
  const calculation = useMemo(() => {
    const volWeight = (length * width * height) / 5000;
    const billableWeight = Math.max(weight, volWeight);

    let ratePerKg = 12.0;
    let baseMin = 45;
    let days = '1 - 2 Business Days';

    if (serviceType === 'air-express') {
      ratePerKg = 15.5;
      baseMin = 50;
      days = '1 - 2 Business Days';
    } else if (serviceType === 'air-standard') {
      ratePerKg = 9.0;
      baseMin = 35;
      days = '3 - 4 Business Days';
    } else if (serviceType === 'ocean-fcl') {
      ratePerKg = 2.5;
      baseMin = 180;
      days = '14 - 20 Business Days';
    } else if (serviceType === 'ocean-lcl') {
      ratePerKg = 3.5;
      baseMin = 95;
      days = '18 - 24 Business Days';
    } else if (serviceType === 'ground-express') {
      ratePerKg = 6.0;
      baseMin = 25;
      days = '2 - 3 Business Days';
    }

    const isSameCountry = origin === destination;
    const borderMultiplier = isSameCountry ? 0.6 : 1.35;

    let subtotal = Math.max(baseMin, billableWeight * ratePerKg * borderMultiplier);

    if (isFragile) subtotal += 15;
    if (isColdChain) subtotal += 35;

    const fuelSurcharge = subtotal * 0.085;
    const insurance = declaredValue > 100 ? declaredValue * 0.015 : 0;
    const totalCost = subtotal + fuelSurcharge + insurance;

    return {
      billableWeight: billableWeight.toFixed(1),
      volumetricWeight: volWeight.toFixed(1),
      subtotal: subtotal.toFixed(2),
      fuelSurcharge: fuelSurcharge.toFixed(2),
      insurance: insurance.toFixed(2),
      totalCost: totalCost.toFixed(2),
      estimatedDays: isSameCountry ? 'Same Day / Next Day' : days
    };
  }, [origin, destination, serviceType, weight, length, width, height, isFragile, isColdChain, declaredValue]);

  const handleBookQuote = () => {
    onBookWithQuote({
      origin,
      destination,
      serviceType,
      weight,
      estimatedPrice: `$${calculation.totalCost}`
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Rate &amp; Delivery SLA Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            Calculate Your Shipping Costs Instantly
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Transparent pricing with zero hidden fees. Calculate air freight, ocean cargo, or express courier rates across any global lane.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Service Level Tabs */}
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                Select Shipping Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'air-express', name: 'Air Express Door', icon: Plane, tag: 'Fastest' },
                  { id: 'air-standard', name: 'Air Freight Cargo', icon: Plane, tag: 'Standard' },
                  { id: 'ocean-fcl', name: 'Ocean Container', icon: Anchor, tag: 'Bulk' },
                  { id: 'ocean-lcl', name: 'Ocean Shared LCL', icon: Anchor, tag: 'Economy' },
                  { id: 'ground-express', name: 'Ground Priority', icon: Truck, tag: 'Regional' }
                ].map((s) => {
                  const Icon = s.icon;
                  const active = serviceType === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setServiceType(s.id)}
                      className={`p-3 rounded-xl border text-left transition-all relative ${
                        active 
                          ? 'bg-emerald-500/15 border-emerald-500 text-slate-900 dark:text-white shadow-md' 
                          : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <Icon className={`w-4 h-4 ${active ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`} />
                        <span className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded ${
                          active ? 'bg-emerald-500 text-slate-950' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          {s.tag}
                        </span>
                      </div>
                      <div className="text-xs font-bold">{s.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Origin & Destination Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                  Origin Country
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 font-semibold"
                >
                  {countries.map((c) => (
                    <option key={c} value={c} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                  Destination Country
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 font-semibold"
                >
                  {countries.map((c) => (
                    <option key={c} value={c} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Weight Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Actual Weight (KG)
                </label>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 font-mono">{weight} kg</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="100"
                step="0.5"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
                className="w-full accent-emerald-500 h-2 bg-slate-200 dark:bg-slate-950 rounded-lg cursor-pointer"
              />
            </div>

            {/* Dimensions (L x W x H) */}
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                Dimensions (cm) &amp; Volumetric Weight
              </label>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block mb-1">Length</span>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white font-mono"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block mb-1">Width</span>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white font-mono"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block mb-1">Height</span>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-900 dark:text-white font-mono"
                  />
                </div>
              </div>
              <div className="text-[11px] text-slate-500 mt-2 flex justify-between">
                <span>Billable Weight: <strong className="text-slate-800 dark:text-slate-300 font-mono">{calculation.billableWeight} kg</strong></span>
                <span>Volumetric: <strong className="text-slate-700 dark:text-slate-400 font-mono">{calculation.volumetricWeight} kg</strong></span>
              </div>
            </div>

            {/* Additional Options */}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={isFragile}
                  onChange={(e) => setIsFragile(e.target.checked)}
                  className="rounded bg-slate-100 dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-emerald-500 focus:ring-0"
                />
                <span>Fragile Handling (+ $15)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={isColdChain}
                  onChange={(e) => setIsColdChain(e.target.checked)}
                  className="rounded bg-slate-100 dark:bg-slate-950 border-slate-300 dark:border-slate-700 text-emerald-500 focus:ring-0"
                />
                <span>Cold Chain (-20°C to +4°C) (+ $35)</span>
              </label>
            </div>

          </div>

          {/* Result Card (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/40 uppercase">
              Guaranteed Quote
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 font-['Outfit']">
              Estimated Shipping Summary
            </h3>

            {/* Big Price Display */}
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center mb-6">
              <div className="text-xs text-slate-500 uppercase font-semibold">Total Estimated Amount</div>
              <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 font-['Outfit'] my-1">
                ${calculation.totalCost}
              </div>
              <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center justify-center gap-1.5 mt-2">
                <Clock className="w-3.5 h-3.5" />
                <span>Est. SLA: {calculation.estimatedDays}</span>
              </div>
            </div>

            {/* Fee Breakdown */}
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div className="flex justify-between">
                <span>Base Shipping ({calculation.billableWeight} kg):</span>
                <span className="text-slate-900 dark:text-white font-mono">${calculation.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Fuel Surcharge (8.5%):</span>
                <span className="text-slate-900 dark:text-white font-mono">${calculation.fuelSurcharge}</span>
              </div>
              <div className="flex justify-between">
                <span>Customs Insurance Coverage:</span>
                <span className="text-slate-900 dark:text-white font-mono">${calculation.insurance}</span>
              </div>
              <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-semibold pt-1 border-t border-slate-200 dark:border-slate-800">
                <span>Customs Paperwork Assistance:</span>
                <span>Included FREE</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6 space-y-3">
              <button
                onClick={handleBookQuote}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-extrabold rounded-2xl text-sm transition-all transform hover:-translate-y-0.5 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <span>Book Shipping at This Rate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Locked rate for 48 hours. No upfront payment required.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
