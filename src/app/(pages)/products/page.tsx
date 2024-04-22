import heroProducts from '@/assets/hero/hero-products.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { coldCuts } from '@/lib/products/cold-cuts';
import { frozenCuts } from '@/lib/products/frozen-cuts';
import {
  beefSausages,
  chickenSausages,
  porkSausages,
} from '@/lib/products/sausages';
import { Fragment } from 'react';

function Products() {
  return (
    <Fragment>
      <HeroSection title='OUR PRODUCTS' image={heroProducts} />
      <GridContainer>
        <ProductGrid
          products={beefSausages.products}
          title='Beef Sausages'
          purchaseUrl={beefSausages.purchaseUrl}
        />
        <ProductGrid
          products={porkSausages.products}
          title='Pork Sausages'
          purchaseUrl={porkSausages.purchaseUrl}
        />
        <ProductGrid
          products={chickenSausages.products}
          title='Chicken Sausages'
          purchaseUrl={chickenSausages.purchaseUrl}
        />
        <ProductGrid
          products={frozenCuts.products}
          title='Frozen Cuts'
          purchaseUrl={chickenSausages.purchaseUrl}
        />
        <ProductGrid
          products={coldCuts.products}
          title='Cold Cuts'
          purchaseUrl={coldCuts.purchaseUrl}
        />
      </GridContainer>
    </Fragment>
  );
}

export default Products;
