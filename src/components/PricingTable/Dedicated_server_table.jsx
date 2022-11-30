import React from "react";
import { useRouter } from "next/router";

export const Dedicated_server_table = ({ plans }) => {
  const router = useRouter();
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
                      <sup className="mr-1 text-lg font-thin">$</sup>
                      {item?.price}
                    </span>
                    <span className="text-xs text-#777E91">per month</span>
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-800">
              <th scope="row" className="py-3 px-6 text-white">
                CPU
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.cpu}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-800">
              <th scope="row" className="py-3 px-6 text-white">
                RAM
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.ram}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-800">
              <th scope="row" className="py-3 px-6 text-white">
                Disk
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.disk}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-800">
              <th scope="row" className="py-3 px-6 text-white">
                Bandwidth
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.bandwidth}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-800">
              <th scope="row" className="py-3 px-6 text-white">
                Location
              </th>
              {plans?.map((item) => (
                <td className="py-3 px-6 text-white text-center">
                  {item?.location}
                </td>
              ))}
            </tr>
            <tr className="border-b border-1 border-gray-800">
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
