import heroColdCut from '@/assets/hero/hero-coldcut.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { coldCuts } from '@/lib/products/cold-cuts';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Cold Cuts: Ranchers Finest',
};

function ColdCuts() {
  return (
    <Fragment>
      <HeroSection title='Cold Cuts' image={heroColdCut} />
      <GridContainer padding>
        <ProductGrid
          products={coldCuts.products}
          purchaseUrl={coldCuts.purchaseUrl}
        />
      </GridContainer>
    </Fragment>
  );
}

export default ColdCuts;
