'use client';

import React, { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#110014] text-white p-6 text-center">
      <h2 className="text-2xl font-serif font-bold text-[#E5C158] mb-4">Something went wrong!</h2>
      <p className="text-white/60 mb-6 max-w-md">
        {error?.message || "An unexpected error occurred during execution."}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 bg-[#9E7B28] text-white font-semibold rounded hover:bg-[#b59441] transition btn-gold-shadow"
      >
        Try again
      </button>
    </div>
  );
}
