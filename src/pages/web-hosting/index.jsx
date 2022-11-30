import Head from 'next/head';
import React from 'react';
import {
  BenefitsSection,
  ContactSection,
  HeroSection,
  OtherBenefits,
  Testimonials,
} from '../../collections';
import { WebPricing } from '../../collections/Pricing';

const WebHostingPage = () => {
  const webHostingBenefits = [
    {
      id: 1,
      icon: '/icons/new/high-performance.svg',
      header: 'Incredibly Fast',
      para: 'Our WebHosting range uses exclusively high-end Ryzen nodes with NVME disks. vShield nodes are optimized & tweaked to offer the best possible performance.',
    },
    {
      id: 2,
      icon: '/icons/new/cloud.svg',
      header: 'Unlimited Bandwidth',
      para: 'We offer a 99.9% uptime guarantee on all our services. Say goodbye to slow loading times and outages',
    },
    {
      id: 3,
      icon: '/icons/new/sheild.svg',
      header: 'HQ Anti-DDos',
      para: "With vShield's anti-ddos, attacks will become a problem of the past. Our advanced system will be able to catch & block attacks in real-time.",
    },
  ];
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
        <BenefitsSection benefitsList={webHostingBenefits} />
      </section>

      <section className='my-[80px]'>
        <WebPricing />
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
