const Row: React.FC<{
  children: React.ReactElement<HTMLDivElement>[];
}> = ({ children }) => (
  <div className='flex flex-col items-start justify-between gap-14 py-20 px-8 md:flex-row md:gap-0 lg:px-0 lg:py-28'>
    {children}
  </div>
);

export default Row;
