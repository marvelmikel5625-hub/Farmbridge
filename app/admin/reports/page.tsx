import Link from 'next/link';
import { ArrowLeft, TrendingUp, Download } from 'lucide-react';

const reports = [
  { label: 'Total Revenue', value: '₦12,500,000', change: '+12%', up: true },
  { label: 'Subscription Revenue', value: '₦625,000', change: '+8%', up: true },
  { label: 'Commission Revenue', value: '₦1,875,000', change: '+15%', up: true },
  { label: 'Active Sellers', value: '89', change: '-3%', up: false },
];

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        
        <Link href="/admin" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900">Reports</h1>
          <button className="flex items-center gap-2 border-2 border-green-900 text-green-900 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-green-50 transition">
            <Download className="w-4 h-4" /> Export All
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {reports.map((r) => (
            <div key={r.label} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm text-gray-500">{r.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{r.value}</p>
              <p className={`text-sm mt-2 flex items-center gap-1 ${r.up ? 'text-green-600' : 'text-red-500'}`}>
                <TrendingUp className={`w-3 h-3 ${!r.up ? 'rotate-180' : ''}`} />
                {r.change} from last month
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Monthly Revenue (Last 6 Months)</h3>
          <div className="h-40 flex items-end gap-2">
            {[40, 65, 45, 80, 55, 90].map((height, i) => (
              <div key={i} className="flex-1 bg-green-200 rounded-t-lg" style={{ height: `${height}%` }}>
                <div className="h-full bg-green-700 rounded-t-lg" style={{ height: `${height * 0.7}%` }}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </div>

      </div>
    </div>
  );
}
