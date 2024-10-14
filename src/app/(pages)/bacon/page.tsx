import { delius, proximaNova, trajanPro } from '@/app/fonts';
import BaconBg from '@/assets/bacon/bacon-bg.jpg';
import BaconModel from '@/assets/bacon/bacon-model.png';
import CallToAction from '@/components/call-to-action';
import BaconUnitedForm from '@/components/ui/bacon-united-form';
import baconImages from '@/lib/bacon-images';
import { Metadata } from 'next';
import Image from 'next/image';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Bacon United Club',
  keywords:
    'BaconUp, Ranchers Finest, Ranchers Finest bacon, Bacon United, Bacon recipes, BLT Rolex, Premium Bacon, Uganda’s best bacon, katogo recipe, Where to buy bacon.',
  description:
    'Join our exclusive Bacon United Club and become part of a community that celebrates the joy of bacon',
};

function Bacon() {
  return (
    <Fragment>
      <div></div>

      <header className='w-full h-[calc(100vh-5rem)] relative z-0 md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-8rem)]'>
        <Image
          src={BaconBg}
          className='absolute z-10 w-full h-full object-cover object-center'
          placeholder='blur'
          priority
          alt='Bacon Image'
        />

        <div className='absolute z-20 w-full h-full bg-black bg-opacity-65'>
          <div className='w-full h-full flex flex-col gap-y-5 items-center justify-center px-8 md:px-10 lg:px-20 xl:container xl:mx-auto'>
            <h1
              className={`${trajanPro.className} text-yellow text-center font-bold text-4xl lg:text-7xl`}
            >
              Say BU! And Bacon Up with Bacon United!
            </h1>
            <h2
              className={`${delius.className} text-whitish text-center text-xl md:text-3xl lg:w-7/12`}
            >
              We invite you to the Ranchers Finest Bacon United Club - a place
              to 'Bacon Up' and transform your everyday meals into extraordinary
              experiences!
            </h2>

            <CallToAction label='Join US Now' href='#join-us' centered />
          </div>
        </div>
      </header>
      <main className='w-full h-auto'>
        <section className='w-full h-auto'>
          <div className='w-full px-8 py-20 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto'>
            <div className='space-y-6 mb-20 md:mb-28 lg:mb-36'>
              <h3 className={`${trajanPro.className} text-red text-center`}>
                Your Goals Are Within Reach
              </h3>

              <p
                className={`${proximaNova.className} p1 font-light text-black text-center lg:w-7/12 lg:mx-auto`}
              >
                Bacon United is here to help you achieve them. This is about
                more than just bacon—it's about embracing your unique self, your
                strengths, and your passions. We believe that when you are true
                to who you are, you unlock your full potential. Whether you're
                aiming to crush it in the gym, master a new skill, or simply
                start every day with a win, our mission is to fuel your success
                and inspire you to "Be U."
              </p>
            </div>

            <div className='w-full grid grid-cols-1 gap-6 md:grid-cols-2'>
              {baconImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  placeholder='blur'
                  className='rounded-lg'
                  alt={`Bacon image - ${index}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id='join-us' className='w-full h-auto bg-white'>
          <div className='w-full flex flex-col px-8 py-20 space-y-10 md:space-y-0 md:flex-row md:items-center md:justify-evenly md:gap-10 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto'>
            <div className='w-full space-y-14 md:w-1/2 md:space-y-6 xl:max-w-[550px]'>
              <h3
                className={`${trajanPro.className} text-red text-center md:text-left`}
              >
                Unite with Us!
              </h3>
              <Image
                src={BaconModel}
                alt='Sausages'
                className='w-2/3 mx-auto md:hidden'
              />

              <p
                className={`${proximaNova.className} p1 font-light text-black text-center md:text-left`}
              >
                Join our exclusive{' '}
                <span className='font-semibold italic'>Bacon United Club</span>{' '}
                and become part of a community that celebrates the joy of bacon!
                Sign up to receive mouth-watering recipes and expert tips that
                will elevate every adventure. Don't wait
                <span className='font-semibold italic'>—Bacon Up</span> and fuel
                your success with every delicious bite!
              </p>

              <p
                className={`${proximaNova.className} p1 font-light text-black text-center md:text-left`}
              >
                This isn't just about bacon—it's about unlocking your potential,
                embracing your uniqueness, and reaching new heights. Join Bacon
                United today and connect with others who are just as hungry for
                success as you are. Together, we'll turn sizzling dreams into
                reality and empower you to "Be U."
              </p>
            </div>

            <div className='flex flex-col md:w-1/2 md:items-center justify-center'>
              <h3
                className={`${delius.className} font-normal text-[#f39200] text-center text-md mb-4`}
              >
                Register here
              </h3>

              <BaconUnitedForm />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default Bacon;
