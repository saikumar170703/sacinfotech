import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import PickupSection from '../components/PickupSection';
import { Truck, CheckCircle2, ShieldCheck, MapPin, Calendar } from 'lucide-react';

export default function PickupPage({ onOpenPickupModal }) {
  useEffect(() => {
    document.title = "Schedule Doorstep Courier Pickup | Chowra Logistics";
  }, []);

  return (
    <div className="animate-fadeIn space-y-0">
      <Breadcrumbs items={[{ label: 'Book Doorstep Pickup' }]} />

      {/* Main Pickup Workflow Component */}
      <PickupSection onOpenPickupModal={onOpenPickupModal} />
    </div>
  );
}
