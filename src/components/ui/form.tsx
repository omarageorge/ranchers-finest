'use client';

import SubmitButton from '@/components/ui/submit-button';
import { sendMessage } from '@/lib/actions';
import { useRef } from 'react';

const ContactForm: React.FC = () => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData: FormData) => {
        await sendMessage(formData);
        ref.current?.reset();
      }}
      className='space-y-4'
    >
      <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 md:gap-y-0'>
        <input
          type='text'
          name='firstName'
          placeholder='First Name *'
          required
        />
        <input type='text' name='lastName' placeholder='Last Name *' required />
      </div>
      <div className='form-group'>
        <input type='email' name='email' placeholder='Email *' required />
      </div>
      <div className='form-group'>
        <input type='tel' name='phone' placeholder='Phone *' required />
      </div>
      <div className='form-group'>
        <input type='text' name='subject' placeholder='Subject *' required />
      </div>
      <div className='form-group'>
        <textarea name='message' placeholder='Message *' required></textarea>
      </div>
      <div className=''>
        <SubmitButton />
      </div>
    </form>
  );
};

export default ContactForm;
