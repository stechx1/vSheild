import Slider from 'react-slick';
import { HeroSection } from '../HeroSection';

export const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='md:my-20'>
      <Slider {...settings}>
        <div>
          <HeroSection
            header={'fully dedicated resources'}
            heading='Virtual Dedicated Servers'
            para={
              'Servers with fully dedicated resources, KVM virtualization and insane network speeds starting at $11.99/month'
            }
            imgSrc='/images/servers-tiny.png'
          />
        </div>
        <div>
          <HeroSection
            header={'fully dedicated resources'}
            heading='Managed Web Hosting'
            para={
              'The best DDoS protection & hosting for your website,starting at only $6.99 per month.'
            }
            imgSrc='/images/cloud.svg'
          />
        </div>
        <div>
          <HeroSection
            header={'fully dedicated resources'}
            heading='Dedicated Servers'
            para={
              'Dedicated servers hosted in our own location. Custom hardware & optimized by vShield. We recommend this range for very intensive tasks. Starting at only $12.99 per month'
            }
            imgSrc='/images/cloud-server.svg'
          />
        </div>
      </Slider>
    </div>
  );
};
