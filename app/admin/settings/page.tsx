'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Save } from 'lucide-react';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        
        <Link href="/admin" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Platform Settings</h1>

        {saved && <div className="bg-green-50 text-green-700 p-4 rounded-xl mb-6 text-sm font-medium">✅ Settings saved successfully!</div>}

        <form onSubmit={handleSave} className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Commission Rates</h3>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Basic Plan Commission (%)</label><input type="number" defaultValue={8} className="w-full rounded-xl border border-gray-300 px-4 py-3" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Pro Plan Commission (%)</label><input type="number" defaultValue={5} className="w-full rounded-xl border border-gray-300 px-4 py-3" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Premium Plan Commission (%)</label><input type="number" defaultValue={3} className="w-full rounded-xl border border-gray-300 px-4 py-3" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Business Plan Commission (%)</label><input type="number" defaultValue={1.5} className="w-full rounded-xl border border-gray-300 px-4 py-3" /></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Subscription Prices</h3>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Pro Plan (₦/month)</label><input type="number" defaultValue={5000} className="w-full rounded-xl border border-gray-300 px-4 py-3" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Premium Plan (₦/month)</label><input type="number" defaultValue={15000} className="w-full rounded-xl border border-gray-300 px-4 py-3" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Business Plan (₦/month)</label><input type="number" defaultValue={50000} className="w-full rounded-xl border border-gray-300 px-4 py-3" /></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Platform Info</h3>
            <div className="space-y-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Platform Name</label><input type="text" defaultValue="FarmBridge" className="w-full rounded-xl border border-gray-300 px-4 py-3" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label><input type="email" defaultValue="farmpricenigeria@gmail.com" className="w-full rounded-xl border border-gray-300 px-4 py-3" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label><input type="text" defaultValue="09057773551" className="w-full rounded-xl border border-gray-300 px-4 py-3" /></div>
            </div>
          </div>

          <button type="submit" className="flex items-center gap-2 bg-green-900 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-green-800 transition">
            <Save className="w-4 h-4" /> Save All Settings
          </button>
        </form>

      </div>
    </div>
  );
}
