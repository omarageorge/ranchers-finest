import { proximaNova } from '@/app/fonts';
import Footer from '@/components/layout/footer';
import Navigation from '@/components/layout/navigation';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ranchers Finest',
  description: "Kampala's Premier Sausages & Processed Meats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement<HTMLDivElement>;
}>) {
  return (
    <html lang='en'>
      <body className={`${proximaNova.className} antialiased scroll-smooth`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
