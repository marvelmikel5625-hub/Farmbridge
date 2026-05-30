import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FarmBridge – Nigeria Agricultural Marketplace',
  description: 'Connect directly with verified farmers and buyers across Nigeria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-warm-white">
        {children}
      </body>
    </html>
  );
    }
