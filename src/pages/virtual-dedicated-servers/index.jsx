import Head from 'next/head';
import React from 'react';
import {
  BenefitsSection,
  ContactSection,
  HeroSection,
  OtherBenefits,
  Testimonials,
} from '../../collections';

const VDSPage = () => {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Virtual Dedicated Servers</title>
      </Head>
      <section className='container mx-auto my-[80px]'>
        <HeroSection
          header={'fully dedicated resources'}
          heading='Virtual Dedicated Servers'
          para={
            'Servers with fully dedicated resources, KVM virtualization and insane network speeds starting at $11.99/month'
          }
          imgSrc='/images/servers-tiny.png'
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

export default VDSPage;
