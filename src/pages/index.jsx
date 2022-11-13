/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import {
  HeroSection,
  SocialBanner,
  BenefitsSection,
  OurProducts,
  LocationSection,
} from '../collections';
import { Button, Footer, Navbar } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VSheild - The Safest way to surf the web</title>
        <meta name='description' content='The Safest way to surf the web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container px-8 mx-auto font-mont'>
        <HeroSection
          header={'fully dedicated resources'}
          heading='Virtual Dedicated Servers'
          para={
            'Servers with fully dedicated resources, KVM virtualization and insane network speeds starting at $11.99/month'
          }
          imgSrc='/images/servers-tiny.png'
        />
        <section className='my-[80px]'>
          <SocialBanner />
        </section>

        <section className='my-[80px]'>
          <BenefitsSection />
        </section>

        <section className='my-[120px]'>
          <OurProducts />
        </section>

        <section className='my-[120px]'>
          <LocationSection />
        </section>
      </div>
    </div>
  );
}
