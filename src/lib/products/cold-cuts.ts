import Ranchers_Back_Bacon_200g from '@/assets/products/cold_cuts/Ranchers_Back_Bacon_200g.png';
import Ranchers_Beef_Mortadella_200g from '@/assets/products/cold_cuts/Ranchers_Beef_Mortadella_200g.png';
import Ranchers_Garlic_Salami_200g from '@/assets/products/cold_cuts/Ranchers_Garlic_Salami_200g.png';
import Ranchers_Roasted_Turkey_Fillet_200g from '@/assets/products/cold_cuts/Ranchers_Roasted_Turkey_Fillet_200g.png';
import Ranchers_Sandwich_Ham_200g from '@/assets/products/cold_cuts/Ranchers_Sandwich_Ham_200g.png';
import Ranchers_Streaky_Bacon_200g from '@/assets/products/cold_cuts/Ranchers_Streaky_Bacon_200g.png';
import { ProductData } from '@/lib/definitions';

export const coldCuts: ProductData = {
  products: [
    {
      name: 'Beef Mortadella (200g)',
      image: Ranchers_Beef_Mortadella_200g,
    },
    {
      name: 'Garlic Salami (200g)',
      image: Ranchers_Garlic_Salami_200g,
    },
    {
      name: 'Roasted Turkey Fillet (200g)',
      image: Ranchers_Roasted_Turkey_Fillet_200g,
    },
    { name: 'Back Bacon (200g)', image: Ranchers_Back_Bacon_200g },
    { name: 'Sandwich Ham (200g)', image: Ranchers_Sandwich_Ham_200g },
    {
      name: 'Streaky Bacon (200g)',
      image: Ranchers_Streaky_Bacon_200g,
    },
  ],
};
