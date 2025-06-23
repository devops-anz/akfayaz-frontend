import React from 'react';
import { poppins } from 'styles/fonts';

const contactMethods = [
  {
    title: 'FIND ME',
    icon: (
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
    ),
    value: 'linkedin.com/in/ahsanulkfayaz'
  },
  {
    title: 'WRITE ME',
    icon: (
      <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      </svg>
    ),
    value: 'fayaz@akmassets.com.au'
  },
  {
    title: 'Talk to me',
    icon: (
      <svg className='h-6 w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
        />
      </svg>
    ),
    value: 'Request a Meeting'
  }
];

// dummy comment

const Contact = () => {
  return (
    <div id='contact-me' className='bg-[#d9e1c5] px-5 py-20 md:mx-10 md:px-0'>
      <div className='container-custom mx-auto px-4'>
        {/* Header */}
        <div className='mb-16'>
          <h2 className={`${poppins.className} mb-4 text-4xl font-bold md:text-6xl`}>Hire Me for Your Project</h2>
          <p className='text-gray-600'>Contact me in any convenient way to discuss the details.</p>
          <hr className='mt-6 border border-solid border-gray-500/50' />
        </div>
        {/* Contact Methods */}
        <div className='grid  grid-cols-1 gap-8 md:grid-cols-3'>
          {contactMethods.map((method, index) => (
            <a
              href={
                method.title === 'WRITE TO ME'
                  ? `mailto:${method.value}`
                  : method.title === 'FIND ME'
                    ? `https://www.${method.value}`
                    : method.title === 'Talk to me'
                      ? `https://cal.com/a.fayaz`
                      : '#'
              }
              target='_blank'
              key={index}
              className='flex flex-col rounded-md border-2 border-solid border-gray-500/50 px-6 py-4 transition-all duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg hover:shadow-gray-500/50'
            >
              {/* Icon Circle */}
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white'>{method.icon}</div>

              {/* Title */}
              <h3 className='mb-3 text-sm font-medium text-gray-500'>{method.title}</h3>

              {/* Value */}
              <div
                className={`text-2xl font-[700] text-gray-900 hover:underline ${method.title === 'FIND ME' || method.title === 'WRITE ME' ? 'text-[17px] sm:text-[22px]' : ''}`}
              >
                {method.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
