import { Product } from './Product/Product';

export const OurProducts = () => {
  const vdsList = [
    {
      id: 1,
      point: 'Custom server management panel',
    },
    {
      id: 2,
      point: 'Multiple operating system available',
    },
    {
      id: 3,
      point: 'Anti-DDos included in some of our plans',
    },
  ];

  const webList = [
    {
      id: 1,
      point: 'Layer 4 + Layer 7 Protection',
    },
    {
      id: 2,
      point: 'cPanel panel',
    },
    {
      id: 3,
      point: 'Unmetered bandwidth',
    },
  ];

  const ddsList = [
    {
      id: 1,
      point: 'Deployed within 24-hours',
    },
    {
      id: 2,
      point: 'Multiple Operating Systems available',
    },
  ];

  const vpnList = [
    {
      id: 1,
      point: 'Multiple Locations',
    },
    {
      id: 2,
      point: 'Anti-DDos available on most locations',
    },
  ];
  return (
    <div>
      <div className='flex flex-col items-center '>
        <h2 className='text-4xl font-bold mb-8'>Our Products</h2>
      </div>
      <Product
        heading='Virtual Dedicated Servers'
        para='Servers with fully dedicated resources, KVM virtualization and insane
          network speeds'
        list={vdsList}
        imgSrc='/images/virtual-dedicated.svg'
      />

      <Product
        heading='Web Hosting'
        para='The best DDoS protection & hosting for your website. Need protection for big attacks? We are here for you.'
        list={webList}
        imgSrc='/images/cloud.png'
        reverse
      />

      <Product
        heading='Dedicated Servers'
        para='Bare Metal dedicated servers hosted in a tier-3 datacenter with a 100% SLA guarantee & incredibly fast network.'
        list={ddsList}
        imgSrc='/images/cloud-server.svg'
      />

      <Product
        heading='VPN'
        para='vShield is finally bringing back its VPN service to life.
        ETA: Q3 2022'
        list={vpnList} reverse
        imgSrc='/images/vpn.svg'
      />
    </div>
  );
};
