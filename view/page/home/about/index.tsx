import Image from 'next/image';
import React, { useState } from 'react';
import { poppins } from '../../../../styles/fonts';
import DownloadCVModal from 'view/ui/shared-component/component/downloadCV';
import PortfolioModal from 'view/ui/shared-component/component/portfolio';

// const timelineData = [
//   {
//     year: '2021',
//     number: '01', 
//     category: 'EDUCATION',
//     title: 'Bachelor of IT',
//     description: 'Bachelor of IT - Graduated from the department of Science, Health & Engineering at La Trobe University, Melbourne. I’ve participated in active student union politics and was the elected student rep for 2 years'
//   },
//   {
//     year: '2022',
//     number: '02',
//     category: 'HEAD OF SALES ', 
//     title: 'ALCHEMY GLOBAL SOLUTIONS ',
//     description: 'I had been working at Alchemy Global Solutions as a Head of Sales for 3 years.'
//   },
//   {
//     year: '2015',
//     number: '03',
//     category: 'SALES DIRECTOR',
//     title: 'KM ASSETS PTY. LTD',
//     description: 'I had been working at KM Assets Pty. Ltd as a Sales Director for 2 years.'
//   },
//   {
//     year: '2020',
//     number: '04',
//     category: 'Business', 
//     title: 'Budget Phone Australia',
//     description: 'Budget Phones Australia - Launched my own startup at the age of 22 focusing on sustainability and circular economy by giving Tech products a second life, winning multiple awards across Startup, Retail & Customer Service categories.'
//   }
// ];

const About = () => {
  // const [open, setOpen] = useState(false);
  const [openCV, setOpenCV] = useState(false);
  const [openPortfolio, setOpenPortfolio] = useState(false);

  return (
    <div id='about-me' className='container-custom  bg-white px-4 py-8 sm:py-12 md:pt-16 sm:px-6 lg:px-8'>
      <div className='mx-auto grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2'>
        {/* Image Section */}
        <div className='relative h-[350px] sm:h-[400px] md:h-full'>
          <Image
            src='/image/about/about-edited.png'
            alt='about me '
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

          <h2 className='text-lg sm:text-xl text-black'>Sales & Business Growth Driven by Innovation —</h2>
          <p className='text-gray-600 text-sm sm:text-base'>
          I'm a dynamic sales leader and business strategist with a proven track record in driving revenue growth and operational success across multiple industries
          </p>

          {/* Skills Section */}
          <div className='space-y-4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4'>
              {[
                "I'm good at:",
                'Sales Strategy',
                'Business Development',
                'Team Leadership',
                'Client  Management',
                'Negotiation'
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
          I specialize in scaling businesses, optimizing sales processes, and implementing data-driven strategies to enhance revenue and market presence. With expertise in leading high-performing teams and executing innovative solutions, I drive sustainable business success. If you're looking for growth, let’s connect and discuss new opportunities!
          </p>

          {/* Buttons */}
          <div className='flex flex-row gap-4 sm:space-x-4 pt-4'>
            <p onClick={() => setOpenPortfolio(true)} className='w-full sm:w-fit cursor-pointer border-solid bg-[#cfd8b9] px-4 py-2 text-center text-sm sm:text-base font-[500] text-black transition-all duration-300 ease-in-out hover:shadow-lg sm:px-5 sm:py-3'>
              Portfolio 
            </p>
            <p onClick={() => setOpenCV(true)} className='w-full sm:w-fit cursor-pointer border-2 border-solid border-black px-4 py-2 text-sm sm:text-base font-[500] text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:px-5 sm:py-3'>
              Download CV
            </p>
          </div>
        </div>
      </div>


      {/* <div className='mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
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
            <p className='text-gray-600 text-sm text-justify'>{item.description}</p>
          </div>
        ))}
      </div> */}
      {/* <div className='mx-auto grid grid-cols-1 items-center gap-6 sm:gap-12 md:grid-cols-2 mt-20'>


        <div className='space-y-4 sm:space-y-6'>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-[60px] ${poppins.className} text-black`}>
            A Few Words <br className='hidden sm:block' /> About Me
          </h1>

          <h2 className='text-lg sm:text-xl text-black'>Sales & Business Growth Driven by Innovation —</h2>
          <p className='text-gray-600 text-justify text-sm sm:text-base'>
          I'm a dynamic sales leader and business strategist with a proven track record in driving revenue growth and operational success across multiple industries
          </p>

          <div className='space-y-4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4'>
              {[
                "I'm good at:",
                'Sales Strategy',
                'Business Development',
                'Team Leadership',
                'Client  Management',
                'Negotiation'
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

          <p className='text-gray-600 text-justify text-sm sm:text-base'>
          I specialize in scaling businesses, optimizing sales processes, and implementing data-driven strategies to enhance revenue and market presence. With expertise in leading high-performing teams and executing innovative solutions, I drive sustainable business success. If you're looking for growth, let’s connect and discuss new opportunities!
          </p>

          <div className='flex flex-row gap-4 sm:space-x-4 pt-4'>
            <p className='w-full sm:w-fit cursor-pointer border-solid bg-[#cfd8b9] px-4 py-2 text-center text-sm sm:text-base font-[500] text-black transition-all duration-300 ease-in-out hover:shadow-lg sm:px-5 sm:py-3'>
              Portfolio
            </p>
            <p className='w-full sm:w-fit cursor-pointer border-2 border-solid border-black px-4 py-2 text-sm sm:text-base font-[500] text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:px-5 sm:py-3'>
              Download CV
            </p>
          </div>
        </div>

        <div className='relative h-[300px] sm:h-[400px] md:h-full'>
          <Image
            src='/image/about/about-1.png'
            alt='Modern Architecture'
            className='h-full w-full object-cover'
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div> */}


      <DownloadCVModal open={openCV} setOpen={setOpenCV} />
      <PortfolioModal open={openPortfolio} setOpen={setOpenPortfolio} />
    </div>
  );
};

export default About;
