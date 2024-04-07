import heroMeat from '@/assets/hero/hero-meat.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid from '@/components/ui/product/product-grid';
import { meatCuts } from '@/lib/data';

import { Fragment } from 'react';
function Product() {
  return (
    <Fragment>
      <HeroSection title='Meat CUTS' image={heroMeat} />
      <main className='w-full h-auto bg-white'>
        <ProductGrid products={meatCuts} />
      </main>
    </Fragment>
  );
}

export default Product;
