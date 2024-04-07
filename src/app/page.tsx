import { delius, proximaNova, trajanPro } from '@/app/fonts';
import introImage from '@/assets/intro-image.png';
import whyUs from '@/assets/why-us.png';
import Carousel from '@/components/ui/carousel/carousel';
import CustomerReviewCard from '@/components/ui/customer-review-card';
import ProductCategory from '@/components/ui/product-category';
import { customerReviews, productCategories } from '@/lib/data';
import Image from 'next/image';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <header className='w-full h-[calc(100vh-5rem)] relative z-0 md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]'>
        <Carousel />
        <div className='w-full h-full absolute z-20 bg-[#000000] opacity-65'></div>
        <div className='w-full h-full absolute z-30 flex flex-col items-center justify-center text-center gap-4 md:gap-7 '>
          <h1
            className={`${trajanPro.className} text-white font-bold text-5xl lg:text-7xl xl:text-8xl`}
          >
            RANCHERS FINEST
          </h1>
          <h2
            className={`${delius.className} text-whitish text-2xl md:text-5xl`}
          >
            A Delight To Serve
          </h2>
        </div>
      </header>
      <main>
        <section className='w-full h-auto bg-white'>
          <div className='w-full flex flex-col px-8 py-20 md:flex-row md:items-center md:justify-evenly md:gap-10 md:px-10 md:py-28 xl:px-20 xl:py-36 xl:container xl:mx-auto xl:gap-0'>
            <div className='w-full space-y-14 md:w-1/2 md:space-y-6 xl:w-[550px]'>
              <h3
                className={`${trajanPro.className} text-red text-center md:text-left`}
              >
                Kampala&lsquo;s Premier Sausages & Processed Meats
              </h3>
              <Image
                src={introImage}
                alt='Sausages and Cold Cuts'
                className='w-3/4 mx-auto md:hidden'
              />
              <p
                className={`${proximaNova.className} p1 font-light text-black text-center md:text-left`}
              >
                Experience the finest sausages, cold cuts, and fresh meats
                expertly crafted at our state-of-the-art facility in Kampala.
                Our commitment to quality, freshness, and exceptional taste
                promises a delicious experience in every bite.
              </p>
            </div>
            <div className='hidden md:flex md:w-1/2 md:items-center justify-center '>
              <Image
                src={introImage}
                alt='Sausages and Cold Cuts'
                className='W-3/4 xl:w-[580px]'
              />
            </div>
          </div>
        </section>
        <section className='w-full h-auto bg-raven'>
          <div className='w-full space-y-24 px-8 py-32 md:px-10 md:py-28 xl:px-20 xl:py-36 xl:container xl:mx-auto xl:space-y-28'>
            <h3 className={`${trajanPro.className} text-yellow text-center`}>
              OUR PRODUCTS
            </h3>
            <div className='grid grid-cols-1 gap-28 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-24'>
              {productCategories.map((category, index) => (
                <ProductCategory key={index} {...category} />
              ))}
            </div>
          </div>
        </section>
        <section className='w-full h-auto bg-gray'>
          <div className='w-full flex flex-col px-8 py-20 md:flex-row md:items-center md:justify-evenly md:gap-10 md:px-10 md:py-28 xl:px-20 xl:py-36 xl:container xl:mx-auto'>
            <div className='hidden md:flex md:w-1/2 md:items-center justify-center'>
              <Image
                src={whyUs}
                alt='Sausages'
                className='W-3/4 xl:w-[455px]'
              />
            </div>

            <div className='w-full space-y-14 md:w-1/2 md:space-y-6 xl:w-[550px]'>
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
        <section className='w-full h-auto bg-[url("/ranch-bg.jpg")] bg-cover bg-center px-8 py-20 md:px-10 md:py-28 xl:px-20 xl:py-36'>
          <div className='space-y-10 xl:container xl:mx-auto xl:space-y-14'>
            <h3 className={`${trajanPro.className} text-white text-center`}>
              WHAT OUR CUSTOMERS SAY
            </h3>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
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
