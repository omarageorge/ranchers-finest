'use client';

import React, { Fragment, useRef } from 'react';
import SubmitButton from '@/components/ui/submit-button';
import { joinBaconUnited } from '@/lib/actions';
import { delius, proximaNova } from '@/app/fonts';

function BaconUnitedForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className='w-full space-y-4 lg:w-10/12'>
      <h3
        className={`${delius.className} font-normal text-[#f39200] text-center text-md`}
      >
        Register here
      </h3>

      <form
        ref={ref}
        action={async (formData: FormData) => {
          await joinBaconUnited(formData);
          ref.current?.reset();
        }}
        className='space-y-4'
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
    </div>
  );
}

export default BaconUnitedForm;
