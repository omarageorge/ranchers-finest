'use client';

import { trajanPro } from '@/app/fonts';
import { useFormStatus } from 'react-dom';

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className={`${trajanPro.className} bg-black hover:bg-red text-white text-md px-6 py-2 rounded-full transition-all duration-300 ease-in disabled:bg-gray disabled:text-black lg:px-8 lg:py-4`}
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Submit'}
    </button>
  );
};

export default SubmitButton;
