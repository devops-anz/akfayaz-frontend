import React, { useState } from 'react';
import { poppins } from 'styles/fonts';
import TopServicesModal from 'view/ui/shared-component/component/topservices';

export interface TopService {
  id: number;
  top_service_main_id: number;
  name: string;
  short_description: string;
  description: string;
  button_text: string;
  button_url: string;
  image: string | null;
  order: number;
  is_active: boolean;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  image_url: string;
}

export interface HomePageTopServicesData {
  id: number;
  pre_title: string;
  title: string;
  subtitle: string;
  button_text: string;
  button_link: string;
  is_active: number; // could be boolean if backend sends 0/1, but keeping number here
  created_at: string;
  updated_at: string;
  top_services: TopService[];
}

const defaultColorPalette = ['#bcd2d0', '#d2d0bc', '#5d576b', '#7c7c7c', '#dfb2b2', "#5d576b"];

const TopServices = ({ topServicesData }: { topServicesData: HomePageTopServicesData }) => {
  // console.log("topServicesData", topServicesData)
  const [openTopServices, setOpenTopServices] = useState(false);

  const [selectedService, setSelectedService] = useState<any>(null);

  const handleOpenModal = (item: any) => {
    setSelectedService(item);
    setOpenTopServices(true);
  };

  return (
    <>
      <div id='services'>
        <div className='container-custom pt-10 sm:pt-28 md:pt-20'>
          <div className='mb-10 px-4 sm:mb-16 sm:px-6 md:px-0 md:mb-20'>
            <p className={`font-[700] text-black ${poppins.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>
              {topServicesData?.title}
            </p>
            <p className='mb-3 pt-6 sm:mb-4 sm:pt-8 md:mb-5 md:pt-10'>
              {topServicesData?.subtitle}
            </p>
            <hr className='border border-solid border-gray-200' />
          </div>

          <div className='mb-10 grid grid-cols-1 gap-4 px-4 sm:mb-16 sm:grid-cols-2 sm:gap-6 sm:px-6 md:px-0 md:mb-20 md:grid-cols-3 md:gap-8'>
            {topServicesData.top_services.map((item: any, index: number) => {
              // Use color from API if available, otherwise use defaultColorPalette cyclically
              const backgroundColor = item?.color || defaultColorPalette[index % defaultColorPalette.length];

              return (
                <div key={index} style={{ backgroundColor }} className={`group sm:bg-transparent relative overflow-hidden`}>
                  <p
                    style={{ height: '280px', width: '100%', backgroundColor }}
                    className='opacity-0 md:opacity-100 w-full flex items-center justify-center text-5xl font-bold text-white bg-gray-100 transition-transform duration-1000 ease-in-out group-hover:scale-105'
                  >
                    {item.name} 
                  </p>
                  <div className='absolute inset-0 flex flex-col items-center justify-evenly bg-black/90 transition-all duration-700 ease-in-out md:bg-gray-500/0 md:group-hover:bg-black/85'>
                    <p className='text-3xl font-medium text-white transition-all duration-1000 delay-100 ease-in-out sm:text-3xl md:translate-y-10 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100'>
                      {item.name}
                    </p>

                    <p className='p-5 text-center text-sm text-white transition-all duration-1000 delay-100 ease-in-out sm:text-sm md:opacity-0 md:group-hover:opacity-100'>
                      {item.short_description}
                    </p>
                    <button
                      onClick={() => handleOpenModal(item)}
                      className='bg-[#cfd8b9] px-4 py-2 font-bold text-black transition-all duration-1000 delay-100 ease-in-out hover:bg-amber-500 sm:px-6 sm:py-2.5 md:translate-y-[-10px] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100'
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <TopServicesModal open={openTopServices} setOpen={setOpenTopServices} selectedService={selectedService} />
    </>
  );
};

export default TopServices;
