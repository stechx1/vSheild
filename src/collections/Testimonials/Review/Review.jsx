/* eslint-disable @next/next/no-img-element */
export const Review = ({ reviewBody, name, job }) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
      <p className='text-center'>{reviewBody}</p>
      <img src='/icons/five-stars.svg' alt='rating-stars' />
      <h3>{name}</h3>
      <p>{job}</p>
    </div>
  );
};
