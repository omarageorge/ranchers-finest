import { delius, trajanPro } from '@/app/fonts';
import Carousel from '@/components/ui/carousel/carousel';
import CustomerReviewCard from '@/components/ui/customer-review-card';
import { customerReviews } from '@/lib/data';
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
        <section className='w-full h-auto bg-[url("/ranch-bg.jpg")] bg-cover bg-center px-8 py-20 md:py-28 xl:px-0 xl:py-32'>
          <div className='space-y-10 xl:container xl:mx-auto xl:space-y-14'>
            <h3
              className={`${trajanPro.className} font-bold text-white text-2xl text-center md:text-4xl`}
            >
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
