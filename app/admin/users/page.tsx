import Link from 'next/link';
import { ArrowLeft, Search, MoreHorizontal } from 'lucide-react';

const users = [
  { name: 'Ibrahim Musa', email: 'ibrahim@email.com', role: 'Seller', status: 'Active', joined: 'Jan 2025' },
  { name: 'Grace Okonkwo', email: 'grace@email.com', role: 'Buyer', status: 'Active', joined: 'Feb 2025' },
  { name: 'Ahmed Bello', email: 'ahmed@email.com', role: 'Seller', status: 'Pending KYC', joined: 'Mar 2025' },
  { name: 'Mary John', email: 'mary@email.com', role: 'Buyer', status: 'Active', joined: 'Mar 2025' },
  { name: 'Samuel Eze', email: 'samuel@email.com', role: 'Seller', status: 'Suspended', joined: 'Dec 2024' },
];

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        
        <Link href="/admin" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">User Management</h1>
            <p className="text-gray-500 mt-1">{users.length} total users</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input className="pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-green-600/20 outline-none" placeholder="Search users..." />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Name</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Email</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Role</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Joined</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{user.name}</td>
                  <td className="py-3 px-4 text-gray-500">{user.email}</td>
                  <td className="py-3 px-4 text-gray-500">{user.role}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      user.status === 'Active' ? 'bg-green-100 text-green-700' :
                      user.status === 'Pending KYC' ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>{user.status}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-500">{user.joined}</td>
                  <td className="py-3 px-4">
                    <button className="p-1 hover:bg-gray-200 rounded-lg"><MoreHorizontal className="w-4 h-4 text-gray-400" /></button>
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
