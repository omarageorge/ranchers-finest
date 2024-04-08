import heroMeat from '@/assets/hero/hero-meat.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import {
  beefSausages,
  chickenSausages,
  coldCuts,
  meatCuts,
  porkSausages,
} from '@/lib/data';
import { Fragment } from 'react';

function Products() {
  return (
    <Fragment>
      <HeroSection title='OUR PRODUCTS' image={heroMeat} />
      <GridContainer>
        <ProductGrid products={beefSausages} title='Beef Sausages' />
        <ProductGrid products={porkSausages} title='Pork Sausages' />
        <ProductGrid products={chickenSausages} title='Chicken Sausages' />
        <ProductGrid products={meatCuts} title='Frozen Cuts' />
        <ProductGrid products={coldCuts} title='Cold Cuts' />
      </GridContainer>
    </Fragment>
  );
}

export default Products;
