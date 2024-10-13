import { delius, proximaNova, trajanPro } from '@/app/fonts';
import SayBu from '@/assets/bacon/slides/04.jpg';
import introImage from '@/assets/intro-image.png';
import intro from '@/assets/intro.jpg';
import Rolex from '@/assets/recipe/rolex.png';
import whyUs from '@/assets/why-us.png';
import CallToAction from '@/components/call-to-action';
import Carousel from '@/components/ui/carousel/carousel';
import CustomerReviewCard from '@/components/ui/customer-review-card';
import NavSpacer from '@/components/ui/nav-spacer';
import ProductCategory from '@/components/ui/product-category';
import { customerReviews, productCategories } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <NavSpacer />
      <header className='w-full h-[calc(100vh-5rem)] relative z-0 md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]'>
        <Carousel />
        <div className='w-full h-full absolute z-20 bg-[#000000] opacity-60'></div>
        <div className='w-full h-full absolute z-30 flex flex-col items-center justify-center text-center gap-4 md:gap-7 '>
          <h1
            className={`${trajanPro.className} text-white font-bold text-5xl lg:text-7xl xl:text-8xl`}
          >
            RANCHERS FINEST
          </h1>
          <h2
            className={`${delius.className} text-whitish text-2xl md:text-5xl`}
          >
            Relish the flavour
          </h2>
        </div>
      </header>
      <main>
        <section className='w-full h-auto bg-white'>
          <div className='w-full px-8 py-20 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto '>
            <div className='w-full flex flex-col md:flex-row md:items-center md:justify-evenly md:gap-10 xl:gap-0'>
              <div className='w-full space-y-14 md:w-1/2 md:space-y-6 lg:w-[550px]'>
                <h3
                  className={`${trajanPro.className} text-red text-center md:text-left`}
                >
                  Kampala&lsquo;s Premier Sausages & Processed Meats
                </h3>
                <Image
                  src={introImage}
                  alt='Sausages and Cold Cuts'
                  className='hidden w-3/4 mx-auto md:hidden'
                />
                <Image
                  src={intro}
                  alt='Sausages and Cold Cuts'
                  className='w-11/12 mx-auto rounded-md md:hidden'
                />
                <p
                  className={`${proximaNova.className} p1 font-light text-black text-center md:text-left`}
                >
                  {/*  lg:w-[475px] */}
                  Experience the finest sausages, cold cuts, and fresh meats,
                  expertly crafted at our state-of-the-art facility in Kampala.
                  Our unwavering commitment to quality, freshness, and
                  exceptional taste ensures a delightful experience in every
                  bite. Proudly awarded the <strong>ISO 20000</strong>{' '}
                  certification, Ranchers Finest upholds the highest standards
                  in quality processes, guaranteeing you the best products every
                  time. Additionally, Ranchers Finest has earned the renowned
                  UNBS certification for meeting the stringent product standards
                  set by the{' '}
                  <strong>Uganda National Bureau of Standards</strong>, ensuring
                  our products are safe and of the highest quality.
                </p>
              </div>
              <div className='hidden md:flex md:w-1/2 md:items-center justify-center '>
                <Image
                  src={introImage}
                  alt='Sausages and Cold Cuts'
                  className='hidden W-3/4 lg:w-[580px]'
                />
                <Image
                  src={intro}
                  alt='Sausages and Cold Cuts'
                  className='W-3/4 lg:w-[580px] rounded-md shadow-md'
                />
              </div>
            </div>

            <div className='w-full pt-20 md:pt-28 lg:pt-36'>
              <Image
                src={SayBu}
                className='w-full h-auto rounded-lg lg:w-10/12 lg:mx-auto blink'
                alt='Say BU to BaconUp'
              />

              <CallToAction label='Learn More' href='/bacon' />
            </div>
          </div>
        </section>
        <section className='w-full h-auto bg-raven'>
          <div className='w-full space-y-24 px-8 py-32 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto xl:space-y-28'>
            <h3 className={`${trajanPro.className} text-yellow text-center`}>
              OUR PRODUCTS
            </h3>
            {/* <div className='grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3'> */}
            <div className='grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-8 lg:flex lg:gap-x-4 lg:flex-wrap lg:items-start lg:justify-evenly '>
              {productCategories.map((category, index) => (
                <ProductCategory key={index} {...category} />
              ))}
            </div>
          </div>
        </section>

        <section className='w-full h-auto bg-[#f2f2f2]'>
          <div className='w-full flex flex-col px-8 py-20 md:flex-row md:items-center md:justify-evenly md:gap-10 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto'>
            <div className='w-full space-y-14 md:w-1/2 md:space-y-6 xl:w-[550px]'>
              <h3
                className={`${trajanPro.className} text-red text-center md:text-left`}
              >
                Rolex Reimagined: The BLT Rolex
              </h3>

              <Image
                src={Rolex}
                alt='The BLT Rolex'
                className='w-2/3 mx-auto md:hidden'
                placeholder='blur'
              />

              <p
                className={`${proximaNova.className} p1 font-light text-black text-center md:text-left`}
              >
                A fusion of crispy bacon, fluffy omelette, fresh veggies, and
                soft chapati. Bursting with flavor and customizable with chutney
                or mayo, it's the perfect meal for any time of day.
              </p>

              <Link
                href='/recipes/rolex'
                className='block w-fit h-auto px-6 py-4 mx-auto bg-[#dc2626] rounded-full font-semibold text-sm text-[#e5e7eb] hover:bg-red transition-colors duration-300 ease-in md:mx-0'
              >
                Checkout Recipe
              </Link>
            </div>
            <div className='hidden md:flex md:w-1/2 md:items-center justify-center'>
              <Image
                src={Rolex}
                alt='The BLT Rolex'
                className='W-3/4 lg:w-[550px]'
                placeholder='blur'
              />
            </div>
          </div>
        </section>

        <section className='w-full h-auto bg-gray'>
          <div className='w-full flex flex-col px-8 py-20 md:flex-row md:items-center md:justify-evenly md:gap-10 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto'>
            <div className='hidden md:flex md:w-1/2 md:items-center justify-center'>
              <Image
                src={whyUs}
                alt='Sausages'
                className='W-3/4 lg:w-[455px]'
              />
            </div>

            <div className='w-full space-y-14 md:w-1/2 md:space-y-6 xl:max-w-[550px]'>
              <h3
                className={`${trajanPro.className} text-red text-center md:text-left`}
              >
                WHY CHOOSE Us?
              </h3>
              <Image
                src={whyUs}
                alt='Sausages'
                className='w-2/3 mx-auto md:hidden'
              />
              <p
                className={`${proximaNova.className} p1 font-light text-black text-center md:text-left`}
              >
                The difference in quality, flavor, and presentation makes
                Ranchers Finest the clear choice for discerning customers. Our
                commitment to quality ingredients and meticulous preparation
                ensures every bite is simply delicious.
              </p>
            </div>
          </div>
        </section>

        <section className='w-full h-auto bg-[url("/ranch-bg.jpg")] bg-cover bg-center bg-[#121212]'>
          <div className='space-y-10 px-8 py-20 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto xl:space-y-14'>
            <h3 className={`${trajanPro.className} text-white text-center`}>
              WHAT OUR CUSTOMERS SAY
            </h3>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {customerReviews.map((review, index) => (
                <CustomerReviewCard key={index} {...review} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
