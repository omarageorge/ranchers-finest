import contact from '@/assets/hero/hero-contact.jpg';
import ContactForm from '@/components/ui/form';
import HeroSection from '@/components/ui/hero-section';
import { Fragment } from 'react';

function Contact() {
  return (
    <Fragment>
      <HeroSection title='Contact Us' image={contact} />
      <main className='w-full h-auto'>
        <div className='w-full px-8 py-20 md:px-10 md:py-28 xl:px-20  xl:container xl:mx-auto'>
          <div className='w-full lg:w-10/12 xl:w-8/12 mx-auto'>
            <ContactForm />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Contact;
