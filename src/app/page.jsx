'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, Phone } from 'lucide-react';
import EnrollmentForm from '../components/EnrollmentForm';

export default function LandingPage() {
  const [currentHero, setCurrentHero] = useState(0);
  const heroImages = [
    '/images/hero 1.jpg',
    '/images/hero 2.jpg',
    '/images/hero 3.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col">

      {/* ========================================================
          1. HERO SECTION
      ======================================================== */}
      <section 
        className="relative min-h-[95vh] flex flex-col justify-center text-white overflow-hidden bg-center bg-cover bg-no-repeat transition-all duration-1000 ease-in-out" 
        style={{ backgroundImage: `url('${heroImages[currentHero]}')` }}
      >
        {/* Darker gradient on the left for text readability, fading to lighter on the right */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(17,0,20,0.85) 0%, rgba(63,12,67,0.65) 50%, rgba(40,5,55,0.4) 100%)' }} />
        {/* Soft warm gold glow from top-left for brightness */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(229,193,88,0.18),transparent_55%)] pointer-events-none" />
        {/* Subtle purple ambient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(140,29,148,0.12),transparent_55%)] pointer-events-none" />
        {/* Gold accent line top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9E7B28] via-[#E5C158] to-[#9E7B28]" />

        {/* Content grid: left text, right form — desktop side by side, mobile stacked */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — headline copy */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-10 h-[1px] bg-[#E5C158]" />
              <span className="text-[10px] tracking-[0.3em] font-bold text-[#E5C158] uppercase drop-shadow-md">
                School of Ministry
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif font-semibold leading-[1.12] text-white mb-6 drop-shadow-xl">
              Changing <br className="hidden md:block" />
              the World by <br className="hidden md:block" />
              <span className="text-[#E5C158] italic font-serif drop-shadow-lg">the Gospel.</span>
            </h1>

            <p className="text-sm leading-relaxed text-white/95 mb-10 max-w-md drop-shadow-md font-medium">
              Devoted to training men and women who will fulfil the Father's will in their generation—by proclaiming the good news and edifying the church.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#enrollment-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#9E7B28] hover:bg-[#b59441] text-white font-bold text-xs tracking-wider rounded-lg uppercase transition-all duration-200 btn-gold-shadow w-full sm:w-auto"
              >
                Secure Your Spot
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>


          </div>

          {/* RIGHT — enrollment form (desktop only visible here) */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <EnrollmentForm />
          </div>
        </div>
      </section>

      {/* ========================================================
          2. WHO WE ARE — merged mission + pillars
      ======================================================== */}
      <section id="about" className="w-full py-24 px-6 md:px-12 lg:px-20 bg-white text-[#110014]">
        <div className="max-w-7xl mx-auto">

          {/* Intro text — centred, max readable width */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-[9px] tracking-[0.3em] font-bold text-[#9E7B28] uppercase mb-4 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3f0c43] leading-tight mb-4">
              We are world changers —{' '}
              <span className="text-[#9E7B28] italic">changing by the gospel.</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#9E7B28] mx-auto mb-6" />
            <p className="text-sm leading-relaxed text-[#110014]/65">
              We believe that God&apos;s will for men is what Christ has done in his death, burial and resurrection — and this should be proclaimed in every land and exalted in every heart.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: 'Proclaiming the Gospel',
                desc: "Taking the good news of Christ's death, burial, and resurrection to every land.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f0c43" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
              },
              {
                number: '02',
                title: 'Raising Ministers',
                desc: "Devoted to training men and women who will fulfil the Father's will in their generation.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f0c43" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="7" r="3" />
                    <circle cx="17" cy="9" r="2.5" />
                    <path d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
                    <path d="M17 14c1.657 0 3 1.343 3 3v2" />
                  </svg>
                ),
              },
              {
                number: '03',
                title: 'Edifying the Church',
                desc: 'Teaching Christ in simplicity and clarity so His Spirit moves freely and His church grows.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f0c43" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    <line x1="9" y1="9" x2="15" y2="9" />
                    <line x1="9" y1="13" x2="13" y2="13" />
                  </svg>
                ),
              },
            ].map((pillar) => (
              <div key={pillar.number} className="group relative bg-white border border-[#3f0c43]/10 rounded-2xl p-8 hover:border-[#9E7B28]/40 hover:shadow-lg transition-all duration-300 shadow-sm">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#3f0c43]/6 border border-[#9E7B28]/20 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#9E7B28]/50 uppercase">{pillar.number}</span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-[#3f0c43] mb-3">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-[#110014]/55">{pillar.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9E7B28] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          4. CTA / MOBILE FORM SECTION (Purple Background)
          On desktop, form is already in the hero. On mobile, show it here.
      ======================================================== */}
      <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-br from-[#3f0c43] via-[#521357] to-[#230028] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(229,193,88,0.06),transparent_50%)] pointer-events-none" />
        {/* Gold top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9E7B28] to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* On desktop — just show the CTA text centered. On mobile — show the form too */}
          <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">

            {/* CTA copy */}
            <div className="flex flex-col max-w-xl">
              <span className="text-[9px] tracking-[0.25em] font-bold text-[#E5C158] uppercase mb-3">Applications Open</span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white leading-tight mb-5">
                Ready to Take <br />
                <span className="text-[#E5C158] italic">the Lead?</span>
              </h2>
              <p className="text-sm text-white/65 leading-relaxed mb-8">
                Join a cohort of dedicated disciples and visionary leaders. Applications are now open for the 2026 Ministerial Cycle. Seats are limited — apply early.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  'Proclaiming the Gospel',
                  'Raising Ministers',
                  'Edifying the Church',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#9E7B28]/20 border border-[#E5C158]/40 flex items-center justify-center shrink-0">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#E5C158" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>



            {/* Desktop CTA box */}
            <div className="hidden lg:flex flex-col items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-10 text-center min-w-[300px]">
              <div className="w-16 h-16 rounded-full bg-[#9E7B28]/20 border-2 border-[#E5C158]/30 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 3L25 24H3L14 3Z" stroke="#E5C158" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-lg font-serif font-semibold text-white mb-1">Begin Your Journey</p>
                <p className="text-xs text-white/50">Scroll up to apply or click below</p>
              </div>
              <a
                href="#enrollment-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#9E7B28] hover:bg-[#b59441] text-white font-bold text-xs tracking-wider rounded-lg uppercase transition-all duration-200 btn-gold-shadow"
              >
                Secure Your Spot
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. FOOTER
      ======================================================== */}
      <footer className="w-full bg-white text-[#110014] py-14 px-6 md:px-12 lg:px-20 border-t border-[#9E7B28]/20">
        <div className="max-w-7xl mx-auto">

          {/* Simple two-column footer */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">

            {/* Brand / Logo block */}
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
