import React from "react";
import { useRouter } from "next/router";

export const Web_Hosting_Table = ({ plans }) => {
  const router = useRouter();
  console.log(plans);
  return (
    <>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="relative">
              <th scope="row" className="py-3 px-6 absolute bottom-0"></th>
              {plans?.map((item, index) => (
                <td className="py-3 px-6 text-center">
                  <div
                    className={`font-semibold ${
                      index % 2 == 0 ? "text-rose-600" : "text-purple-700"
                    }`}
                  >
                    {item?.plan}
                  </div>
                  <div className="flex flex-col my-6">
                    <span className="text-3xl font-semibold text-white">
                      {item?.price}
                    </span>
                    <span className="text-xs">per month</span>
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-600">
              <th scope="row" className="py-3 px-6 text-white">
                Domain
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.domain}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-600">
              <th scope="row" className="py-3 px-6 text-white">
                Requests
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.request}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-600">
              <th scope="row" className="py-3 px-6 text-white">
                Speed
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.speed}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-600">
              <th scope="row" className="py-3 px-6 text-white">
                SSD Storage
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.SSDStorage}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-600">
              <th scope="row" className="py-3 px-6 text-white">
                Bandwidth
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.bandwidth}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-600">
              <th scope="row" className="py-3 px-6 text-white">
                DB
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">{item?.DB}</td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-600">
              <th scope="row" className="py-3 px-6 text-white">
                FTP
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.ftp}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-600">
              <th scope="row" className="py-3 px-6 text-white">
                Sub Domains
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.subDomain}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-600">
              <th scope="row" className="py-3 px-6 text-white">
                UAM
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.uam}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-600">
              <th scope="row" className="py-3 px-6 text-white">
                Price
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.price}
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row" className="py-3 px-6"></th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() =>
                      router.push("https://cp.vshield.pro/register")
                    }
                    className="border border-white py-2 px-4 rounded-3xl hover:border-0 hover:bg-cyan-500 text-white"
                  >
                    Order Now
                  </button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};