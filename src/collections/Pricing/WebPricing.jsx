import {
  BluePricingTable,
  IndigoPricingTable,
  PricingTable,
} from '../../components/PricingTable';

export const WebPricing = () => {
  const firewallList = [
    {
      id: 1,
      feature: '1 Domain',
    },
    {
      id: 2,
      feature: 'Unmetered Bandwidth',
    },
    {
      id: 3,
      feature: 'Unlimited Requests',
    },
    {
      id: 4,
      feature: '10Gbps Network Speed',
    },
  ];

  const websiteList = [
    {
      id: 1,
      feature: '1 Domain',
    },
    {
      id: 2,
      feature: '1 GB SSD Storage',
    },
    {
      id: 3,
      feature: 'Unmetered Bandwidth',
    },
    {
      id: 4,
      feature: '10Gbps Network Speed',
    },
    {
      id: 5,
      feature: 'Unlimited Databases',
    },
    {
      id: 6,
      feature: 'Unlimited FTP users',
    },
    {
      id: 7,
      feature: 'Unlimited Sub-Domains',
    },
  ];

  const premiumList = [
    {
      id: 1,
      feature: '1 Domain',
    },
    {
      id: 2,
      feature: '25 GB SSD Storage',
    },
    {
      id: 3,
      feature: 'Unmetered Bandwidth',
    },
    {
      id: 4,
      feature: '10Gbps Network Speed',
    },
    {
      id: 5,
      feature: 'Unlimited Databases',
    },
    {
      id: 6,
      feature: 'Unlimited FTP users',
    },
    {
      id: 7,
      feature: 'Unlimited Sub-Domains',
    },
  ];
  return (
    <div className='h-full'>
      <div className='max-w-5xl mx-auto' x-data='{ annual: true }'>
        <h2 className='text-3xl text-gray-100 font-bold text-center mb-12'>
          Plans
        </h2>
        <div className='grid grid-cols-12 gap-x-6 gap-y-10'>
          <PricingTable
            plan='Firewall Only'
            para='You have your own server?
            No problem!'
            price='6.99'
            location='Europe | Canada'
            cpu='2x AMD® Ryzen 9 3900'
            ram='4 GB'
            ssd='40 GB'
            bandwidth='750Mbps (Unmetered)'
            list={firewallList}
          />

          <BluePricingTable
            plan='Website Only'
            para='Perfect for small Website'
            price='9.99'
            location='Europe | Canada'
            cpu='4x AMD® Ryzen 9 3900'
            ram='8 GB'
            ssd='80 GB'
            bandwidth='750Mbps (Unmetered)'
            list={websiteList}
          />
          <IndigoPricingTable
            plan='Premium Package'
            para='Complete Web Hosting + Firewall'
            price='14.99'
            location='Europe | Canada'
            cpu='6x AMD® Ryzen 9 3900'
            ram='12 GB'
            ssd='120 GB'
            bandwidth='750Mbps (Unmetered)'
            list={premiumList}
          />
        </div>
      </div>
    </div>
  );
};
