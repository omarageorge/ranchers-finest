import heroColdCut from '@/assets/hero/hero-coldcut.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { coldCuts } from '@/lib/data';
import { Fragment } from 'react';

function ColdCuts() {
  return (
    <Fragment>
      <HeroSection title='Cold Cuts' image={heroColdCut} />
      <GridContainer>
        <ProductGrid products={coldCuts} />
      </GridContainer>
    </Fragment>
  );
}

export default ColdCuts;