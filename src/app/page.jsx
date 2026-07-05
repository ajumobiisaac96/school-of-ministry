import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import EnrollmentForm from '../components/EnrollmentForm';

export default function LandingPage() {
  return (
    <div className="w-full flex flex-col">

      {/* ========================================================
          1. HERO SECTION
      ======================================================== */}
      <section className="relative min-h-[95vh] flex flex-col justify-center text-white overflow-hidden bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/boardroom_meeting_night.png')" }}>
        <div className="absolute inset-0 bg-[#1b0021]/80 backdrop-blur-[2px]" />
        {/* Decorative radial glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(158,123,40,0.15),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(140,29,148,0.2),transparent_65%)] pointer-events-none" />
        {/* Gold accent line top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9E7B28] via-[#E5C158] to-[#9E7B28]" />

        {/* Content grid: left text, right form — desktop side by side, mobile stacked */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — headline copy */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-10 h-[1px] bg-[#E5C158]" />
              <span className="text-[10px] tracking-[0.3em] font-bold text-[#E5C158] uppercase">
                Theology • Leadership • Impact
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-serif font-semibold leading-[1.12] text-white mb-6">
              Equipping <br className="hidden md:block" />
              Leaders for <br className="hidden md:block" />
              <span className="text-[#E5C158] italic font-serif">Global Impact.</span>
            </h1>

            <p className="text-sm leading-relaxed text-white/65 mb-10 max-w-md">
              The Edifying Assembly School of Ministry provides the structural integrity and spiritual depth required for 21st-century spiritual governance. Step into your calling with authority.
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

            {/* Stats row */}
            <div className="flex items-center gap-10 mt-14 pt-8 border-t border-white/10 w-full">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-[#E5C158]">500+</span>
                <span className="text-[9px] tracking-[0.15em] text-white/50 uppercase mt-0.5">Alumni Worldwide</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-[#E5C158]">12+</span>
                <span className="text-[9px] tracking-[0.15em] text-white/50 uppercase mt-0.5">Years of Excellence</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-[#E5C158]">30+</span>
                <span className="text-[9px] tracking-[0.15em] text-white/50 uppercase mt-0.5">Nations Reached</span>
              </div>
            </div>
          </div>

          {/* RIGHT — enrollment form (desktop only visible here) */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <EnrollmentForm />
          </div>
        </div>
      </section>

      {/* ========================================================
          2. ABOUT / MISSION SECTION  
      ======================================================== */}
      <section id="about" className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[#FFFDFC] text-[#110014]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — decorative image block */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-l-4 border-[#3f0c43]">
              {/* Placeholder gradient instead of missing image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3f0c43] via-[#521357] to-[#1b0021] flex items-center justify-center">
                <Image
                  src="/images/bible_on_table.png"
                  alt="Bible on Table"
                  fill
                  className="object-cover opacity-90 mix-blend-overlay"
                />
                <div className="text-center text-white/90 p-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#9E7B28]/80 border-2 border-[#E5C158]/80 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M4 28 L16 4 L28 28" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 20 H24" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-xs tracking-widest uppercase text-[#E5C158] font-semibold drop-shadow-md">School of Ministry</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — text content */}
          <div className="flex flex-col order-1 lg:order-2">
            <span className="text-[9px] tracking-[0.25em] font-bold text-[#9E7B28] uppercase mb-3">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#3f0c43] leading-tight mb-6">
              Raising a Generation of Spirit-Led Leaders
            </h2>
            <div className="w-16 h-1 bg-[#9E7B28] rounded-full mb-6" />
            <p className="text-sm leading-relaxed text-[#110014]/70 mb-6">
              At The Edifying Assembly School of Ministry, we are committed to producing leaders who carry both the weight of theological depth and the vision of global transformation. Our programs are designed to bridge sacred wisdom with contemporary leadership practice.
            </p>
            <p className="text-sm leading-relaxed text-[#110014]/70 mb-8">
              From governance and ecclesiology to cross-cultural ministry and strategic outreach, every course is crafted to shape leaders who are prepared for the challenges of this generation.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {['Apostolic Foundation', 'Strategic Vision', 'Global Missions', 'Leadership Mentorship'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-[#3f0c43]/8 border border-[#3f0c43]/15 text-[#3f0c43] text-[10px] font-bold tracking-wider uppercase rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. PROGRAM HIGHLIGHTS / PILLARS SECTION  
      ======================================================== */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-20 bg-[#110014] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(140,29,148,0.08),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[9px] tracking-[0.3em] font-bold text-[#9E7B28] uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-4">
              Programme <span className="text-[#E5C158] italic">Pillars</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#9E7B28] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: '01',
                title: 'Ministry',
                desc: 'A comprehensive approach to answering the call, covering pastoral care, administration, and leading with integrity.',
                icon: '🏛️',
              },
              {
                number: '02',
                title: 'Discipleship',
                desc: 'Guiding believers into maturity. Strategies for mentorship, foundational growth, and cultivating strong followers of Christ.',
                icon: '👥',
              },
              {
                number: '03',
                title: 'Bible Interpretation',
                desc: 'Equipping leaders with the hermeneutical tools to rightly divide the Word of Truth with accuracy and spiritual insight.',
                icon: '📖',
              },
              {
                number: '04',
                title: 'Sound Doctrine',
                desc: 'Establishing a solid theological bedrock. Defending the faith and presenting clear, transformative, scriptural truths.',
                icon: '🛡️',
              },
            ].map((pillar) => (
              <div key={pillar.number} className="group relative bg-white/4 border border-white/8 rounded-2xl p-6 hover:border-[#9E7B28]/50 hover:bg-white/6 transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl">{pillar.icon}</span>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#9E7B28]/60 uppercase">{pillar.number}</span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs leading-relaxed text-white/55">{pillar.desc}</p>
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
                Join a cohort of dedicated disciples and visionary leaders. Applications are now open for the 2024 Ministerial Cycle. Seats are limited — apply early.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  'Comprehensive Theological Training',
                  'Leadership Mentorship Programs',
                  'Global Networking Opportunities',
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

            {/* On mobile: show full form. On desktop: show a compact CTA button group */}
            <div className="w-full max-w-md lg:hidden">
              <EnrollmentForm />
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
      <footer className="w-full bg-[#0c0010] text-[#F5EFEB] py-16 px-6 md:px-12 lg:px-20 border-t border-[#9E7B28]/20">
        <div className="max-w-7xl mx-auto">

          {/* Footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand column */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Logo image */}
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="The Edifying Assembly Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-[11px] font-serif font-bold tracking-[0.2em] text-[#E5C158] uppercase">
                    The Edifying Assembly
                  </span>
                  <span className="text-[8px] tracking-[0.12em] text-white/40 uppercase">
                    School of Ministry
                  </span>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-white/45 max-w-xs">
                An institution dedicated to the spiritual architecture of the next generation of global ministry leaders. Excellence in theology, integrity in leadership.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 mt-2">
                <button className="w-9 h-9 rounded-lg bg-[#3f0c43] text-[#E5C158] flex items-center justify-center hover:bg-[#9E7B28] hover:text-white transition-all duration-200" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button className="w-9 h-9 rounded-lg bg-[#3f0c43] text-[#E5C158] flex items-center justify-center hover:bg-[#9E7B28] hover:text-white transition-all duration-200" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </button>
                <button className="w-9 h-9 rounded-lg bg-[#3f0c43] text-[#E5C158] flex items-center justify-center hover:bg-[#9E7B28] hover:text-white transition-all duration-200" aria-label="Twitter/X">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-4">
              <span className="text-[9px] tracking-[0.2em] font-bold text-[#9E7B28] uppercase">
                Navigation
              </span>
              <div className="flex flex-col gap-3">
                {['Curriculum', 'Faculty', 'Admissions', 'Support', 'Alumni'].map((item) => (
                  <Link key={item} href="/" className="text-xs font-medium text-white/55 hover:text-[#E5C158] transition-colors duration-200">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact column */}
            <div className="flex flex-col gap-4">
              <span className="text-[9px] tracking-[0.2em] font-bold text-[#9E7B28] uppercase">
                Connect
              </span>
              <div className="flex flex-col gap-3">
                <Link href="mailto:info@edifyingassembly.org" className="flex items-center gap-2 text-xs text-white/55 hover:text-[#E5C158] transition-colors duration-200">
                  <Mail className="w-3.5 h-3.5 text-[#9E7B28] shrink-0" />
                  info@edifyingassembly.org
                </Link>
                <div className="flex items-start gap-2 text-xs text-white/55">
                  <MapPin className="w-3.5 h-3.5 text-[#9E7B28] shrink-0 mt-0.5" />
                  Global Headquarters
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <span className="text-[10px] font-medium text-white/30 uppercase tracking-widest">
              © 2024 The Edifying Assembly. All Rights Reserved.
            </span>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-[10px] font-medium text-white/30 hover:text-[#E5C158] transition-colors uppercase tracking-widest">
                Privacy Policy
              </Link>
              <Link href="/" className="text-[10px] font-medium text-white/30 hover:text-[#E5C158] transition-colors uppercase tracking-widest">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
