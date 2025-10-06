import React from 'react';
import { poppins } from 'styles/fonts';

const Quote = ({ quoteData }: { quoteData: any }) => {
  // console.log("quoteData", quoteData);

  return (
    <div className='mx-4 mb-10 bg-black py-20 sm:mx-6 sm:py-32 md:mx-6 md:py-24 lg:mx-12 lg:py-40 xl:mx-10 xl:py-28'>
      <div className='container-custom px-4 sm:px-6 md:px-10 lg:px-2 xl:px-4'>
        <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-20 lg:gap-24 xl:gap-28'>
          <div className='flex flex-col justify-center gap-3 sm:gap-4 md:gap-1 lg:gap-2 xl:gap-3'>
            {/* <p className=' px-3  text-uppercase text-[16px] sm:text-[26px] text-gray-400'> Steven Bartlett said ——</p> */}
            <p
              style={{ lineHeight: '180%' }}
              className={`${poppins.className} px-3 md:px-10 text-center text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl`}
            >
              {quoteData.quote}
            </p>
            <p className=' px-3 pt-5 text-center text-[16px] text-gray-400 sm:text-[26px] lg:text-[28px] xl:text-[30px]'>{quoteData.author}</p>
            <p className=' px-3 text-center text-[16px] text-gray-400 sm:text-[20px] lg:text-[22px] xl:text-[24px]'>{quoteData.book_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
