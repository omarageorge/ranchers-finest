import { proximaNova, trajanPro } from '@/app/fonts';
import aboutImage from '@/assets/about-page.jpg';
import aboutHero from '@/assets/hero/hero-about.jpg';
import AboutCard from '@/components/ui/about/about-card';
import HeroSection from '@/components/ui/hero-section';
import { Metadata } from 'next';
import Image from 'next/image';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Ranchers Finest is a dynamic and pioneering start-up in the food and hospitality industry',
};

export default function About() {
  return (
    <Fragment>
      <HeroSection title='About Us' image={aboutHero} />
      <main className='w-full h-auto bg-white'>
        <div className='space-y-20 px-8 py-20 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto'>
          <section className='w-full h-auto bg-white'>
            <div className='w-full flex flex-col md:flex-row md:items-center md:justify-evenly md:gap-10 lg:gap-0'>
              <div className='w-full space-y-14 md:w-1/2 md:space-y-6 lg:w-[550px]'>
                <h3
                  className={`${trajanPro.className} text-red text-center md:text-left`}
                >
                  Our Story
                </h3>
                <Image
                  src={aboutImage}
                  alt='Sausages and Cold Cuts'
                  className='hidden w-3/4 mx-auto md:hidden'
                />
                <Image
                  src={aboutImage}
                  alt='Sausages and Cold Cuts'
                  className='w-96 h-80 object-cover object-left  mx-auto rounded-full md:hidden'
                />
                <p
                  className={`${proximaNova.className} p1 font-light text-black text-center md:text-left lg:w-[475px]`}
                >
                  Ranchers Finest is a dynamic and pioneering start-up in the
                  food and hospitality industry, emerging from the divestment of
                  Sokoni Africa&apos;s meat production department. With over two
                  decades of experience operating in Uganda, Ranchers Finest is
                  now dedicated to becoming the foremost producer of
                  high-quality sausages and meat cuts in the Great Lakes region.
                </p>
              </div>
              <div className='hidden md:flex md:w-1/2 md:items-center justify-center '>
                <Image
                  src={aboutImage}
                  alt='Sausages and Cold Cuts'
                  className='W-96 h-80 lg:w-[480px] lg:h-[460px] rounded-full object-cover object-left shadow-md'
                />
              </div>
            </div>
          </section>

          <section className='w-full h-auto'>
            <div className='grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-10 md:gap-y-0'>
              <AboutCard title='Our Mission'>
                At Ranchers Finest, our mission is to craft superior meat
                products sourced from Ugandan livestock, expertly catering to
                the local and regional market. Our primary objective is twofold:
                to elevate nutritional standards in Ugandan households and to
                drive economic growth by creating valuable employment
                opportunities.
              </AboutCard>

              <AboutCard title='Our Vision'>
                Our vision at Ranchers Finest is to secure a leading position as
                the largest producer of top-notch sausages and meat cuts in the
                Great Lakes region.
              </AboutCard>
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
}
