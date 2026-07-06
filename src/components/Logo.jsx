import React from 'react';

export default function Logo({ className = '', showText = true, size = 'md', light = false }) {
  const dimensions = {
    sm: { width: '40', height: '40', fontSize: 'text-[9px]' },
    md: { width: '80', height: '60', fontSize: 'text-[11px]' },
    lg: { width: '120', height: '90', fontSize: 'text-[14px]' }
  }[size] || { width: '80', height: '60', fontSize: 'text-[11px]' };

  return (
    <div className={`flex flex-col items-start justify-center ${className}`}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 120 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-12"
      >
        {/* Ionic/Corinthian Capital Top (Purple) */}
        <path
          d="M38 18 C38 14, 46 14, 48 16 C50 14, 58 14, 58 18"
          stroke="#8C1D94"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M62 18 C62 14, 70 14, 72 16 C74 14, 82 14, 82 18"
          stroke="#8C1D94"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect x="42" y="18" width="36" height="4" rx="1" fill="#8C1D94" />
        
        {/* Column Shaft with flutes */}
        <rect x="45" y="22" width="30" height="22" rx="0.5" fill="#3f0c43" />
        {/* Flute lines */}
        <line x1="50" y1="24" x2="50" y2="42" stroke="#9E7B28" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="60" y1="24" x2="60" y2="42" stroke="#9E7B28" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="70" y1="24" x2="70" y2="42" stroke="#9E7B28" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Column Base (Gold) */}
        <rect x="42" y="44" width="36" height="4" rx="1" fill="#9E7B28" />

        {/* Stepped Pyramid Stairs (Gold) - Left Side */}
        <line x1="38" y1="48" x2="18" y2="48" stroke="#9E7B28" strokeWidth="1.5" />
        <line x1="34" y1="51" x2="22" y2="51" stroke="#9E7B28" strokeWidth="1.5" />
        <line x1="30" y1="54" x2="26" y2="54" stroke="#9E7B28" strokeWidth="1.5" />
        
        {/* Stepped Pyramid Stairs (Gold) - Right Side */}
        <line x1="82" y1="48" x2="102" y2="48" stroke="#9E7B28" strokeWidth="1.5" />
        <line x1="86" y1="51" x2="98" y2="51" stroke="#9E7B28" strokeWidth="1.5" />
        <line x1="90" y1="54" x2="94" y2="54" stroke="#9E7B28" strokeWidth="1.5" />

        {/* Bottom Platform */}
        <line x1="12" y1="58" x2="108" y2="58" stroke="#9E7B28" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {showText && (
        <span 
          className={`mt-1 font-serif font-semibold text-center tracking-[0.2em] uppercase ${dimensions.fontSize} ${light ? 'text-[#E5C158]' : 'text-[#3f0c43]'}`}
        >
          The Edifying Assembly
        </span>
      )}
    </div>
  );
}
