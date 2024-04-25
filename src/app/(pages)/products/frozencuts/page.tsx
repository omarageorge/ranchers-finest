import heroMeat from '@/assets/hero/hero-meat.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { betarFrozenCuts } from '@/lib/products/betar';
import { frozenCuts } from '@/lib/products/frozen-cuts';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Frozen Cuts',
};

function FrozenCuts() {
  return (
    <Fragment>
      <HeroSection title='Frozen Cuts' image={heroMeat} />
      <GridContainer>
        <ProductGrid
          products={frozenCuts.products}
          purchaseUrl={frozenCuts.purchaseUrl}
          title='Premium Frozen Cuts'
        />

        <ProductGrid
          products={betarFrozenCuts.products}
          title='Betar Frozen Cuts'
        />
      </GridContainer>
    </Fragment>
  );
}

export default FrozenCuts;
