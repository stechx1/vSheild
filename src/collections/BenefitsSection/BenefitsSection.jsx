/* eslint-disable @next/next/no-img-element */
export const BenefitsSection = () => {
  return (
    <div className='flex flex-col space-y-4 justify-between items-center'>
      <h2 className='text-3xl'>Benefits</h2>
      <p className='font-light text-gray-300'>
        These are the benefits that VSheild provides you
      </p>
      <div className='grid grid-cols-5'>
        <div className='flex flex-col space-y-2'>
          <img
            src='/icons/high-performance-icon.svg'
            alt='high-performance'
            width={100}
          />
          <div className="flex flex-col space-y-2">
            <h3 className='font-bold'>High performance</h3>
            <p className='text-sm'>
              Its very important to us that each customers get their own
              dedicated resources. We think providing a non-overloaded
              environment is crucial.
            </p>
          </div>
        </div>
        <div className='mt-9'>
          <img src='/icons/connect-line.svg' alt='connect-line' />
        </div>
        <div className='flex flex-col space-y-2'>
          <img src='/icons/cloud-icon.svg' alt='cloud-icon' width={100} />
          <h3 className='font-bold'>High performance</h3>
          <p className='text-sm'>
            Its very important to us that each customers get their own dedicated
            resources. We think providing a non-overloaded environment is
            crucial.
          </p>
        </div>

        <div className='mt-9'>
          <img src='/icons/connect-line.svg' alt='connect-line' />
        </div>

        <div className='flex flex-col space-y-2'>
          <img
            src='/icons/sheild-icon.svg'
            alt='high-performance'
            width={100}
          />
          <h3 className='font-bold'>High performance</h3>
          <p className='text-sm'>
            Its very important to us that each customers get their own dedicated
            resources. We think providing a non-overloaded environment is
            crucial.
          </p>
        </div>
      </div>
    </div>
  );
};

// /* eslint-disable @next/next/no-img-element */
// export const BenefitsSection = () => {
//   return (
//     <div className='flex flex-col space-y-4 justify-between items-center'>
//       <h2 className='text-3xl'>Benefits</h2>
//       <p className='font-light text-gray-300'>
//         These are the benefits that VSheild provides you
//       </p>
//       <div className='flex space-x-5'>
//         <img src='/icons/high-performance-icon.svg' alt='high-performance' />
//         <img src='/icons/connect-line.svg' alt='connect-line' />
//         <img src='/icons/cloud-icon.svg' alt='cloud-icon' />

//         <img src='/icons/connect-line.svg' alt='connect-line' />
//         <img src='/icons/sheild-icon.svg' alt='high-performance' />
//       </div>

//       <div className='flex'>
//         <div className="flex flex-col justify-center items-center">
//           <h3 className='font-bold'>High Performance</h3>
//           <p className="text-center">
//             Its very important to us that each customers get their own dedicated
//             resources. We think providing a non-overloaded environment is
//             crucial.
//           </p>
//         </div>

//         <div className="flex flex-col">
//           <h3 className='font-bold'>High Performance</h3>
//           <p>
//             Its very important to us that each customers get their own dedicated
//             resources. We think providing a non-overloaded environment is
//             crucial.
//           </p>
//         </div>

//         <div className="flex flex-col">
//           <h3 className='font-bold'>High Performance</h3>
//           <p>
//             Its very important to us that each customers get their own dedicated
//             resources. We think providing a non-overloaded environment is
//             crucial.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
