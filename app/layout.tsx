import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import './globals.css';
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';

const comfortaa = Comfortaa({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Título de la página',
  description: 'Descripción de la página',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
