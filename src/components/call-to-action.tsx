import { trajanPro } from '@/app/fonts';
import Link from 'next/link';
import { boolean } from 'zod';

const CallToAction: React.FC<{
  label: string;
  href: string;
  centered?: boolean;
}> = ({ label, href, centered }) => {
  return (
    <Link href={href}>
      <button
        className={`${
          trajanPro.className
        } block w-fit mt-8 px-6 py-3 lg:px-6 lg:py-3 bg-red hover:bg-yellow rounded-full font-normal lg:font-medium text-md text-white hover:text-black transition-all duration-200 ease-in ${
          centered && 'mx-auto'
        } `}
      >
        {label}
      </button>
    </Link>
  );
};

export default CallToAction;
