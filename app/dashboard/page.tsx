'use client';

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push('/login');
  }, [user, loading, router]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <h1 className="text-2xl font-serif font-bold text-gray-900">Welcome, {user.user_metadata?.full_name || 'Farmer'} 👋</h1>
          <p className="text-gray-500 mt-1">{user.email}</p>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Want to Sell on FarmBridge?</h2>
          <p className="text-gray-500 mb-6">List your products and reach thousands of buyers.</p>
          <Link href="/dashboard/become-seller" className="bg-amber-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-amber-700 transition">Become a Seller</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/marketplace" className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">🛒<p className="font-medium mt-2 text-sm">Browse Products</p></Link>
          <Link href="/dashboard/orders" className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">📦<p className="font-medium mt-2 text-sm">My Orders</p></Link>
          <Link href="/dashboard/wishlist" className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">❤️<p className="font-medium mt-2 text-sm">Saved Items</p></Link>
          <button onClick={() => supabase.auth.signOut().then(() => router.push('/'))} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition text-red-500">🚪<p className="font-medium mt-2 text-sm">Sign Out</p></button>
        </div>
      </div>
    </div>
  );
}
