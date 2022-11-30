import {
  BluePricingTable,
  IndigoPricingTable,
  PricingTable,
  Dedicated_server_table,
} from "../../components/PricingTable";

export const VirtualPricing = () => {
  const plans = [
    {
      plan: "E5-2680-32	",
      color: "#9757D7",
      cpu: "2x Intel® E5-2680 2.70GHz( 16 cores, 32 threads )",
      ram: "32 GB DDR3",
      disk: "480 GB SSD	",
      bandwidth: "1Gbps (Unmetered)",
      location: "Canada",
      price: "109.99",
    },
    {
      plan: "E5-2680-64",
      color: "#FF592C",
      cpu: "2x Intel® E5-2680 2.70GHz ( 16 cores, 32 threads )",
      ram: "64 GB DDR3",
      disk: "480 GB SSD	",
      bandwidth: "1Gbps (Unmetered)",
      location: "Canada",
      price: "124.99",
    },
  ];
  return (
    <div className="h-full">
      <div className="max-w-5xl mx-auto" x-data="{ annual: true }">
        <h2 className="text-3xl text-gray-100 font-bold text-center mb-12">
          Plans
        </h2>

        <div className="grid gap-x-6 gap-y-10">
          <Dedicated_server_table plans={plans} />
          {/* <PricingTable
            plan="E5-2680-32"
            price="109.99"
            location="Canada"
            cpu="2x
            Intel® E5-2680 2.70GHz
            ( 16 cores, 32 threads )"
            ram="32 GB DDR3"
            ssd="480 GB SSD"
            bandwidth="1Gbps
            (Unmetered)"
          />

          <BluePricingTable
            plan="E5-2680-64"
            price="124.99"
            location="Canada"
            cpu="2x
            Intel® E5-2680 2.70GHz
            ( 16 cores, 32 threads )"
            ram="64 GB DDR3"
            ssd="480 GB SSD"
            bandwidth="1Gbps
            (Unmetered)"
          /> */}
        </div>
      </div>
    </div>
  );
};
