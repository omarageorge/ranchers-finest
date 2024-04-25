import heroFreshCuts from '@/assets/hero/hero-freshcuts.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { beefCuts, porkCuts, poultryCuts } from '@/lib/products/meat-cuts';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Meat Cuts',
};

function FreshCuts() {
  return (
    <Fragment>
      <HeroSection title='Meat Cuts' image={heroFreshCuts} />
      <GridContainer>
        <ProductGrid products={beefCuts.products} title='Beef Cuts' />
        <ProductGrid products={poultryCuts.products} title='Chicken Cuts' />
        <ProductGrid products={porkCuts.products} title='Pork Cuts' />
      </GridContainer>
    </Fragment>
  );
}

export default FreshCuts;
