'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, BookOpen, HelpCircle } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  // Hide the navigation when the user is taking the admissions questionnaire to prevent distraction
  if (pathname && pathname.startsWith('/apply')) {
    return null;
  }

  // Define active flags based on path
  const isEnroll = pathname === '/' || pathname === '/success';
  const isCurriculum = pathname === '/curriculum';
  const isSupport = pathname === '/support';

  return (
    <nav className="w-full fixed bottom-0 left-0 bg-[#2d0034] border-t border-[#9E7B28]/20 z-50 flex items-center justify-around py-2 shadow-2xl safe-bottom md:hidden">
      <Link 
        href="/" 
        className="flex flex-col items-center justify-center flex-1 py-0.5"
      >
        <GraduationCap 
          className={`w-5 h-5 transition-transform ${
            isEnroll ? 'text-[#E5C158] scale-110' : 'text-white/60 hover:text-white'
          }`} 
        />
        <span 
          className={`text-[8px] tracking-[0.15em] font-semibold mt-1 uppercase ${
            isEnroll ? 'text-[#E5C158]' : 'text-white/40'
          }`}
        >
          Enroll
        </span>
      </Link>
      
      <Link 
        href="/" 
        onClick={(e) => e.preventDefault()} 
        className="flex flex-col items-center justify-center flex-1 py-0.5 cursor-not-allowed opacity-50"
      >
        <BookOpen className="w-5 h-5 text-white/40" />
        <span className="text-[8px] tracking-[0.15em] font-semibold mt-1 text-white/30 uppercase">
          Curriculum
        </span>
      </Link>

      <Link 
        href="/" 
        onClick={(e) => e.preventDefault()} 
        className="flex flex-col items-center justify-center flex-1 py-0.5 cursor-not-allowed opacity-50"
      >
        <HelpCircle className="w-5 h-5 text-white/40" />
        <span className="text-[8px] tracking-[0.15em] font-semibold mt-1 text-white/30 uppercase">
          Support
        </span>
      </Link>
    </nav>
  );
}
