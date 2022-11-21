import { Review } from './Review/Review';

export const Testimonials = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='font-bold text-3xl'>We Love Our Customers</h2>
      <div className='mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-16'>
        <Review
          name='EpicSamar'
          reviewBody={
            'Very powerful rdp, 10/10 customer service, highly recommended.'
          }
        />
        <Review
          name='Samy'
          reviewBody={
            "Been using their services for a few months now and I couldn't be happier."
          }
        />
        <Review
          name='Herawen'
          reviewBody={
            "10/10. Staff doesn't waste time, and are super helpful. Perfect experience"
          }
        />
      </div>
    </div>
  );
};
