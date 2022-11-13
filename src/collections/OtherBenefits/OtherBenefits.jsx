import { Button } from '../../components';

/* eslint-disable @next/next/no-img-element */
export const OtherBenefits = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col space-y-4'>
        <h2 className='text-3xl'>Other benefits of using VSheild</h2>
        <p>
          A paragraph about what are other benefits of Vsheild this section
          would remind customers about the benefits they would get
        </p>
        <ul className='space-y-2'>
          <li className='flex space-x-4'>
            <img src='/icons/check.svg' alt='check' />
            <p>Cloud</p>
          </li>
          <li className='flex space-x-4'>
            <img src='/icons/check.svg' alt='check' />
            <p>Syncs with Google Fit</p>
          </li>
          <li className='flex space-x-4'>
            <img src='/icons/check.svg' alt='check' />
            <p>Syncs with Apple Health</p>
          </li>
          <li className='flex space-x-4'>
            <img src='/icons/check.svg' alt='check' />
            <p>Track your progress easily</p>
          </li>
          <li className='flex space-x-4'>
            <img src='/icons/check.svg' alt='check' />
            <p>Intuitive and clean design</p>
          </li>
        </ul>
        <div className='flex space-x-3 mt-2'>
          <Button size={'small'}>Choose Plan</Button>
          <Button size={'small'} type='secondary'>
            Contact Us
          </Button>
        </div>
      </div>
      <img
        className='max-w-[400px] lg:max-w-[600px]'
        src='/images/other-benefits.svg'
        alt='other'
      />
    </div>
  );
};
