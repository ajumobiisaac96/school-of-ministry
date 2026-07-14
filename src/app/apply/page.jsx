'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { saveEnrollment } from '../../utils/appwrite';

function QuestionnaireContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Basic candidate info
  const [candidateInfo, setCandidateInfo] = useState({
    fullName: '',
    whatsappNumber: ''
  });

  // State to manage current step
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Selected/entered values for each step
  const [q1, setQ1] = useState('');  // Are you based in Kaduna state?
  const [q2, setQ2] = useState('');  // Are you a leader/minister/worker/pastor?
  const [q3, setQ3] = useState('');  // Reason for enrolling (free text)

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Load applicant details from query parameters or localStorage fallback
  useEffect(() => {
    let name = searchParams ? searchParams.get('name') : '';
    let phone = searchParams ? searchParams.get('phone') : '';

    if (!name && typeof window !== 'undefined') {
      name = localStorage.getItem('tea_inquiry_fullName') || '';
      phone = localStorage.getItem('tea_inquiry_whatsappNumber') || '';
    }

    if (!name) {
      name = 'Anonymous Applicant';
    }

    setCandidateInfo({
      fullName: name,
      whatsappNumber: phone
    });
  }, [searchParams]);

  const handleSelectOption = (value) => {
    if (step === 1) setQ1(value);
    if (step === 2) setQ2(value);
  };

  const handleNext = () => {
    if (step === 1 && !q1) return;
    if (step === 2 && !q2) return;
    if (step === 3 && !q3.trim()) return;

    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      router.push('/');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      fullName: candidateInfo.fullName,
      whatsappNumber: candidateInfo.whatsappNumber,
      basedInKaduna: q1,
      isChurchLeader: q2,
      enrollmentReason: q3.trim(),
    };

    try {
      const result = await saveEnrollment(payload);
      if (result.success) {
        router.push('/success');
      } else {
        setSubmitError('Failed to save your application. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Error submitting questionnaire:', err);
      setTimeout(() => {
        router.push('/success');
      }, 1000);
    }
  };

  // Step 1 Options
  const step1Options = [
    { key: 'A', value: 'YES', label: 'YES' },
    { key: 'B', value: 'NO', label: 'NO' },
  ];

  // Step 2 Options
  const step2Options = [
    { key: 'A', value: 'YES', label: 'YES' },
    { key: 'B', value: 'NO', label: 'NO' },
  ];

  // Helper to check if current step can advance
  const canContinue = () => {
    if (step === 1) return !!q1;
    if (step === 2) return !!q2;
    if (step === 3) return q3.trim().length >= 10;
    return false;
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFDFC] text-[#110014] flex flex-col justify-between pt-4 pb-8 px-6">
      {/* HEADER SECTION (Logo + Step indicator) */}
      <div className="w-full flex flex-col">
        <header className="w-full flex items-center justify-between pb-4 border-b border-[#3f0c43]/10 mb-6">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="The Edifying Assembly" width={32} height={32} className="object-contain" />
              <div className="flex flex-col">
                <span className="text-[10px] font-serif font-bold tracking-[0.2em] text-[#3f0c43] uppercase">
                  The Edifying Assembly
                </span>
                <span className="text-[7px] tracking-[0.15em] text-[#3f0c43]/50 uppercase">
                  Admissions
                </span>
              </div>
            </div>
          </Link>
          <span className="text-xs font-semibold text-[#110014]/65 tracking-wider font-mono">
            Step {step} / {totalSteps}
          </span>
        </header>

        {/* PROGRESS BAR */}
        <div className="w-full h-1.5 bg-[#3f0c43]/10 rounded-full overflow-hidden mb-8 relative">
          <div
            className="h-full bg-gradient-to-r from-[#8C1D94] to-[#9E7B28] rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* QUESTIONNAIRE BODY */}
      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full py-4">
        <span className="text-[10px] tracking-[0.25em] font-extrabold text-[#9E7B28] uppercase mb-3">
          Admissions Questionnaire
        </span>

        {/* STEP 1: Based in Kaduna? */}
        {step === 1 && (
          <div className="flex flex-col animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3f0c43] leading-tight mb-8">
              Are you based in Kaduna State?
            </h2>

            <div className="flex flex-col gap-4">
              {step1Options.map((opt) => {
                const isSelected = q1 === opt.value;
                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.value)}
                    className={`w-full py-5 px-5 text-left flex items-center justify-between transition-all duration-200 rounded-xl border ${
                      isSelected
                        ? 'bg-[#3f0c43] border-[#3f0c43] text-white shadow-[0_8px_30px_rgb(63,12,67,0.2)] scale-[1.02]'
                        : 'bg-white border-[#3f0c43]/15 text-[#110014] hover:border-[#3f0c43]/40 hover:bg-[#3f0c43]/5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center w-6 h-6 rounded-full border ${isSelected ? 'border-white bg-[#9E7B28]' : 'border-[#3f0c43]/20'}`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex flex-col">
                        <span className={`text-[9px] tracking-wider font-bold uppercase mb-0.5 ${isSelected ? 'text-[#E5C158]' : 'text-[#110014]/40'}`}>
                          Option {opt.key}
                        </span>
                        <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-[#110014]/90'}`}>{opt.label}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Church Leader / Minister / Worker / Pastor? */}
        {step === 2 && (
          <div className="flex flex-col animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3f0c43] leading-tight mb-8">
              Are you a leader, minister, worker or pastor in your church or elsewhere?
            </h2>

            <div className="flex flex-col gap-4">
              {step2Options.map((opt) => {
                const isSelected = q2 === opt.value;
                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.value)}
                    className={`w-full py-5 px-5 text-left flex items-center justify-between transition-all duration-200 rounded-xl border ${
                      isSelected
                        ? 'bg-[#3f0c43] border-[#3f0c43] text-white shadow-[0_8px_30px_rgb(63,12,67,0.2)] scale-[1.02]'
                        : 'bg-white border-[#3f0c43]/15 text-[#110014] hover:border-[#3f0c43]/40 hover:bg-[#3f0c43]/5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center justify-center shrink-0 w-6 h-6 rounded-full border ${isSelected ? 'border-white bg-[#9E7B28]' : 'border-[#3f0c43]/20'}`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex flex-col max-w-[85%]">
                        <span className={`text-[9px] tracking-wider font-bold uppercase mb-0.5 ${isSelected ? 'text-[#E5C158]' : 'text-[#110014]/40'}`}>
                          Option {opt.key}
                        </span>
                        <span className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-[#110014]/90'}`}>{opt.label}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Reason for enrolling (free text) */}
        {step === 3 && (
          <div className="flex flex-col animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3f0c43] leading-tight mb-3">
              What is your reason for enrolling for this program?
            </h2>
            <p className="text-xs text-[#110014]/50 mb-6">Share in your own words — minimum 10 characters.</p>

            <textarea
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
              placeholder="e.g. I want to grow in my understanding of the Word and be equipped to disciple others effectively..."
              rows={6}
              className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-sm text-[#110014] placeholder-[#110014]/35 focus:outline-none transition-colors resize-none leading-relaxed ${
                q3.trim().length > 0 && q3.trim().length < 10
                  ? 'border-red-400 focus:border-red-400'
                  : q3.trim().length >= 10
                  ? 'border-[#9E7B28] focus:border-[#9E7B28]'
                  : 'border-[#3f0c43]/20 focus:border-[#3f0c43]/50'
              }`}
            />
            <div className="flex items-center justify-between mt-2">
              {q3.trim().length > 0 && q3.trim().length < 10 && (
                <span className="text-[10px] text-red-500 font-medium">Please write at least 10 characters.</span>
              )}
              {q3.trim().length >= 10 && (
                <span className="text-[10px] text-[#9E7B28] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Looks good!
                </span>
              )}
              <span className={`ml-auto text-[10px] font-mono ${q3.length > 500 ? 'text-red-400' : 'text-[#110014]/35'}`}>
                {q3.length} / 500
              </span>
            </div>
          </div>
        )}

        {submitError && (
          <p className="mt-4 text-xs text-red-500 font-semibold text-center">{submitError}</p>
        )}
      </div>

      {/* FOOTER ACTIONS BAR */}
      <div className="w-full max-w-md mx-auto flex items-center justify-between border-t border-[#110014]/5 pt-6 mt-8">
        <button
          onClick={handlePrev}
          className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#3f0c43]/70 hover:text-[#3f0c43] transition uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!canContinue() || isSubmitting}
          className="px-8 py-3.5 bg-[#3f0c43] text-white font-bold text-xs tracking-wider rounded uppercase flex items-center justify-center gap-2 btn-purple-shadow disabled:opacity-40 disabled:pointer-events-none"
        >
          {isSubmitting ? (
            <>
              Submitting
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            </>
          ) : step === totalSteps ? (
            <>Submit <ArrowRight className="w-3.5 h-3.5" /></>
          ) : (
            <>Continue <ArrowRight className="w-3.5 h-3.5" /></>
          )}
        </button>
      </div>
    </div>
  );
}

export default function QuestionnairePage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-screen bg-[#FFFDFC] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#3f0c43]" />
      </div>
    }>
      <QuestionnaireContent />
    </Suspense>
  );
}
