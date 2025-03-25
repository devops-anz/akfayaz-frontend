import React from 'react';

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
    <div className={`relative flex   `}>
      {/* Circle and line */}
      <div className='mr-4 flex flex-col items-center'>
        <div
          className={`z-10 flex  items-center justify-center rounded-full border-4 border-gray-100 bg-gray-400 ${isLast ? 'h-8 w-8' : 'h-[35px] w-8'}`}
        >
          <div className='h-3 w-3 rounded-full bg-black'></div>
        </div>
        {!isLast && <div className='h-full w-0 border-l-2 border-dashed border-gray-500 '></div>}
      </div>

      {/* Content */}
      <div className='w-full  pb-12'>
        <p className='mb-1 font-medium  text-gray-700'>{date}</p>
        <h3 className='mb-4 text-3xl font-medium text-black'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      date: '2023',
      title: 'Featured in The Australian Business Journal',
      description: 'Recognized for leadership in circular tech and sustainability-driven business growth.'
    },
    {
      date: '2023',
      title: 'Highlighted in Auspreneur',
      description: 'Showcased as an inspiring entrepreneur driving innovation in the refurbished tech industry.'
    },
    {
      date: '2022',
      title: 'Recognized for Excellence in Retail & Customer Service',
      description: 'Won the Hume City Council Business Award for outstanding achievements in retail and customer.'
    },
    {
      date: '2022',
      title: ' Began Role as Head of Sales at Alchemy Global Solutions',
      description:
        'Initiated strategic sales approaches that generated significant revenue and expanded global market presence.'
    },
    {
      date: '2021',
      title: 'Awarded for Startup Innovation',
      description: 'Received the Hume City Council Business Award for excellence in the startup sector.'
    },
    {
      date: '2021',
      title: 'Interviewed by Tech Bullion',
      description: 'Shared insights on reducing e-waste and building a sustainable tech ecosystem.'
    },
    {
      date: '2021',
      title: 'Graduated from La Trobe University, Melbourne',
      description: 'Earned a Bachelor of IT, laying the foundation for a career in tech, entrepreneurship, and sustainability..'
    },
    {
      date: '2020',
      title: 'Entrepreneurial Journey as Business Owner at Budget Phones Australia',
      description: 'Developed a successful retail business with personal branding and operational excellence.'
    },
    {
      date: '2020',
      title: 'Welfare Officer at La Trobe Student Union ',
      description: 'Actively contributed to student well-being through leadership and support initiatives.'
    },
    {
      date: '2019',
      title: 'Recognized as Best International Host at La Trobe University',
      description: 'Acknowledged for exceptional leadership, community engagement, and support for international students.'
    },
    {
      date: '2015',
      title: 'Sales Leadership at KM Assets Pty. LTD',
      description: 'Demonstrated progressive leadership and sales expertise in a family business setting.'
    }
  ];

  return (
    <div className='container-custom mx-auto  p-6'>
      <div className='pl-4'>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            index={index}
            date={item.date}
            title={item.title}
            description={item.description}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
