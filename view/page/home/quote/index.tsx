import React from 'react';
import { poppins } from 'styles/fonts';

const Quote = () => {
  return (
    <div className='mx-4 mb-10 bg-black py-20 sm:mx-6 sm:py-32 md:mx-10 md:py-36 lg:py-44'>
      <div className='container-custom px-4 sm:px-6'>
        <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-20'>
          <div className='flex flex-col justify-center gap-3 sm:gap-4 md:gap-1'>
            {/* <p className=' px-3  text-uppercase text-[16px] sm:text-[26px] text-gray-400'> Steven Bartlett said ——</p> */}
            <p
              style={{ lineHeight: '180%' }}
              className={`${poppins.className} px-3  text-center text-xl font-bold text-white sm:text-2xl md:text-5xl lg:text-4xl`}
            >
              "The cost of being different is highest when you’re young—when the system forces you to fit in. But as you
              grow, the world starts clapping for the unique ones, learning from them, stealing from them, and aspiring
              to be them"
            </p>

            <p className=' px-3 pt-5 text-center text-[16px] text-gray-400 sm:text-[26px]'>Steven Bartlette</p>
            <p className=' px-3 text-center text-[16px] text-gray-400 sm:text-[20px]'>The Diary Of A CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
