import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { RxCross2 } from 'react-icons/rx';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function PortfolioModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-[100] overflow-y-auto'
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className='flex min-h-screen  items-center justify-center px-4'>
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
            <div className='relative w-full max-w-4xl transform  rounded-lg bg-white   transition-all'>
              <div className='fixed -right-10 -top-14 z-[101]'>
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
                <div className='flex flex-col gap-4'>
                  <p className='text-center text-2xl font-bold text-black'>Portfolio</p>

                  <div className='space-y-8'>
                    With over a decade of experience driving business growth and empowering individuals, I am a dynamic
                    leader, consultant, and mentor. As the Head of Sales at a leading multinational corporation, I have
                    consistently delivered outstanding results by leading high-performing teams, implementing innovative
                    strategies, and building strong client relationships across diverse markets. <p />{' '}
                    <p>
                      {' '}
                      Beyond the corporate world, I am an accomplished business consultant, specializing in scaling
                      startups, optimizing operations, and driving sustainable growth for businesses of all sizes.
                      Recognized as an award-winning entrepreneur, I have firsthand experience navigating the challenges
                      and triumphs of building successful ventures.{' '}
                    </p>
                    <p>
                      {' '}
                      As a certified life coach, I am passionate about helping individuals unlock their potential and
                      achieve personal and professional fulfillment. Whether guiding a business to its next milestone or
                      coaching someone through a life transition, I bring a unique blend of strategic insight, empathy,
                      and actionable advice. Driven by a commitment to excellence and a belief in the power of
                      collaboration, I am dedicated to making a lasting impact on businesses and lives alike.
                    </p>
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
