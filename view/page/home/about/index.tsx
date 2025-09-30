import Image from 'next/image';
import React, { useState } from 'react';
import { poppins } from '../../../../styles/fonts';
import DownloadCVModal from 'view/ui/shared-component/component/downloadCV';
import PortfolioModal from 'view/ui/shared-component/component/portfolio';

interface AboutData {
  id: number;
  title: string;
  post_title: string;
  description_1: string;
  good_at: string[];
  description_2: string;
  button_text_1: string;
  button_url_1: string | null;
  button_1_detailed_text: string;
  button_text_2: string;
  button_url_2: string | null;
  image: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}


const About = ({ aboutData }: { aboutData: AboutData }) => {
  // console.log("aboutData", aboutData)
  const [openCV, setOpenCV] = useState(false);
  const [openPortfolio, setOpenPortfolio] = useState(false);

  // Use API data if available and active, otherwise use default aboutData


  return (
    <div id='about-me' className='container-custom  bg-white px-4 py-8 sm:py-12 md:pt-16 sm:px-6 lg:px-0'>
      <div className='mx-auto grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2'>
        {/* Image Section */}
        <div className='relative h-[350px] sm:h-[400px] md:h-full'>
          <Image
            src={aboutData.image}
            alt='about me'
            className='h-full w-full object-cover'
            width={1000}
            height={1000}
            priority
          />
        </div>

        {/* aboutData Section */}
        <div className='space-y-4 sm:space-y-6'>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-[60px] ${poppins.className} text-black`}>
            {aboutData.title.includes('About Me') ? (
              <>
                A Few Words <br className='hidden sm:block' /> About Me
              </>
            ) : (
              aboutData.title
            )}
          </h1>

          <h2 className='text-lg sm:text-xl text-black'>{aboutData.post_title}</h2>
          <p className='text-gray-600 text-sm sm:text-base'>
            {aboutData.description_1}
          </p>

          {/* Skills Section */}
          <div className='space-y-4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4'>
              {[
                "I'm good at:",
                ...aboutData.good_at
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
            {aboutData.description_2}
          </p>

          {/* Buttons */}
          <div className='flex flex-row gap-4 sm:space-x-4 pt-4'>
            <p onClick={() => setOpenPortfolio(true)} className='w-full sm:w-fit cursor-pointer border-solid bg-[#cfd8b9] px-4 py-2 text-center text-sm sm:text-base font-[500] text-black transition-all duration-300 ease-in-out hover:shadow-lg sm:px-5 sm:py-3'>
              {aboutData.button_text_1}
            </p>
            <p onClick={() => setOpenCV(true)} className='w-full sm:w-fit cursor-pointer border-2 border-solid border-black px-4 py-2 text-sm sm:text-base font-[500] text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-white sm:px-5 sm:py-3'>
              {aboutData.button_text_2}
            </p>
          </div>
        </div>
      </div>

      <DownloadCVModal open={openCV} setOpen={setOpenCV} />
      <PortfolioModal button_1_detailed_text={aboutData?.button_1_detailed_text} open={openPortfolio} setOpen={setOpenPortfolio} />
    </div>
  );
};

export default About;
