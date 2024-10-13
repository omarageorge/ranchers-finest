import { trajanPro } from '@/app/fonts';
import Link from 'next/link';

const CallToAction: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => {
  return (
    <Link href={href}>
      <button
        className={`${trajanPro.className} block w-fit mx-auto mt-10 px-6 py-3 lg:px-8 lg:py-4 bg-red hover:bg-yellow rounded-full font-normal lg:font-medium text-md md:text-lg lg:text-xl text-white hover:text-black transition-all duration-200 ease-in`}
      >
        {label}
      </button>
    </Link>
  );
};

export default CallToAction;
