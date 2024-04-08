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
        <ProductGrid products={beefSausages} title='Beef Sausages' />
        <ProductGrid products={porkSausages} title='Pork Sausages' />
        <ProductGrid products={chickenSausages} title='Chicken Sausages' />
      </GridContainer>
    </Fragment>
  );
}

export default Sausages;
