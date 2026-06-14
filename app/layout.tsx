import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'FarmBridge - Nigeria Agricultural Marketplace',
  description: 'Connect with verified farmers and buyers across Nigeria.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
