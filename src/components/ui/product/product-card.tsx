import { trajanPro } from '@/app/fonts';
import Image, { StaticImageData } from 'next/image';

const ProductCard: React.FC<{
  name: string;
  image: StaticImageData;
}> = ({ name, image }) => {
  return (
    <div key={name} className='flex flex-col items-center justify-center'>
      <Image
        src={image}
        alt={name}
        className='w-3/4 h-40 block object-contain md:h-80  xl:w-96 xl:h-96'
      />

      <p
        className={`${trajanPro.className} block mt-8 font-bold text-sm px-2 text-red text-center md:text-2xl`}
      >
        {name}
      </p>
    </div>
  );
};

export default ProductCard;
