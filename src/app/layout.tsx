import { proximaNova } from '@/app/fonts';
import Footer from '@/components/layout/footer';
import Navigation from '@/components/layout/navigation';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ranchers Finest',
  description: "Kampala's Premier Sausages & Processed Meats",
  keywords:
    'sausages, beef sausages, pork sausages, chicken sausages, salami, ham, fresh meat, processed meat, cold cuts, frozen cuts, beef burgers, beef patties, Betar Sausages, steak, ribeye steak, rump steak, sirloin steak, pork chops, chicken legs, chicken thighs, chicken wings, chicken drumsticks, chicken fillet, beef mortadella, garlic salami, roasted turkey fillet, back bacon, sandwich ham, streaky bacon, Ugandan sausage company, Kampala meat company, Ranch Finest meats',
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
