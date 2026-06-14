'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Pencil, Trash2 } from 'lucide-react';

const posts = [
  { title: 'How Biogas is Revolutionizing Nigerian Farms', category: 'Biogas & Energy', status: 'Published', date: 'May 15, 2025', views: 234 },
  { title: '5 Tips for Higher Maize Yield', category: 'Crop Guides', status: 'Published', date: 'May 10, 2025', views: 567 },
  { title: 'Understanding Fertilizer Prices in 2025', category: 'Market Insights', status: 'Draft', date: '—', views: 0 },
];

export default function BlogAdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        
        <Link href="/admin" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Blog Posts</h1>
            <p className="text-gray-500 mt-1">{posts.length} total posts</p>
          </div>
          <button className="flex items-center gap-2 bg-amber-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-amber-700 transition shadow-md">
            <Plus className="w-4 h-4" /> New Post
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Title</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Category</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Date</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Views</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.title} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{post.title}</td>
                  <td className="py-3 px-4 text-gray-500">{post.category}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${post.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{post.status}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">{post.date}</td>
                  <td className="py-3 px-4 text-gray-500">{post.views}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-gray-200 rounded-lg"><Pencil className="w-3.5 h-3.5 text-gray-400" /></button>
                      <button className="p-1.5 hover:bg-red-50 rounded-lg"><Trash2 className="w-3.5 h-3.5 text-red-400" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
