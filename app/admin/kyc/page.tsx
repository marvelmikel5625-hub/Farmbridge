import Link from 'next/link';
import { ArrowLeft, Check, X, Eye } from 'lucide-react';

const pendingKYC = [
  { name: 'Ibrahim Musa', email: 'ibrahim@email.com', idType: 'National ID', date: '2 days ago', documents: 3 },
  { name: 'Ahmed Bello', email: 'ahmed@email.com', idType: 'Driver\'s License', date: '3 days ago', documents: 2 },
  { name: 'Fatima Sule', email: 'fatima@email.com', idType: 'Voter\'s Card', date: '5 days ago', documents: 3 },
];

export default function KYCReviewPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        
        <Link href="/admin" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">KYC Verification</h1>
        <p className="text-gray-500 mb-8">Review and approve seller identity documents.</p>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button className="bg-green-900 text-white px-4 py-2 rounded-xl text-sm font-semibold">Pending (3)</button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200">Approved</button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200">Rejected</button>
        </div>

        {/* KYC List */}
        <div className="space-y-4">
          {pendingKYC.map((item) => (
            <div key={item.email} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.email}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                    <span>{item.idType}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.documents} documents</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-xl transition">
                    <Eye className="w-4 h-4" /> View
                  </button>
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-green-700 hover:bg-green-50 rounded-xl transition font-medium">
                    <Check className="w-4 h-4" /> Approve
                  </button>
                  <button className="flex items-center gap-1 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition font-medium">
                    <X className="w-4 h-4" /> Reject
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
