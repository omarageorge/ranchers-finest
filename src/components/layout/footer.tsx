import { proximaNova } from '@/app/fonts';
import Row from '@/components/ui/footer/row';
import { socialMedia } from '@/lib/data';
import linkData from '@/lib/nav-links';
import Link from 'next/link';
import { createElement } from 'react';
import Column from '../ui/footer/column';
import ISO_CERT from '@/assets/iso.png';
import UNBS_CERT from '@/assets/unbs.png';
import Image from 'next/image';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    // <footer className='w-full h-auto md:h-[calc(100vh-50vh)] xl:h-[calc(100vh-25vh)]'>
    <footer className='w-full h-auto'>
      <div className='w-full h-full bg-black'>
        <div className='w-full h-auto px-8 py-20 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto'>
          <Row>
            <Column title='OUR LOCATION'>
              <span>Plot 3300, 3301, 3302 & 4723</span>
              <span>Jambula stage, Bwaise</span>
              <span>Kampala, Uganda</span>
            </Column>

            <Column title='CONTACT US'>
              <Link href='mailto:info@ranchersfinest.net'>
                info@ranchersfinest.net
              </Link>
              <Link href='tel:+256789989789'>+256 789 989 789</Link>
              <div className='flex text-2xl space-x-5'>
                {socialMedia.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    target='_blank'
                    className='text-whitish hover:text-yellow'
                  >
                    {createElement(link.icon)}
                  </Link>
                ))}
              </div>
            </Column>

            <Column title='CERTIFICATIONS'>
              <div className='grid grid-cols-2'>
                <Image src={ISO_CERT} className='w-20 h-auto' alt='' />
                <Image src={UNBS_CERT} className='w-20 h-auto' alt='' />
              </div>
            </Column>
          </Row>
        </div>
      </div>

      {/* Footnote */}
      <div className='w-full h-auto bg-red bg-opacity-95 py-8 md:py-10'>
        <p
          className={`${proximaNova.className} font-semibold text-lg text-white text-opacity-95 text-center md:text-xl`}
        >
          Copyright &copy; {year} Ranchers Finest
        </p>
      </div>
    </footer>
  );
};

export default Footer;
