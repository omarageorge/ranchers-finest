import { proximaNova } from '@/app/fonts';
import Container from '@/components/ui/container';
import Row from '@/components/ui/footer/row';
import { socialMedia } from '@/lib/data';
import linkData from '@/lib/nav-links';
import Link from 'next/link';
import { createElement } from 'react';
import Column from '../ui/footer/column';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='w-full h-auto'>
      <div className='w-full h-full bg-black'>
        <Container>
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

            <Column title='SITE LINKS'>
              {linkData.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className='transition-all duration-300 ease-in hover:text-white hover:underline hover:underline-offset-8'
                >
                  {link.title}
                </Link>
              ))}
            </Column>
          </Row>
        </Container>
      </div>

      {/* Footnote */}
      <div className='w-full h-auto bg-red bg-opacity-95 py-8 md:py-10'>
        <p
          className={`${proximaNova.className} font-semibold text-lg text-white text-opacity-95 text-center mg:text-2xl`}
        >
          Copyright &copy; {year} Ranchers Finest
        </p>
      </div>
    </footer>
  );
};

export default Footer;
