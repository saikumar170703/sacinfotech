import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import Tracker from '../components/Tracker';

export default function TrackingPage() {
  const { trackingId } = useParams();

  useEffect(() => {
    document.title = trackingId 
      ? `Tracking Parcel ${trackingId} | Chowra Logistics` 
      : "Track Your Shipment Live | Chowra Logistics";
  }, [trackingId]);

  return (
    <div className="animate-fadeIn">
      <Breadcrumbs items={[{ label: 'Shipment Tracking' }]} />
      
      {/* Embedded Full Tracker Component */}
      <Tracker searchId={trackingId || 'CW-9842-881'} />
    </div>
  );
}
