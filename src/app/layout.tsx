import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Nipux',
  description: 'Coming soon',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-900 text-gray-50">
        <Navbar />
        <div className="flex-1 pt-14">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
