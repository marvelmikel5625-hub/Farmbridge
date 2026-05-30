'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/marketplace', label: 'Marketplace' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-forest rounded-lg flex items-center justify-center group-hover:bg-leaf transition-colors">
                <Leaf className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="font-extrabold text-xl text-forest">
                FarmBridge
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-clay hover:text-leaf transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/2349077753551"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-success-green hover:text-leaf transition-colors"
              >
                <Phone className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">09057773551</span>
              </a>

              <Link href="/list-product" className="btn-secondary btn-sm">
                List Product
              </Link>
              <Link href="/login" className="text-sm font-medium text-clay hover:text-forest transition-colors">
                Sign In
              </Link>
              <Link href="/signup" className="btn-primary btn-sm">
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-clay hover:text-forest transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white shadow-xl lg:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-clay hover:text-forest transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-silt" />
              <Link
                href="/list-product"
                onClick={() => setMobileOpen(false)}
                className="btn-secondary w-full text-center block"
              >
                List Product
              </Link>
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-clay hover:text-forest font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full text-center block"
              >
                Sign Up
              </Link>
              <a
                href="https://wa.me/2349077753551"
                className="flex items-center justify-center gap-2 text-success-green font-medium py-2"
              >
                <Phone className="w-4 h-4" />
                09057773551
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
                                           }
