import React, { useState } from 'react';
import { Globe, Search, Plane, Ship, CheckCircle2, Radio } from 'lucide-react';

const HUBS_DATA = [
  { region: 'North America', city: 'New York (JFK Hub)', country: 'United States', status: 'Active', transit: '24-48 Hours', directFlights: 42, seaPorts: 'Port of NY/NJ' },
  { region: 'North America', city: 'Los Angeles (LAX Hub)', country: 'United States', status: 'Active', transit: '24-48 Hours', directFlights: 38, seaPorts: 'Port of Long Beach' },
  { region: 'North America', city: 'Toronto Gateway', country: 'Canada', status: 'Active', transit: '24-72 Hours', directFlights: 25, seaPorts: 'Great Lakes Hub' },
  
  { region: 'Europe', city: 'London Heathrow Gateway', country: 'United Kingdom', status: 'Active', transit: '24-48 Hours', directFlights: 55, seaPorts: 'Felixstowe Port' },
  { region: 'Europe', city: 'Frankfurt Central Hub', country: 'Germany', status: 'Active', transit: '24-48 Hours', directFlights: 60, seaPorts: 'Hamburg Intermodal' },
  { region: 'Europe', city: 'Paris Charles de Gaulle', country: 'France', status: 'Active', transit: '24-48 Hours', directFlights: 40, seaPorts: 'Le Havre Port' },

  { region: 'Asia Pacific', city: 'Singapore Changi Hub', country: 'Singapore', status: 'Active', transit: '12-36 Hours', directFlights: 70, seaPorts: 'Port of Singapore (PSA)' },
  { region: 'Asia Pacific', city: 'Tokyo Narita Gateway', country: 'Japan', status: 'Active', transit: '24-48 Hours', directFlights: 48, seaPorts: 'Tokyo Bay Cargo' },
  { region: 'Asia Pacific', city: 'Sydney Express Hub', country: 'Australia', status: 'Active', transit: '48-72 Hours', directFlights: 30, seaPorts: 'Botany Bay Cargo' },
  { region: 'Asia Pacific', city: 'Mumbai Gateway', country: 'India', status: 'Active', transit: '24-48 Hours', directFlights: 45, seaPorts: 'Nhava Sheva Port' },

  { region: 'Middle East & Africa', city: 'Dubai World Central Hub', country: 'UAE', status: 'Active', transit: '12-24 Hours', directFlights: 85, seaPorts: 'Jebel Ali Free Zone' },
  { region: 'Middle East & Africa', city: 'Lagos Hub (MMA)', country: 'Nigeria', status: 'Active', transit: '24-48 Hours', directFlights: 28, seaPorts: 'Lekki Deep Sea Port' },
  { region: 'Middle East & Africa', city: 'Johannesburg Gateway', country: 'South Africa', status: 'Active', transit: '48-72 Hours', directFlights: 22, seaPorts: 'Durban Container Terminal' },

  { region: 'Latin America', city: 'São Paulo (GRU Hub)', country: 'Brazil', status: 'Active', transit: '48-72 Hours', directFlights: 20, seaPorts: 'Port of Santos' },
  { region: 'Latin America', city: 'Mexico City Cargo Hub', country: 'Mexico', status: 'Active', transit: '24-48 Hours', directFlights: 26, seaPorts: 'Manzanillo Terminal' }
];

export default function NetworkCoverage() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [searchTerm, setSearchTerm] = useState('');

  const regions = ['All Regions', 'North America', 'Europe', 'Asia Pacific', 'Middle East & Africa', 'Latin America'];

  const filteredHubs = HUBS_DATA.filter((hub) => {
    const matchesRegion = selectedRegion === 'All Regions' || hub.region === selectedRegion;
    const matchesSearch = hub.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          hub.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="network" className="py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-white relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Coverage &amp; Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] tracking-tight">
            185+ Countries Connected By Our Smart Hubs
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3">
            Our strategic air cargo corridors, automated sorting centers, and deep-water port operations guarantee seamless cross-border freight transit.
          </p>
        </div>

        {/* Region Filter & Search Input */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          
          {/* Region Tabs */}
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedRegion === region
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search hub or country..."
              className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Live Network Metric Banner */}
        <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Radio className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <div>
              <span className="font-bold text-slate-900 dark:text-white">Live Global Logistics Network Telemetry: </span>
              <span className="text-slate-600 dark:text-slate-400">All 185 primary gateways and custom terminals reporting 0 delay overhead.</span>
            </div>
          </div>
          <div className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">
            Showing {filteredHubs.length} Operational Facilities
          </div>
        </div>

        {/* Hub Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHubs.map((hub, i) => (
            <div
              key={i}
              className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{hub.region}</div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors font-['Outfit'] mt-0.5">
                    {hub.city}
                  </h4>
                  <div className="text-xs text-slate-600 dark:text-slate-400">{hub.country}</div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>{hub.status}</span>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    <span>Direct Air Corridors:</span>
                  </span>
                  <span className="font-mono text-slate-900 dark:text-white font-bold">{hub.directFlights} / Day</span>
                </div>

                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Ship className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Maritime Seaport:</span>
                  </span>
                  <span className="text-slate-900 dark:text-white font-semibold">{hub.seaPorts}</span>
                </div>

                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Avg Door Transit:</span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold font-mono">{hub.transit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
