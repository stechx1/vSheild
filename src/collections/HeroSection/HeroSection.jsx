import { useRouter } from 'next/router';
import { Button } from '../../components';

/* eslint-disable @next/next/no-img-element */
export const HeroSection = ({ header, heading, para, imgSrc }) => {
  const router = useRouter();
  return (
    <div className='flex flex-col space-y-8 md:flex-row justify-center items-center'>
      <div className='max-w-[600px] space-y-8'>
        <div>
          <h3 className='uppercase font-bold text-gray-400'>{header}</h3>
          <h1 className='text-4xl md:text-6xl font-bold'>{heading}</h1>
        </div>
        <p className='text-gray-300'>{para}</p>
        <div className='flex space-x-4 mt-4'>
          <Button
            onClick={() => router.push('https://cp.vshield.pro/register')}
          >
            Order Now
          </Button>
          <Button onClick={() => router.push('/support')} type='secondary'>
            Contact Us
          </Button>
        </div>
      </div>
      <div>
        <img
          src={imgSrc}
          alt={`${heading} image`}
          className='w-[300px] md:w-[500px]'
        />
      </div>
    </div>
  );
};
