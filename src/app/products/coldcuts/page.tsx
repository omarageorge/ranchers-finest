import heroColdCut from '@/assets/hero/hero-coldcut2.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { coldCuts } from '@/lib/products';
import { Fragment } from 'react';

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
