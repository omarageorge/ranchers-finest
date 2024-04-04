import { megabyte } from '@/app/fonts';
import ColumnTitle from '@/components/ui/footer/column-title';

const Column: React.FC<{
  title: string;
  children?: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div className='space-y-5'>
      <ColumnTitle>{title}</ColumnTitle>
      <div
        className={`grid grid-cols-1 gap-4 ${megabyte.className} font-light text-lg text-whitish md:gap-6 md:text-xl`}
      >
        {children}
      </div>
    </div>
  );
};

export default Column;
