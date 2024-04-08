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
import { IoMdArrowDropdown } from 'react-icons/io';

const Navigation: React.FC = () => {
  const [sideNavVisible, setSideNavVisible] = useState(false);

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
                className='border-b border-b-white py-3 px-6 transition-all duration-200 ease-in xl:border-b-0 xl:p-0'
              >
                {link.subLinks ? (
                  <div className='group'>
                    <a
                      className={`${trajanPro.className} flex items-start text-white text-lg lg:text-sm cursor-pointer group-hover:text-yellow `}
                    >
                      {link.title} <IoMdArrowDropdown size={20} />
                    </a>

                    <ul className='hidden group-hover:block w-full bg-raven rounded-md text-white xl:absolute xl:w-fit xl:bg-opacity-85 xl:rounded-sm'>
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.title} className='w-full'>
                          <Link
                            href={subLink.url}
                            className={`${trajanPro.className} block px-6 py-2 text-sm xl:py-4 xl:hover:bg-black xl:hover:text-yellow`}
                            onClick={() => setSideNavVisible(false)}
                          >
                            {subLink.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={link.url}
                    target={link?.target && link.target}
                    className={`${trajanPro.className} block text-white text-lg lg:text-sm hover:text-yellow`}
                    onClick={() => setSideNavVisible(false)}
                  >
                    {link.title}
                  </Link>
                )}
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
