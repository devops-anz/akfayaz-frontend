import { Dialog, Transition } from '@headlessui/react';
import { ChangeEvent, Fragment, FormEvent, startTransition, useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

import sendMessage from '../../../../lib/sendEmail';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

const initializeValue = {
  name: '',
  email: '',
  phone: ''
};

export default function DownloadCVModal({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const cancelButtonRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({ status: false, data: '' });
  const [formData, setFormData] = useState<FormData>(initializeValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Form Data:", formData);

    if (formData.name === '' || formData.email === '') {
      setResponse({ status: false, data: 'Please fill all fields' });

      return;
    }

    try {
      setIsLoading(true);
      startTransition(() => {
        sendMessage(formData).then((res: any) => {
          // console.log(res);
          if (res.status) {
            setFormData(initializeValue);
            setIsLoading(false);
            setResponse({ status: res.status, data: res.message });
            // Open CV download URL after successful submission
            window.open('https://drive.google.com/file/d/1JFXI9pzm8j1IZqzPFoIKWuHgRD_cXVw-/view', '_blank');
          } else {
            setResponse({ status: res.status, data: res.message });
            setIsLoading(false);
          }
        });
      });
    } catch (error) {
      // console.log('some things wrong', error);
      setResponse({ status: false, data: 'some things wrong' });
      setIsLoading(false);
    }

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
  };

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
                  <p className='text-center text-2xl font-bold text-black'>Download CV</p>

                  <div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 block p-3 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 block p-3 w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone 
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 block p-3 w-full border  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Enter your phone number"
                        />
                      </div>



                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        {isLoading ? 'Sending...' : 'Submit'}
                      </button>
                    </form>

                    {/* {isLoading && <div className="text-center">
             <p> Sending Message...</p>
          </div>} */}

                    {response?.status === true && (
                      <div className='text-black pt-4'>
                        <p>{response.data}</p>
                      </div>
                    )}
                    {response?.status === false && (
                      <div className=' text-danger  '>
                        <p>{response.data}</p>
                      </div>
                    )}
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
