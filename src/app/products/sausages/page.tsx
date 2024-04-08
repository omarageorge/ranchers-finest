import heroSausages from '@/assets/hero/hero-sausages.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { beefSausages, chickenSausages, porkSausages } from '@/lib/data';
import { Fragment } from 'react';

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
          products={porkSausages.products}
          title='Pork Sausages'
          purchaseUrl={porkSausages.purchaseUrl}
        />
        <ProductGrid
          products={chickenSausages.products}
          title='Chicken Sausages'
          purchaseUrl={chickenSausages.purchaseUrl}
        />
      </GridContainer>
    </Fragment>
  );
}

export default Sausages;
