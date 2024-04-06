interface RowProp {
  children: React.ReactElement<HTMLDivElement>[];
}

const Row: React.FC<RowProp> = ({ children }) => (
  <div className='flex flex-col items-start justify-between gap-14 md:flex-row md:gap-0'>
    {children}
  </div>
);

export default Row;
