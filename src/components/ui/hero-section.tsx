import { trajanPro } from '@/app/fonts';
import Image, { StaticImageData } from 'next/image';

interface HeroSectionProps {
  title: string;
  image: StaticImageData;
}
const HeroSection: React.FC<HeroSectionProps> = ({ title, image }) => {
  return (
    <div className='w-full h-[calc(100vh-40vh)] bg-red relative z-0 md:h-[calc(100vh-40vh)] xl:h-[calc(100vh-25vh)]'>
      <Image
        src={image}
        alt={title}
        placeholder='blur'
        priority
        className='block w-full h-full absolute z-10 object-cover object-center'
      />
      <div className='w-full h-full absolute z-20 bg-[#000000] opacity-60'></div>
      <div className='w-full h-full absolute z-30 flex items-center justify-center px-5'>
        <h1
          className={`${trajanPro.className} text-center text-white font-bold text-5xl lg:text-7xl xl:text-8xl`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
