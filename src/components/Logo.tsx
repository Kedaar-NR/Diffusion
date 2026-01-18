import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f2ea" />
          <stop offset="50%" stopColor="#7928ca" />
          <stop offset="100%" stopColor="#ff0080" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <circle cx="50" cy="50" r="45" stroke="url(#grad1)" strokeWidth="1.5" opacity="0.5" />
      <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" stroke="url(#grad1)" strokeWidth="2" fill="none" opacity="0.8" />
      <path d="M50 25 L72 38 L72 62 L50 75 L28 62 L28 38 Z" fill="url(#grad1)" opacity="0.2" />
      <path d="M50 35 L60 41 L60 59 L50 65 L40 59 L40 41 Z" stroke="#fff" strokeWidth="2" fill="none" filter="url(#glow)" />
      
      <circle cx="50" cy="50" r="6" fill="#fff" filter="url(#glow)" />
      
      {/* Decorative rays */}
      <line x1="50" y1="5" x2="50" y2="15" stroke="url(#grad1)" strokeWidth="2" />
      <line x1="95" y1="50" x2="85" y2="50" stroke="url(#grad1)" strokeWidth="2" />
      <line x1="50" y1="95" x2="50" y2="85" stroke="url(#grad1)" strokeWidth="2" />
      <line x1="5" y1="50" x2="15" y2="50" stroke="url(#grad1)" strokeWidth="2" />
    </svg>
  );
};
