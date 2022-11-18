import Head from 'next/head';
import React from 'react';
import {
  BenefitsSection,
  ContactSection,
  HeroSection,
  OtherBenefits,
  Testimonials,
} from '../../collections';

const WebHostingPage = () => {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>VSheild - Web Hosting</title>
      </Head>
      <section>
        <HeroSection
          header={'fully dedicated resources'}
          heading='Managed Web Hosting'
          para={
            'The best DDoS protection & hosting for your website,starting at only $6.99 per month.'
          }
          imgSrc='/images/cloud.svg'
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

export default WebHostingPage;
