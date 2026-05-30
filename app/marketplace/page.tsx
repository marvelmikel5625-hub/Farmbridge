import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star } from 'lucide-react';

const products = [
  { title: 'Massey Ferguson Tractor 375', price: '₦15,000,000', location: 'Kaduna', seller: 'AgroTech Ltd', image: 'https://images.unsplash.com/photo-1530267981375-5f0b1f2e9b1d?w=600&q=80', verified: true, rating: 4.8 },
  { title: 'Organic Maize Seeds (50kg Bag)', price: '₦25,000', location: 'Ibadan', seller: 'GreenField Farms', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80', verified: true, rating: 4.5 },
  { title: 'NPK Fertilizer 15-15-15', price: '₦18,500', location: 'Kano', seller: 'AgroSupply Co', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80', verified: false, rating: 4.2 },
  { title: 'Fresh Tomatoes (Basket)', price: '₦8,000', location: 'Jos', seller: 'Plateau Farms', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80', verified: true, rating: 4.7 },
  { title: 'Irrigation Sprinkler System', price: '₦45,000', location: 'Abuja', seller: 'WaterFlow Tech', image: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=600&q=80', verified: false, rating: 4.0 },
  { title: 'Day-Old Broiler Chicks (50 pcs)', price: '₦35,000', location: 'Benin', seller: 'PoultryPro', image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=600&q=80', verified: true, rating: 4.6 },
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Marketplace</h1>
          <p className="text-gray-500 mt-2">Browse tractors, seeds, crops, and more from verified sellers across Nigeria.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <select className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-600/20">
            <option>All Categories</option>
            <option>Tractors & Machinery</option>
            <option>Seeds & Seedlings</option>
            <option>Fertilizers</option>
            <option>Crops & Harvest</option>
            <option>Livestock</option>
          </select>
          <select className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-600/20">
            <option>All Locations</option>
            <option>Kaduna</option>
            <option>Kano</option>
            <option>Lagos</option>
            <option>Abuja</option>
          </select>
          <select className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-600/20">
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.title} href="/product/1" className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48">
                <Image src={product.image} alt={product.title} fill className="object-cover" />
                {product.verified && (
                  <span className="absolute top-3 left-3 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">✓ Verified</span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 group-hover:text-green-800 transition line-clamp-2">{product.title}</h3>
                <p className="text-2xl font-bold text-green-900 mt-2">{product.price}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  {product.location}
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <span className="text-sm text-gray-600">{product.seller}</span>
                  <div className="flex items-center gap-1 text-sm text-yellow-600">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    {product.rating}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
