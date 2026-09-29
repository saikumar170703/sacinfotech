import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Elena Rostova',
      role: 'VP of Supply Chain',
      company: 'Global Retail Corp (Berlin)',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'Chowra Logistics reduced our cross-border European delivery delays by 40%. Their automated customs clearance and live API telemetry allowed our e-commerce operations to scale seamlessly across 14 countries.'
    },
    {
      id: 2,
      name: 'David K. Sterling',
      role: 'Director of International Freight',
      company: 'Apex BioPharma Inc (New York)',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'When shipping temperature-sensitive pharmaceutical vaccines, zero error margins are tolerated. Chowra’s Cold Chain IoT monitoring and 99.4% SLA guarantee have made them our exclusive logistics partner.'
    },
    {
      id: 3,
      name: 'Rajesh K. Mehta',
      role: 'Head of Operations',
      company: 'TechFab Electronics (Singapore)',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      quote: 'The instant door pickup booking and transparent rate calculator save our team hours every week. Outstanding customer service and driver professionalism on every air express charter.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  const partners = [
    'GLOBAL TECH', 'NORDIC FREIGHT', 'EMIRATES SUPPLY', 
    'PACIFIC CARGO', 'APEX HEALTHCARE', 'EURO RETAIL'
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trusted Partners Logos Bar */}
        <div className="mb-16 text-center">
          <div className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-6">
            Trusted By Over 12,000+ Enterprise Supply Chains &amp; Global Brands
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center opacity-80">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-center font-extrabold text-xs tracking-widest text-slate-600 dark:text-slate-400 font-['Outfit'] hover:opacity-100 hover:text-emerald-500 transition-all cursor-default shadow-sm"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            What Our Partners Say About Us
          </h2>
        </div>

        {/* Interactive Review Carousel Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl relative">
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Reviewer Photo */}
            <div className="relative shrink-0">
              <img
                src={current.image}
                alt={current.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-emerald-500 shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-slate-950 p-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Review Details */}
            <div className="space-y-4 text-center sm:text-left flex-1">
              
              {/* Star Rating */}
              <div className="flex justify-center sm:justify-start gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 dark:text-slate-200 text-base sm:text-lg italic leading-relaxed">
                "{current.quote}"
              </blockquote>

              {/* Author Info */}
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-base font-['Outfit']">{current.name}</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">{current.role} &bull; {current.company}</div>
              </div>

            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-900">
            <div className="text-xs text-slate-500">
              Showing testimonial <strong className="text-slate-900 dark:text-white">{currentIndex + 1}</strong> of {reviews.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 border border-slate-300 dark:border-slate-800 transition-colors"
                title="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 border border-slate-300 dark:border-slate-800 transition-colors"
                title="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
