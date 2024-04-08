export interface ILinkData {
  title: string;
  url: string;
  target?: '_self' | '_blank';
  subLinks?: ILinkData[];
}

const linkData: ILinkData[] = [
  { title: 'Home', url: '/' },
  // { title: 'About', url: '/about' },
  {
    title: 'Products',
    url: '/products',
    subLinks: [
      { title: 'Sausages', url: '/products/sausages' },
      { title: 'Cold Cuts', url: '/products/coldcuts' },
      { title: 'Frozen Cuts', url: '/products/frozencuts' },
    ],
  },
  {
    title: 'Buy',
    url: 'https://legourmetkampala.com/collections/ranchers-finest',
    target: '_blank',
  },
  { title: 'Contact', url: '/contact' },
];

export default linkData;
