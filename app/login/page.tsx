'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Signing in...');

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage('Error: ' + error.message);
    } else {
      setMessage('Success! Redirecting...');
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to FarmBridge</p>
        </div>

        {message && (
          <div className={`text-sm p-3 rounded-xl mb-4 text-center ${message.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3" placeholder="marvelmikel5625@gmail.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-gray-300 px-4 py-3" placeholder="••••••••" required />
          </div>
          <button type="submit" className="w-full bg-green-900 text-white rounded-xl py-3.5 font-semibold hover:bg-green-800 transition">Sign In</button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account? <Link href="/signup" className="text-green-700 font-medium hover:underline">Create Account</Link>
        </div>
      </div>
    </div>
  );
}
