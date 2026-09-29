import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import WhyUs from '../components/WhyUs';

export default function WhyUsPage() {
  useEffect(() => {
    document.title = "Why Choose Chowra Logistics | Technology & Reliability Advantage";
  }, []);

  return (
    <div className="animate-fadeIn space-y-0">
      <Breadcrumbs items={[{ label: 'Why Choose Chowra' }]} />

      {/* Main WhyUs Component */}
      <WhyUs />
    </div>
  );
}
