import Ranchers_beef_fillet from '@/assets/products/fresh_cuts/Ranchers_beef_fillet.png';
import Ranchers_Beef_shin from '@/assets/products/fresh_cuts/Ranchers_Beef_shin.png';
import Ranchers_Beef_Steak from '@/assets/products/fresh_cuts/Ranchers_Beef_Steak.png';
import Ranchers_Prime_Beef_Steak from '@/assets/products/fresh_cuts/Ranchers_Prime_Beef_Steak.png';
import Ranchers_Ribeye from '@/assets/products/fresh_cuts/Ranchers_Ribeye.png';
import Ranchers_Roast_veal from '@/assets/products/fresh_cuts/Ranchers_Roast_veal.png';
import Ranchers_Rump_Steak from '@/assets/products/fresh_cuts/Ranchers_Rump_Steak.png';
import Ranchers_Sirloin_Steak from '@/assets/products/fresh_cuts/Ranchers_Sirloin_Steak.png';
import Ranchers_Spare_Ribs from '@/assets/products/fresh_cuts/Ranchers_Spare_Ribs.png';
import Ranchers_Tbone_Steak from '@/assets/products/fresh_cuts/Ranchers_Tbone_Steak.png';

import Ranchers_Chicken_Drumsticks from '@/assets/products/fresh_cuts/Ranchers_Chicken_Drumsticks.png';
import Ranchers_Chicken_Fillet from '@/assets/products/fresh_cuts/Ranchers_Chicken_Fillet.png';
import Ranchers_Chicken_Leg from '@/assets/products/fresh_cuts/Ranchers_Chicken_Leg.png';
import Ranchers_Chicken_Thighs from '@/assets/products/fresh_cuts/Ranchers_Chicken_Thighs.png';
import Ranchers_Whole_Chicken from '@/assets/products/fresh_cuts/Ranchers_Whole_Chicken.png';

import Ranchers_Pork_Belly from '@/assets/products/fresh_cuts/Ranchers_Pork_Belly.png';
import Ranchers_Pork_Chops from '@/assets/products/fresh_cuts/Ranchers_Pork_Chops.png';
import Ranchers_Pork_Cubes from '@/assets/products/fresh_cuts/Ranchers_Pork_Cubes.png';
import Ranchers_Pork_Leg from '@/assets/products/fresh_cuts/Ranchers_Pork_Leg.png';
import Ranchers_Pork_Rack from '@/assets/products/fresh_cuts/Ranchers_Pork_Rack.png';
import Ranchers_Pork_Steak from '@/assets/products/fresh_cuts/Ranchers_Pork_Steak.png';
import Ranchers_Pork_Strips from '@/assets/products/fresh_cuts/Ranchers_Pork_Strips.png';
import Ranchers_Rolled_Pork from '@/assets/products/fresh_cuts/Ranchers_Rolled_Pork.png';

import { ProductData } from '@/lib/definitions';

export const beefCuts: ProductData = {
  products: [
    { name: 'Ribeye ', image: Ranchers_Ribeye },
    { name: 'Roast Veal', image: Ranchers_Roast_veal },
    { name: 'Rump Steak', image: Ranchers_Rump_Steak },
    { name: 'Sirloin Steak', image: Ranchers_Sirloin_Steak },
    { name: 'Spare Ribs', image: Ranchers_Spare_Ribs },
    { name: 'Prime Beef Steak', image: Ranchers_Prime_Beef_Steak },
    { name: 'T-bone Steak', image: Ranchers_Tbone_Steak },
    { name: 'Beef Fillet', image: Ranchers_beef_fillet },
    { name: 'Beef Shin', image: Ranchers_Beef_shin },
    { name: 'Beef  Steak', image: Ranchers_Beef_Steak },
  ],
};

export const poultryCuts: ProductData = {
  products: [
    { name: 'Chicken Drumsticks', image: Ranchers_Chicken_Drumsticks },
    { name: 'Chicken Fillet', image: Ranchers_Chicken_Fillet },
    { name: 'Chicken Leg ', image: Ranchers_Chicken_Leg },
    { name: 'Chicken Thighs', image: Ranchers_Chicken_Thighs },
    { name: 'Whole Chicken', image: Ranchers_Whole_Chicken },
  ],
};

export const porkCuts: ProductData = {
  products: [
    { name: 'Rolled Pork', image: Ranchers_Rolled_Pork },
    { name: 'Pork Steak', image: Ranchers_Pork_Steak },
    { name: 'Pork Chops', image: Ranchers_Pork_Chops },
    { name: 'Pork Strips', image: Ranchers_Pork_Strips },
    { name: 'Pork Cubes', image: Ranchers_Pork_Cubes },
    { name: 'Pork Rack', image: Ranchers_Pork_Rack },
    { name: 'Pork Leg', image: Ranchers_Pork_Leg },
    { name: 'Pork Belly', image: Ranchers_Pork_Belly },
  ],
};
