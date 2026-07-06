'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
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

  const isSuccess = pathname === '/success';
  const isLanding = pathname === '/';

  // Success page — minimal light header
  if (isSuccess) {
    return (
      <header className="w-full bg-[#FFFDFC] border-b border-[#3f0c43]/10 py-3 px-6 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="The Edifying Assembly" width={36} height={36} className="object-contain" />
          <span className="text-[10px] font-serif font-bold tracking-[0.2em] text-[#3f0c43] uppercase hidden sm:block">
            The Edifying Assembly
          </span>
        </Link>
      </header>
    );
  }

  // Landing page — transparent → frosted header on scroll
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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="The Edifying Assembly Logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-serif font-bold tracking-[0.2em] text-[#E5C158] uppercase leading-tight">
                The Edifying Assembly
              </span>
              <span className="text-[7px] tracking-[0.15em] text-white/50 uppercase">
                School of Ministry
              </span>
            </div>
          </Link>

          {/* Desktop nav links - removed as requested */}
          <nav className="hidden md:flex items-center gap-8"></nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#enrollment-form"
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
