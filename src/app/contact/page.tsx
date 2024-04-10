import contact from '@/assets/hero/hero-contact.jpg';
import HeroSection from '@/components/ui/hero-section';
import SubmitButton from '@/components/ui/submit-button';
import { sendMessage } from '@/lib/actions';
import { Fragment } from 'react';

function Contact() {
  return (
    <Fragment>
      <HeroSection title='Contact Us' image={contact} />
      <main className='w-full h-auto'>
        <div className='w-full px-8 py-20 md:px-10 md:py-28 xl:px-20  xl:container xl:mx-auto'>
          <div className='w-full lg:w-10/12 xl:w-8/12 mx-auto'>
            <form action={sendMessage} className='space-y-4'>
              <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 md:gap-y-0'>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name *'
                />
                <input type='text' name='lastName' placeholder='Last Name *' />
              </div>
              <div className='form-group'>
                <input type='email' name='email' placeholder='Email *' />
              </div>
              <div className='form-group'>
                <input type='tel' name='phone' placeholder='Phone *' />
              </div>
              <div className='form-group'>
                <input type='text' name='subject' placeholder='Subject *' />
              </div>
              <div className='form-group'>
                <textarea name='message' placeholder='Message *'></textarea>
              </div>
              <div className=''>
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Contact;
