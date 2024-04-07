import heroMeat from '@/assets/hero/hero-meat.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { chickenSausages, coldCuts, meatCuts, porkSausages } from '@/lib/data';

import { Fragment } from 'react';
function Products() {
  return (
    <Fragment>
      <HeroSection title='OUR PRODUCTS' image={heroMeat} />
      <GridContainer>
        <ProductGrid products={meatCuts} title='Meant' />
        <ProductGrid products={coldCuts} title='Cold Cuts' />
        <ProductGrid products={chickenSausages} title='Chicken Sausages' />
        <ProductGrid products={porkSausages} title='Pork Sausages' />
      </GridContainer>
    </Fragment>
  );
}

export default Products;
