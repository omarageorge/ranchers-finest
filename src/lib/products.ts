import Ranchers_Beef_Sausages_800g from '@/assets/products/sausages/Ranchers_Beef_Sausages_800g.png';
import Ranchers_Chicken_Sausages_400g from '@/assets/products/sausages/Ranchers_Chicken_Sausages_400g.png';
import Ranchers_Chicken_Sausages_800g from '@/assets/products/sausages/Ranchers_Chicken_Sausages_800g.png';
import Ranchers_Goat_Sausages_400g from '@/assets/products/sausages/Ranchers_Goat_Sausages_400g.png';
import Ranchers_Goat_Sausages_800g from '@/assets/products/sausages/Ranchers_Goat_Sausages_800g.png';
import Ranchers_Pork_Hotdogs_350g from '@/assets/products/sausages/Ranchers_Pork_Hotdogs_350g.png';
import Ranchers_Pork_Sausages_400g from '@/assets/products/sausages/Ranchers_Pork_Sausages_400g.png';
import Ranchers_Pork_Sausages_800g from '@/assets/products/sausages/Ranchers_Pork_Sausages_800g.png';
import Ranchers_Smokies_Beef_400g from '@/assets/products/sausages/Ranchers_Smokies_Beef_400g.png';

import Ranchers_Beef_Mortadella_200g from '@/assets/products/sausages/Ranchers_Beef_Mortadella_200g.png';

import { ProductData } from '@/lib/definitions';

export const beefSausages: ProductData = {
  products: [
    { name: 'Beef Sausages (800g)', image: Ranchers_Beef_Sausages_800g },
    { name: 'Chicken Sausages (400g)', image: Ranchers_Chicken_Sausages_400g },
    { name: 'Chicken Sausages (800g)', image: Ranchers_Chicken_Sausages_800g },
    { name: 'Goat Sausages (400g)', image: Ranchers_Goat_Sausages_400g },
    { name: 'Goat Sausages (800g)', image: Ranchers_Goat_Sausages_800g },
    { name: 'Pork Hotdogs (350g)', image: Ranchers_Pork_Hotdogs_350g },
    { name: 'Pork Sausages (400g)', image: Ranchers_Pork_Sausages_400g },
    { name: 'Pork Sausages (800g)', image: Ranchers_Pork_Sausages_800g },
    { name: 'Smokies Beef (400g)', image: Ranchers_Smokies_Beef_400g },
  ],
};

export const coldCuts: ProductData = {
  products: [
    {
      name: 'Ranchers_Beef_Mortadella_200g',
      image: Ranchers_Beef_Mortadella_200g,
    },
  ],
};
