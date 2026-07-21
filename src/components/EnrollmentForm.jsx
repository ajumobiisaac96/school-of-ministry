'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Nigerian phone number validator
// Accepts: 08XXXXXXXXX, 07XXXXXXXXX, 09XXXXXXXXX, +2348XXXXXXXXX, 2348XXXXXXXXX
function isValidNigerianPhone(number) {
  const cleaned = number.replace(/[\s\-().]/g, '');
  // Match: 0[7-9][0-1]\d{8} or +234/234 followed by [7-9][0-1]\d{8}
  const localFormat = /^0[7-9][01]\d{8}$/;
  const intlFormat = /^(\+?234)[7-9][01]\d{8}$/;
  return localFormat.test(cleaned) || intlFormat.test(cleaned);
}

export default function EnrollmentForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ fullName: '', whatsappNumber: '' });

  // Allow only digits, +, spaces, dashes, parentheses in phone field
  const handlePhoneChange = (e) => {
    const val = e.target.value.replace(/[^0-9+\s\-().]/g, '');
    setWhatsappNumber(val);
    if (errors.whatsappNumber) {
      setErrors((prev) => ({ ...prev, whatsappNumber: '' }));
    }
  };

  const handleNameChange = (e) => {
    setFullName(e.target.value);
    if (errors.fullName) {
      setErrors((prev) => ({ ...prev, fullName: '' }));
    }
  };

  const validate = () => {
    const newErrors = { fullName: '', whatsappNumber: '' };
    let valid = true;

    if (!fullName.trim() || fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full name (at least 3 characters).';
      valid = false;
    }

    if (!whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'Please enter your WhatsApp number.';
      valid = false;
    } else if (!isValidNigerianPhone(whatsappNumber)) {
      newErrors.whatsappNumber = 'Enter a valid Nigerian number (e.g. 08012345678 or +2348012345678).';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    if (typeof window !== 'undefined') {
      localStorage.setItem('tea_inquiry_fullName', fullName.trim());
      localStorage.setItem('tea_inquiry_whatsappNumber', whatsappNumber.trim());
    }

    setTimeout(() => {
      router.push(`/apply?name=${encodeURIComponent(fullName.trim())}&phone=${encodeURIComponent(whatsappNumber.trim())}`);
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
          <span className="text-xs font-semibold text-[#110014]/90">8-week intensive training</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#9E7B28] shrink-0" />
          <span className="text-xs font-semibold text-[#110014]/90">Building effective Ministers</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-4 h-4 text-[#9E7B28] shrink-0" />
          <span className="text-xs font-semibold text-[#110014]/90">Implementation led</span>
        </div>
      </div>

      <form onSubmit={handleInquirySubmit} className="flex flex-col gap-5" noValidate>
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] tracking-wider font-bold text-[#3f0c43] uppercase">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={handleNameChange}
            placeholder="e.g. Samuel Adeyemi"
            className={`w-full px-4 py-3 bg-[#110014]/5 border rounded-lg text-xs focus:outline-none text-[#110014] placeholder-[#110014]/40 transition-colors ${
              errors.fullName
                ? 'border-red-500 focus:border-red-500'
                : 'border-[#3f0c43]/15 focus:border-[#3f0c43]/60'
            }`}
          />
          {errors.fullName && (
            <span className="text-[10px] text-red-500 font-medium">{errors.fullName}</span>
          )}
        </div>

        {/* WhatsApp Number */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[9px] tracking-wider font-bold text-[#3f0c43] uppercase">
            WhatsApp Number
          </label>
          <input
            type="tel"
            value={whatsappNumber}
            onChange={handlePhoneChange}
            placeholder="e.g. 08012345678 or +2348012345678"
            inputMode="tel"
            className={`w-full px-4 py-3 bg-[#110014]/5 border rounded-lg text-xs focus:outline-none text-[#110014] placeholder-[#110014]/40 transition-colors ${
              errors.whatsappNumber
                ? 'border-red-500 focus:border-red-500'
                : 'border-[#3f0c43]/15 focus:border-[#3f0c43]/60'
            }`}
          />
          {errors.whatsappNumber && (
            <span className="text-[10px] text-red-500 font-medium">{errors.whatsappNumber}</span>
          )}
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
        Limited seats available for 2026
      </span>
    </div>
  );
}
