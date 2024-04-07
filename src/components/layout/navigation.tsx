'use client';

import { trajanPro } from '@/app/fonts';
import logo from '@/assets/logo.png';
import { socialMedia } from '@/lib/data';
import linkData, { ILinkData } from '@/lib/nav-links';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { createElement, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navigation: React.FC = () => {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  // Helper function for rendering sub links
  const renderSubLinks = (links: ILinkData[]) => (
    <ul className='hidden w-full xl:w-36 xl:absolute bg-reddish bg-opacity-50 group-hover:block  xl:rounded-sm xl:overflow-hidden'>
      {links.map((subLink) => (
        <li
          key={subLink.title}
          className='flex items-center justify-left px-2 py-3 xl:bg-transparent xl:hover:bg-black'
        >
          <Link
            href={subLink.url}
            className='font-thin text-base text-center text-white'
            onClick={() => setSideNavVisible(false)}
          >
            {subLink.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className='w-full h-20 flex items-center bg-black md:h-24 lg:h-32'>
      <div className='w-full flex items-center justify-between  lg:container lg:mx-auto xl:px-20'>
        {/* Nav Links */}
        <span className='w-full flex items-center justify-between gap-14 xl:w-fit'>
          <Link href='/' className='ml-6 xl:ml-0'>
            <Image src={logo} className='w-20 xl:w-32' alt='' priority />
          </Link>

          <button
            className='mr-6 text-2xl text-white cursor-pointer xl:mr-0 xl:hidden'
            onClick={() => setSideNavVisible(!sideNavVisible)}
          >
            {sideNavVisible ? <FaTimes /> : <FaBars />}
          </button>

          <ul
            className={clsx(
              'absolute w-full h-[calc(100vh-5rem)] z-50 top-20 md:top-24 bg-raven translate-x-[-100%] transition-transform duration-300 ease-in-out md:h-[calc(100vh-6rem)] xl:relative xl:w-auto xl:h-min xl:top-0 xl:bg-transparent xl:inline-flex xl:gap-7 xl:translate-x-[0%]',
              sideNavVisible && 'translate-x-[0%]'
            )}
          >
            {linkData.map((link) => (
              <li
                key={link.title}
                className='border-b border-b-white py-3 px-6 transition-all duration-200 ease-in xl:border-b-0 xl:p-0 group'
              >
                <Link
                  href={link.url}
                  target={link?.target && link.target}
                  className={`${trajanPro.className} block text-white text-lg group-hover:underline group-hover:underline-offset-8 group-hover:text-yellow lg:text-sm`}
                  onClick={() => setSideNavVisible(false)}
                >
                  {link?.subLinks ? (
                    <span className='flex items-start'>
                      {link.title} <IoMdArrowDropdown size={20} />
                    </span>
                  ) : (
                    link.title
                  )}
                </Link>

                {/* Sub links */}
                {link?.subLinks && renderSubLinks(link.subLinks)}
              </li>
            ))}
          </ul>
        </span>

        {/* Social Media */}
        <span className='hidden text-2xl gap-5 xl:inline-flex'>
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
