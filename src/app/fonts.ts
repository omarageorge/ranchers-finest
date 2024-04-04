import localFont from 'next/font/local';

export const trajanPro = localFont({
  src: [
    {
      path: '../fonts-local/TrajanPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts-local/TrajanPro-Bold.otf',
      weight: '700',
      style: 'bold',
    },
  ],
});

export const proximaNova = localFont({
  src: [
    {
      path: '../fonts-local/Proxima-Nova-Light.otf',
      weight: '100',
      style: 'light',
    },
    {
      path: '../fonts-local/Proxima-Nova-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts-local/Proxima-Nova-Semibold.otf',
      weight: '600',
      style: 'semibold',
    },
  ],
});

export const delius = localFont({ src: '../fonts-local/Delius-Regular.ttf' });

export const megabyte = localFont({ src: '../fonts-local/MegabyteLight.otf' });
