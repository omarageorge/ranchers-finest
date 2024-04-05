const Row: React.FC<{
  children: React.ReactElement<HTMLDivElement>[];
}> = ({ children }) => (
  <div className='w-full py-20 px-8 lg:px-10 xl:px-0 lg:py-28'>
    <div className='flex flex-col items-start justify-between gap-14 md:flex-row md:gap-0'>
      {children}
    </div>
  </div>
);

export default Row;
