import Link from 'next/link';
import { ArrowLeft, Search, Download } from 'lucide-react';

const transactions = [
  { id: '#TXN-001', buyer: 'Ibrahim Musa', seller: 'AgroTech Ltd', product: 'Massey Ferguson Tractor', amount: '₦15,000,000', status: 'Completed', date: '2 hours ago' },
  { id: '#TXN-002', buyer: 'Grace Okonkwo', seller: 'SeedCo Nigeria', product: 'Maize Seeds 50kg', amount: '₦25,000', status: 'In Escrow', date: '5 hours ago' },
  { id: '#TXN-003', buyer: 'Samuel Eze', seller: 'FarmTools Ltd', product: 'Knapsack Sprayer', amount: '₦7,500', status: 'Disputed', date: '1 day ago' },
  { id: '#TXN-004', buyer: 'Mary John', seller: 'PoultryPro', product: 'Broiler Chicks', amount: '₦35,000', status: 'Completed', date: '2 days ago' },
];

export default function TransactionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        
        <Link href="/admin" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif font-bold text-gray-900">Transactions</h1>
            <p className="text-gray-500 mt-1">{transactions.length} recent transactions</p>
          </div>
          <button className="flex items-center gap-2 border-2 border-green-900 text-green-900 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-green-50 transition">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left py-3 px-4 text-gray-500 font-medium">ID</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Buyer</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Seller</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Product</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Amount</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-500 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-500 text-xs">{txn.id}</td>
                  <td className="py-3 px-4 font-medium text-gray-900">{txn.buyer}</td>
                  <td className="py-3 px-4 text-gray-500">{txn.seller}</td>
                  <td className="py-3 px-4 text-gray-500 text-xs">{txn.product}</td>
                  <td className="py-3 px-4 font-bold text-gray-900">{txn.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      txn.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      txn.status === 'In Escrow' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>{txn.status}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-xs">{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
