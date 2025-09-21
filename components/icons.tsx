import React from 'react';

// A generic IconProps type for SVG components
type IconProps = React.SVGProps<SVGSVGElement>;

export const BrainIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7h0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v0A2.5 2.5 0 0 1 14.5 7h0A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2Z" />
    <path d="M12 12a2.5 2.5 0 0 0-2.5 2.5v0A2.5 2.5 0 0 0 12 17h0a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 12 12Z" />
    <path d="M4.5 12A2.5 2.5 0 0 1 7 14.5v0A2.5 2.5 0 0 1 4.5 17h0A2.5 2.5 0 0 1 2 14.5v0A2.5 2.5 0 0 1 4.5 12Z" />
    <path d="M19.5 12A2.5 2.5 0 0 1 22 14.5v0A2.5 2.5 0 0 1 19.5 17h0A2.5 2.5 0 0 1 17 14.5v0A2.5 2.5 0 0 1 19.5 12Z" />
    <path d="M9.5 8A2.5 2.5 0 0 0 7 10.5v0A2.5 2.5 0 0 0 9.5 13h0A2.5 2.5 0 0 0 12 10.5v0A2.5 2.5 0 0 0 9.5 8Z" />
    <path d="M14.5 8A2.5 2.5 0 0 1 12 10.5v0A2.5 2.5 0 0 1 14.5 13h0A2.5 2.5 0 0 1 17 10.5v0A2.5 2.5 0 0 1 14.5 8Z" />
    <path d="M9.5 14A2.5 2.5 0 0 0 7 16.5v0A2.5 2.5 0 0 0 9.5 19h0a2.5 2.5 0 0 0 2.5-2.5v0A2.5 2.5 0 0 0 9.5 14Z" />
    <path d="M14.5 14A2.5 2.5 0 0 1 12 16.5v0A2.5 2.5 0 0 1 14.5 19h0a2.5 2.5 0 0 1 2.5-2.5v0A2.5 2.5 0 0 1 14.5 14Z" />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const EyeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);

export const CpuChipIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m3.75-15H21m-18 0h1.5m15 15H21m-18 0h1.5M12 4.5v15" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 18.75a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h3Z" />
    </svg>
);

export const MicrophoneIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m12 0v-1.5a6 6 0 0 0-12 0v1.5m6 7.5a6 6 0 0 0 6-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75a3 3 0 0 0 3-3v-1.5a3 3 0 0 0-6 0v1.5a3 3 0 0 0 3 3Z" />
    </svg>
);

export const FingerPrintIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.588 8.26l-6.522-6.522a.75.75 0 0 0-1.06 0l-1.95 1.95a.75.75 0 0 1-1.06 0l-2.224-2.224a.75.75 0 0 0-1.06 0l-1.95 1.95a.75.75 0 0 1-1.06 0l-2.224-2.224a.75.75 0 0 0-1.06 0l-1.95 1.95a.75.75 0 0 1-1.06 0l-2.224-2.224a.75.75 0 0 0-1.06 0l-1.95 1.95a.75.75 0 0 1-1.06 0l-.975-.975 1.06-1.06a.75.75 0 0 1 1.06 0l2.224 2.224a.75.75 0 0 0 1.06 0l1.95-1.95a.75.75 0 0 1 1.06 0l2.224 2.224a.75.75 0 0 0 1.06 0l1.95-1.95a.75.75 0 0 1 1.06 0l2.224 2.224a.75.75 0 0 0 1.06 0l1.95-1.95a.75.75 0 0 1 1.06 0l.975.975-1.06 1.06a.75.75 0 0 1-1.06 0l-2.224-2.224a.75.75 0 0 0-1.06 0l-1.95 1.95a.75.75 0 0 1-1.06 0l-2.224-2.224a.75.75 0 0 0-1.06 0l-1.95 1.95a.75.75 0 0 1-1.06 0l-.975-.975 1.06-1.06a.75.75 0 0 1 1.06 0l2.224 2.224a.75.75 0 0 0 1.06 0l1.95-1.95a.75.75 0 0 1 1.06 0l2.224 2.224a.75.75 0 0 0 1.06 0l1.95-1.95a.75.75 0 0 1 1.06 0l.975.975" />
    </svg>
);


export const ArrowDownIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const ArrowUpIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const CogIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M12 2v2" />
    <path d="M12 22v-2" />
    <path d="m17 20.66-1-1.73" />
    <path d="m7 3.34 1 1.73" />
    <path d="m20.66 17-1.73-1" />
    <path d="m3.34 7 1.73 1" />
    <path d="M4 12H2" />
    <path d="M22 12h-2" />
    <path d="m17 3.34-1 1.73" />
    <path d="m7 20.66 1-1.73" />
    <path d="m20.66 7-1.73 1" />
    <path d="m3.34 17 1.73-1" />
  </svg>
);

export const XMarkIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

export const ChatBotIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.17 48.17 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    </svg>
);