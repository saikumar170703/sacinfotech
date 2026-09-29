import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  useEffect(() => {
    document.title = "Contact Us & Global Offices | Chowra Logistics";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactData({ fullName: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 5000);
  };

  const offices = [
    { city: 'New York (Global HQ)', address: '450 Logistics Parkway, Suite 100, NY 10001, USA', phone: '+1 (800) 555-CHOWRA', email: 'ny@chowralogistics.com' },
    { city: 'London (European Hub)', address: 'Heathrow Freight Gateway, Building 4B, London TW6 3UA, UK', phone: '+44 20 7946 0912', email: 'london@chowralogistics.com' },
    { city: 'Frankfurt (Central EU)', address: 'Air Cargo Center South, Bldg 501, 60549 Frankfurt, DE', phone: '+49 69 9000 1200', email: 'frankfurt@chowralogistics.com' },
    { city: 'Singapore (APAC HQ)', address: 'Changi Cargo Complex, 115 Airport Cargo Rd, Singapore', phone: '+65 6789 0123', email: 'singapore@chowralogistics.com' },
    { city: 'Dubai (MENA Gateway)', address: 'Dubai World Central Free Zone, Plot 14-B, Dubai, UAE', phone: '+971 4 800 2469', email: 'dubai@chowralogistics.com' },
    { city: 'Tokyo (East Asia)', address: 'Narita Air Cargo Terminal 2, Chiba 282-0004, Japan', phone: '+81 3 5555 0144', email: 'tokyo@chowralogistics.com' }
  ];

  return (
    <div className="animate-fadeIn space-y-0">
      <Breadcrumbs items={[{ label: 'Contact & Support' }]} />

      <section className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 Global Support Directory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-['Outfit'] tracking-tight">
              We're Here to Help You Deliver
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Have a question about a shipment, customs clearance, or enterprise contract? Our logistics specialists respond within 15 minutes.
            </p>
          </div>

          {/* Contact Form & Hotline Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form (7 cols) */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 p-6 sm:p-10 rounded-3xl shadow-2xl space-y-6">
              <h3 className="text-xl font-bold font-['Outfit'] text-white">Send Us a Message</h3>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400 animate-bounce" />
                  <div className="font-bold text-base">Message Sent Successfully!</div>
                  <p className="text-xs text-slate-300">Thank you for reaching out. A Chowra Logistics concierge lead will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={contactData.fullName}
                        onChange={(e) => setContactData({ ...contactData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1">Corporate Email *</label>
                      <input
                        type="email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-400 block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        placeholder="+1 (555) 000-1122"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1">Inquiry Topic</label>
                      <select
                        value={contactData.subject}
                        onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="General Inquiry">General Shipment Inquiry</option>
                        <option value="Customs Assistance">Customs &amp; Tariff Clearance</option>
                        <option value="Corporate Account">Corporate B2B Account Setup</option>
                        <option value="Claims & Insurance">Insurance &amp; Claims Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Message Details *</label>
                    <textarea
                      required
                      rows="4"
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      placeholder="Please describe your shipping requirements or waybill inquiry..."
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Hotline & HQ Summary (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-['Outfit'] text-white">Global Dispatch Hotlines</h3>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">24/7 International Dispatch</div>
                  <div className="text-lg font-extrabold text-emerald-400 font-mono">+1 (800) 555-CHOWRA</div>
                  <div className="text-[11px] text-slate-400">Toll-free from USA, Canada, and UK</div>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">General Email Support</div>
                  <div className="text-sm font-bold text-white font-mono">support@chowralogistics.com</div>
                  <div className="text-[11px] text-slate-400">Average response time &lt; 15 minutes</div>
                </div>

                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-[10px] text-slate-500 uppercase font-bold">Operating Hours</div>
                  <div className="text-xs text-slate-300 font-semibold">Logistics Control Hub: 24/7/365</div>
                  <div className="text-xs text-slate-400">Local Branch Counters: Mon - Sat (08:00 - 20:00)</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 pt-4 border-t border-slate-800">
                Chowra Logistics and Couriers Limited &bull; ISO 9001:2026 Certified Facility
              </div>
            </div>

          </div>

          {/* Offices Directory Grid */}
          <div className="space-y-6 pt-6">
            <h3 className="text-2xl font-bold font-['Outfit'] text-center">Global Gateway Regional Offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((off, idx) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-2 text-xs">
                  <div className="font-bold text-white text-sm font-['Outfit'] flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span>{off.city}</span>
                  </div>
                  <div className="text-slate-400 flex items-start gap-1.5 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span>{off.address}</span>
                  </div>
                  <div className="text-emerald-400 font-mono font-semibold pt-1">{off.phone}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
