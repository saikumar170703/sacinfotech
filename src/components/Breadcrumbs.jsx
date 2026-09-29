import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-900/60 border-b border-slate-800 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            {item.link ? (
              <Link to={item.link} className="hover:text-emerald-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-emerald-400 font-semibold">{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
