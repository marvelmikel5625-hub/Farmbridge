import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

const disputes = [
  { id: '#4281', buyer: 'Ibrahim Musa', seller: 'AgroTech Ltd', product: 'Massey Ferguson Tractor', amount: '₦15,000,000', date: '2 days ago', status: 'Open' },
  { id: '#4278', buyer: 'Grace Okonkwo', seller: 'SeedCo Nigeria', product: 'Maize Seeds 50kg', amount: '₦25,000', date: '3 days ago', status: 'Open' },
  { id: '#4275', buyer: 'Samuel Eze', seller: 'FarmTools Ltd', product: 'Knapsack Sprayer', amount: '₦7,500', date: '5 days ago', status: 'Resolved' },
];

export default function DisputesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        
        <Link href="/admin" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Dispute Resolution</h1>
        <p className="text-gray-500 mb-8">Review and resolve disputes between buyers and sellers.</p>

        <div className="space-y-4">
          {disputes.map((d) => (
            <div key={d.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-400">{d.id}</span>
                    {d.status === 'Open' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                  </div>
                  <h3 className="font-semibold text-gray-900">{d.product}</h3>
                  <p className="text-sm text-gray-500">Buyer: {d.buyer} | Seller: {d.seller}</p>
                  <div className="flex items-center gap-3 mt-2 text-sm">
                    <span className="font-bold text-gray-900">{d.amount}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">{d.date}</span>
                  </div>
                </div>
                <div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                    d.status === 'Open' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                  }`}>{d.status}</span>
                  {d.status === 'Open' && (
                    <Link href="/admin/disputes/1" className="block mt-2 text-sm text-green-700 font-medium hover:underline">Resolve →</Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
