'use client';

import SubmitButton from '@/components/ui/submit-button';
import { joinBaconUnited } from '@/lib/actions';
import { useRef } from 'react';

function BaconUnitedForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData: FormData) => {
        await joinBaconUnited(formData);
        ref.current?.reset();
      }}
      className='w-full space-y-4 lg:w-10/12'
    >
      <div className='form-group'>
        <input type='text' name='name' placeholder='Name *' required />
      </div>
      <div className='form-group'>
        <input type='email' name='email' placeholder='Email *' required />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='profession'
          placeholder='Profession *'
          required
        />
      </div>
      <div className=''>
        <SubmitButton />
      </div>
    </form>
  );
}

export default BaconUnitedForm;
