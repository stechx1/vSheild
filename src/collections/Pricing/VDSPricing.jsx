import {
  BluePricingTable,
  IndigoPricingTable,
  PricingTable,
} from '../../components/PricingTable';

export const VDSPricing = () => {
  return (
    <div className='h-full'>
      <div className='max-w-5xl mx-auto' x-data='{ annual: true }'>
        <h2 className='text-3xl text-gray-100 font-bold text-center mb-12'>
          VDS Plans
        </h2>
        {/* <div className='flex justify-center'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='text-sm text-gray-500 font-medium min-w-[120px] text-right'>
              Monthly
            </div>
            <div className='relative select-none w-[44px]'>
              <input
                type='checkbox'
                id='toggle'
                className='peer sr-only'
                x-model='annual'
              />
              <label
                className='block overflow-hidden cursor-pointer h-6 rounded-full bg-gray-400 peer-checked:bg-indigo-500'
                for='toggle'
              >
                <span
                  className='absolute block rounded-full w-5 h-5 top-0.5 left-0.5 right-1/2 bg-white shadow-sm transition-all duration-150 ease-out'
                  aria-hidden='true'
                ></span>
                <span className='sr-only'>Pay annually</span>
              </label>
            </div>
            <div className='text-sm text-gray-500 font-medium min-w-[120px]'>
              Annually <span className='text-green-500'>(-20%)</span>
            </div>
          </div>
        </div> */}
        <div className='grid grid-cols-12 gap-x-6 gap-y-10'>
          <PricingTable
            plan='Bronze'
            price='12.99'
            location='Europe | Canada'
            cpu='2x AMD® Ryzen 9 3900'
            ram='4 GB'
            ssd='40 GB'
            bandwidth='750Mbps (Unmetered)'
            color='yellow'
          />

          <BluePricingTable
            plan='Silver'
            price='24.99'
            location='Europe | Canada'
            cpu='4x AMD® Ryzen 9 3900'
            ram='8 GB'
            ssd='80 GB'
            bandwidth='750Mbps (Unmetered)'
          />
          <IndigoPricingTable
            plan='Gold'
            price='35.99'
            location='Europe | Canada'
            cpu='6x AMD® Ryzen 9 3900'
            ram='12 GB'
            ssd='120 GB'
            bandwidth='750Mbps (Unmetered)'
          />

          <BluePricingTable
            plan='Diamond'
            price='46.99'
            location='Europe | Canada'
            cpu='8x AMD® Ryzen 9 3900'
            ram='16 GB'
            ssd='160 GB'
            bandwidth='750Mbps (Unmetered)'
          />

          <PricingTable
            plan='Enterprise'
            price='57.99'
            location='Europe | Canada'
            cpu='10x AMD® Ryzen 9 3900'
            ram='20 GB'
            ssd='200 GB'
            bandwidth='750Mbps (Unmetered)'
          />

          {/* <div className='relative col-span-full md:col-span-4 bg-white shadow-md rounded-sm border border-gray-200'>
            <div
              className='absolute top-0 left-0 right-0 h-0.5 bg-blue-500'
              aria-hidden='true'
            ></div>
            <div className='px-5 pt-5 pb-6 border-b border-gray-200'>
              <header className='flex items-center mb-2'>
                <div className='w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-blue-500 to-blue-300 mr-3'>
                  <svg
                    className='w-6 h-6 fill-current text-white'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z' />
                  </svg>
                </div>
                <h3 className='text-lg text-gray-800 font-semibold'>
                  Standard
                </h3>
              </header>
              <div className='text-sm mb-2'>
                Ideal for individuals that need a custom solution with custom
                tools.
              </div>

              <div className='text-gray-800 font-bold mb-4'>
                <span className='text-2xl'>$</span>
                <span className='text-3xl' x-text="annual ? '34' : '39'">
                  34
                </span>
                <span className='text-gray-500 font-medium text-sm'>/mo</span>
              </div>

              <button
                className='font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out border-gray-200 focus:outline-none focus-visible:ring-2 bg-gray-100 text-gray-400 w-full cursor-not-allowed flex items-center'
                disabled
              >
                <svg
                  className='w-3 h-3 flex-shrink-0 fill-current mr-2'
                  viewBox='0 0 12 12'
                >
                  <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                </svg>
                <span>Current Plan</span>
              </button>
            </div>
            <div className='px-5 pt-4 pb-5'>
              <div className='text-xs text-gray-800 font-semibold uppercase mb-4'>
                What's included
              </div>

              <ul>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Lorem ipsum dolor sit amet</div>
                </li>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Quis nostrud exercitation</div>
                </li>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Lorem ipsum dolor sit amet</div>
                </li>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Quis nostrud exercitation</div>
                </li>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Lorem ipsum dolor sit amet</div>
                </li>
              </ul>
            </div>
          </div> */}

          {/* <div className='relative col-span-full md:col-span-4 bg-white shadow-md rounded-sm border border-gray-200'>
            <div
              className='absolute top-0 left-0 right-0 h-0.5 bg-indigo-500'
              aria-hidden='true'
            ></div>
            <div className='px-5 pt-5 pb-6 border-b border-gray-200'>
              <header className='flex items-center mb-2'>
                <div className='w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3'>
                  <svg
                    className='w-6 h-6 fill-current text-white'
                    viewBox='0 0 24 24'
                  >
                    <path d='M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z' />
                  </svg>
                </div>
                <h3 className='text-lg text-gray-800 font-semibold'>Plus</h3>
              </header>
              <div className='text-sm mb-2'>
                Ideal for individuals that need a custom solution with custom
                tools.
              </div>

              <div className='text-gray-800 font-bold mb-4'>
                <span className='text-2xl'>$</span>
                <span className='text-3xl' x-text="annual ? '74' : '79'">
                  74
                </span>
                <span className='text-gray-500 font-medium text-sm'>/mo</span>
              </div>
              <button className='font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white w-full'>
                Upgrade
              </button>
            </div>
            <div className='px-5 pt-4 pb-5'>
              <div className='text-xs text-gray-800 font-semibold uppercase mb-4'>
                Whats included
              </div>

              <ul>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Lorem ipsum dolor sit amet</div>
                </li>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Quis nostrud exercitation</div>
                </li>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Lorem ipsum dolor sit amet</div>
                </li>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Quis nostrud exercitation</div>
                </li>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Lorem ipsum dolor sit amet</div>
                </li>
                <li className='flex items-center py-1'>
                  <svg
                    className='w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2'
                    viewBox='0 0 12 12'
                  >
                    <path d='M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z' />
                  </svg>
                  <div className='text-sm'>Quis nostrud exercitation</div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};
