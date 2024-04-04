import { trajanPro } from '@/app/fonts';

const ColumnTitle: React.FC<{ children: string }> = ({ children }) => (
  <h5 className={`${trajanPro.className} text-xl text-white md:text-2xl`}>
    {children}
  </h5>
);

export default ColumnTitle;
