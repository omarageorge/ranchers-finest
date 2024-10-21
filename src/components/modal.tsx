'use client';

import React, { useRef, useEffect } from 'react';
import BaconUnitedForm from './ui/bacon-united-form';
import { proximaNova } from '@/app/fonts';

const EmailSubscriptionPopup: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, []);

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className='w-full md:w-8/12 xl:w-4/12 p-4 rounded-lg shadow-lg'
    >
      <div className='flex flex-col items-center gap-4'>
        <button
          onClick={handleClose}
          className={`${proximaNova.className} w-fit h-auto self-end px-6 py-3 text-black hover:text-white bg-gray hover:bg-red rounded-full cursor-pointer font-semibold text-sm transition duration-200 ease-in`}
        >
          Close
        </button>

        <h3
          className={`${proximaNova.className} font-normal text-md text-red text-center`}
        >
          Subscribe to Get 10% off
        </h3>
        <BaconUnitedForm closeModal={handleClose} />
      </div>
    </dialog>
  );
};

export default EmailSubscriptionPopup;
