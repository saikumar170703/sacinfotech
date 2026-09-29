import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import NetworkCoverage from '../components/NetworkCoverage';

export default function CoveragePage() {
  useEffect(() => {
    document.title = "Global Network Coverage & Hub Locations | Chowra Logistics";
  }, []);

  return (
    <div className="animate-fadeIn space-y-0">
      <Breadcrumbs items={[{ label: 'Global Coverage Network' }]} />

      {/* Main Network Component */}
      <NetworkCoverage />
    </div>
  );
}
