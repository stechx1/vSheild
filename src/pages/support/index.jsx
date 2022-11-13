/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { Button } from '../../components';

const Support = () => {
  return (
    <>
    <Head>
      <title>Support</title>
    </Head>
    <div className='container mx-auto flex flex-col justify-center items-center'>
      <h1 className='text-6xl'>Support</h1>
      <div className='my-[80px] grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-4'>
        {/* Discord */}
        <div className='flex flex-col space-y-2 justify-center items-center'>
          <img src='/icons/discord.png' alt='discord' width={200} />
          <h2 className='text-2xl font-bold'>Discord</h2>
          <p className='text-center'>
            Join our official Discord Server to keep up to date with vShield and
            extra support.
          </p>
          <Button size={'small'}>Join Now</Button>
        </div>
        {/* Discord Ends */}

        {/* Live Chat */}
        <div className='flex flex-col space-y-2 justify-center items-center'>
          <img src='/icons/live-chat.svg' alt='discord' width={200} />
          <h2 className='text-2xl font-bold'>Discord</h2>
          <p className='text-center'>
            Join our official Discord Server to keep up to date with vShield and
            extra support.
          </p>
          <Button size={'small'}>Join Now</Button>
        </div>
        {/* Live Chat Ends */}

        <div className='flex flex-col space-y-2 justify-center items-center'>
          <img src='/icons/file.svg' alt='discord' width={200} />
          <h2 className='text-2xl font-bold'>Discord</h2>
          <p className='text-center'>
            Join our official Discord Server to keep up to date with vShield and
            extra support.
          </p>
          <Button size={'small'}>Join Now</Button>
        </div>

        <div className='flex flex-col space-y-2 justify-center items-center'>
          <img src='/icons/ticket.svg' alt='discord' width={200} />
          <h2 className='text-2xl font-bold'>Discord</h2>
          <p className='text-center'>
            Join our official Discord Server to keep up to date with vShield and
            extra support.
          </p>
          <Button size={'small'}>Join Now</Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Support;
