import Betar_Beef_Burgers_4pcs from '@/assets/products/betar/Betar_Beef_Burgers_4pcs.png';
import Betar_Beef_Sausages_1kg from '@/assets/products/betar/Betar_Beef_Sausages_1kg.png';
import Betar_Beefyz_Sausages_11pcs from '@/assets/products/betar/Betar_Beefyz_Sausages_11pcs.png';
import Betar_Chicken_Sausages_1kg from '@/assets/products/betar/Betar_Chicken_Sausages_1kg.png';
import Betar_Minced_Meat_1kg from '@/assets/products/betar/Betar_Minced_Meat_1kg.png';
import Betar_Minced_Meat_500g from '@/assets/products/betar/Betar_Minced_Meat_500g.png';
import { ProductData } from '@/lib/definitions';

export const betarSausages: ProductData = {
  products: [
    { name: 'Beefyz Sausages (11pcs)', image: Betar_Beefyz_Sausages_11pcs },
    { name: 'Beef Sausages (1kg)', image: Betar_Beef_Sausages_1kg },
    { name: 'Chicken Sausages (1kg)', image: Betar_Chicken_Sausages_1kg },
  ],
};

export const betarFrozenCuts: ProductData = {
  products: [
    { name: 'Minced Meat (500g)', image: Betar_Minced_Meat_500g },
    { name: 'Minced Meat (1kg)', image: Betar_Minced_Meat_1kg },
    { name: 'Beef Burgers (4pcs)', image: Betar_Beef_Burgers_4pcs },
  ],
};
