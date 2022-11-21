import Head from 'next/head';
import React from 'react';
import {
  BenefitsSection,
  ContactSection,
  HeroSection,
  OtherBenefits,
  Testimonials,
} from '../../collections';
import { VDSPricing } from '../../collections/Pricing';

const VDSPage = () => {
  const vdsBenefits = [
    {
      id: 1,
      icon: '/icons/high-performance-icon.svg',
      header: 'High Performance',
      para: "It's very important to us that each customers get their own dedicated resources. We think providing a non-overloaded environment is crucial.",
    },
    {
      id: 2,
      icon: '/icons/cloud-icon.svg',
      header: 'Stable',
      para: 'We offer a 99.9% uptime guarantee on all our services. Say goodbye to slow loading times and outages',
    },
    {
      id: 3,
      icon: '/icons/sheild-icon.svg',
      header: 'Safe & Secure',
      para: 'Here at vShield, privacy is guaranteed. Keep your environment in the safest hands, thanks to our internal security policies.',
    },
    {
      id: 4,
      icon: '/icons/instant-activation.svg',
      header: 'Instant Activation',
      para: 'vShield allows you to install a server on-the-go, anywhere, anytime. Servers are deployed in less than 2 minutes after payment.',
    },
    {
      id: 5,
      icon: '/icons/dedicated-support.svg',
      header: 'Dedicated Support',
      para: 'We have your back whenever you need our help. Our support is definitely incomparable to others.',
    },
    {
      id: 6,
      icon: '/icons/control-panel.svg',
      header: 'Control Panel',
      para: 'Here at vShield, privacy is guaranteed. Keep your environment in the safest hands, thanks to our internal security policies.',
    },
  ];
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

      <section>
        <VDSPricing />
      </section>

      <section className='my-[80px]'>
        <BenefitsSection benefitsList={vdsBenefits} />
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
