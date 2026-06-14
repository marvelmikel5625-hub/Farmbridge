'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    });
    if (error) setError(error.message);
    else router.push('/dashboard');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">Join Nigeria&apos;s agricultural marketplace</p>
        </div>
        {error && <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl mb-4">{error}</div>}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label><input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-600/20 outline-none" placeholder="Ibrahim Musa" required /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-600/20 outline-none" placeholder="you@email.com" required /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-green-600/20 outline-none" placeholder="Min 6 characters" required /></div>
          <button type="submit" disabled={loading} className="w-full bg-amber-600 text-white rounded-xl py-3.5 font-semibold hover:bg-amber-700 transition disabled:opacity-50">{loading ? 'Creating...' : 'Create Account'}</button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500">Already have an account? <Link href="/login" className="text-green-700 font-medium hover:underline">Sign In</Link></div>
      </div>
    </div>
  );
}
