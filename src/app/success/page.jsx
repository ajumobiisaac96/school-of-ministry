'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, ArrowRight, MapPin, Phone, CheckCircle2 } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#FFFDFC] text-[#110014]">

      {/* ── BODY ── padded top to clear fixed navbar */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 pt-36">
        <div className="max-w-md w-full flex flex-col items-center text-center">

          {/* Status badge */}
          <span className="bg-[#9E7B28] text-white text-[9px] font-bold tracking-[0.22em] px-4 py-1.5 rounded-full uppercase mb-6 shadow-sm">
            Submission Complete
          </span>

          {/* Checkmark icon */}
          <div className="w-20 h-20 rounded-full bg-[#3f0c43]/6 border-2 border-[#9E7B28]/30 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#9E7B28]" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#3f0c43] leading-tight mb-2">
            Application
          </h1>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#3f0c43] leading-tight mb-6 relative inline-block">
            <span className="relative">
              Successful!
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9E7B28] rounded-full" />
            </span>
          </h1>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-[#9E7B28] mb-6" />

          {/* Message */}
          <p className="text-sm leading-relaxed text-[#110014]/65 mb-10 max-w-sm">
            Your application has been received with the reverence it deserves. To complete your enrollment and step into your calling, please join our official student community on WhatsApp.
          </p>

          {/* CTA button */}
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-[#3f0c43] hover:bg-[#521357] text-white font-bold text-xs tracking-wider rounded-lg uppercase flex items-center justify-center gap-2.5 btn-purple-shadow transition-all duration-200 mb-5"
          >
            <Users className="w-4 h-4" />
            Join WhatsApp Group
            <ArrowRight className="w-4 h-4 text-[#E5C158]" />
          </a>

          {/* Back to home link */}
          <Link
            href="/"
            className="text-xs font-semibold text-[#3f0c43]/60 hover:text-[#3f0c43] uppercase tracking-widest transition-colors duration-200"
          >
            ← Return to Home
          </Link>

        </div>
      </main>

      {/* ── FOOTER (same as landing page) ── */}
      <footer className="w-full bg-white text-[#110014] py-14 px-6 md:px-12 lg:px-20 border-t border-[#9E7B28]/20">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">

            {/* Brand */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/logo.png"
                alt="The Edifying Assembly Logo"
                width={72}
                height={72}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[11px] font-serif font-bold tracking-[0.2em] text-[#3f0c43] uppercase">
                  The Edifying Assembly
                </span>
                <span className="text-[8px] tracking-[0.12em] text-[#110014]/40 uppercase mt-0.5">
                  School of Ministry
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[#110014]/55 max-w-[260px]">
                Committed to the Word of the risen Christ — raising leaders through teaching and demonstration.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-5">
              <span className="text-[9px] tracking-[0.2em] font-bold text-[#9E7B28] uppercase">Contact Us</span>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-[#110014]/65">
                  <Phone className="w-3.5 h-3.5 text-[#9E7B28] shrink-0" />
                  07060535490 / 08130247073
                </div>
                <div className="flex items-start gap-2 text-xs text-[#110014]/65">
                  <MapPin className="w-3.5 h-3.5 text-[#9E7B28] shrink-0 mt-0.5" />
                  <span>Cross High Schools, No. 3 Mu&apos;azu Street opposite Mr Biggs,<br />Refinery Bus-stop, Sabo Tasha</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#110014]/10 pt-6">
            <span className="text-[10px] font-medium text-[#110014]/35 uppercase tracking-widest">
              © 2025 The Edifying Assembly. All Rights Reserved.
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}
