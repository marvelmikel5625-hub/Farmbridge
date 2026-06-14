import Link from 'next/link';
import { ArrowLeft, Eye, Trash2, Flag } from 'lucide-react';

const flaggedProducts = [
  { title: 'Massey Ferguson Tractor', seller: 'AgroTech Ltd', reason: 'Possible fake listing', date: '2 hours ago' },
  { title: 'Organic Maize Seeds', seller: 'SeedCo Nigeria', reason: 'Misleading description', date: '1 day ago' },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        
        <Link href="/admin" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Product Moderation</h1>
        <p className="text-gray-500 mb-8">Review flagged listings and take action.</p>

        <div className="space-y-4">
          {flaggedProducts.map((product) => (
            <div key={product.title} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Flag className="w-4 h-4 text-red-500" />
                    <h3 className="font-semibold text-gray-900">{product.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500">Seller: {product.seller}</p>
                  <p className="text-sm text-red-500 mt-1">Reason: {product.reason}</p>
                  <p className="text-xs text-gray-400 mt-2">{product.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-xl transition">
                    <Eye className="w-4 h-4" /> View
                  </button>
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition font-medium">
                    <Trash2 className="w-4 h-4" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
