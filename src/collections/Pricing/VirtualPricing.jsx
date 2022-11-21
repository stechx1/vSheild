import {
  BluePricingTable,
  IndigoPricingTable,
  PricingTable,
} from '../../components/PricingTable';

export const VirtualPricing = () => {
  return (
    <div className='h-full'>
      <div className='max-w-5xl mx-auto' x-data='{ annual: true }'>
        <h2 className='text-3xl text-gray-100 font-bold text-center mb-12'>
          Plans
        </h2>

        <div className='grid grid-cols-12 gap-x-6 gap-y-10'>
          <PricingTable
            plan='E5-2680-32'
            price='109.99'
            location='Canada'
            cpu='2x
            Intel® E5-2680 2.70GHz
            ( 16 cores, 32 threads )'
            ram='32 GB DDR3'
            ssd='480 GB SSD'
            bandwidth='1Gbps
            (Unmetered)'
          />

          <BluePricingTable
            plan='E5-2680-64'
            price='124.99'
            location='Canada'
            cpu='2x
            Intel® E5-2680 2.70GHz
            ( 16 cores, 32 threads )'
            ram='64 GB DDR3'
            ssd='480 GB SSD'
            bandwidth='1Gbps
            (Unmetered)'
          />
        </div>
      </div>
    </div>
  );
};
