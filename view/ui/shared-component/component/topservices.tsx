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
                    {selectedService?.name}
                  </p>

                  <div className='space-y-4 sm:space-y-8'>

                    <div
                      className="prose max-w-none [&>h2]:pt-3 [&>h3]:pt-3 [&>h3]:pb-3 [&>h2]:text-2xl [&>h3]:text-xl [&>p]:mb-2 last:[&>p]:mb-0"
                      dangerouslySetInnerHTML={{ __html: selectedService?.description }}
                    />
                    
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
