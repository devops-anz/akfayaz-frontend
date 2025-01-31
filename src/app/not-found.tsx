'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect, useState } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';

const NotFound = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const redirectHome = () => {
      router.push('/');
    };

    const countdownInterval = setInterval(() => {
      setCountdown(prevCount => prevCount - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(countdownInterval);
      redirectHome();
    }, 5000);

    return () => {
      clearTimeout(timeout);
      clearInterval(countdownInterval);
    };
  }, [router]);

  return (
    <div className='flex h-[100vh] items-center justify-center text-center'>
      <div>
        <BsFillQuestionCircleFill className='mx-auto' size={120} />
        <h2 className='mt-3 text-4xl font-semibold'>Page Not Found</h2>
        <p className='my-2 text-lg font-medium'>
          Oops! We couldn't find the page that you're looking for. <br /> Please check the address and try again.
        </p>
        <p className='primary-text text-xl font-semibold'>Error Code: 404</p>
        <p className='mb-4 text-lg'>Redirecting to home page in {countdown} seconds...</p>
      </div>
    </div>
  );
};

export default NotFound;
