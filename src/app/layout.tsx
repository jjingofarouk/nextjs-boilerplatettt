import { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { GeistSans, GeistMono } from 'next/font/local';
import './globals.css';

// Load Geist Sans and Geist Mono fonts
const geistSans = GeistSans({
  src: '/fonts/GeistSans.woff2',
  variable: '--font-geist-sans',
  weight: '400 700',
});

const geistMono = GeistMono({
  src: '/fonts/GeistMono.woff2',
  variable: '--font-geist-mono',
  weight: '400',
});

export const metadata = {
  title: 'Opportunities for All',
  description: 'Discover grants, fellowships, scholarships, and conferences.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}