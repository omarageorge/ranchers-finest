const Container: React.FC<{ children: React.ReactElement<HTMLDivElement> }> = ({
  children,
}) => {
  return (
    <div className='w-full h-auto bg-transparent lg:container lg:mx-auto'>
      {children}
    </div>
  );
};

export default Container;
