import {
  VDS_Pricing_table,
  VDS_Pricing_table2,
  VDS_Pricing_table3,
} from '../../components/PricingTable';

export const VDSPricing = () => {
  const VDS_proPlans = [
    {
      Plan: 'Bronze',
      color: '#9757D7',
      CPUvCores: '2x AMD® Ryzen 9 3900',
      RAMDDR4: '4 GB',
      SSDNVMeStorage: '40 GB',
      Bandwidth: '750Mbps(Unmetered)',
      Location: 'Europe Canada',
      Price: '12.99',
    },

    {
      Plan: 'Silver',
      color: '#FF592C',
      CPUvCores: '4x AMD® Ryzen 9 3900',
      RAMDDR4: '8 GB',
      SSDNVMeStorage: '80 GB',
      Bandwidth: '750Mbps(Unmetered)',
      Location: 'Europe Canada',
      Price: '24.99',
    },

    {
      Plan: 'Gold',
      color: '#EF466F',
      CPUvCores: '6x AMD® Ryzen 9 3900',
      RAMDDR4: '12 GB',
      SSDNVMeStorage: '120 GB',
      Bandwidth: '750Mbps(Unmetered)',
      Location: 'Europe Canada',
      Price: '35.99',
    },

    {
      Plan: 'Diamond',
      color: '#219653',
      CPUvCores: '8x AMD® Ryzen 9 3900',
      RAMDDR4: '16 GB',
      SSDNVMeStorage: '160 GB',
      Bandwidth: '750Mbps(Unmetered)',
      Location: 'Europe Canada',
      Price: '46.99',
    },

    {
      Plan: 'Enterprise',
      color: '#F2C94C',
      CPUvCores: '10x AMD® Ryzen 9 3900',
      RAMDDR4: '20 GB',
      SSDNVMeStorage: '200 GB',
      Bandwidth: '750Mbps(Unmetered)',
      Location: 'Europe Canada',
      Price: '57.99',
    },
  ];

  const VDS_Plans1 = [
    {
      Plan: 'VDS-1',
      color: '#9757D7',
      CPUvCores: '2x Intel® I7 6700k',
      RAMDDR3: '6 GB',
      SSDStorage: '40 GB',
      Bandwidth: '500Mbps(Unmetered)',
      Location: 'France Canada',
      Price: '13.99',
    },

    {
      Plan: 'VDS-2',
      color: '#FF592C',
      CPUvCores: '3x Intel® I7 6700k',
      RAMDDR3: '8 GB',
      SSDStorage: '50 GB',
      Bandwidth: '500Mbps(Unmetered)',
      Location: 'France Canada',
      Price: '21.99',
    },

    {
      Plan: 'VDS-3',
      color: '#EF466F',
      CPUvCores: '4x Intel® I7 6700k',
      RAMDDR3: '10 GB',
      SSDStorage: '60 GB',
      Bandwidth: '500Mbps(Unmetered)',
      Location: 'France Canada',
      Price: '30.99',
    },
  ];

  const VDS_Plans2 = [
    {
      Plan: 'VPS-S',
      color: '#9757D7',
      CPUvCores: '4x Intel® Xeon Silver 4214',
      RAMDDR4: '4 GB',
      SSDStorage: '40 GB',
      Bandwidth: '750Mbps(Unmetered)',
      Location: 'USA Canada UK',
      Price: '11.99',
    },

    {
      Plan: 'VPS-M',
      color: '#FF592C',
      CPUvCores: '6x Intel® Xeon Silver 4214',
      RAMDDR4: '6 GB',
      SSDStorage: '60 GB',
      Bandwidth: '750Mbps(Unmetered)',
      Location: 'USA Canada UK',
      Price: '19.99',
    },

    {
      Plan: 'VPS-L',
      color: '#EF466F',
      CPUvCores: '8x Intel® Xeon Silver 4214',
      RAMDDR4: '8 GB',
      SSDStorage: '80 GB',
      Bandwidth: '750Mbps(Unmetered)',
      Location: 'USA Canada UK',
      Price: '27.99',
    },

    {
      Plan: 'VPS-XL',
      color: '#219653',
      CPUvCores: '10x Intel® Xeon Silver 4214',
      RAMDDR4: '10 GB',
      SSDStorage: '100 GB',
      Bandwidth: '750Mbps(Unmetered)',
      Location: 'USA Canada UK',
      Price: '35.99',
    },
  ];

  return (
    <div className='h-full'>
      <div className='' x-data='{ annual: true }'>
        <div className='mx-auto'>
          <h2 className='text-3xl text-gray-100 font-bold text-center my-2'>
            VDS Pro Plans
          </h2>
          <p className='text-center max-w-[800px] mx-auto mt-2 mb-10'>
            Our VDS-Pro plans can fit most of your flexible needs. You will
            finally be able to achieve your biggest tasks with these plans, they
            are our most powerful plans. Currently only available on Windows
            Server 2019.
          </p>
        </div>
        <div className='grid gap-x-6 gap-y-10'>
          <VDS_Pricing_table plans={VDS_proPlans} />
        </div>

        <div className='max-auto'>
          <h2 className='text-3xl text-gray-100 font-bold text-center mt-[120px]'>
            VDS Plans
          </h2>
          <p className='text-center max-w-[800px] mx-auto mt-2 mb-10'>
            This range includes the highest single thread performance and the
            best Anti-DDoS. We have been offering this range since vShield was
            born in 2017. Available on Windows Server 2019, Debian 10, CentOS
            Stream 9 and Ubuntu 20.04.
          </p>
        </div>
        <div className='grid gap-x-6 gap-y-10'>
          <VDS_Pricing_table2 plans={VDS_Plans1} />
        </div>

        <div className='mx-auto'>
          <h2 className='text-3xl text-gray-100 font-bold text-center mt-[120px]'>
            VPS Plans
          </h2>
          <p className='text-center max-w-[800px] mx-auto mt-2 mb-10'>
            This range offers the best price/performance ratio, they are our
            cheapest plans. Available on Windows Server 2019, Debian 10, CentOS
            Stream 9 and Ubuntu 20.04.
          </p>
        </div>
        <div className='grid gap-x-6 gap-y-10'>
          <VDS_Pricing_table3 plans={VDS_Plans2} />
        </div>
      </div>
    </div>
  );
};
