import { trajanPro } from '@/app/fonts';
import ProductCard from '@/components/ui/product/product-card';
import { Product } from '@/lib/definitions';
import clsx from 'clsx';
import { Fragment } from 'react';

const ProductGrid: React.FC<{
  products: Product[];
  title?: string;
}> = ({ products, title }) => {
  return (
    <Fragment>
      {title && (
        <h3
          className={`${trajanPro.className} text-center text-raven py-20 md:py-28`}
        >
          {title}
        </h3>
      )}

      <div className='w-full grid grid-cols-1 gap-y-20 justify-center md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductGrid;

export const GridContainer: React.FC<{
  children: React.ReactNode;
  padding?: boolean;
}> = ({ children, padding }) => (
  // <main className='w-full bg-white px-8 py-20 md:px-10 md:py-28 xl:px-20 xl:py-32 xl:container xl:mx-auto'>
  <main
    className={clsx(
      'w-full bg-white px-8 pb-20 md:px-10 md:pb-28 xl:px-20 xl:pb-32 xl:container xl:mx-auto',
      padding && 'pt-20 md:pt-28 xl:pt-32'
    )}
  >
    {children}
  </main>
);
