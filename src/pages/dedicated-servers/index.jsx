import Head from 'next/head';
import React from 'react';
import {
  BenefitsSection,
  ContactSection,
  HeroSection,
  OtherBenefits,
  Testimonials,
} from '../../collections';

const DedicatedServersPage = () => {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>VSheild - Web Hosting</title>
      </Head>
      <section>
        <HeroSection
          header={'fully dedicated resources'}
          heading='Dedicated Servers'
          para={
            'Dedicated servers hosted in our own location. Custom hardware & optimized by vShield. We recommend this range for very intensive tasks. Starting at only $12.99 per month'
          }
          imgSrc='/images/cloud-server.svg'
        />
      </section>

      <section className='my-[80px]'>
        <BenefitsSection />
      </section>

      <section className='my-[80px]'>
        <OtherBenefits />
      </section>

      <section className='my-[80px]'>
        <Testimonials />
      </section>

      <section className='my-[80px]'>
        <ContactSection />
      </section>
    </div>
  );
};

export default DedicatedServersPage;
