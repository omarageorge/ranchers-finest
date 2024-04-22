import { trajanPro } from '@/app/fonts';

const AboutCard: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div className=''>
      <h2
        className={`${trajanPro.className} font-bold text-xl text-white bg-black px-4 py-2 rounded-t-sm`}
      >
        {title}
      </h2>
      <p className='p1 bg-[#f4f4f4] font-light p-4 rounded-b-sm border border-b'>
        {children}
      </p>
    </div>
  );
};

export default AboutCard;
