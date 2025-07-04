import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { RxCross2 } from 'react-icons/rx';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function TopServicesModal({
  open,
  setOpen,
  selectedService
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedService: any;
}) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-[100] overflow-y-auto'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className='flex min-h-screen items-center justify-center px-2 sm:px-4'>
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
            <div className='relative w-full max-w-4xl transform rounded-lg bg-white transition-all'>
              <div className='absolute right-2 top-2 sm:-right-10 sm:-top-14 z-[101]'>
                <button
                  type='button'
                  className='rounded-full bg-white p-2 hover:bg-gray-100'
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  <RxCross2 className='h-5 w-5 sm:h-6 sm:w-6' />
                </button>
              </div>

              <div className='p-4 sm:p-6'>
                <div className='flex flex-col gap-3 sm:gap-4'>
                  <p className='text-center text-lg font-bold text-black sm:text-xl md:text-3xl lg:text-4xl'>
                    {selectedService.title}
                  </p>

                  <div className='space-y-4 sm:space-y-8'>
                    <p className='text-sm sm:text-base'>{selectedService.data.paragraph1}</p>

                    <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 sm:gap-4'>
                      {selectedService.data.points.map((point: string, index: number) => (
                        <div key={point} className='flex items-center space-x-2'>
                          {index === 0 ? (
                            <svg className='h-2 w-2 text-gray-500' fill='currentColor' viewBox='0 0 24 24'>
                              <circle cx='12' cy='12' r='6' />
                            </svg>
                          ) : (
                            <svg
                              className='h-4 w-4 text-gray-500 sm:h-5 sm:w-5'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                            </svg>
                          )}
                          <span className={`text-xs text-gray-700 sm:text-sm md:text-base ${index === 0 ? 'font-bold' : ''}`}>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className='text-sm sm:text-base'>{selectedService.data.paragraph2}</p>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
