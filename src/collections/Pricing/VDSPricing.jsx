import {
  BluePricingTable,
  IndigoPricingTable,
  PricingTable,
} from '../../components/PricingTable';

export const VDSPricing = () => {
  return (
    <div className='h-full'>
      <div className='max-w-5xl mx-auto' x-data='{ annual: true }'>
        <h2 className='text-3xl text-gray-100 font-bold text-center my-2'>
          VDS Pro Plans
        </h2>
        <p className='text-center max-w-[800px] mx-auto mt-2 mb-10'>
          Our VDS-Pro plans can fit most of your flexible needs. You will
          finally be able to achieve your biggest tasks with these plans, they
          are our most powerful plans. Currently only available on Windows
          Server 2019.
        </p>
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

        <h2 className='text-3xl text-gray-100 font-bold text-center mt-[120px]'>
          VDS Plans
        </h2>
        <p className='text-center max-w-[800px] mx-auto mt-2 mb-10'>
          This range includes the highest single thread performance and the best
          Anti-DDoS. We have been offering this range since vShield was born in
          2017. Available on Windows Server 2019, Debian 10, CentOS Stream 9 and
          Ubuntu 20.04.
        </p>
        <div className='grid grid-cols-12 gap-x-6 gap-y-10'>
          <PricingTable
            plan='VDS-1'
            price='13.99'
            location='France | Canada'
            cpu='2x Intel® I7 6700k'
            ram='6 GB'
            ssd='40 GB'
            bandwidth='500Mbps
            (Unmetered)'
            color='yellow'
          />

          <BluePricingTable
            plan='VDS-2'
            price='21.99'
            location='France | Canada'
            cpu='3x Intel® I7 6700k'
            ram='8 GB'
            ssd='50 GB'
            bandwidth='500Mbps
            (Unmetered)'
          />
          <IndigoPricingTable
            plan='VDS-3'
            price='30.99'
            location='France | Canada'
            cpu='4x Intel® I7 6700k'
            ram='10 GB'
            ssd='60 GB'
            bandwidth='500Mbps
            (Unmetered)'
          />
        </div>

        <h2 className='text-3xl text-gray-100 font-bold text-center mt-[120px]'>
          VPS Plans
        </h2>
        <p className='text-center max-w-[800px] mx-auto mt-2 mb-10'>
          This range offers the best price/performance ratio, they are our
          cheapest plans. Available on Windows Server 2019, Debian 10, CentOS
          Stream 9 and Ubuntu 20.04.
        </p>
        <div className='grid grid-cols-12 gap-x-6 gap-y-10'>
          <PricingTable
            plan='VPS-S'
            price='11.99'
            location='USA | Canada | UK'
            cpu='4x Intel® Xeon Silver 4214'
            ram='4 GB'
            ssd='40 GB'
            bandwidth='750Mbps
            (Unmetered)'
          />

          <BluePricingTable
            plan='VPS-M'
            price='19.99'
            location='USA | Canada | UK'
            cpu='6x Intel® Xeon Silver 4214'
            ram='6 GB'
            ssd='60 GB'
            bandwidth='750Mbps
            (Unmetered)'
          />
          <IndigoPricingTable
            plan='VPS-L'
            price='27.99'
            location='USA | Canada | UK'
            cpu='8x Intel® Xeon Silver 4214'
            ram='8 GB'
            ssd='80 GB'
            bandwidth='750Mbps
            (Unmetered)'
          />
          <PricingTable
            plan='VPS-XL'
            price='35.99'
            location='USA | Canada | UK'
            cpu='10x Intel® Xeon Silver 4214'
            ram='10 GB'
            ssd='100 GB'
            bandwidth='750Mbps
            (Unmetered)'
          />
        </div>
      </div>
    </div>
  );
};
