import Ranchers_Beef_Sausages_800g from '@/assets/products/sausages/Ranchers_Beef_Sausages_800g.png';
import Ranchers_Chicken_Sausages_400g from '@/assets/products/sausages/Ranchers_Chicken_Sausages_400g.png';
import Ranchers_Chicken_Sausages_800g from '@/assets/products/sausages/Ranchers_Chicken_Sausages_800g.png';
import Ranchers_English_Beef_Sausages_500g from '@/assets/products/sausages/Ranchers_English_Beef_Sausages_500g.png';
import Ranchers_Goat_Sausages_400g from '@/assets/products/sausages/Ranchers_Goat_Sausages_400g.png';
import Ranchers_Goat_Sausages_800g from '@/assets/products/sausages/Ranchers_Goat_Sausages_800g.png';
import Ranchers_Pork_Hotdogs_350g from '@/assets/products/sausages/Ranchers_Pork_Hotdogs_350g.png';
import Ranchers_Pork_Sausages_400g from '@/assets/products/sausages/Ranchers_Pork_Sausages_400g.png';
import Ranchers_Pork_Sausages_800g from '@/assets/products/sausages/Ranchers_Pork_Sausages_800g.png';
import Ranchers_Smokies_Beef_400g from '@/assets/products/sausages/Ranchers_Smokies_Beef_400g.png';

import Ranchers_Beef_BBQ_Sausages_1kg from '@/assets/products/sausages/Ranchers_Beef_BBQ_Sausages_1kg.png';
import Ranchers_Beef_BBQ_Sausages_500g from '@/assets/products/sausages/Ranchers_Beef_BBQ_Sausages_500g.png';
import Ranchers_Beef_Hot_Dogs_1kg from '@/assets/products/sausages/Ranchers_Beef_Hot_Dogs_1kg.png';
import Ranchers_Breakfast_Beef_350g from '@/assets/products/sausages/Ranchers_Breakfast_Beef_350g.png';
import Ranchers_English_Beef_Sausages_1kg from '@/assets/products/sausages/Ranchers_English_Beef_Sausages_1kg.png';
import Ranchers_Traditional_Smoked_Beef_Sausages from '@/assets/products/sausages/Ranchers_Traditional_Smoked_Beef_Sausages.png';

import Ranchers_Breakfast_Chicken_Sausages_350g from '@/assets/products/sausages/Ranchers_Breakfast_Chicken_Sausages_350g.png';
import Ranchers_Breakfast_Chicken_Sausages_700g from '@/assets/products/sausages/Ranchers_Breakfast_Chicken_Sausages_700g.png';
import Ranchers_English_Chicken_Sausages_1kg from '@/assets/products/sausages/Ranchers_English_Chicken_Sausages_1kg.png';

import Ranchers_BBQ_Pork_Sausages_1kg from '@/assets/products/sausages/Ranchers_BBQ_Pork_Sausages_1kg.png';
import Ranchers_Breakfast_Pork_Sausages_700g from '@/assets/products/sausages/Ranchers_Breakfast_Pork_Sausages_700g.png';
import Ranchers_English_Pork_Sausages_1kg from '@/assets/products/sausages/Ranchers_English_Pork_Sausages_1kg.png';
import Ranchers_English_Pork_Sausages_500g from '@/assets/products/sausages/Ranchers_English_Pork_Sausages_500g.png';
import Ranchers_Pork_Hot_Dogs_1kg from '@/assets/products/sausages/Ranchers_Pork_Hot_Dogs_1kg.png';

import { ProductData } from '@/lib/definitions';

export const beefSausages: ProductData = {
  products: [
    { name: 'Beef Sausages (800g)', image: Ranchers_Beef_Sausages_800g },
    { name: 'Smokies Beef (400g)', image: Ranchers_Smokies_Beef_400g },
    {
      name: 'English Beef Sausages (500g)',
      image: Ranchers_English_Beef_Sausages_500g,
    },
    {
      name: 'English Beef Sausages (1kg)',
      image: Ranchers_English_Beef_Sausages_1kg,
    },

    { name: 'Beef BBQ Sausages (1kg)', image: Ranchers_Beef_BBQ_Sausages_1kg },
    { name: 'Breakfast Beef (350g)', image: Ranchers_Breakfast_Beef_350g },
    { name: 'Beef Hot Dogs (1kg)', image: Ranchers_Beef_Hot_Dogs_1kg },
    {
      name: 'Beef BBQ Sausages (500g)',
      image: Ranchers_Beef_BBQ_Sausages_500g,
    },
    {
      name: 'Traditional Smoked Beef Sausages',
      image: Ranchers_Traditional_Smoked_Beef_Sausages,
    },
  ],
};

export const chickenSausages: ProductData = {
  products: [
    { name: 'Chicken Sausages (400g)', image: Ranchers_Chicken_Sausages_400g },
    { name: 'Chicken Sausages (800g)', image: Ranchers_Chicken_Sausages_800g },
    {
      name: 'English Chicken Sausages (1kg)',
      image: Ranchers_English_Chicken_Sausages_1kg,
    },
    {
      name: 'Breakfast Chicken Sausages (350g)',
      image: Ranchers_Breakfast_Chicken_Sausages_350g,
    },
    {
      name: 'Breakfast Chicken Sausages (700g)',
      image: Ranchers_Breakfast_Chicken_Sausages_700g,
    },
  ],
};

export const goatSausages: ProductData = {
  products: [
    { name: 'Goat Sausages (400g)', image: Ranchers_Goat_Sausages_400g },
    { name: 'Goat Sausages (800g)', image: Ranchers_Goat_Sausages_800g },
  ],
};

export const porkSausages: ProductData = {
  products: [
    { name: 'Pork Sausages (400g)', image: Ranchers_Pork_Sausages_400g },
    { name: 'Pork Sausages (800g)', image: Ranchers_Pork_Sausages_800g },
    {
      name: 'Breakfast Pork Sausages (700g)',
      image: Ranchers_Breakfast_Pork_Sausages_700g,
    },
    {
      name: 'English Pork Sausages (500g)',
      image: Ranchers_English_Pork_Sausages_500g,
    },
    {
      name: 'English Pork Sausages (1kg)',
      image: Ranchers_English_Pork_Sausages_1kg,
    },
    { name: 'BBQ Pork Sausages (1kg)', image: Ranchers_BBQ_Pork_Sausages_1kg },
    { name: 'Pork Hotdogs (350g)', image: Ranchers_Pork_Hotdogs_350g },
    { name: 'Pork Hot Dogs (1kg)', image: Ranchers_Pork_Hot_Dogs_1kg },
  ],
};
