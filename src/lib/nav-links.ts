export interface ILinkData {
  title: string;
  url: string;
  target?: '_self' | '_blank';
  subLinks?: ILinkData[];
}

const linkData: ILinkData[] = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/' },
  { title: 'Products', url: '/' },
  {
    title: 'Buy',
    url: 'https://legourmetkampala.com/collections/ranchers-finest',
    target: '_blank',
  },
  { title: 'Contact', url: '/' },
];

export default linkData;
