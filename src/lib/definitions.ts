import { StaticImageData } from 'next/image';

export type SocialMedia = {
  url: string;
  icon: React.ComponentType;
};

export type CustomerReview = {
  message: string;
  customer: string;
};

export type ProductCategory = {
  icon: StaticImageData;
  name: string;
  description: string;
  url: string;
};
