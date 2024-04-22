import heroMeat from '@/assets/hero/hero-meat.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { frozenCuts } from '@/lib/products/frozen-cuts';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Frozen Cuts: Ranchers Finest',
};

function FrozenCuts() {
  return (
    <Fragment>
      <HeroSection title='Frozen Cuts' image={heroMeat} />
      <GridContainer padding>
        <ProductGrid
          products={frozenCuts.products}
          purchaseUrl={frozenCuts.purchaseUrl}
        />
      </GridContainer>
    </Fragment>
  );
}

export default FrozenCuts;
