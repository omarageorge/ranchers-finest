'use client';

import { trajanPro } from '@/app/fonts';
import { useFormStatus } from 'react-dom';

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className={`${trajanPro.className} bg-black hover:bg-red text-white px-8 py-4 rounded-sm transition-all duration-300 ease-in disabled:bg-gray disabled:text-black`}
      disabled={pending}
    >
      {pending ? 'Sending...' : 'Submit'}
    </button>
  );
};

export default SubmitButton;
