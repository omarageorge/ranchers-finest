import heroSausages from '@/assets/hero/hero-sausages.jpg';
import HeroSection from '@/components/ui/hero-section';
import ProductGrid, {
  GridContainer,
} from '@/components/ui/product/product-grid';
import { chickenSausages, porkSausages } from '@/lib/data';
import { Fragment } from 'react';

function Sausages() {
  return (
    <Fragment>
      <HeroSection title='Sausages' image={heroSausages} />
      <GridContainer>
        <ProductGrid products={chickenSausages} title='Chicken Sausages' />
        <ProductGrid products={porkSausages} title='Pork Sausages' />
      </GridContainer>
    </Fragment>
  );
}

export default Sausages;
