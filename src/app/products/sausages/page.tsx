import heroSausages from '@/assets/hero/hero-sausages.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';

import {
  beefSausages,
  chickenSausages,
  goatSausages,
  porkSausages,
} from '@/lib/products/sausages';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Sausages: Ranchers Finest',
};

function Sausages() {
  return (
    <Fragment>
      <HeroSection title='Sausages' image={heroSausages} />
      <GridContainer>
        <ProductGrid
          products={beefSausages.products}
          title='Beef Sausages'
          purchaseUrl={beefSausages.purchaseUrl}
        />
        <ProductGrid
          products={chickenSausages.products}
          title='Chicken Sausages'
          purchaseUrl={chickenSausages.purchaseUrl}
        />
        <ProductGrid products={goatSausages.products} title='Goat Sausages' />
        <ProductGrid
          products={porkSausages.products}
          title='Pork Sausages'
          purchaseUrl={porkSausages.purchaseUrl}
        />
      </GridContainer>
    </Fragment>
  );
}

export default Sausages;
