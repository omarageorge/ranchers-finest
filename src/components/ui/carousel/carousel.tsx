'use client';

import images from '@/lib/carousel-images';
import { useEffect, useState } from 'react';
import Slide from './slide';

const Carousel: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-full h-full absolute z-10 overflow-hidden'>
      {images.map((imageSrc, index) => (
        <Slide
          key={index}
          src={imageSrc}
          alt={`Slide - ${index}`}
          isActive={slideIndex === index}
        />
      ))}
    </div>
  );
};

export default Carousel;
