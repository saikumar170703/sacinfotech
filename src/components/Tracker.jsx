import React, { useState, useEffect } from 'react';
import { 
  Search, Package, CheckCircle2, Clock, MapPin, Truck, 
  Download, Share2, AlertCircle, ShieldCheck, User, PhoneCall, RefreshCw, ChevronRight 
} from 'lucide-react';

const SAMPLE_DATABASE = {
  'CW-9842-881': {
    id: 'CW-9842-881',
    status: 'In Transit',
    statusStep: 3, // 1 to 5
    service: 'Global Express Air Freight',
    sender: 'TechCorp Europe GmbH (Frankfurt, DE)',
    receiver: 'Chowra Logistics UK Hub (London, UK)',
    origin: 'Frankfurt, Germany',
    destination: 'London, United Kingdom',
    estDelivery: 'Today by 17:30 GMT',
    driver: 'Hans Weber (Flight Specialist)',
    driverPhone: '+49 170 5550192',
    weight: '14.5 kg',
    dimensions: '45 x 30 x 25 cm',
    currentLocation: 'London Heathrow Freight Terminal (LHR-3)',
    timeline: [
      { status: 'Order Created', time: 'Sep 26, 2026 - 08:30 AM', location: 'Frankfurt Hub, DE', completed: true },
      { status: 'Picked Up & Customs Cleared', time: 'Sep 26, 2026 - 14:15 PM', location: 'Frankfurt Cargo Airfield', completed: true },
      { status: 'In Transit (Flight CW-802)', time: 'Sep 27, 2026 - 06:40 AM', location: 'Airborne over North Sea', completed: true },
      { status: 'Arrived at Sorting Hub', time: 'Sep 27, 2026 - 10:15 AM', location: 'London Heathrow Gateway', completed: true },
      { status: 'Out for Courier Delivery', time: 'Pending dispatch', location: 'London City Center Hub', completed: false },
      { status: 'Delivered', time: 'Est. 17:30 GMT', location: 'Destination Address', completed: false }
    ]
  },
  'CW-7731-002': {
    id: 'CW-7731-002',
    status: 'Out for Delivery',
    statusStep: 4,
    service: 'HyperLocal Priority Courier',
    sender: 'Chowra Dispatch Center (Manhattan)',
    receiver: 'Dr. Sarah Jenkins (Upper East Side)',
    origin: 'New York City, USA',
    destination: 'Upper East Side, NY, USA',
    estDelivery: 'Today in ~25 mins',
    driver: 'Marcus Vance (EV Courier Unit #4)',
    driverPhone: '+1 (917) 555-0144',
    weight: '2.8 kg',
    dimensions: '20 x 15 x 10 cm',
    currentLocation: '5th Avenue & 72nd Street (En Route)',
    timeline: [
      { status: 'Order Created', time: 'Sep 27, 2026 - 09:00 AM', location: 'Manhattan Fulfillment Hub', completed: true },
      { status: 'Package Scanned & Loaded', time: 'Sep 27, 2026 - 09:45 AM', location: 'Dispatch Station 4', completed: true },
      { status: 'Departed Facility', time: 'Sep 27, 2026 - 10:30 AM', location: 'Midtown Express Hub', completed: true },
      { status: 'Out for Final Delivery', time: 'Sep 27, 2026 - 11:10 AM', location: 'Upper East Side Route', completed: true },
      { status: 'Delivered & Signed', time: 'Est. 11:45 AM', location: 'Customer Reception', completed: false }
    ]
  },
  'CW-4491-105': {
    id: 'CW-4491-105',
    status: 'Delivered',
    statusStep: 5,
    service: 'E-Commerce Priority Direct',
    sender: 'Global Retail Warehouse (Singapore)',
    receiver: 'Alex Chen (Orchard Road)',
    origin: 'Changi Airport Hub, SG',
    destination: 'Orchard Road, Singapore',
    estDelivery: 'Delivered Today at 09:15 AM',
    driver: 'Lin Wei (Courier Lead)',
    driverPhone: '+65 9123 4567',
    weight: '5.2 kg',
    dimensions: '30 x 20 x 15 cm',
    currentLocation: 'Delivered - Verified Proof of Delivery Available',
    timeline: [
      { status: 'Order Placed', time: 'Sep 25, 2026 - 10:00 AM', location: 'Changi Hub, SG', completed: true },
      { status: 'Package Processed', time: 'Sep 25, 2026 - 16:30 PM', location: 'Sorting Center B', completed: true },
      { status: 'Out for Delivery', time: 'Sep 26, 2026 - 08:00 AM', location: 'District 9 Express Depot', completed: true },
      { status: 'Delivered & Signed', time: 'Sep 26, 2026 - 09:15 AM', location: 'Receiver Residence (Photo Attached)', completed: true }
    ]
  }
};

export default function Tracker({ searchId }) {
  const [query, setQuery] = useState(searchId || 'CW-9842-881');
  const [activeTracking, setActiveTracking] = useState(SAMPLE_DATABASE['CW-9842-881']);
  const [isSearching, setIsSearching] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  useEffect(() => {
    if (searchId) {
      setQuery(searchId);
      handleSearch(searchId);
    }
  }, [searchId]);

  const handleSearch = (idToSearch) => {
    const target = idToSearch.trim().toUpperCase();
    setIsSearching(true);
    setTimeout(() => {
      if (SAMPLE_DATABASE[target]) {
        setActiveTracking(SAMPLE_DATABASE[target]);
      } else {
        setActiveTracking({
          id: target,
          status: 'In Transit',
          statusStep: 3,
          service: 'Standard Express Courier',
          sender: 'Central Merchant Facility',
          receiver: 'Registered Customer Address',
          origin: 'Regional Dispatch Hub',
          destination: 'Destination Metro Area',
          estDelivery: 'Tomorrow by 18:00',
          driver: 'Chowra Logistics Fleet Agent',
          driverPhone: '+1 (800) 555-2469',
          weight: '4.0 kg',
          dimensions: '25 x 25 x 20 cm',
          currentLocation: 'Central Intermodal Logistics Hub',
          timeline: [
            { status: 'Waybill Registered', time: 'Recent', location: 'Origin Depot', completed: true },
            { status: 'In Transit between Facilities', time: 'In Progress', location: 'Regional Transit Corridor', completed: true },
            { status: 'Arrival at Destination City', time: 'Pending', location: 'Local Sorting Center', completed: false },
            { status: 'Delivered to Addressee', time: 'Scheduled', location: 'Final Destination', completed: false }
          ]
        });
      }
      setIsSearching(false);
    }, 400);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query) {
      handleSearch(query);
    }
  };

  const showToast = (msg) => {
    setNotificationMsg(msg);
    setTimeout(() => setNotificationMsg(''), 3500);
  };

  return (
    <section id="tracking" className="py-20 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Package className="w-3.5 h-3.5" />
            <span>Live Parcel &amp; Freight Tracker</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            Track &amp; Trace Your Shipments Live
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Get instant real-time telemetry, driver status, delivery windows, and digital proof of delivery.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleFormSubmit} className="flex gap-2 p-2 bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-2xl shadow-lg">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Waybill or Tracking Number (e.g. CW-9842-881)..."
                className="w-full bg-transparent pl-12 pr-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold rounded-xl text-sm transition-all flex items-center gap-2 shadow-md shadow-emerald-500/20"
            >
              {isSearching ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <span>Track Parcel</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Tabs to Test */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-slate-600 dark:text-slate-400">
            <span>Quick Sample Cases:</span>
            {Object.keys(SAMPLE_DATABASE).map((id) => (
              <button
                key={id}
                onClick={() => { setQuery(id); handleSearch(id); }}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-colors border ${
                  activeTracking?.id === id 
                    ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border-emerald-500/50 font-bold' 
                    : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-800 hover:border-slate-400'
                }`}
              >
                {id} ({SAMPLE_DATABASE[id].status})
              </button>
            ))}
          </div>
        </div>

        {/* Notification Toast */}
        {notificationMsg && (
          <div className="max-w-md mx-auto mb-6 p-3 bg-emerald-500 text-slate-950 font-semibold text-xs rounded-xl shadow-lg text-center animate-bounce">
            {notificationMsg}
          </div>
        )}

        {/* Detailed Tracking Status Card */}
        {activeTracking && (
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
            
            {/* Top Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">Waybill Number</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono mt-0.5 flex items-center gap-3">
                  <span>{activeTracking.id}</span>
                  <span className={`text-xs px-3 py-1 rounded-full font-sans font-bold border ${
                    activeTracking.status === 'Delivered' 
                      ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30'
                      : activeTracking.status === 'Out for Delivery'
                      ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border-cyan-500/30'
                      : 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30'
                  }`}>
                    {activeTracking.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button 
                  onClick={() => showToast('Proof of Delivery PDF downloaded successfully!')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-800 flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Download POD</span>
                </button>
                <button 
                  onClick={() => showToast('Tracking link copied to clipboard!')}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-800 flex items-center gap-1.5 transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Share Tracking</span>
                </button>
              </div>
            </div>

            {/* Visual Timeline Progress Steps Bar */}
            <div>
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Delivery Status Progress</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                {[
                  { step: 1, label: 'Order Created' },
                  { step: 2, label: 'Picked Up' },
                  { step: 3, label: 'In Transit Hub' },
                  { step: 4, label: 'Out for Delivery' },
                  { step: 5, label: 'Delivered' }
                ].map((item) => {
                  const isDone = item.step <= activeTracking.statusStep;
                  const isCurrent = item.step === activeTracking.statusStep;
                  return (
                    <div 
                      key={item.step} 
                      className={`p-3 rounded-xl border transition-all ${
                        isCurrent 
                          ? 'bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-400 font-bold' 
                          : isDone 
                          ? 'bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-300' 
                          : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-900 text-slate-400 dark:text-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-[10px] font-bold opacity-75">STEP 0{item.step}</span>
                        {isDone ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Clock className="w-3.5 h-3.5 text-slate-400" />}
                      </div>
                      <div className="font-bold text-xs">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Shipment Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div>
                <div className="text-xs text-slate-500 uppercase font-semibold">Origin &amp; Sender</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{activeTracking.origin}</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{activeTracking.sender}</div>
              </div>

              <div>
                <div className="text-xs text-slate-500 uppercase font-semibold">Destination &amp; Receiver</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{activeTracking.destination}</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{activeTracking.receiver}</div>
              </div>

              <div>
                <div className="text-xs text-slate-500 uppercase font-semibold">Est. Arrival Window</div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{activeTracking.estDelivery}</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Service: {activeTracking.service}</div>
              </div>
            </div>

            {/* Activity Log & Driver Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Log History */}
              <div className="lg:col-span-8 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Detailed Location Activity Log</span>
                </h4>

                <div className="space-y-3 relative pl-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-300 dark:before:bg-slate-800">
                  {activeTracking.timeline.map((log, index) => (
                    <div key={index} className="relative group">
                      <div className={`absolute -left-[21px] top-1.5 w-3 h-3 rounded-full border-2 ${
                        log.completed 
                          ? 'bg-emerald-500 border-white dark:border-slate-950' 
                          : 'bg-slate-300 dark:bg-slate-800 border-slate-400 dark:border-slate-700'
                      }`} />
                      <div className="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className={`text-xs font-bold ${log.completed ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>
                            {log.status}
                          </span>
                          <span className="text-[11px] text-slate-500 font-mono">{log.time}</span>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{log.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Driver & Specs */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 uppercase font-semibold mb-3">Assigned Dispatcher</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{activeTracking.driver}</div>
                      <div className="text-xs text-slate-500">Certified Logistics Officer</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => showToast(`Calling ${activeTracking.driver} at ${activeTracking.driverPhone}...`)}
                    className="w-full mt-4 py-2 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Contact Driver</span>
                  </button>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
                  <div className="text-xs text-slate-500 uppercase font-semibold">Package Specs</div>
                  <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Total Weight:</span>
                    <span className="font-mono text-slate-900 dark:text-white font-semibold">{activeTracking.weight}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Dimensions:</span>
                    <span className="font-mono text-slate-900 dark:text-white font-semibold">{activeTracking.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500 dark:text-slate-400">Insurance Status:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Insured up to $5,000
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
