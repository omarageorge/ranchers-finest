import { trajanPro } from '../fonts';

export default function About() {
  return (
    <main className='w-full h-auto'>
      <div className='w-full px-8 py-32 md:px-10 md:py-28 xl:px-20 xl:py-36 xl:container xl:mx-auto grid grid-cols-2'>
        <div className=''>
          <h2
            className={`${trajanPro.className} font-bold text-xl text-white bg-black px-4 py-2 rounded-sm`}
          >
            Our Story
          </h2>
          <p className={`bg-[#f4f4f4] p-4 rounded-sm`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            eius, incidunt cum laboriosam architecto corporis pariatur, ipsam
            amet velit molestias eveniet molestiae quidem! Velit, doloribus ad
            eius minus temporibus aliquam!
          </p>
        </div>
      </div>
    </main>
  );
}
