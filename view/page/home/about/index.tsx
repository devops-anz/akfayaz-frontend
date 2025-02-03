import Image from 'next/image'
import React from 'react'
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
// Import poppins

const About = () => {
  return (
    <div className="container-custom min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative">
          <Image
            src="/image/about/about.webp" // Make sure to add your image
            alt="Modern Architecture"
            className="w-full h-full object-cover rounded-lg"
            width={1000}
            height={1000}
            priority
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <h1 className={`text-5xl font-bold ${poppins.className} text-black`}>
            A Few Words <br className='' /> About Me
          </h1>
          
          <h2 className="text-xl text-black">
            Architecture driven by innovations —
          </h2>

          <p className="text-gray-600">
            I'm a licensed architect and interior designer located in New York and working all over the USA.
          </p>

          {/* Skills Section */}
          <div className="space-y-4">
            {/* <p className="font-medium text-gray-900">I'm good at:</p> */}
            <div className="grid grid-cols-3 gap-4">
              {["I'm good at:",  'Architecture', 'Interior Design', 'Building Design', '3D Rendering', 'Supervision'].map((skill, index) => (
                <div key={skill} className="flex items-center space-x-2">
                  {
                    index === 0 ? (
                      <svg className="w-2 h-2 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="6" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )
                  }
                  {/* <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg> */}
                  <span className={`text-gray-700 ${index === 0 ? 'font-bold' : ''}`}>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-gray-600">
            I specialize as a design and full-service architect for new residences, home additions, and commercial buildings. I also provide additional services like obtaining permits, due diligence, and architectural supervision. If you like what I do, contact me to discuss our new great project!
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 pt-4">
          <p className='text-black font-[500]  text-base sm:text-lg px-4 sm:px-5 py-2 sm:py-3  border-solid bg-[#cfd8b9] text-center w-fit transition-all cursor-pointer ease-in-out duration-300'>
            Portfolio
          </p>
            <p className='text-black font-[500]  text-base sm:text-lg px-4 sm:px-5 py-2 sm:py-3 border-2 border-black border-solid hover:bg-black hover:text-white w-fit transition-all cursor-pointer ease-in-out duration-300'>
            Download CV
          </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {timelineData.map((item, index) => (
          <div key={index} className="relative">
            {/* Number and Category */}

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span className="font-medium">{item.number} \</span>
              <span className="uppercase">{item.category}</span>
            </div>

            {/* Year */}
            <div className={`text-[#cfd8b9] ${poppins.className} text-5xl font-bold mb-4`}>
              {item.year}
            </div>


            {/* Title */}
            <h3 className="text-md font-semibold text-gray-900 mb-3">
              {item.title} <span className='text-[#cfd8b9] font-bold'>—</span>
            </h3>


            {/* Description */}
            <p className="text-gray-600">
              {item.description} 
            </p>

            {/* Connector Line (visible only on larger screens) */}
            {/* {index < timelineData.length - 1 && (
              <div className="hidden lg:block absolute top-24 -right-4 w-8 h-[2px] bg-gray-300"></div>
            )} */}
          </div>
        ))}
      </div>


    </div>
  )
}

export default About