/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { Button, Navbar } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VSheild - The Safest way to surf the web</title>
        <meta name='description' content='The Safest way to surf the web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='container mx-auto'></div>
    </div>
  );
}
