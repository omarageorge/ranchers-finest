import { Product } from '@/lib/definitions';
import ProductCard from './product-card';

const ProductGrid: React.FC<{
  products: Product[];
}> = ({ products }) => {
  return (
    <div className='w-full grid grid-cols-1 gap-y-20 justify-center px-8 py-20 md:grid-cols-2 md:px-10 md:py-28 lg:grid-cols-3 xl:px-20 xl:py-32 xl:container xl:mx-auto'>
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
