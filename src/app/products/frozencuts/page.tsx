import heroMeat from '@/assets/hero/hero-meat.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { frozenCuts } from '@/lib/data';
import { Fragment } from 'react';

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
