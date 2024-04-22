import { proximaNova } from '@/app/fonts';
import contact from '@/assets/hero/hero-contact2.jpg';
import ContactForm from '@/components/ui/form';
import HeroSection from '@/components/ui/hero-section';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Contact: Ranchers Finest',
};

function Contact() {
  return (
    <Fragment>
      <HeroSection title='Contact Us' image={contact} />
      <main className='w-full h-auto'>
        <div className='w-full px-8 py-20 md:px-10 md:py-28 xl:px-20  xl:container xl:mx-auto'>
          <div className='w-full lg:w-10/12 xl:w-8/12 mx-auto'>
            <h2
              className={`${proximaNova.className} font-light text-4xl text-center mb-8 `}
            >
              Feel free to send us a message!
            </h2>
            <ContactForm />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Contact;
