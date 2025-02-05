import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Image from 'next/image';

const data = [
  {
    id: 1,
    image: '/image/recent-projects/1.webp'
  },
  {
    id: 2,
    image: '/image/recent-projects/2.webp'
  },
  {
    id: 3,
    image: '/image/recent-projects/3.webp'
  }
];

export default function ProjectModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const cancelButtonRef = useRef(null);

  const PrevButton = (props: any) => (
    <button {...props} style={{ display: sliderIndex === 0 ? 'none' : 'block' }} className='!text-white custom-prev-button'>
      <IoArrowBackCircleOutline size={40} />
    </button>
  );

  const NextButton = (props: any) => (
    <button
      {...props}
      style={{ display: sliderIndex === data.length - 1 ? 'none' : 'block' }}
      className='!text-white custom-next-button'

    >
      <IoArrowForwardCircleOutline size={40} />
    </button>
  );

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    arrows: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    afterChange: (index: number) => setSliderIndex(index)
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-[100] overflow-y-auto'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className='flex min-h-screen items-center justify-center px-4'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black/75 transition-opacity' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='relative w-full max-w-4xl transform rounded-lg   transition-all'>
              <div className='fixed right-4 -top-10 z-[101]'>
                <button
                  type='button'
                  className='rounded-full bg-white p-2  hover:bg-gray-100'
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  <RxCross2 className='h-6 w-6' />
                </button>
              </div>

              <div className='p-6'>
                <Slider {...settings}>
                  {data.map((item, index) => (
                    <div key={index} className='relative aspect-[16/9]'>
                      <Image
                        src={item.image}
                        alt={`Project image ${index + 1}`}
                        fill
                        className='object-contain'
                        sizes='(max-width: 896px) 100vw, 896px'
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
