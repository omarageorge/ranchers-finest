'use client';

import { proximaNova } from '@/app/fonts';
import BaconUnitedForm from '@/components/ui/bacon-united-form';
import { useRef } from 'react';

const PopupModal = () => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  const handleModalClose = () => modalRef.current?.close();

  return (
    <dialog
      ref={modalRef}
      className='w-full h-screen fixed z-[2000] top-0 bg-black bg-opacity-55 flex items-center justify-center'
    >
      <div className='w-11/12 md:w-8/12 xl:w-5/12 h-auto bg-white rounded-xl flex flex-col gap-y-6 px-6 pt-6 pb-10'>
        <div
          onClick={handleModalClose}
          className={`${proximaNova.className} w-fit h-auto self-end px-6 py-3 text-black hover:text-white bg-gray hover:bg-red rounded-full cursor-pointer font-semibold text-sm transition duration-200 ease-in`}
        >
          Close
        </div>

        <div className='w-full h-full flex flex-col items-center justify-center'>
          <h3
            className={`${proximaNova.className} font-normal text-red text-center text-md mb-4`}
          >
            Subscribe to Get 10% off
          </h3>
          <BaconUnitedForm />
        </div>
      </div>
    </dialog>
  );
};

export default PopupModal;
