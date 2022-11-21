import {
  BluePricingTable,
  IndigoPricingTable,
  PricingTable,
} from '../../components/PricingTable';

export const VDSPricing = () => {
  return (
    <div className='h-full'>
      <div className='max-w-5xl mx-auto' x-data='{ annual: true }'>
        <h2 className='text-3xl text-gray-100 font-bold text-center mb-12'>
          VDS Plans
        </h2>
        <div className='grid grid-cols-12 gap-x-6 gap-y-10'>
          <PricingTable
            plan='Bronze'
            price='12.99'
            location='Europe | Canada'
            cpu='2x AMD® Ryzen 9 3900'
            ram='4 GB'
            ssd='40 GB'
            bandwidth='750Mbps (Unmetered)'
            color='yellow'
          />

          <BluePricingTable
            plan='Silver'
            price='24.99'
            location='Europe | Canada'
            cpu='4x AMD® Ryzen 9 3900'
            ram='8 GB'
            ssd='80 GB'
            bandwidth='750Mbps (Unmetered)'
          />
          <IndigoPricingTable
            plan='Gold'
            price='35.99'
            location='Europe | Canada'
            cpu='6x AMD® Ryzen 9 3900'
            ram='12 GB'
            ssd='120 GB'
            bandwidth='750Mbps (Unmetered)'
          />

          <BluePricingTable
            plan='Diamond'
            price='46.99'
            location='Europe | Canada'
            cpu='8x AMD® Ryzen 9 3900'
            ram='16 GB'
            ssd='160 GB'
            bandwidth='750Mbps (Unmetered)'
          />

          <PricingTable
            plan='Enterprise'
            price='57.99'
            location='Europe | Canada'
            cpu='10x AMD® Ryzen 9 3900'
            ram='20 GB'
            ssd='200 GB'
            bandwidth='750Mbps (Unmetered)'
          />
        </div>
      </div>
    </div>
  );
};
