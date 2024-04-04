export interface ILinkData {
  title: string;
  url: string;
  subLinks?: ILinkData[];
}

const linkData: ILinkData[] = [
  { title: "Home", url: "/" },
  { title: "About", url: "/" },
  { title: "Products", url: "/" },
  { title: "Buy", url: "/" },
  { title: "Contact", url: "/" },
];

export default linkData;
