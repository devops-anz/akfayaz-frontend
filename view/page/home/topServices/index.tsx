import Image from 'next/image';
import React, { useState } from 'react';
// import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { poppins } from 'styles/fonts';
import TopServicesModal from 'view/ui/shared-component/component/topservices';

const topServices = [
  {
    image: '/image/topservices/1.png',
    category: 'Strategic Sales Solutions to Boost Revenue and Client Engagement',
    title: 'Sales',
    color: "#bcd2d0",
    data: {
      paragraph1: 'Driving revenue requires more than ambition—it needs a structured sales system built for consistency and scale. I help businesses design tailored sales strategies that increase close rates, boost team performance, and improve customer relationships.',
      paragraph2: 'By aligning your goals with proven tactics, I build systems that shorten your sales cycle and deliver measurable outcomes. Whether you’re building a team or revamping your pitch, I provide the tools and insights to drive growth.',
      points: [ 
        'I\'m good at:',
        'Sales Process Development',
        'High-Ticket Deal Closing',
        'CRM & Funnel Optimization',
        'Team Coaching & Enablement',
        'Client Retention Strategy'
      ]
    }
  },
  {
    image: '/image/topservices/2.png',
    category: 'Innovative Marketing Strategies for Brand Growth and Visibility',
    title: 'Marketing',
    color: "#d2d0bc",
    data: {
      paragraph1: 'Effective marketing builds connection, not just visibility. I work with businesses to develop creative, data-driven campaigns that attract, engage, and convert the right audiences. From strategy to execution, I bring clarity to your brand voice.',
      paragraph2: 'Whether you’re launching a new product or scaling your digital presence, I deliver marketing strategies that build trust and create demand that lasts.',
      points: [ 
        'I\'m good at:',
        'Brand Positioning & Messaging',
        'Lead Generation Campaigns',
        'Funnel Strategy & CRO',
        'SEO & Content Planning',
        'Social & Paid Advertising'
      ]
    }
  },
  {
    image: '/image/topservices/3.png',
    category: 'Efficient Procurement Processes for Cost-Effective Resource Management',
    title: 'Procurement',
    color: "#5d576b",
    data: {
      paragraph1: 'Procurement plays a crucial role in keeping operations lean and resources well-managed. I support businesses in building procurement systems that ensure timely sourcing, cost savings, and better supplier relationships.',
      paragraph2: 'From supplier selection to end-to-end procurement transformation, I help businesses gain control, improve efficiency, and scale their operations with confidence.',
      points: [ 
        'I\'m good at:',
        'Strategic Sourcing & Bidding',
        'Vendor Relationship Management',
        'Cost Optimization & Forecasting',
        'Risk & Contract Compliance',
        'Inventory & Supply Chain Planning'
      ]
    }
  },
  {
    image: '/image/topservices/4.png',
    category: 'Smart Acquisition Strategies for Seamless Business Expansion',
    title: 'Acquisition',
    color: "#7c7c7c",
    data: {
      paragraph1: 'Growth through acquisition can accelerate your business—if done with the right structure. I support entrepreneurs and teams through every phase of the acquisition journey, from discovery to integration.',
      paragraph2: 'Whether you’re acquiring to expand capabilities or consolidate your market position, I’ll help you make informed decisions and execute deals that drive long-term value.',
      points: [ 
        'I\'m good at:',
        'Target Research & Evaluation',
        'Deal Structuring & Negotiation',
        'Due Diligence Frameworks',
        'Integration & Change Management',
        'Stakeholder & Investor Alignment'
      ]
    }
  },
  {
    image: '/image/topservices/5.png',
    category: ' Expert Consultancy Services for Optimized Business Performance',
    title: 'Consultancy',
    color: "#dfb2b2",
    link: 'https://www.anzbizconsultants.com.au/',
    data: {
      paragraph1: 'Growing a business comes with challenges—scaling teams, building systems, and navigating market shifts. I provide tailored consulting to help businesses gain clarity, improve efficiency, and unlock their next stage of growth.',
      paragraph2: 'With a hands-on, collaborative approach, I guide teams to identify gaps, streamline operations, and build the infrastructure needed to grow with purpose and resilience.',
      points: [ 
        'I\'m good at:',
        'Business Model Planning',
        'Systems & Process Scaling',
        'Team Development & Culture',
        'Performance Metrics & Audits',
        'Strategic Execution Support'
      ]
    }
  },
  {
    image: '/image/topservices/6.png',
    category: 'Creative Web Design for Engaging Digital User Experiences',
    title: 'Web Design',
    color: "#5d576b",
    link: 'https://www.anzwebstudios.com.au/',
    data: {
      paragraph1: 'Your website is often the first impression—and it needs to perform. I design digital experiences that reflect your brand, engage users, and convert traffic into action. Function meets form in every build.',
      paragraph2: 'From corporate sites to eCommerce builds, I create designs that are clean, scalable, and results-driven—so your online presence works as hard as you do.',
      points: [ 
        'I\'m good at:',
        'UX/UI Strategy & Layout',
        'WordPress, Shopify, Webflow',
        'Mobile-First Development',
        'Conversion-Focused Pages',
        'SEO & Performance Optimization'
      ]
    }
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
        <div className='container-custom pt-10 sm:pt-28 md:pt-20'>
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
              <div key={index} style={{backgroundColor: item.color}} className={`group sm:bg-transparent relative overflow-hidden`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  style={{ height: '280px', width: '100%' }}
                  className='opacity-0 md:opacity-100 w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110'
                />
                <div className='absolute inset-0 flex flex-col items-center justify-evenly bg-black/70 transition-all duration-500 ease-in-out md:bg-gray-500/0 md:group-hover:bg-black/85'>
                  <p className='text-3xl font-medium text-white transition-opacity duration-300 ease-in-out sm:text-3xl md:opacity-0 md:group-hover:opacity-100'>
                    {item.title}
                  </p>

                  <p className='p-5 text-center text-sm text-white transition-opacity duration-300 sm:text-sm md:opacity-0 md:group-hover:opacity-100'>
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
