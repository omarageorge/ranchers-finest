import { delius, trajanPro } from '@/app/fonts';
import Carousel from '@/components/ui/carousel/carousel';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
