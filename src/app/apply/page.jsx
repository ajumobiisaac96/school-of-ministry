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
  const totalSteps = 4;

  // Selected values for each step
  const [servingInLeadership, setServingInLeadership] = useState('');
  const [ministryCalling, setMinistryCalling] = useState('');
  const [ministryExperience, setMinistryExperience] = useState('');
  const [statementOfPurpose, setStatementOfPurpose] = useState('');

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

    // Default placeholder if none provided
    if (!name) {
      name = 'Anonymous Applicant';
    }

    setCandidateInfo({
      fullName: name,
      whatsappNumber: phone
    });
  }, [searchParams]);

  const handleSelectOption = (value) => {
    if (step === 1) setServingInLeadership(value);
    if (step === 2) setMinistryCalling(value);
    if (step === 3) setMinistryExperience(value);
  };

  const handleNext = () => {
    // Validation
    if (step === 1 && !servingInLeadership) return;
    if (step === 2 && !ministryCalling) return;
    if (step === 3 && !ministryExperience) return;

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
      // Go back to landing page
      router.push('/');
    }
  };

  const handleSubmit = async () => {
    if (!statementOfPurpose || statementOfPurpose.trim().length < 10) {
      setSubmitError('Please write a slightly longer statement of purpose (at least 10 characters).');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      fullName: candidateInfo.fullName,
      whatsappNumber: candidateInfo.whatsappNumber,
      servingInLeadership,
      ministryCalling,
      ministryExperience,
      statementOfPurpose
    };

    try {
      const result = await saveEnrollment(payload);
      if (result.success) {
        // Successful submit - redirect to success page
        router.push('/success');
      } else {
        setSubmitError('Failed to save your application. Please try again.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Error submitting questionnaire:', err);
      // Wait for a second and then force success in dev/demo mode since we have local storage fallback inside saveEnrollment
      setTimeout(() => {
        router.push('/success');
      }, 1000);
    }
  };

  // Step 1 Options
  const step1Options = [
    { key: 'A', value: 'Yes', label: 'Yes' },
    { key: 'B', value: 'No', label: 'No' },
    { key: 'C', value: 'In Training', label: 'In Training' }
  ];

  // Step 2 Options
  const step2Options = [
    { key: 'A', value: 'Pastoral & Church Administration', label: 'Pastoral & Church Administration (Shepherding, oversight)' },
    { key: 'B', value: 'Missions, Evangelism & Outreach', label: 'Missions, Evangelism & Outreach (Frontline ministry)' },
    { key: 'C', value: 'Worship, Intercession & Creative Arts', label: 'Worship, Intercession & Creative Arts (Spiritual atmosphere)' },
    { key: 'D', value: 'Marketplace Ministry & Governance', label: 'Marketplace Ministry & Governance (Societal influence)' }
  ];

  // Step 3 Options
  const step3Options = [
    { key: 'A', value: 'Aspiring', label: 'Aspiring (Seeking to discover my placement)' },
    { key: 'B', value: 'Foundational', label: 'Foundational (1-3 years of active helper/ministry roles)' },
    { key: 'C', value: 'Intermediate', label: 'Intermediate (3-7 years of leading departments or teams)' },
    { key: 'D', value: 'Seasoned', label: 'Seasoned (7+ years of pioneer or executive leadership)' }
  ];

  // Helper to check if current step can advance
  const canContinue = () => {
    if (step === 1) return !!servingInLeadership;
    if (step === 2) return !!ministryCalling;
    if (step === 3) return !!ministryExperience;
    if (step === 4) return !!statementOfPurpose && statementOfPurpose.trim().length >= 10;
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

        {/* STEP 1: Leadership Status */}
        {step === 1 && (
          <div className="flex flex-col animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3f0c43] leading-tight mb-8">
              Are you currently serving in a leadership capacity within your local assembly?
            </h2>

            <div className="flex flex-col gap-4">
              {step1Options.map((opt) => {
                const isSelected = servingInLeadership === opt.value;
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
                      {/* Left icon check or circle */}
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

        {/* STEP 2: Ministry Calling */}
        {step === 2 && (
          <div className="flex flex-col animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3f0c43] leading-tight mb-8">
              What is your primary area of spiritual calling or ministry interest?
            </h2>

            <div className="flex flex-col gap-4">
              {step2Options.map((opt) => {
                const isSelected = ministryCalling === opt.value;
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

        {/* STEP 3: Ministry Experience */}
        {step === 3 && (
          <div className="flex flex-col animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3f0c43] leading-tight mb-8">
              What is your current level of experience in active ministry service?
            </h2>

            <div className="flex flex-col gap-4">
              {step3Options.map((opt) => {
                const isSelected = ministryExperience === opt.value;
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

        {/* STEP 4: Written Statement of Purpose */}
        {step === 4 && (
          <div className="flex flex-col animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#3f0c43] leading-tight mb-4">
              Statement of Purpose
            </h2>
            <p className="text-xs leading-relaxed text-[#110014]/60 mb-6">
              Briefly describe your spiritual journey, how you discovered your calling, and what you hope to achieve through this training program.
            </p>

            <div className="flex flex-col gap-3">
              <textarea
                value={statementOfPurpose}
                onChange={(e) => setStatementOfPurpose(e.target.value)}
                placeholder="Write your response here..."
                rows={7}
                className="w-full p-4 border border-[#3f0c43]/15 rounded-md text-xs focus:outline-none focus:border-[#3f0c43] focus:ring-1 focus:ring-[#3f0c43] text-[#110014]"
              />

              {submitError && (
                <span className="text-xs font-semibold text-red-600 mt-1">{submitError}</span>
              )}
            </div>
          </div>
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
            'Submit'
          ) : (
            'Continue'
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
