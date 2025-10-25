import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { RxCross2 } from 'react-icons/rx';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function PortfolioModal({
  button_1_detailed_text_color,
  button_1_detailed_text,
  open,
  setOpen
}: {
  button_1_detailed_text_color: string,
  button_1_detailed_text: string;
  open: boolean;
  setOpen: (open: boolean) => void;
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
            <div className='relative w-full max-w-4xl transform rounded-lg bg-white transition-all max-h-[500px] overflow-y-auto'>
              <div className='sticky top-0 z-20 flex justify-between items-center bg-white px-6 pt-4 pb-2'>
                <p className='flex-1 text-center text-2xl font-bold text-black'>Portfolio</p>
                <button
                  type='button'
                  className='rounded-full bg-white p-2 hover:bg-gray-100'
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  <RxCross2 className='h-6 w-6' />
                </button>
              </div>

              <div className='px-6 pb-6'>
                <div
                  className={`prose max-w-none [&>h2]:pt-3 [&>h3]:pt-3 [&>h3]:pb-3 [&>h2]:text-2xl [&>h3]:text-xl [&>p]:mb-2 last:[&>p]:mb-0 text-${button_1_detailed_text_color}`}
                  dangerouslySetInnerHTML={{ __html: button_1_detailed_text }}
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
