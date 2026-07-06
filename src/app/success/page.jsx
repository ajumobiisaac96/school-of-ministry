'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GraduationCap, Award, Users, ArrowRight } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="w-full min-h-[85vh] bg-[#FFFDFC] text-[#110014] flex flex-col justify-center px-6 py-8">
      <div className="w-full flex justify-center mb-8">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="The Edifying Assembly" width={48} height={48} className="object-contain" />
            <div className="flex flex-col">
              <span className="text-[12px] font-serif font-bold tracking-[0.2em] text-[#3f0c43] uppercase">
                The Edifying Assembly
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="max-w-md mx-auto w-full flex flex-col items-center">
        
        {/* SUBMISSION STATUS TAG */}
        <span className="bg-[#9E7B28] text-white text-[9px] font-bold tracking-[0.2em] px-3.5 py-1.5 rounded uppercase mb-4 shadow-sm">
          Submission Complete
        </span>

        {/* HEADINGS */}
        <h1 className="text-3xl font-serif font-bold text-[#3f0c43] text-center mb-4 relative">
          Application <br />
          <span className="relative inline-block pb-1.5">
            Successful!
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#9E7B28]" />
          </span>
        </h1>

        {/* PARAGRAPH */}
        <div className="w-full pl-4 border-l-2 border-[#9E7B28] mb-8">
          <p className="text-xs leading-relaxed text-[#110014]/70">
            Your application has been received with the reverence it deserves. To complete your enrollment and step into your calling, please join our official student community on WhatsApp.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="w-full flex flex-col gap-4 items-center">
          <a
            href="https://wa.me/2348000000000" // Placeholder WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-[#3f0c43] text-white font-bold text-xs tracking-wider rounded-lg uppercase flex items-center justify-center gap-2.5 btn-purple-shadow transition"
          >
            <Users className="w-4 h-4" />
            Join WhatsApp Group
            <ArrowRight className="w-4 h-4 text-[#E5C158]" />
          </a>
        </div>

      </div>
    </div>
  );
}
