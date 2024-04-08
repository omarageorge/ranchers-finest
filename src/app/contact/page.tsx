import contact from '@/assets/hero/hero-contact.jpg';
import HeroSection from '@/components/ui/hero-section';
import { Fragment } from 'react';
import { trajanPro } from '../fonts';

function Contact() {
  return (
    <Fragment>
      <HeroSection title='Contact Us' image={contact} />
      <main className='w-full h-auto'>
        <div className='w-full px-8 py-20 md:px-10 md:py-28 xl:px-20  xl:container xl:mx-auto'>
          <div className='w-full lg:w-10/12 xl:w-8/12 mx-auto'>
            <form className='space-y-4'>
              <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 md:gap-y-0'>
                <input type='text' placeholder='First Name' />
                <input type='text' placeholder='Last Name' />
              </div>
              <div className='form-group'>
                <input type='email' placeholder='Email' />
              </div>
              <div className='form-group'>
                <input type='text' placeholder='Subject' />
              </div>
              <div className='form-group'>
                <input type='tel' placeholder='Phone' />
              </div>
              <div className='form-group'>
                <textarea placeholder='Message'></textarea>
              </div>
              <div className=''>
                <button
                  type='submit'
                  className={`${trajanPro.className} bg-black hover:bg-red text-white px-8 py-4 rounded-sm transition-all duration-300 ease-in`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Contact;
