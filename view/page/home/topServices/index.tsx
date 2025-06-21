import Image from 'next/image';
import React, { useState } from 'react';
// import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { poppins } from 'styles/fonts';
import TopServicesModal from 'view/ui/shared-component/component/topservices';

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
  const [openTopServices, setOpenTopServices] = useState(false);
  const [selectedService, setSelectedService] = useState(topServices[0]);

  const handleOpenModal = (item: any) => {
    setSelectedService(item);
    setOpenTopServices(true);
  };

  return (
    <>
      <div id='services'>
        <div className='container-custom pt-20 sm:pt-28 md:pt-20'>
          <div className='mb-10 px-4 sm:mb-16 sm:px-6 md:mb-20'>
            <p className={`font-[700] text-black ${poppins.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>
              Top Services
            </p>
            <p className='mb-3 pt-6 sm:mb-4 sm:pt-8 md:mb-5 md:pt-10'>
              I offer a range of services to help you grow your business and reach new customers.
            </p>
            <hr className='border border-solid border-gray-200' />
          </div>

          <div className='mb-10 grid grid-cols-1 gap-4 px-4 sm:mb-16 sm:grid-cols-2 sm:gap-6 sm:px-6 md:mb-20 md:grid-cols-3 md:gap-8'>
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
                <div className='absolute inset-0 flex flex-col items-center justify-evenly bg-black/70 transition-all duration-500 ease-in-out md:bg-gray-500/0 md:group-hover:bg-black/85'>
                  <p className='text-2xl font-medium text-white transition-opacity duration-300 ease-in-out sm:text-2xl md:opacity-0 md:group-hover:opacity-100'>
                    {item.title}
                  </p>

                  <p className='p-5 text-center text-xs text-white transition-opacity duration-300 sm:text-sm md:opacity-0 md:group-hover:opacity-100'>
                    {item.category}
                  </p>
                  <button
                    onClick={() => handleOpenModal(item)}
                    className='bg-[#cfd8b9] px-4 py-2 font-bold text-black transition-opacity duration-300 ease-in-out hover:bg-amber-500 sm:px-6 sm:py-2.5 md:opacity-0 md:group-hover:opacity-100'
                  >
                    {/* <Link href={item.link || ''} target='_blank'>
                      { item.link ? 'Learn More' : 'Coming Soon'}
                  </Link> */}
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        <TopServicesModal open={openTopServices} setOpen={setOpenTopServices} selectedService={selectedService} />
    </>
  );
};

export default TopServices;
