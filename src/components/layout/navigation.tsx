'use client';

import { trajanPro } from '@/app/fonts';
import logo from '@/assets/logo.png';
import { socialMedia } from '@/lib/data';
import linkData from '@/lib/nav-links';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { createElement, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  return (
    <nav className='w-full h-20 flex items-center bg-black md:h-24 lg:h-32'>
      <div className='w-full flex items-center justify-between lg:container lg:mx-auto'>
        {/* Nav Links */}
        <span className='w-full flex items-center justify-between gap-14 lg:w-fit'>
          <Link href='/' className='ml-6 lg:ml-0'>
            <Image src={logo} className='w-20 lg:w-32' alt='' priority />
          </Link>

          <button
            className='mr-6 text-2xl text-white cursor-pointer lg:mr-0 lg:hidden'
            onClick={() => setSideNavVisible(!sideNavVisible)}
          >
            {sideNavVisible ? <FaTimes /> : <FaBars />}
          </button>

          <ul
            className={clsx(
              'absolute w-full h-screen z-50 top-20 md:top-24 bg-raven translate-x-[-100%] transition-transform duration-300 ease-in-out lg:relative lg:w-auto lg:h-min lg:top-0 lg:bg-transparent lg:inline-flex lg:gap-7 lg:translate-x-[0%]',
              sideNavVisible && 'translate-x-[0%]'
            )}
          >
            {linkData.map((link) => (
              <li
                key={link.title}
                className='border-b border-b-white py-3 px-6 transition-all duration-200 ease-in lg:border-b-0 lg:p-0 group'
              >
                <Link
                  href={link.url}
                  className={`${trajanPro.className} block text-white text-lg group-hover:underline group-hover:underline-offset-8 group-hover:text-yellow lg:text-sm`}
                  onClick={() => setSideNavVisible(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <div className='w-full bg-'></div>
          </ul>
        </span>

        {/* Social Media */}
        <span className='hidden text-2xl gap-5 lg:inline-flex'>
          {socialMedia.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              target='_blank'
              className='text-white hover:text-yellow transition-colors duration-300 ease-linear'
            >
              {createElement(link.icon)}
            </Link>
          ))}
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
