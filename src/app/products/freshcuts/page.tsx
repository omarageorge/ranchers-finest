import heroFreshCuts from '@/assets/hero/hero-freshcuts.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { beefCuts, porkCuts, poultryCuts } from '@/lib/products/fresh-cuts';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Fresh Cuts: Ranchers Finest',
};

function FreshCuts() {
  return (
    <Fragment>
      <HeroSection title='Fresh Cuts' image={heroFreshCuts} />
      <GridContainer padding>
        <ProductGrid products={beefCuts.products} title='Beef Cuts' />
        <ProductGrid products={poultryCuts.products} title='Chicken Cuts' />
        <ProductGrid products={porkCuts.products} title='Pork Cuts' />
      </GridContainer>
    </Fragment>
  );
}

export default FreshCuts;
