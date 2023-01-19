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
      heading: 'Revisions and Errata',
      para: `The materials appearing on VSHIELD.PRO's web site could include technical, typographical, or photographic errors. VSHIELD.PRO does not warrant that any of the materials on its web site are accurate, complete, or current. VSHIELD.PRO may make changes to the materials contained on its web site at any time without notice. VSHIELD.PRO does not, however, make any commitment to update the materials.
      `,
    },
    {
      id: 6,
      heading: 'Links',
      para: `VSHIELD.PRO has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by VSHIELD.PRO of the site. Use of any such linked web site is at the user's own risk.`,
    },
    {
      id: 7,
      heading: 'Site Terms of Use Modifications',
      para: `VSHIELD.PRO may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
      `,
    },
    {
      id: 8,
      heading: 'Governing Law',
      para: `Any claim relating to VSHIELD.PRO's web site shall be governed by the Canadian laws without regard to its conflict of law provisions. General Terms and Conditions applicable to Use of a Web Site.
      `,
    },
    {
      id: 9,
      heading: 'Unlawful Use',
      para: `The following activities are considered unlawful use for products served on VSHIELD.PRO, and therefore are disallowed on any of our services. If any of the following are seen on an account, we reserve the right to close the account without refund. The following, but not limited to, is considered unlawful uses of VSHIELD.PRO. Sending or receiving unsolicited and/or commercial emails, promotional materials, "junk mail", "spam", "chain letters", or "pyramid schemes"; Exploiting, possessing, producing, receiving, transporting, or distributing any illegal content, including but not limited to any sexually explicit depiction of children; Uploading, possessing, receiving, transporting, or distributing any copyrighted, trademark, or patented content which you do not own or lack written consent or a license from the copyright owner; Forging headers or otherwise manipulating e-mail identifiers in order to mask or mislead the origins of certain content; Interfering with the service to any other user, client, host or network which reduces the quality of service for other clients and users; Using the service to engage in Denial-of-service ("DOS") attacks to any third-parties or to VSHIELD.PRO; Accessing data, systems or networks including attempts to probe scan or test for vulnerabilities of a system or network or to breach security or authentication measures without written consent from the owner of the system or network; Using this service to transmit any material (by email, uploading, posting, or otherwise) that threatens or encourages bodily harm, injury or destruction of property, defames one or more third parties, or promotes any act of cruelty to animals; or Accessing the service to violate any laws at the local, state and federal level in Canada or the country/territory in which you reside.
      `,
    },
    {
      id: 10,
      heading: 'Refund Policy',
      para: `Your satisfaction is our top priority, If for any reason you are not completely satisfied with our services, we will issue a full refund within 72 hours after the purchase. However, it's important to know that any suspension of service or misuse of a customer will not be refundable.
      `,
    },
    {
      id: 11,
      heading: 'Privacy Policy',
      para: `In an effort to protect our clients' and site visitors privacy and rights, we have established a Privacy Policy which explains what information we gather on visitors and what we do with information that we gather. This Privacy Policy governs the manner in which we collect, use, maintain and disclose information collected from users of this Web site (each, a "User"). Users' privacy is very important to us. We are committed to safeguarding the information Users entrust to us. We collect personally identifiable information from Users through online forms for ordering products and services. We may also collect information about how Users use our Web site, for example, by tracking the number of unique views received by the pages of the Web site or the domains from which Users originate. We use "cookies" to track how Users use our Web site We may use personally identifiable information collected through our Web site to contact Users regarding products and services offered by us and our trusted affiliates, independent contractors and business partners, and otherwise to enhance Users' experience with us and such affiliates, independent contractors and business partners. At no time will our database of users ever be sold to any entity for the purpose of marketing or mailing lists. Personal information will not be sold or otherwise transferred to our business partners without your prior consent, except that we will disclose the information we collect to third parties when, in our good faith judgment, we are obligated to do so under applicable laws.
      `,
    },
    {
      id: 12,
      heading: 'Data Responsibility',
      para: `The client is responsible for his/her own data. We are not responsible for any data, nor anything that could happen to the server. We are not required to provide any backup in case of data loss. We will not be held responsible for the loss of data in case of any failure including but not limited to hard disk failure or system failure in general.
      `,
    },
    {
      id: 13,
      heading: 'VDS/VPS are limited in the following ways. Clients MAY NOT:',
      para: `Run any outgoing DDoS/attacks
      Host tor exit nodes, gambling/lottery sites, botnets
      Generate unsolicited e-mail spam, malicious network scanning
      Torrent illegal content
      Mine cryptocurrency
      Anything that could affect the performance or other clients
      Use or run anything which vShield deem inappropriate.
      
      `,
    },
  ];
  return (
    <div className='container mx-auto px-8'>
      <div className='flex flex-col space-y-2 justify-center items-center my-[20px]'>
        <h1 className='text-5xl'>Terms of Service</h1>
        <p className='text-lg max-w-[800px] font-light text-gray-400 text-center'>
          In order to provide you with our exceptional service, we need you to
          agree to the rules in this document. Last updated on November 10th,
          2019
        </p>
      </div>

      <div className='mx-auto max-w-[990px] bg-[#212121] px-6 py-8 rounded space-y-8'>
        {termsContent.map((term) => (
          <div key={term.id} className="space-y-2">
            <h2 className='font-bold text-xl'>{term.heading}</h2>
            <p className='text-gray-400'>{term.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsPage;
