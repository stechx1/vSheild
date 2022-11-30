/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import {
  HeroSection,
  BenefitsSection,
  OurProducts,
  LocationSection,
  OtherBenefits,
  Testimonials,
  ContactSection,
} from '../collections';
import { HeroSlider } from '../collections/HeroSlider';

const benefitsList = [
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
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>VSheild - The Safest way to surf the web</title>
        <meta name='description' content='The Safest way to surf the web' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container px-8 mx-auto font-mont'>
        <HeroSlider />

        {/* <section className='my-[80px]'>
          <SocialBanner />
        </section> */}

        <section className='my-[80px]'>
          <BenefitsSection benefitsList={benefitsList} />
        </section>

        <section className='my-[120px] lg:px-16'>
          <OurProducts />
        </section>

        <section className='my-[80px]'>
          <LocationSection />
        </section>

        <section>
          <Testimonials />
        </section>

        <section className='my-[80px]'>
          <OtherBenefits />
        </section>

        <section className='my-[80px]'>
          <ContactSection />
        </section>
      </div>
    </div>
  );
}
