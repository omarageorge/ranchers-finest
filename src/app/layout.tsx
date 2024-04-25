import { proximaNova } from '@/app/fonts';
import Footer from '@/components/layout/footer';
import Navigation from '@/components/layout/navigation';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ranchersfinest.net'),
  title: {
    default: 'Home',
    template: '%s - Ranchers Finest',
  },
  openGraph: {
    title: 'Ranchers Finest',
    description:
      'The finest sausages, cold cuts, and fresh meats expertly crafted with passion in Kampala.',
  },
  description:
    'Fresh, flavorful sausages, cold cuts, and meats crafted with passion. Experience exceptional quality in every bite. Browse our selection!',
  keywords:
    'kampala sausages, kampala fresh meat, kampala cold cuts, ugandan sausages, ugandan fresh meat, ugandan cold cuts, butcher kampala, meat shop kampala, deli kampala, beef sausages, betar sausages, breakfast beef sausages, traditional smoked beef sausages, pork sausages, breakfast pork sausages, bbq pork sausages, pork hotdogs, chicken sausages, english chicken sausages, breakfast chicken sausages, salami, garlic salami, ham, sandwich ham, back bacon, streaky bacon, beef mortadella, prime beef ribeye, prime beef rump steak, prime beef sirloin steak, prime beef steak, pork chops, pork cubes, beef burgers, beef burger patties, chicken legs, chicken thighs, chicken wings, chicken drumsticks, chicken fillet, ranchers finest sausages, ranchers finest meats, betar sausages uganda, where to buy beef sausages in kampala, best place for cold cuts in kampala, buy fresh chicken legs kampala, online butcher shop uganda, order steak online kampala',
  twitter: {
    title: 'Ranchers Finest',
    description:
      'The finest sausages, cold cuts, and fresh meats expertly crafted with passion in Kampala.',
    card: 'summary_large_image',
  },
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
