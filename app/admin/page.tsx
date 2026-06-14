import Link from 'next/link';
import { Users, ShoppingBag, Banknote, AlertTriangle, FileCheck, MessageSquare, TrendingUp, Settings, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Total Users', value: '1,247', icon: Users, color: 'bg-blue-100 text-blue-700' },
  { label: 'Active Listings', value: '856', icon: ShoppingBag, color: 'bg-green-100 text-green-700' },
  { label: 'Revenue (Monthly)', value: '₦1.1M', icon: Banknote, color: 'bg-amber-100 text-amber-700' },
  { label: 'Pending Disputes', value: '3', icon: AlertTriangle, color: 'bg-red-100 text-red-700' },
];

const quickActions = [
  { label: 'Pending KYC Reviews', count: '5', href: '/admin/kyc', icon: FileCheck, color: 'text-amber-600' },
  { label: 'Flagged Listings', count: '2', href: '/admin/products', icon: AlertTriangle, color: 'text-red-600' },
  { label: 'Unresolved Disputes', count: '3', href: '/admin/disputes', icon: MessageSquare, color: 'text-orange-600' },
];

const recentUsers = [
  { name: 'Ibrahim Musa', email: 'ibrahim@email.com', role: 'Seller', date: '2 hours ago', status: 'Active' },
  { name: 'Grace Okonkwo', email: 'grace@email.com', role: 'Buyer', date: '5 hours ago', status: 'Active' },
  { name: 'Ahmed Bello', email: 'ahmed@email.com', role: 'Seller', date: '1 day ago', status: 'Pending KYC' },
  { name: 'Mary John', email: 'mary@email.com', role: 'Buyer', date: '2 days ago', status: 'Active' },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Welcome back, Admin</p>
          </div>
          <Link href="/admin/settings" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
            <Settings className="w-4 h-4" /> Settings
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.color}`}><stat.icon className="w-5 h-5" /></div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {quickActions.map((action) => (
            <Link key={action.label} href={action.href} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition flex items-center justify-between">
              <div className="flex items-center gap-3">
                <action.icon className={`w-5 h-5 ${action.color}`} />
                <div>
                  <p className="font-medium text-gray-900 text-sm">{action.label}</p>
                  <p className={`text-lg font-bold ${action.color}`}>{action.count}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'User Management', href: '/admin/users', icon: Users },
            { label: 'KYC Verification', href: '/admin/kyc', icon: FileCheck },
            { label: 'Products', href: '/admin/products', icon: ShoppingBag },
            { label: 'Transactions', href: '/admin/transactions', icon: Banknote },
            { label: 'Disputes', href: '/admin/disputes', icon: AlertTriangle },
            { label: 'Blog Posts', href: '/admin/blog', icon: TrendingUp },
            { label: 'Reports', href: '/admin/reports', icon: TrendingUp },
            { label: 'Settings', href: '/admin/settings', icon: Settings },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-center hover:shadow-md transition">
              <item.icon className="w-8 h-8 text-green-700 mx-auto mb-3" />
              <p className="font-medium text-gray-900 text-sm">{item.label}</p>
            </Link>
          ))}
        </div>

        {/* Recent Users */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 text-gray-500 font-medium">Name</th>
                  <th className="text-left py-3 text-gray-500 font-medium">Email</th>
                  <th className="text-left py-3 text-gray-500 font-medium">Role</th>
                  <th className="text-left py-3 text-gray-500 font-medium">Date</th>
                  <th className="text-left py-3 text-gray-500 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.email} className="border-b border-gray-50">
                    <td className="py-3 font-medium text-gray-900">{user.name}</td>
                    <td className="py-3 text-gray-500">{user.email}</td>
                    <td className="py-3 text-gray-500">{user.role}</td>
                    <td className="py-3 text-gray-500">{user.date}</td>
                    <td className="py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{user.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
