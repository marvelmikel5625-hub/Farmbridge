import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'FarmBridge – Connect With Verified Farmers & Buyers Across Nigeria',
  description:
    "Nigeria's premium agricultural marketplace. Buy and sell farm produce, equipment, and more with secure escrow protection.",
  keywords:
    'agriculture, Nigeria, farmers, marketplace, farm produce, escrow, buy farm products',
  openGraph: {
    title: "FarmBridge – Nigeria's Agricultural Marketplace",
    description: 'Connect directly with verified farmers & buyers across Nigeria.',
    type: 'website',
    locale: 'en_NG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
    }
