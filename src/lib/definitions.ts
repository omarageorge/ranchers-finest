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

export type Product = {
  name: string;
  image: StaticImageData;
};

export type ProductData = {
  purchaseUrl?: string;
  products: Product[];
};
