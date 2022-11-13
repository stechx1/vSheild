import { useRouter } from 'next/router';
import { Button } from '../../components';

export const ContactSection = () => {
  const router = useRouter();
  return (
    <>
      <hr className='my-6 sm:mx-auto border-gray-700 lg:my-8' />
      <div className='mt-14 flex flex-col space-y-5 justify-center items-center'>
        <h3 className='uppercase font-bold text-gray-400'>Contact Us</h3>
        <h3 className='text-3xl'>Looking for a custom solution?</h3>
        <p className='font-light text-sm text-gray-300 max-w-[600px] text-center'>
          Need something more powerful? We can help you! Our experts can provide
          you exactly what you need at the best price, this is our promise.
        </p>
        <Button onClick={() => router.push('/support')}>Contact Us</Button>
      </div>
    </>
  );
};
