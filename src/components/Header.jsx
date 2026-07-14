'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The application questionnaire page renders its own custom step counter header
  if (pathname && pathname.startsWith('/apply')) {
    return null;
  }

  // All other pages (landing + success) — same sticky transparent → frosted header
  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1b0021]/90 backdrop-blur-md border-b border-[#9E7B28]/20 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        {/* Gold line at top when scrolled */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9E7B28] via-[#E5C158] to-[#9E7B28]" />
        )}

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo only — no text */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="The Edifying Assembly Logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/#enrollment-form"
              className="px-5 py-2.5 bg-[#9E7B28] hover:bg-[#b59441] text-white font-bold text-[10px] tracking-wider rounded-lg uppercase transition-all duration-200"
            >
              Secure Your Spot
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
