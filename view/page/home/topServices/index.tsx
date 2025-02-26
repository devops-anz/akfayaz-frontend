import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { poppins } from 'styles/fonts';

const topServices = [
  {
    image: '/image/topservices/1.png',
    category: 'Strategic Sales Solutions to Boost Revenue and Client Engagement',
    title: 'Sales '
  },
  {
    image: '/image/topservices/2.png',
    category: 'Innovative Marketing Strategies for Brand Growth and Visibility',
    title: 'Marketing'
  },
  {
    image: '/image/topservices/3.png',
    category: 'Efficient Procurement Processes for Cost-Effective Resource Management',
    title: 'Procurement'
  },
  {
    image: '/image/topservices/4.png', 
    category: 'Smart Acquisition Strategies for Seamless Business Expansion',
    title: 'Acquisition'
  },
  {
    image: '/image/topservices/5.png',
    category: ' Expert Consultancy Services for Optimized Business Performance',
    title: 'Consultancy',
    link: 'https://www.anzbizconsultants.com.au/'
  },
  {
    image: '/image/topservices/6.png',
    category: 'Creative Web Design for Engaging Digital User Experiences',
    title: 'Web Design',
    link: 'https://www.anzwebstudios.com.au/'
  }
];

const TopServices = () => {
  return (
    <div id='services'>
      <div className='container-custom pt-20 sm:pt-28 md:pt-40'>
        <div className='mb-10 sm:mb-16 md:mb-20 px-4 sm:px-6'>
          <p className={`font-[700] text-black ${poppins.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>
            Top Services
          </p>
          <p className='mb-3 sm:mb-4 md:mb-5 pt-6 sm:pt-8 md:pt-10'>
              I offer a range of services to help you grow your business and reach new customers.
          </p>
          <hr className='border border-solid border-gray-200' />
        </div>

        <div className='mb-10 sm:mb-16 md:mb-20 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 sm:grid-cols-2 md:grid-cols-3'>
          {topServices.map((item, index) => (
            <div key={index} className='group relative overflow-hidden'>
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                style={{ height: '280px', width: '100%' }}
                className='w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110'
              />

              <div className='absolute inset-0 flex flex-col items-center justify-evenly bg-black/70 md:bg-gray-500/0 transition-all duration-500 ease-in-out md:group-hover:bg-black/85'>
                <p className='text-2xl sm:text-2xl font-medium text-white md:opacity-0 transition-opacity duration-300 ease-in-out md:group-hover:opacity-100'>
                  {item.title}
                </p>

                <p className='p-5 text-center text-xs sm:text-sm text-white md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-100'>
                  {item.category}
                </p>
                <button className='bg-[#cfd8b9] px-4 sm:px-6 py-2 sm:py-2.5 text-black font-bold md:opacity-0 transition-opacity duration-300 ease-in-out hover:bg-amber-500 md:group-hover:opacity-100'>
                 <Link href={item.link || ''} target='_blank'>
                    { item.link ? 'Learn More' : 'Coming Soon'}
                 </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-4 sm:mx-6 md:mx-10 mb-10 bg-black py-20 sm:py-32 md:py-36 lg:py-44'>
        <div className='container-custom px-4 sm:px-6'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-20'>
            <div className='flex flex-col justify-center gap-3 sm:gap-4 md:gap-5'>
              <p className='text-uppercase text-[10px] sm:text-[26px] text-gray-400'> Steven Bartlett said ——</p>

              <p style={{lineHeight: '180%'}} className={`${poppins.className}  text-4xl sm:text-5xl md:text-5xl lg:text-4xl font-bold text-white`}>
              "The cost of being different is highest when you’re young—when the system forces you to fit in. But as you grow, the world starts clapping for the unique ones, learning from them, stealing from them, and aspiring to be them"
              </p>

              <p className='text-[10px] sm:text-[26px] text-gray-400'>
              From MrBeast interview on The Diary Of A CEO
              </p>
            </div>

            {/* <div>
              <div className='flex items-center gap-x-8 sm:gap-x-12 md:gap-x-20'>
                <p className='text-white'> Watch Video - </p>
                <MdOutlineSlowMotionVideo size={10} className='rounded-full bg-[#d9e1c5] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 p-3 sm:p-4 text-black' />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopServices;
