import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const TrustBox = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <>
      <div
        ref={ref}
        className='trustpilot-widget'
        data-locale='en-US'
        data-template-id='5419b6a8b0d04a076446a9ad'
        data-businessunit-id='5f7982bb84661c00017f7a04'
        data-style-height='24px'
        data-style-width='100%'
        data-theme='dark'
        data-style-alignment='center'
        suppressHydrationWarning={true}
        // [ long list of data attributes...]
      />
      <Link
        href='https://www.trustpilot.com/review/vshield.pro'
        target='_blank'
        rel='noopener noreferrer'
      >
        {' '}
        {/* Trustpilot */}
      </Link>
    </>
  );
};

export default TrustBox;
