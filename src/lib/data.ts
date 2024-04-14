import coldcuts from '@/assets/icons/cold-cuts.png';
import frozencuts from '@/assets/icons/frozen-cuts.png';
import sausage from '@/assets/icons/sausage.png';

import {
  CustomerReview,
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
  {
    url: 'https://www.facebook.com/profile.php?id=61556780924008&mibextid=ZbWKwL',
    icon: FaFacebook,
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
