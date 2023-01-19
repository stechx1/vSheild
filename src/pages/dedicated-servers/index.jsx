import Head from 'next/head';
import React from 'react';
import {
  BenefitsSection,
  ContactSection,
  HeroSection,
  OtherBenefits,
  Testimonials,
} from '../../collections';
import { VirtualPricing } from '../../collections/Pricing/VirtualPricing';

const DedicatedServersPage = () => {
  const dedicatedBenefits = [
    {
      id: 1,
      icon: '/icons/new/high-performance.svg',
      header: 'Unlimited Bandwidth',
      para: 'All our dedicated server plans include unlimited bandwidth. We can upgrade your port to 10Gbps for a small fee.',
    },
    {
      id: 2,
      icon: '/icons/new/dedicated.svg',
      header: 'Dedicated',
      para: 'Resources are not shared, you are the only user on the server. You can use it as you wish.',
    },
    {
      id: 3,
      icon: '/icons/new/fees.svg',
      header: 'No Setup Fees',
      para: 'We charge no setup fee on any of our dedicated server offers. We believe in fair pricing.',
    },
  ];

  const vdsBenefits = [
    {
      id: 1,
      icon: '/icons/new/high-performance.svg',
      header: 'High Performance',
      para: "It's very important to us that each customers get their own dedicated resources. We think providing a non-overloaded environment is crucial.",
    },
    {
      id: 2,
      icon: '/icons/new/cloud.svg',
      header: 'Stable',
      para: 'We offer a 99.9% uptime guarantee on all our services. Say goodbye to slow loading times and outages',
    },
    {
      id: 3,
      icon: '/icons/new/sheild.svg',
      header: 'Safe & Secure',
      para: 'Here at vShield, privacy is guaranteed. Keep your environment in the safest hands, thanks to our internal security policies.',
    },
    {
      id: 4,
      icon: '/icons/new/flash.svg',
      header: 'Instant Activation',
      para: 'vShield allows you to install a server on-the-go, anywhere, anytime. Servers are deployed in less than 2 minutes after payment.',
    },
    {
      id: 5,
      icon: '/icons/new/mail.svg',
      header: 'Dedicated Support',
      para: 'We have your back whenever you need our help. Our support is definitely incomparable to others.',
    },
    {
      id: 6,
      icon: '/icons/new/settings.svg',
      header: 'Control Panel',
      para: 'Here at vShield, privacy is guaranteed. Keep your environment in the safest hands, thanks to our internal security policies.',
    },
  ];
  return (
    <div>
      <Head>
        <title>VSheild - Web Hosting</title>
      </Head>
      <div className='container px-8 mx-auto font-mont'>
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
          <BenefitsSection benefitsList={dedicatedBenefits} />
        </section>

        <section className='my-[80px]'>
          <VirtualPricing />
        </section>

        <section>
          <BenefitsSection
            heading={'Other Benefits You ll get'}
            delSubHeading
            benefitsList={vdsBenefits}
          />
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
    </div>
  );
};

export default DedicatedServersPage;
