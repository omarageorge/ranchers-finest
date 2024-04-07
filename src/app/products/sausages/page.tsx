import heroSausages from '@/assets/hero/hero-sausages.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid from '@/components/ui/product/product-grid';
import { beefSausages, chickenSausages, porkSausages } from '@/lib/data';
import { Fragment } from 'react';

function Sausages() {
  return (
    <Fragment>
      <HeroSection title='Sausages' image={heroSausages} />
      <main className='w-full h-auto bg-white'>
        <ProductGrid products={chickenSausages} />
        <ProductGrid products={porkSausages} />
        <ProductGrid products={beefSausages} />
      </main>
    </Fragment>
  );
}

export default Sausages;
