import heroMeat from '@/assets/hero/hero-meat.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { meatCuts } from '@/lib/data';
import { Fragment } from 'react';

function MeatCuts() {
  return (
    <Fragment>
      <HeroSection title='Meat Cuts' image={heroMeat} />
      <GridContainer padding>
        <ProductGrid products={meatCuts} />
      </GridContainer>
    </Fragment>
  );
}

export default MeatCuts;
