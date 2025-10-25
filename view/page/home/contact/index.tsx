import React, { useState } from 'react';
import { poppins } from 'styles/fonts';

// dummy comment

const Contact = ({ contactData }: { contactData: any }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div id='contact-me' className='bg-[#d9e1c5] mt-20 px-5 py-20 md:mx-10 md:px-0'>
      <div className='container-custom mx-auto px-4 md:px-5 lg:px-10 xl:px-0'>
        {/* Header */}
        <div className='mb-16'>
          <h2 className={`${poppins.className} text-${contactData?.contact_text_color} mb-4 text-4xl font-bold md:text-6xl`}>{contactData.title}</h2>
          <p className={`text-${contactData?.contact_text_color}`}>{contactData.subtitle}</p>
          <hr className='mt-6 border border-solid border-gray-500/50' />
        </div>
        {/* Contact Methods */}
        <div className='grid  grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
          {contactData.links.map((method: any, index: number) => {
            // Function to get the proper href based on the method type
            const getHref = () => {
              if (method.title === 'Write To Me' || method.title === 'WRITE TO ME') {
                return `mailto:${method.url}`;
              } else if (method.title === 'FIND ME') {
                // If URL already has protocol, use as is, otherwise add https://
                return method.url.startsWith('http') ? method.url : `https://${method.url}`;
              } else if (method.title === 'Request a Meeting' || method.title === 'Talk to me') {
                // Handle phone numbers or meeting links
                return method.url.startsWith('tel:') ? method.url : `https://cal.com/a.fayaz`;
              }

              return method.url;
            };

            // Function to get clean display text
            const getDisplayText = () => {
              if (method.title === 'FIND ME') {
                // Remove https://www. or https:// from display
                return method.url.replace(/^https?:\/\/(www\.)?/, '');
              } else if (method.title === 'Request a Meeting' && method.url.startsWith('tel:')) {
                return 'Request a Meeting';
              }

              return method.url;
            };

            const isWriteToMe = method.title === 'Write To Me' || method.title === 'WRITE TO ME';

            return (
              <a
                href={getHref()}
                target='_blank'
                key={index}
                className='flex  flex-col rounded-md border-2 border-solid border-gray-500/50 py-6 px-6 transition-all duration-300 ease-in-out'
                onClick={(e) => {
                  if (isWriteToMe) {
                    e.preventDefault();
                    handleCopy(method.url);
                  }
                }}
              >
                {/* Icon Circle */}
                <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white'>
                  {/* You can add proper icon rendering here based on method.icon */}
                  {method.title === 'FIND ME' && (
                    <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z'
                      />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2 9h4v12H2z' />
                      <circle cx='4' cy='4' r='2' strokeWidth={2} />
                    </svg>
                  )}
                  {(method.title === 'Write To Me' || method.title === 'WRITE TO ME') && (
                    <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  )}
                  {(method.title === 'Request a Meeting' || method.title === 'Talk to me') && (
                    <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  )}
                </div>

                {/* Title */}
                <h3 className={`mb-3 text-sm font-medium text-${contactData?.contact_text_color}`}>{method.title}</h3>

                {/* Value */}
                <div
                  className={`text-2xl text-wrap  font-[700] text-${contactData?.contact_link_color} ${method.title === 'FIND ME' || method.title === 'WRITE TO ME' || method.title === 'Write To Me' ? 'text-[17px] sm:text-[22px]' : ''}
                relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full
                `}
                >
                  {getDisplayText()}
                  {isWriteToMe && copied === method.url && (
                    <span className='ml-2 mb-2 text-xs bg-black text-white px-1 py-0.5 rounded-md'> ✓ Copied!</span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
