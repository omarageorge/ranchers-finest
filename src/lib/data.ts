import coldcuts from '@/assets/icons/cold-cuts.png';
import frozencuts from '@/assets/icons/frozen-cuts.png';
import sausage from '@/assets/icons/sausage.png';

import BackBacon from '@/assets/Products/coldcuts/Back_Bacon_200g.webp';
import SandwichHam from '@/assets/Products/coldcuts/Sandwich_Ham_200g.webp';
import StreakyBacon from '@/assets/Products/coldcuts/Streaky_Bacon_200g.webp';

import BeefBugger from '@/assets/Products/meatcuts/Beef_Burger_Patties.webp';
import BeefCubes from '@/assets/Products/meatcuts/Beef_Cubes_500g.webp';
import ChickenDrumsticks from '@/assets/Products/meatcuts/Chicken_Drumsticks_1kg.webp';

import ChickenFillet from '@/assets/Products/meatcuts/Chicken_Fillet_1kg.webp';
import ChickenLegs from '@/assets/Products/meatcuts/Chicken_Legs_1kg.webp';
import ChickenThighs from '@/assets/Products/meatcuts/Chicken_Thighs_1kg.webp';
import ChickenWings from '@/assets/Products/meatcuts/Chicken_Wings_1kg.webp';

import BBQ_Beef_500g from '@/assets/Products/sausages/Beef/BBQ_Beef_500g.webp';
import Beef_BBQ_1kg from '@/assets/Products/sausages/Beef/Beef_BBQ_1kg.webp';
import Beef_Breakfast_350g from '@/assets/Products/sausages/Beef/Beef_Breakfast_350g.webp';
import Beef_Hot_Dogs_1kg from '@/assets/Products/sausages/Beef/Beef_Hot_Dogs_1kg.webp';
import English_Style_Beef_1kg from '@/assets/Products/sausages/Beef/English_Style_Beef_1kg.webp';
import EnglishBeefgs from '@/assets/Products/sausages/Beef/English_Style_Beef_500g.webp';
import SmokedBeef from '@/assets/Products/sausages/Beef/Traditional_Smoked_Beef.webp';

import BreakfastChicken7gs from '@/assets/Products/sausages/Chicken/Breakfast_Chicken_700g.webp';
import BreakfastChickengs from '@/assets/Products/sausages/Chicken/Chicken_Breakfast_350g.webp';
import EnglishChickenkg from '@/assets/Products/sausages/Chicken/English_Style_Chicken_1kg.jpg';

import EnglishStylePorkkg from '@/assets/Products/sausages/Pork/English_Style_Pork_1kg.webp';
import EnglishStylePorkgs from '@/assets/Products/sausages/Pork/English_Style_Pork_500g.webp';
import PorkBBQkg from '@/assets/Products/sausages/Pork/Pork_BBQ_1kg.webp';
import PorkBBQgs from '@/assets/Products/sausages/Pork/Pork_BBQ_500g.webp';
import PorkBreakfast7gs from '@/assets/Products/sausages/Pork/Pork_Breakfast_700g.webp';
import PorkHotDogskg from '@/assets/Products/sausages/Pork/Pork_Hot_Dogs_1kg.webp';

import {
  CustomerReview,
  Product,
  ProductCategory,
  SocialMedia,
} from '@/lib/definitions';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from 'react-icons/fa6';

export const socialMedia: SocialMedia[] = [
  { url: 'https://ug.linkedin.com/company/ranchers-finest', icon: FaLinkedin },
  { url: 'https://twitter.com/ranchersfinest', icon: FaXTwitter },
  { url: 'https://www.instagram.com/ranchers.finest/', icon: FaInstagram },
  { url: 'https://www.facebook.com/ranchersfinest', icon: FaFacebook },
];

export const customerReviews: CustomerReview[] = [
  {
    message:
      "I've tried many sausages in Kampala, but Ranchers Finest is on another level. The quality of the meat is incredible, and you can taste the difference in every bite. Highly recommend!",
    customer: 'Sarah K',
  },
  {
    message:
      'Ranchers Finest has completely changed my expectations for processed meats. The flavors are so rich and complex! My family loves their sausages, and they are now a staple in our home.',
    customer: 'John M.',
  },
  {
    message:
      "As a picky eater, I'm always hesitant to try new brands. But Ranchers Finest blew me away! The presentation is beautiful, and the taste is even better. It's clear they care about delivering an exceptional product.",
    customer: 'Amina T.',
  },
  {
    message:
      "I wasn't sure what to expect with Ranchers Finest, but they exceeded my expectations tenfold!  Delicious, juicy sausages and the best bacon I've ever had.",
    customer: ' Peter W.',
  },
  {
    message:
      "Ranchers Finest makes me feel like I'm dining at a fancy restaurant, right in my own kitchen.  Their products elevate any meal.",
    customer: ' Grace L.',
  },
  {
    message:
      "I've been a loyal Ranchers Finest customer for months. The quality is always consistent, and I love trying their new flavors.  They never disappoint!",
    customer: 'Josephine N.',
  },
];

export const productCategories: ProductCategory[] = [
  {
    icon: sausage,
    name: 'Sausages',
    description:
      'A wide variety of sausages (Chicken, Pork, Beef, etc.) including specialty flavors, plus three types of bacon.',
    url: '/products/sausages',
  },
  {
    icon: coldcuts,
    name: 'Cold Cuts',
    description:
      'Top-notch cold cuts (Salami, Ham, etc.) in Beef, Pork, Chicken, Lamb, and Goat for supermarkets, restaurants, and hotels.',
    url: '/products/coldcuts',
  },
  {
    icon: frozencuts,
    name: 'Frozen Cuts',
    description:
      'High-quality Beef, Chicken, and Pork cuts (Chops, Ribs, Steaks, etc.) for hotels and restaurants, meeting international standards.',
    url: '/products/frozencuts',
  },
];

export const meatCuts: Product[] = [
  { name: 'Chicken Drumsticks', image: ChickenDrumsticks },
  { name: 'Chicken Fillet', image: ChickenFillet },
  { name: 'Chicken Legs', image: ChickenLegs },
  { name: 'Chicken Thighs', image: ChickenThighs },
  { name: 'Chicken Wings', image: ChickenWings },
  { name: 'Beef Cubes', image: BeefCubes },
  { name: 'Beef Burgers', image: BeefBugger },
];

export const coldCuts: Product[] = [
  { name: 'Back Bacon', image: BackBacon },
  { name: 'Sandwich Ham', image: SandwichHam },
  { name: 'Streaky Bacon', image: StreakyBacon },
];

export const beefSausages: Product[] = [
  { name: 'Beef BBQ 1kg', image: Beef_BBQ_1kg },
  { name: 'Beef BBQ 500g', image: BBQ_Beef_500g },
  { name: 'Breakfast Beef 500G', image: Beef_Breakfast_350g },
  { name: 'Beef Hot Dogs', image: Beef_Hot_Dogs_1kg },
  { name: 'English Beef 1kg', image: English_Style_Beef_1kg },
  { name: 'English Beef 500g', image: EnglishBeefgs },
  { name: 'Traditional Smoked Beef', image: SmokedBeef },
];

export const chickenSausages: Product[] = [
  { name: 'English Chicken 1kg', image: EnglishChickenkg },
  { name: 'Breakfast Chicken 700g', image: BreakfastChicken7gs },
  { name: 'Breakfast Chicken 350g', image: BreakfastChickengs },
];

export const porkSausages: Product[] = [
  { name: 'English Style Pork 1kg', image: EnglishStylePorkkg },
  { name: 'English Style Pork 500g', image: EnglishStylePorkgs },
  { name: 'Pork BBQ 1kg', image: PorkBBQkg },
  { name: 'Pork BBQ 500g', image: PorkBBQgs },
  { name: 'Pork Breakfast 700g', image: PorkBreakfast7gs },
  { name: 'Pork Hot Dogs 1kg', image: PorkHotDogskg },
];
