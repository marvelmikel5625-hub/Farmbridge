import Link from 'next/link';
import { Leaf } from 'lucide-react';

const platformLinks = [
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
];

const buyerLinks = [
  { href: '/marketplace', label: 'Browse Products' },
  { href: '/dashboard/buyer', label: 'Buyer Dashboard' },
  { href: '/kyc/buyer', label: 'Get Verified' },
  { href: '/faq', label: 'FAQs' },
];

const sellerLinks = [
  { href: '/list-product', label: 'List a Product' },
  { href: '/dashboard/seller', label: 'Seller Dashboard' },
  { href: '/kyc/seller', label: 'Become Verified' },
  { href: '/pricing', label: 'Seller Plans' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/refund-policy', label: 'Refund & Dispute' },
];

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Social */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-light-sage" fill="currentColor" />
              </div>
              <span className="font-extrabold text-xl text-white">FarmBridge</span>
            </Link>
            <p className="text-sage text-sm leading-relaxed mb-6 max-w-sm">
              Nigeria&apos;s premium agricultural marketplace. Connecting verified farmers 
              and buyers with secure escrow protection. Building trust, one transaction at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-leaf transition-colors text-sm">FB</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-leaf transition-colors text-sm">X</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-leaf transition-colors text-sm">IG</a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-leaf transition-colors text-sm">IN</a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sage text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyers */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Buyers</h4>
            <ul className="space-y-2.5">
              {buyerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sage text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sellers & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Sellers</h4>
            <ul className="space-y-2.5">
              {sellerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sage text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sage text-sm mb-1">
                📱 <a href="https://wa.me/2349077753551" className="hover:text-white transition-colors">09057773551</a>
              </p>
              <p className="text-sage text-sm">
                📧 <a href="mailto:farmpricenigeria@gmail.com" className="hover:text-white transition-colors">farmpricenigeria@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sage text-xs hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sage text-xs">
            © {new Date().getFullYear()} FarmBridge. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-sage">
            <span>Secured by Paystack</span>
            <span>•</span>
            <span>Built in Nigeria 🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
