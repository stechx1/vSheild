import { Button } from '../../../components';

/* eslint-disable @next/next/no-img-element */
export const Product = ({ reverse, heading, para, list, imgSrc }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? 'flex-col md:flex-row-reverse md:space-x-reverse md:space-x-16' : 'flex-col md:flex-row md:space-x-16'
      } justify-between items-center mb-14`}
    >
      <div className='space-y-4'>
        <h3 className='text-4xl'>{heading}</h3>
        <p className='max-w-[380px] text-gray-300'>{para}</p>
        <ul className='space-y-2'>
          {list.map((listItem) => (
            <li key={listItem.id} className='flex space-x-2'>
              <img src='/icons/check-mark.svg' alt='check' />
              <p>{listItem.point}</p>
            </li>
          ))}
        </ul>
        <Button>See Details</Button>
      </div>
      <img src={imgSrc} alt='server' className={`max-w-[350px] ld:max-w-[800px] `} />
    </div>
  );
};
