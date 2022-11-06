import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VSheild - The Safest way to surf the web</title>
        <meta name='description' content='The Safest way to surf the web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container mx-auto'>
        <p className='text-2xl'>Hi there</p>
      </div>
    </div>
  );
}
