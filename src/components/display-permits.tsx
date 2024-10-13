import { trajanPro } from '@/app/fonts';
import Image, { StaticImageData } from 'next/image';

const DisplayPermit: React.FC<{
  label: string;
  assets: StaticImageData[];
  border?: boolean;
}> = ({ label, assets, border }) => {
  return (
    <div>
      <h1
        className={`${trajanPro.className} font-bold text-center text-red text-2xl lg:text-4xl`}
      >
        {label}
      </h1>

      <div className='w-full mt-10 grid grid-cols-1 gap-y-6 justify-items-center md:grid-cols-2  md:gap-4'>
        {assets.map((permit, index) => (
          <Image
            key={index}
            src={permit}
            className={`${
              border &&
              'border-2 border-black rounded-lg overflow-hidden object-cover'
            }`}
            placeholder='blur'
            alt={`Ranchers Finest ${label} - ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayPermit;
