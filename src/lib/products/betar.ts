import Betar_Beef_Burgers_4pcs from '@/assets/products/betar/Betar_Beef_Burgers_4pcs.png';
import Betar_Beef_Sausages_1kg from '@/assets/products/betar/Betar_Beef_Sausages_1kg.png';
import Betar_Beefyz_Sausages from '@/assets/products/betar/Betar_Beefyz_Sausages.png';
import Betar_Chicken_Sausages_1kg from '@/assets/products/betar/Betar_Chicken_Sausages_1kg.png';
import Betar_Minced_Meat_1kg from '@/assets/products/betar/Betar_Minced_Meat_1kg.png';
import Betar_Minced_Meat_500g from '@/assets/products/betar/Betar_Minced_Meat_500g.png';
import { ProductData } from '@/lib/definitions';

export const betarSausages: ProductData = {
  products: [
    { name: 'Beefyz Sausages', image: Betar_Beefyz_Sausages },
    { name: 'Beef Sausages 1kg', image: Betar_Beef_Sausages_1kg },
    { name: 'Chicken Sausages 1kg', image: Betar_Chicken_Sausages_1kg },
  ],
};

export const betarMeats: ProductData = {
  products: [
    { name: 'Betar_Minced_Meat_500g', image: Betar_Minced_Meat_500g },
    { name: 'Betar_Minced_Meat_1kg', image: Betar_Minced_Meat_1kg },
    { name: 'Betar_Beef_Burgers_4pcs', image: Betar_Beef_Burgers_4pcs },
  ],
};
