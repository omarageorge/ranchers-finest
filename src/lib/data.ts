import { CustomerReview, SocialMedia } from '@/lib/definitions';
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
