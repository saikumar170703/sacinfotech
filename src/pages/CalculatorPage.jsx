import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Calculator from '../components/Calculator';

export default function CalculatorPage({ onBookWithQuote }) {
  useEffect(() => {
    document.title = "Instant Shipping Rate & Delivery SLA Calculator | Chowra Logistics";
  }, []);

  return (
    <div className="animate-fadeIn space-y-0">
      <Breadcrumbs items={[{ label: 'Rate Calculator / Quick Quote' }]} />

      {/* Main Rate Calculator Component */}
      <Calculator onBookWithQuote={onBookWithQuote} />
    </div>
  );
}
