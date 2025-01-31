import sendMessage from 'lib/sendEmail';
import { startTransition, useEffect, useState } from 'react';
import { contactFromValidate, contactValidate } from 'Validation/validation';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { PhoneNumberUtil } from 'google-libphonenumber';
import ReCAPTCHA from 'react-google-recaptcha';

const initializeValue = {
  name: '',
  email: '',
  message: '',
  phone: ''
};
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  phone?: string;
}

const initializeErrors = {
  name: '',
  email: '',
  message: '',
  phone: ''
};

interface response {
  status?: boolean | null;
  data?: string | null;
}

// * VALIDATION PHONE NUMBER
const phoneUtil = PhoneNumberUtil.getInstance();
const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const ContactForm = ({ mode = 'dark' }: { mode?: 'light' | 'dark' }) => {
  const [data, setData] = useState(initializeValue);
  const [cap, setCap] = useState(false);
  const [formErrors, setFormErrors] = useState(initializeErrors as FormErrors);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState({ status: null, data: null } as response);
  const [phone, setPhone] = useState<string | undefined>();
  const captchaKey:string | undefined = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA;

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    setData(
      prevData =>
        ({
          ...prevData,
          phone: phone
        }) as typeof prevData
    );
  }, [phone]);

  // error handling
  useEffect(() => {
    if (data.name !== '' || data.email !== '' || data.message !== '') {
      setFormErrors(contactFromValidate(data));
    }
  }, [data]);

  useEffect(() => {
    if (data.phone !== '' && data.phone !== undefined) {
      const result = isPhoneValid(phone!);
      if (!result) {
        setFormErrors(prevErrors => ({
          ...prevErrors,
          phone: 'Provide a valid phone number'
        }));
      }
    }
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('i am click', formErrors);
    if (Object.keys(formErrors).length > 0) {
      console.log('All field are required', formErrors);
    } else {
      try {
        setIsLoading(true);
        startTransition(() => {
          sendMessage(data).then(res => {
            console.log(res);
            if (res.status) {
              setData(initializeValue);
              setIsLoading(false);
              setResponse({ status: res.status, data: res.message });
              setFormErrors(initializeValue);
            } else {
              setResponse({ status: res.status, data: res.message });
              setIsLoading(false);
            }
          });
        });
      } catch (error) {
        // console.log('some things wrong', error)
        setResponse({ status: false, data: 'some things wrong' });
        setIsLoading(false);
      }
    }
  };

  console.log(data);

  return (
    <div className={`mt-5 w-full rounded`}>
      <form onSubmit={handleSubmit} className='mx-auto'>
        <div className='-m-2 flex flex-wrap'>
          <div className='flex w-full gap-5 p-2'>
            <div className='w-full'>
              <input
                type='text'
                id='name'
                value={data.name}
                onChange={handleChange}
                name='name'
                placeholder='Name'
                className={`w-full border border-white border-opacity-60 bg-transparent px-5 py-1 leading-8 text-white  placeholder-white outline-none transition-colors duration-200 ease-in-out focus:border-[#624DE7] focus:ring-1 focus:ring-indigo-600/50`}
              />
              {formErrors.name?.includes('required') && (
                <p style={{ color: 'red', fontSize: '13px', width: '100%' }}>{formErrors.name}</p>
              )}
            </div>
          </div>

          <div className='flex w-full gap-5 p-2'>
            <div className='w-full'>
              <input
                type='email'
                id='email'
                value={data.email}
                onChange={handleChange}
                placeholder='Email'
                name='email'
                className={`w-full border border-white border-opacity-60 bg-transparent px-5 py-1 leading-8 text-white  placeholder-white outline-none transition-colors duration-200 ease-in-out focus:border-[#624DE7] focus:ring-1 focus:ring-indigo-600/50`}
              />
              {formErrors.email?.includes('required') && (
                <p style={{ color: 'red', fontSize: '13px', width: '100%' }}>{formErrors.email}</p>
              )}
              {formErrors.email?.includes('Valid Email') && (
                <p style={{ color: 'red', fontSize: '13px', width: '100%' }}>{formErrors.email}</p>
              )}
            </div>
          </div>

          <div className='w-full p-2'>
            {/* <input
                 type="text"
                 id="phone"
                 value={data.phone}
                 onChange={handleChange}
                 name="phone"
                 placeholder="Phone"
                 className={w-full bg-transparent border border-white border-opacity-60 focus:border-[#624DE7] focus:ring-1 focus:ring-indigo-600/50 text-white  placeholder-white outline-none py-1 px-5 leading-8 transition-colors duration-200 ease-in-out}
                /> */}
            <PhoneInput
              style={{ paddingLeft: '10px' }}
              className={`phoneNumberInput w-full border border-white border-opacity-60 bg-transparent px-5 py-1 leading-8 text-black  placeholder-white outline-none transition-colors duration-200 ease-in-out focus:border-[#624DE7] focus:ring-1 focus:ring-indigo-600/50`}
              placeholder='Phone'
              international
              country='AU'
              defaultCountry='AU'
              value={phone}
              onChange={setPhone}
            />
            {formErrors.phone?.includes('required') && (
              <p style={{ color: 'red', fontSize: '13px', width: '100%' }}>{formErrors.phone}</p>
            )}
            {formErrors.phone?.includes('valid phone number') && (
              <p style={{ color: 'red', fontSize: '13px', width: '100%' }}>{formErrors.phone}</p>
            )}
          </div>

          <div className='w-full p-2'>
            <div className='relative'>
              <textarea
                id='message'
                value={data.message}
                onChange={handleChange}
                name='message'
                rows={4}
                placeholder='Message'
                className={`w-full border border-white border-opacity-60 bg-transparent px-5 py-1 leading-8 text-white  placeholder-white outline-none transition-colors duration-200 ease-in-out focus:border-[#624DE7] focus:ring-1 focus:ring-indigo-600/50`}
              ></textarea>
              {formErrors.message?.includes('required') && (
                <p style={{ color: 'red', fontSize: '13px', width: '100%' }}>{formErrors.message}</p>
              )}
            </div>
          </div>
          <div className='pl-2 pb-5'>
            <ReCAPTCHA sitekey={captchaKey || ""} onChange={() => setCap(true)} />
          </div>

          <div className='w-full p-2'>
            <button
              disabled={!cap || isLoading}
              className={`mx-auto max-h-[54px] w-full  rounded-[50px] border-0  py-2 text-center text-lg text-black focus:outline-none md:max-w-[262px] ${ !cap || isLoading ? 'bg-gray-400' : `px-8 bg-white  hover:opacity-90`}`}
            >
              {isLoading ? (
                <span className='flex items-center justify-center gap-2 text-center'>
                  <svg
                    aria-hidden='true'
                    className='h-8 w-8 animate-spin fill-[#2187C7] text-gray-200 dark:text-gray-600'
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
                    />
                  </svg>
                  Processing...
                </span>
              ) : (
                'Send message'
              )}
            </button>
          </div>
        </div>
      </form>
      {response?.status === true && (
        <div className='mt-4 border-2 border-green-500 p-2'>
          <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>{response.data}</p>
        </div>
      )}
      {/* // TODO: add transition here */}
      {response?.status === false && (
        <div className='mt-4 border-2 border-red-500 p-2'>
          <p className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}>{response.data}</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
