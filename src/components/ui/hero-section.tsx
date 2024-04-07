import { trajanPro } from '@/app/fonts';
import Image, { StaticImageData } from 'next/image';

interface HeroSectionProps {
  title: string;
  image: StaticImageData;
}
const HeroSection: React.FC<HeroSectionProps> = ({ title, image }) => {
  return (
    <div className='w-full h-[calc(100vh-25vh)] relative z-0 md:h-[calc(100vh-55vh)] xl:h-[calc(100vh-25vh)]'>
      <Image
        src={image}
        alt={title}
        priority
        className='block w-full h-full absolute z-10 object-cover object-center'
      />
      <div className='w-full h-full absolute z-20 bg-reddish opacity-80'></div>
      <div className='w-full h-full absolute z-30 flex items-center justify-center'>
        <h1
          className={`${trajanPro.className} font-bold text-4xl text-center text-white md:text-6xl`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;