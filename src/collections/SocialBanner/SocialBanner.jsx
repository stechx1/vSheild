import { Logo } from './Logo/Logo';

export const SocialBanner = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='mb-4'>We work with people from over the world</p>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
        <Logo logo='/logos/logo-01.png' />
        <Logo logo='/logos/logo-02.png' />
        <Logo logo='/logos/logo-03.png' />
        <Logo logo='/logos/logo-04.png' />
        <Logo logo='/logos/logo-05.png' />
        <Logo logo='/logos/logo-06.png' />
      </div>
    </div>
  );
};
