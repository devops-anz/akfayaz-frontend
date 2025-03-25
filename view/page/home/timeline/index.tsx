import React from 'react';

const TimelineItem = ({  date, title, description, isLast }: { index: number, date: string, title: string, description: string, isLast: boolean }) => {
  return (
    <div className={`flex relative   `}>
      {/* Circle and line */}
      <div className="flex flex-col items-center mr-4">
        <div className={`bg-gray-400 rounded-full  flex items-center justify-center border-4 border-gray-100 z-10 ${isLast ? 'h-8 w-8' : 'h-[35px] w-8'}`}>
          <div className="bg-black rounded-full h-3 w-3"></div>
        </div>
        {!isLast && <div className="h-full w-0 border-l-2 border-gray-500 border-dashed "></div>}
      </div>

      {/* Content */}
      <div className="pb-12  w-full">
        <p className="text-gray-700 font-medium  mb-1">{date}</p>
        <h3 className="text-3xl font-medium text-black mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const timelineData = [
    {
      date: "November 2023",
      title: "Achieved Major Industry Recognition",
      description: "Won multiple awards in startup, retail, and customer service categories, highlighting his contributions to circular tech."
    },
    {
      date: "June 2022",
      title: "Founded a Tech Startup Focused on Sustainability",
      description: "Launched a business dedicated to reducing e-waste and carbon emissions through the circular economy."
    },
    {
      date: "May 2022",
      title: " Began Role as Head of Sales at Alchemy Global Solutions",
      description: "Initiated strategic sales approaches that generated significant revenue and expanded global market presence."
    },
    {
      date: "January 2020",
      title: "Entrepreneurial Journey as Business Owner at Budget Phones Australia",
      description: "Developed a successful retail business with personal branding and operational excellence."
    },
    {
      date: "2020 - 2021",
      title: "Welfare Officer at La Trobe Student Union ",
      description: "Actively contributed to student well-being through leadership and support initiatives."
    },
    {
      date: "June 2015",
      title: "Sales Leadership at KM Assets Pty. LTD",
      description: "Demonstrated progressive leadership and sales expertise in a family business setting."
    },

      
  ];

  return (
    <div className="container-custom mx-auto  p-6">
      <div className="pl-4">
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