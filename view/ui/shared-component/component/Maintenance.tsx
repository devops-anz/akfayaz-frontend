import React from 'react';

const Maintenance = ({ message }: { message?: string }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex h-full w-full items-center justify-center bg-white">
      <div className="mx-4 w-full max-w-xl rounded-lg bg-white border p-8 text-center shadow-2xl">
        <h1 className="text-2xl sm:text-3xl font-semibold text-black">We’ll be right back</h1>
        <p className="mt-3 text-black">
          {message || 'The site is under maintenance. Please check back soon.'}
        </p>
      </div>
    </div>
  );
};

export default Maintenance;