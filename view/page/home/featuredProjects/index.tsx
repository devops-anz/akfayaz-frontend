import Image from 'next/image';
import React from 'react';
import { poppins } from 'styles/fonts';

const FeaturedProjects = ({ featuredProjectsData }: { featuredProjectsData: any }) => {
  // console.log("featuredProjectsData", featuredProjectsData)

  return (
    <div
      id='featured-magazine'
      className='mx-0 mb-6 bg-[#d9e1c5] px-5 pb-10 sm:mx-0 sm:mb-8 sm:pb-16 md:mx-6 md:mb-10 md:pb-20 lg:mx-8 lg:px-6 xl:mx-10 xl:px-8'
    >
      <div className='container-custom'>
        <div className='mb-10 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-20'>
          <p
            className={`font-[700] text-black ${poppins.className} pt-12 text-3xl sm:pt-16 sm:text-4xl md:pt-24 md:text-5xl lg:pt-28 lg:text-6xl xl:text-7xl`}
          >
            {featuredProjectsData?.title}
          </p>
          <p className='mb-3 pt-6 text-sm sm:mb-4 sm:pt-8 sm:text-base md:mb-5 md:pt-10 md:text-lg lg:mb-6 lg:pt-12 lg:text-xl xl:mb-7 xl:pt-10 xl:text-2xl'>
            {featuredProjectsData?.description}
          </p>
          <hr className='border border-solid border-gray-400/50' />
        </div>
        <div className='grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14'>
          {featuredProjectsData?.featured_magazines.map((project: any, index: number) => (
            <div
              key={index}
              className={`${index == 1 ? 'lg:flex-row-reverse' : ''
                } group flex flex-col overflow-hidden bg-white lg:flex-row`}
            >
              {/* Image Container */}
              <div className='relative h-[300px] w-full overflow-hidden sm:h-[350px] md:h-[400px] lg:h-[500px] lg:w-1/2 xl:h-[440px]'>
                <Image
                  width={500}
                  height={500}
                  src={project.image_url}
                  alt={project.name}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  loading='lazy'
                />
              </div>

              {/* Content Container */}
              <div className='w-full p-6 sm:p-8 md:p-10 lg:w-1/2 lg:p-12 xl:p-14'>
                {/* Date */}
                <div className='mb-3 text-sm text-gray-600 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-4'>{project.date}</div>

                {/* Title */}
                <h3 className='mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl md:text-3xl lg:mb-5 lg:text-xl xl:mb-6 '>
                  {project.name.length > 100 ? `${project.name.slice(0, 90)}...` : project.name}
                </h3>

                {/* Description */}
                <div
                  className="prose max-w-none text-sm sm:text-base md:text-lg lg:text-base  [&>h2]:pt-3 [&>h3]:pt-3 [&>h3]:pb-3 [&>h2]:text-2xl [&>h3]:text-xl [&>p]:mb-2 last:[&>p]:mb-0"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                {/* <p className='mb-4 text-gray-400 sm:mb-6'>{project.description}</p> */}

                {/* Link */}

                <div className='pt-5 sm:pt-6 md:pt-7 lg:pt-3 xl:pt-0'>
                  <a href={project.button_url} target='_blank' className='font-work relative flex items-center gap-1 bg-transparent px-0 py-1.5 text-base font-[500] text-black ease-in after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-[70px]' rel='noopener noreferrer'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
