import Image from 'next/image'
import React from 'react'
import { poppins } from '../../../../styles/fonts'; // Import poppins

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
    </div>
  )
}

export default About