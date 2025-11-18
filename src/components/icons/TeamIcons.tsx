import React from "react";

interface IconProps {
  size?: number;
  strokeWidth?: number;
}

export const IconWoman = ({ size = 28, strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 22c0-4 4-6 8-6s8 2 8 6"/>
    <path d="M8 10c-2 0-3-2-3-3"/>
    <path d="M16 10c2 0 3-2 3-3"/>
  </svg>
);

export const IconDoctor = ({ size = 28, strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7.5" r="3.5"/>
    <path d="M5 21c0-3.5 3.5-5.5 7-5.5S19 17.5 19 21"/>
    <rect x="9.5" y="2.5" width="5" height="3" rx="1"/>
    <path d="M6 15l2 2m8-2l-2 2"/>
    <path d="M14.5 4h-5"/>
    <path d="M20 13a2 2 0 1 1-2 2"/>
  </svg>
);

export const IconPersonaA = ({ size = 28, strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M3.5 21c1.5-3.2 4.5-4.8 8.5-4.8s7 1.6 8.5 4.8"/>
    <path d="M9 9h6M10 11h4"/>
  </svg>
);

export const IconPersonaB = ({ size = 28, strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 21c0-4.5 3-6.5 8-6.5s8 2 8 6.5"/>
    <circle cx="9.5" cy="8.5" r="0.8"/>
    <circle cx="14.5" cy="8.5" r="0.8"/>
    <path d="M9 12c1.5 1 4.5 1 6 0"/>
  </svg>
);
