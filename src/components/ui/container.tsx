const Container: React.FC<{ css?: string; children: React.ReactNode }> = ({
  css,
  children,
}) => (
  <div
    className={`${css}w-full px-8 py-20 md:px-10 md:py-28 lg:px-20 lg:py-36 xl:container xl:mx-auto`}
  >
    {children}
  </div>
);
