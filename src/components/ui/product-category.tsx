import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProductCategoryProps {
  icon: StaticImageData;
  name: string;
  description: string;
  url: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
  icon,
  name,
  description,
  url,
}) => {
  return (
    <div className='grid grid-cols-1 gap-6'>
      <Image
        src={icon}
        alt={name}
        priority
        loading='eager'
        className='w-24 mx-auto lg:w-34 h-auto'
      />
      <div className='text-center'>
        <div className='h-44 lg:h-52 xl:h-44 space-y-3'>
          <h4 className='font-normal text-2xl text-white uppercase'>{name}</h4>
          <p className='p1 text-whitish'>{description}</p>
        </div>
        <Link
          href={url}
          className='font-semibold text-xl text-reddish hover:text-yellow hover:underline hover:underline-offset-8 transition-all duration-300 ease-in'
        >
          SEE ALL
        </Link>
      </div>
    </div>
  );
};

export default ProductCategory;
