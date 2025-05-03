import { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import './globals.css';

export const metadata = {
  title: 'Opportunities for All',
  description: 'Discover grants, fellowships, scholarships, and conferences.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
