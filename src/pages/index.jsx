/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { HeroSection } from '../collections';
import { Button, Footer, Navbar } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VSheild - The Safest way to surf the web</title>
        <meta name='description' content='The Safest way to surf the web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <div className='container mx-auto'>
        <HeroSection
          header={'fully dedicated resources'}
          heading='Virtual Dedicated Servers'
          para={
            'Servers with fully dedicated resources, KVM virtualization and insane network speeds starting at $11.99/month'
          }
          imgSrc='/images/servers-tiny.png'
        />
      </div>
      <Footer />
    </div>
  );
}
