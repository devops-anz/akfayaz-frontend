import React from 'react';
import { poppins } from 'styles/fonts';

const projects = [
  {
    date: '14 / DEC,2023',
    image: '/image/featured-projects/1.png',
    title: 'Australian Business Journal',
    description:
      'Renowned in Australia’s circular tech industry, he founded his first startup at 22 to drive sustainability and reuse.',
    services: ['Tech Industry Leadership', 'Circular Economy Advocate', 'Sales & Business Development Expert'],
    link: 'https://auspreneur.com.au/the-10-young-entrepreneurs-making-a-difference-in-2023/'
  },
  {
    date: '09 / JAN, 2023',
    image: '/image/featured-projects/2.png',
    title: 'Auspreneur',
    description:
      'Founder of Budget Phones Australia at 22, now Head of Sales at Alchemy Global, driving global sustainability',
    services: [
      'Entrepreneur & Sustainability Advocate',
      'Expert in High-Value Sales & Business Development',
      'Passionate About Personal Growth & Innovation'
    ],
    link: 'https://auspreneur.com.au/the-10-young-entrepreneurs-making-a-difference-in-2023/'
  },
  {
    date: '30 / JULY,2021',
    image: '/image/featured-projects/3.png',
    title: 'TechBullion',
    description:
      'Ahsanul Karim Fayaz, a pioneer in circular tech, launched his first startup at 22, driving sustainability and innovation..',
    services: [
      'Expert in Tech Sales & Leadership',
      'Sustainability & Circular Economy Advocate',
      'Award-Winning Entrepreneur'
    ],
    link: 'https://techbullion.com/in-the-spotlight-ahsanul-karim-fayazs-journey-from-startup-founder-to-a-global-sales-leader-in-the-circular-tech-industry/'
  }
];

const FeaturedProjects = () => {
  return (
    <div
      id='featured-projects'
      className='mx-0 mb-0 mb-6 bg-[#d9e1c5] px-5 pb-10 sm:mx-0 sm:mb-8 sm:pb-16 md:mx-10 md:mb-10 md:pb-20 lg:px-0'
    >
      <div className='container-custom'>
        <div className='mb-10 sm:mb-16 md:mb-20'>
          <p
            className={`font-[700] text-black ${poppins.className} pt-12 text-3xl sm:pt-16 sm:text-4xl md:pt-24 md:text-5xl lg:text-6xl`}
          >
            Featured Projects
          </p>
          <p className='mb-3 pt-6 sm:mb-4 sm:pt-8 md:mb-5 md:pt-10'>
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
              } group flex flex-col overflow-hidden bg-white md:flex-row`}
            >
              {/* Image Container */}
              <div className='relative h-[300px] w-full overflow-hidden sm:h-[350px] md:h-[420px] lg:w-1/2'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>

              {/* Content Container */}
              <div className='w-full p-6 sm:p-10 md:pt-10 md:pb-10 lg:w-1/2 lg:pt-14 lg:pb-4'>
                {/* Date */}
                <div className='mb-3 text-sm text-gray-600 sm:mb-4'>{project.date}</div>

                {/* Title */}
                <h3 className='mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl'>{project.title}</h3>

                {/* Description */}
                <p className='mb-4 text-gray-400 sm:mb-6'>{project.description}</p>

                {/* Link */}

                {/* Services List */}
                <ul className='space-y-2'>
                  {project.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className='flex cursor-pointer items-center gap-3 text-gray-700 transition-colors hover:text-gray-900'
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
                <div className='pt-10'>
                  <a href={project.link} target='_blank' className='font-work relative flex items-center gap-1 bg-transparent px-0 py-1.5 text-base font-[500] text-black ease-in after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-[70px]' rel='noopener noreferrer'>
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
