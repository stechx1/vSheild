/* eslint-disable @next/next/no-img-element */
export const BenefitsSection = ({ benefitsList, heading, delSubHeading }) => {
  return (
    <div className='flex flex-col space-y-8 justify-between items-center'>
      <div className='flex flex-col justify-center items-center space-y-2'>
        <h2 className='text-3xl'>{heading ? heading : 'Benefits'}</h2>
        <p className='font-light text-gray-300'>
          {delSubHeading
            ? ''
            : 'These are the benefits that VSheild provides you'}
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-20 my-16'>
        {benefitsList.map((benefits) => (
          <div
            key={benefits.id}
            className='flex flex-col space-y-2 items-center'
          >
            <img
              src={benefits.icon}
              alt={`${benefits.header} icon`}
              width={100}
            />
            <div className='flex flex-col space-y-2 items-center'>
              <h3 className='font-bold'>{benefits.header}</h3>
              <p className='text-sm text-center'>{benefits.para}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};