import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';

const Slide: React.FC<{
  src: StaticImageData;
  alt: string;
  isActive: boolean;
}> = ({ src, alt, isActive }) => {
  return (
    <div
      className={clsx(
        'w-full h-full absolute opacity-0 transition-all duration-1000 ease-in-out',
        isActive && 'opacity-100 duration-1000 transform scale-105'
      )}
    >
      <Image
        src={src}
        alt={alt}
        placeholder='blur'
        priority
        className='w-full h-full object-cover object-center '
      />
    </div>
  );
};

export default Slide;
