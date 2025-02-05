import Image from 'next/image';
import React from 'react';
import { poppins } from '../../../../styles/fonts';

const timelineData = [
  {
    year: '2000',
    number: '01', 
    category: 'EDUCATION',
    title: 'Bachelor of Architecture',
    description: 'I graduated with a Bachelor of Architecture from New York Institute of Technology.'
  },
  {
    year: '2007',
    number: '02',
    category: 'FIRST JOB', 
    title: 'Apprentice Draftsman',
    description: 'For 7 years, I had been working at Cooper and Sons, one of the best studios in NY.'
  },
  {
    year: '2015',
    number: '03',
    category: 'UPGRADE',
    title: 'Started Freelancing',
    description: 'Since 2015, I have been working as a freelancer with private and corporate clients.'
  },
  {
    year: '2024',
    number: '04',
    category: 'AWARDS',
    title: 'The Best in Modern Design',
    description: 'One of my recent projects received an award from AAS Arch for the best modern design.'
  }
];

const About = () => {
  return (
    <div id='about-me' className='container-custom min-h-screen bg-white px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2'>
        {/* Image Section */}
        <div className='relative h-[300px] sm:h-[400px] md:h-full'>
          <Image
            src='/image/about/about.webp'
            alt='Modern Architecture'
            className='h-full w-full object-cover'
            width={1000}
            height={1000}
            priority
          />
        </div>

        {/* Content Section */}
        <div className='space-y-4 sm:space-y-6'>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-[60px] ${poppins.className} text-black`}>
            A Few Words <br className='hidden sm:block' /> About Me
          </h1>

          <h2 className='text-lg sm:text-xl text-black'>Architecture driven by innovations —</h2>

          <p className='text-gray-600 text-sm sm:text-base'>
            I'm a licensed architect and interior designer located in New York and working all over the USA.
          </p>

          {/* Skills Section */}
          <div className='space-y-4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4'>
              {[
                "I'm good at:",
                'Architecture',
                'Interior Design',
                'Building Design',
                '3D Rendering',
                'Supervision'
              ].map((skill, index) => (
                <div key={skill} className='flex items-center space-x-2'>
                  {index === 0 ? (
                    <svg className='h-2 w-2 text-gray-500' fill='currentColor' viewBox='0 0 24 24'>
                      <circle cx='12' cy='12' r='6' />
                    </svg>
                  ) : (
                    <svg className='h-4 sm:h-5 w-4 sm:w-5 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                  )}
                  <span className={`text-gray-700 text-sm sm:text-base ${index === 0 ? 'font-bold' : ''}`}>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <p className='text-gray-600 text-sm sm:text-base'>
            I specialize as a design and full-service architect for new residences, home additions, and commercial
            buildings. I also provide additional services like obtaining permits, due diligence, and architectural
            supervision. If you like what I do, contact me to discuss our new great project!
          </p>

          {/* Buttons */}
          <div className='flex flex-row gap-4 sm:space-x-4 pt-4'>
            <p className='w-full sm:w-fit cursor-pointer border-solid bg-[#cfd8b9] px-4 py-2 text-center text-sm sm:text-base font-[500] text-black transition-all duration-300 ease-in-out hover:shadow-lg sm:px-5 sm:py-3'>
              Portfolio
            </p>
            <p className='w-full sm:w-fit cursor-pointer border-2 border-solid border-black px-4 py-2 text-sm sm:text-base font-[500] text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:px-5 sm:py-3'>
              Download CV
            </p>
          </div>
        </div>
      </div>

      <div className='mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
        {timelineData.map((item, index) => (
          <div key={index} className='relative p-4 sm:p-6 bg-gray-50 rounded-lg'>
            <div className='mb-3 sm:mb-4 flex items-center gap-2 text-xs sm:text-sm text-gray-600'>
              <span className='font-medium'>{item.number} \</span>
              <span className='uppercase'>{item.category}</span>
            </div>

            <div className={`text-[#cfd8b9] ${poppins.className} mb-3 sm:mb-4 text-4xl sm:text-5xl font-bold`}>{item.year}</div>
            <h3 className='text-sm sm:text-md mb-2 sm:mb-3 font-semibold text-gray-900'>
              {item.title} <span className='font-bold text-[#cfd8b9]'>—</span>
            </h3>
            <p className='text-gray-600 text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
