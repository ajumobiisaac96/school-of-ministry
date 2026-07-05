'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function EnrollmentForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!fullName || !whatsappNumber) return;

    setIsSubmitting(true);

    if (typeof window !== 'undefined') {
      localStorage.setItem('tea_inquiry_fullName', fullName);
      localStorage.setItem('tea_inquiry_whatsappNumber', whatsappNumber);
    }

    setTimeout(() => {
      router.push(`/apply?name=${encodeURIComponent(fullName)}&phone=${encodeURIComponent(whatsappNumber)}`);
    }, 600);
  };

  return (
    <div id="enrollment-form" className="w-full bg-white text-[#110014] rounded-xl p-8 shadow-2xl border-t-4 border-[#9E7B28] relative">
      {/* Decorative top accent */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#9E7B28] text-white text-[9px] tracking-[0.25em] font-bold uppercase px-4 py-1 rounded-full">
        Apply Now
      </div>

      <span className="block text-center text-[10px] tracking-[0.2em] font-bold text-[#3f0c43]/60 uppercase mb-6 pt-2">
        Enrollment Inquiry
      </span>

      {/* Core Values */}
      <div className="flex flex-col gap-3 mb-6 bg-[#3f0c43]/5 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#9E7B28] shrink-0" />
          <span className="text-xs font-semibold text-[#110014]/90">Comprehensive Theological Training</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#9E7B28] shrink-0" />
          <span className="text-xs font-semibold text-[#110014]/90">Leadership Mentorship Programs</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#9E7B28] shrink-0" />
          <span className="text-xs font-semibold text-[#110014]/90">Global Networking Opportunities</span>
        </div>
      </div>

      <form onSubmit={handleInquirySubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] tracking-wider font-bold text-[#3f0c43] uppercase">
            Full Name
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Samuel Adeyemi"
            className="w-full px-4 py-3 bg-[#110014]/5 border border-[#3f0c43]/15 rounded-lg text-xs focus:outline-none focus:border-[#3f0c43]/60 text-[#110014] placeholder-[#110014]/40"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] tracking-wider font-bold text-[#3f0c43] uppercase">
            WhatsApp Number
          </label>
          <input
            type="tel"
            required
            value={whatsappNumber}
            onChange={(e) => setWhatsappNumber(e.target.value)}
            placeholder="+234 ..."
            className="w-full px-4 py-3 bg-[#110014]/5 border border-[#3f0c43]/15 rounded-lg text-xs focus:outline-none focus:border-[#3f0c43]/60 text-[#110014] placeholder-[#110014]/40"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 mt-2 bg-[#3f0c43] hover:bg-[#521357] text-white font-bold text-xs tracking-wider rounded-lg uppercase flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 shadow-lg"
        >
          {isSubmitting ? 'Initializing...' : (
            <>
              Secure Your Spot
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      <span className="block text-center text-[8px] tracking-widest font-semibold text-[#110014]/40 uppercase mt-4">
        Limited seats available for 2024
      </span>
    </div>
  );
}
