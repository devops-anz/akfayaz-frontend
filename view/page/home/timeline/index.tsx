import React from 'react';
import { poppins } from 'styles/fonts';

const TimelineItem = ({
  date,
  title,
  description,
  isLast
}: {
  index: number;
  date: string;
  title: string;
  description: string;
  isLast: boolean;
}) => {
  return (
    <div className={`relative flex mr-5 sm:mr-0  `}>
      {/* Circle and line */}
      <div className='mr-4 flex flex-col items-center'>
        <div
          className={`z-10 flex  items-center justify-center rounded-full border-4 border-gray-100 bg-gray-400 ${isLast ? 'h-[34px] w-8' : 'h-[45px] w-8'}`}
        >
          <div className='h-3 w-3 rounded-full bg-black'></div>
        </div>
        {!isLast && <div className='h-full w-0 border-l-2 border-dashed border-gray-500 '></div>}
      </div>

      {/* Content */}

      <div className='w-full  pb-12'>
        <p className='mb-1 font-medium  text-gray-700'>{date}</p>
        <h3 className='mb-1 text-3xl font-medium text-black'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

const Timeline = ({ timelineData }: { timelineData: any }) => {
  
  // console.log("timelineData", timelineData)


  return (
    <div className='container-custom mx-auto '>
      <div className='mb-10  md:pt-10 px-4 sm:mb-16 sm:px-6 md:px-10 lg:px-10 xl:px-0 lg:mb-14 lg:pt-12 xl:mb-16 xl:pt-14'>
        <p className={`font-[700] text-black ${poppins.className} text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl`}>
          {timelineData?.title}
        </p>
        <p className='mb-3 pt-6 sm:mb-4 sm:pt-8 md:mb-5 md:pt-10'>
          {timelineData?.description}
        </p>
        <hr className='border border-solid border-gray-200' />
      </div>

      <div className='pl-4 md:px-10 lg:px-10 xl:px-0'>
        {timelineData.career_highlights.map((item: any, index: number) => (
          <TimelineItem
            key={index}
            index={index}
            date={item.year}
            title={item.title}
            description={item.description}
            isLast={index === timelineData.career_highlights.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
