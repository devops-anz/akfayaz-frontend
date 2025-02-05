import React from 'react';
import { poppins } from 'styles/fonts';

const projects = [
  {
    date: '01 / MAY,2021',
    image: '/image/featured-projects/featured-projects-1.webp',
    title: 'Paradise in the Woods',
    description:
      'A two-story private house in the Washington district. The combination of natural wood, red brick, and concrete created a light space.',
    services: ['Concept', '3D Rendering', 'Designer supervision']
  },
  {
    date: '15 / JUNE,2021',
    image: '/image/featured-projects/featured-projects-2.webp',
    title: 'Urban Loft Renovation',
    description:
      'Modern renovation of a downtown loft space. Industrial elements combined with warm materials create a balanced urban retreat.',
    services: ['Interior Design', '3D Visualization', 'Project Management']
  },
  {
    date: '30 / JULY,2021',
    image: '/image/featured-projects/featured-projects-3.webp',
    title: 'Coastal Villa',
    description:
      'Contemporary beachfront villa featuring expansive glass walls and sustainable materials that complement the natural surroundings.',
    services: ['Architecture', 'Landscape Design', 'Construction Supervision']
  }
];

const FeaturedProjects = () => {
  return (
    <div id='featured-projects' className='mx-0 px-5 lg:px-0 sm:mx-0 md:mx-10 mb-6 mb-0 sm:mb-8 md:mb-10 bg-[#d9e1c5] pb-10 sm:pb-16 md:pb-20'>
      <div className='container-custom'>
        <div className='mb-10 sm:mb-16 md:mb-20'>
          <p

            className={`font-[700] text-black ${poppins.className} pt-12 sm:pt-16 md:pt-24 text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}
          >
            Featured Projects
          </p>
          <p className='mb-3 sm:mb-4 md:mb-5 pt-6 sm:pt-8 md:pt-10'>
            I treat each completed project with special trepidation. See some of the featured projects below.
          </p>
          <hr className='border border-solid border-gray-400/50' />
        </div>
        <div className='grid grid-cols-1 gap-6 sm:gap-8'>

          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                index == 1 ? 'lg:flex-row-reverse' : ''
              } flex flex-col md:flex-row group overflow-hidden bg-white`}
            >
              {/* Image Container */}
              <div className='relative h-[300px] sm:h-[350px] md:h-[400px] w-full lg:w-1/2 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>

              {/* Content Container */}
              <div className='w-full lg:w-1/2 p-6 sm:p-10 md:p-12 lg:p-16'>
                {/* Date */}
                <div className='mb-3 sm:mb-4 text-sm text-gray-600'>{project.date}</div>

                {/* Title */}
                <h3 className='mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold'>{project.title}</h3>

                {/* Description */}
                <p className='mb-4 sm:mb-6 text-gray-400'>{project.description}</p>

                {/* Services List */}
                <ul className='space-y-2'>
                  {project.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className='cursor-pointer flex items-center gap-3 text-gray-700 transition-colors hover:text-gray-900'
                    >
                      <span>
                        <svg className='h-3 w-3 text-[#d9e1c5]' fill='currentColor' viewBox='0 0 24 24'>
                          <circle cx='12' cy='12' r='6' />
                        </svg>
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
