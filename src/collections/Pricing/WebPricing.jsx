import {
  BluePricingTable,
  IndigoPricingTable,
  PricingTable,
  Web_Hosting_Table,
} from "../../components/PricingTable";

export const WebPricing = () => {
  const plans = [
    {
      plan: "Firewall Only",
      domain: "1 Domain",
      bandwidth: "Unmetered",
      request: "Unlimited",
      speed: "10Gbps Network Speed",
      SSDStorage: "-",
      DB: "-",
      ftp: "-",
      subDomain: "-",
      uam: "Custom UAM available for an additional $4.99/month",
      price: "$6.99",
    },
    {
      plan: "Website Only",
      domain: "1 Domain",
      bandwidth: "Unmetered",
      request: "-",
      speed: "10Gbps Network Speed",
      SSDStorage: "1 GB SSD Storage",
      DB: "Unlimited",
      ftp: "Unlimited",
      subDomain: "Unlimited",
      uam: "-",
      price: "$9.99",
    },
    {
      plan: "Premium Package",
      domain: "1 Domain",
      bandwidth: "Unmetered",
      request: "-",
      speed: "10Gbps Network Speed",
      SSDStorage: "25 GB SSD Storage",
      DB: "Unlimited",
      ftp: "Unlimited",
      subDomain: "Unlimited",
      uam: "Custom UAM available for an additional $4.99/month",
      price: "$14.99",
    },
  ];

  return (
    <div className="h-full">
      <div className="max-w-5xl mx-auto" x-data="{ annual: true }">
        <h2 className="text-3xl text-gray-100 font-bold text-center mb-12">
          Plans
        </h2>
        <div className="grid gap-x-6 gap-y-10">
          <Web_Hosting_Table plans={plans} />
          {/* <PricingTable
            plan="Firewall Only"
            para="You have your own server?
            No problem!"
            price="6.99"
            location="Europe | Canada"
            cpu="2x AMD® Ryzen 9 3900"
            ram="4 GB"
            ssd="40 GB"
            bandwidth="750Mbps (Unmetered)"
            list={firewallList}
            belowPara="Custom UAM available for an additional $4.99/month"
            uptimePara="99.9% Uptime Guarantee
            Custom Layer 7 Protection"
          />

          <BluePricingTable
            plan="Website Only"
            para="Perfect for small Website"
            price="9.99"
            location="Europe | Canada"
            cpu="4x AMD® Ryzen 9 3900"
            ram="8 GB"
            ssd="80 GB"
            bandwidth="750Mbps (Unmetered)"
            list={websiteList}
            uptimePara="99.9% Uptime Guarantee
            Layer 4 Protection
            Powered by cPanel®"
          />
          <IndigoPricingTable
            plan="Premium Package"
            para="Complete Web Hosting + Firewall"
            price="14.99"
            location="Europe | Canada"
            cpu="6x AMD® Ryzen 9 3900"
            ram="12 GB"
            ssd="120 GB"
            bandwidth="750Mbps (Unmetered)"
            list={premiumList}
            belowPara="Custom UAM available for an additional $4.99/month"
            uptimePara="99.9% uptime Guarantee
            Layer 4 Protection
            Custom Layer 7 Protection
            Powered by cPanel®"
          /> */}
        </div>
      </div>
    </div>
  );
};
