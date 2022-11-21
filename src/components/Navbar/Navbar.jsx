/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Button } from '../Button';
import { MobileNavButton } from './MobileNavButton/MobileNavButton';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown } from '../Dropdown';

export const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  return (
    <nav className='py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='h-16'>
          <div className='flex items-center justify-between'>
            <Link href={'/'}>
              <div className='flex-shrink-0'>
                <img src='/icons/vSheild-logo.png' alt='vsheild' />
              </div>
            </Link>
            <div className='flex justify-between'>
              <div className='hidden md:block'>
                <div className='flex items-baseline space-x-4'>
                  <Link href='/'>
                    <p className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Home
                    </p>
                  </Link>

                  <Dropdown color='white' />

                  <Link href={'/support'}>
                    <p className='text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Support
                    </p>
                  </Link>

                  <Link href={'https://api.vshield.pro/documentation/'}>
                    <p className='text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      API
                    </p>
                  </Link>

                  <Link href={'https://status.vshield.pro/en/'}>
                    <p className='text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      Status
                    </p>
                  </Link>

                  <Link href={'https://help.vshield.pro/en/'}>
                    <p className='text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                      FAQs
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <MobileNavButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='hidden md:block'>
              <Button
                onClick={() => router.push('https://cp.vshield.pro/login')}
                type='secondary'
                size={'small'}
              >
                Customer Panel
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter='transition ease-out duration-100 transform'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='transition ease-in duration-75 transform'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        {(ref) => (
          <div className='md:hidden' id='mobile-menu'>
            <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <Link
                href='/'
                className='hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Home
              </Link>

              <Dropdown color={'white'} />

              <Link
                href='/support'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Support
              </Link>

              <Link
                href="https://api.vshield.pro/documentation/"
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                API
              </Link>

              <Link
                href='https://status.vshield.pro/en/'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                Status
              </Link>

              <Link
                href='#https://help.vshield.pro/en/'
                className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
              >
                FAQs
              </Link>

              <Button
                onClick={() => router.push('https://cp.vshield.pro/login')}
                type='secondary'
                size={'small'}
              >
                Customer Panel
              </Button>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};
