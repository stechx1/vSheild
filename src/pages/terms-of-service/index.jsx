import React from 'react';

const TermsPage = () => {
  const termsContent = [
    {
      id: 1,
      heading: 'Terms',
      para: 'By accessing this web site, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trademark law.',
    },
    {
      id: 2,
      heading: 'User License',
      para: "Permission is granted to temporarily download one copy of the materials (information or software) on VSHIELD.PRO's web site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on VSHIELD.PRO's web site; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or mirror the materials on any other server. This license shall automatically terminate if you violate any of these restrictions and may be terminated by VSHIELD.PRO at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.",
    },
    {
      id: 3,
      heading: 'Disclaimer',
      para: "The materials on VSHIELD.PRO's web site are provided as is. VSHIELD.PRO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, VSHIELD.PRO does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.",
    },
    {
      id: 4,
      heading: 'Limitations ',
      para: "In no event shall VSHIELD.PRO or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on VSHIELD.PRO's Internet site, even if VSHIELD.PRO or a VSHIELD.PRO authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'",
    },
    {
      id: 5,
      heading: '',
      para: '',
    },
    {
      id: 6,
      heading: '',
      para: '',
    },
  ];
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col space-y-2 justify-center items-center my-[20px]'>
        <h1 className='text-5xl'>Terms of Service</h1>
        <p className='text-lg max-w-[800px] font-light text-gray-400 text-center'>
          In order to provide you with our exceptional service, we need you to
          agree to the rules in this document. Last updated on November 10th,
          2019
        </p>
      </div>

      <div className='mx-auto max-w-[990px] bg-[#212121] px-6 py-8 rounded'>
        <h2>Terms</h2>
        <p>
          By accessing this web site, you are agreeing to be bound by these
          website Terms and Conditions of Use, all applicable laws and
          regulations, and agree that you are responsible for compliance with
          any applicable local laws. If you do not agree with any of these
          terms, you are prohibited from using or accessing this site. The
          materials contained in this web site are protected by applicable
          copyright and trademark law.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
