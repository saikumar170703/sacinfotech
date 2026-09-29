import React, { useState, useEffect } from 'react';
import { X, Package, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function PickupModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    senderName: '',
    senderPhone: '',
    senderAddress: '',
    originCountry: 'United States',
    receiverName: '',
    receiverPhone: '',
    receiverAddress: '',
    destinationCountry: 'United Kingdom',
    packageType: 'Parcel',
    weight: '5.0',
    serviceLevel: 'air-express',
    pickupDate: new Date().toISOString().split('T')[0],
    pickupTimeSlot: 'Morning (09:00 - 12:00)',
    specialInstructions: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        originCountry: initialData.origin || prev.originCountry,
        destinationCountry: initialData.destination || prev.destinationCountry,
        serviceLevel: initialData.serviceType || prev.serviceLevel,
        weight: initialData.weight ? String(initialData.weight) : prev.weight
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    const randomId = 'BK-' + Math.floor(1000 + Math.random() * 9000) + '-2026';
    setBookingId(randomId);
    setBookingConfirmed(true);
  };

  const resetAndClose = () => {
    setBookingConfirmed(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative text-slate-900 dark:text-white flex flex-col max-h-[90vh] transition-colors">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold font-['Outfit'] flex items-center gap-2">
              <Package className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Book a Doorstep Courier Pickup</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              CHOWRA LOGISTICS &amp; COURIERS LIMITED &bull; On-Demand Courier Dispatch
            </p>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 rounded-xl bg-slate-200 dark:bg-slate-900 hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Bar */}
        {!bookingConfirmed && (
          <div className="px-6 py-3 bg-slate-100 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800 flex justify-around text-xs">
            <span className={`font-bold flex items-center gap-1.5 ${step >= 1 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-600'}`}>
              <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px]">1</span>
              <span>Addresses</span>
            </span>
            <span className={`font-bold flex items-center gap-1.5 ${step >= 2 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-600'}`}>
              <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px]">2</span>
              <span>Package Specs</span>
            </span>
            <span className={`font-bold flex items-center gap-1.5 ${step >= 3 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-600'}`}>
              <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px]">3</span>
              <span>Schedule Slot</span>
            </span>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {bookingConfirmed ? (
            /* Confirmation State */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-['Outfit']">Pickup Request Confirmed!</h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Your courier dispatch ticket has been issued. A Chowra Logistics agent will arrive at your address during your selected window.
              </p>

              <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 max-w-sm mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Pickup Date:</span>
                  <span className="text-slate-900 dark:text-white">{formData.pickupDate} ({formData.pickupTimeSlot})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Pickup Address:</span>
                  <span className="text-slate-900 dark:text-white truncate max-w-[180px]">{formData.senderAddress || 'Local Address'}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-emerald-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-emerald-400 transition-colors shadow-md"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          ) : (
            /* Form Steps */
            <form onSubmit={step === 3 ? handleCompleteBooking : (e) => { e.preventDefault(); setStep(step + 1); }}>
              
              {/* Step 1: Addresses */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                    Sender &amp; Receiver Addresses
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Sender Full Name *</label>
                      <input
                        type="text"
                        name="senderName"
                        required
                        value={formData.senderName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Sender Phone Number *</label>
                      <input
                        type="tel"
                        name="senderPhone"
                        required
                        value={formData.senderPhone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-1122"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Pickup Doorstep Address *</label>
                    <input
                      type="text"
                      name="senderAddress"
                      required
                      value={formData.senderAddress}
                      onChange={handleChange}
                      placeholder="123 Logistics Way, Suite 400..."
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Receiver Name *</label>
                      <input
                        type="text"
                        name="receiverName"
                        required
                        value={formData.receiverName}
                        onChange={handleChange}
                        placeholder="Sarah Jenkins"
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Destination Address *</label>
                      <input
                        type="text"
                        name="receiverAddress"
                        required
                        value={formData.receiverAddress}
                        onChange={handleChange}
                        placeholder="784 High Street, London..."
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Package Specs */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                    Package Details &amp; Type
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Package Type</label>
                      <select
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Document">Confidential Document Envelope</option>
                        <option value="Parcel">Standard Parcel Box</option>
                        <option value="Heavy Freight">Heavy Freight / Pallet</option>
                        <option value="Cold Chain">Temperature Controlled Box</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Estimated Weight (kg)</label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Special Delivery Instructions / Gate Code</label>
                    <textarea
                      name="specialInstructions"
                      rows="3"
                      value={formData.specialInstructions}
                      onChange={handleChange}
                      placeholder="e.g. Leave package at security reception desk..."
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Schedule Date & Time Slot */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                    Select Pickup Date &amp; Preferred Time Slot
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Pickup Date</label>
                      <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Time Window</label>
                      <select
                        name="pickupTimeSlot"
                        value={formData.pickupTimeSlot}
                        onChange={handleChange}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Morning (09:00 - 12:00)">Morning (09:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 - 15:00)">Afternoon (12:00 PM - 03:00 PM)</option>
                        <option value="Evening (15:00 - 18:00)">Evening (03:00 PM - 06:00 PM)</option>
                        <option value="Express 3-Hour Immediate">Express 3-Hour Dispatch (+ $10)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Zero Prepayment Required</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Our uniformed driver will inspect the parcel, weigh it digitally, print your barcoded waybill label on-site, and issue your receipt.
                    </p>
                  </div>
                </div>
              )}

              {/* Step Navigation Controls */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-800 transition-colors flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl text-xs transition-all shadow-md flex items-center gap-1.5"
                >
                  <span>{step === 3 ? 'Confirm Pickup Request' : 'Next Step'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
