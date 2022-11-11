import { Button } from '../../components';

/* eslint-disable @next/next/no-img-element */
export const HeroSection = ({ header, heading, para, imgSrc }) => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <div className='max-w-[600px] space-y-6'>
        <div>
          <h3 className='uppercase font-bold text-gray-400'>
            Fully dedicated resources
          </h3>
          <h1 className='text-6xl'>Virtual Dedicated Servers</h1>
        </div>
        <p className='text-gray-300'>
          Servers with fully dedicated resources, KVM virtualization and insane
          network speeds starting at $11.99/month
        </p>
        <div className='flex space-x-4 mt-4'>
          <Button>Order Now</Button>
          <Button type='secondary'>Contact Us</Button>
        </div>
      </div>
      <div>
        <img src='/images/servers-tiny.png' alt='servers' width={600} />
      </div>
    </div>
  );
};
