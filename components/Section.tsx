import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, icon, children }) => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-2">
        <div className="bg-sky-500/10 p-2 rounded-lg text-sky-400">
            {icon}
        </div>
        <div>
            <h2 className="text-2xl font-bold text-slate-200">{title}</h2>
            {subtitle && <p className="text-md text-slate-400">{subtitle}</p>}
        </div>
      </div>
      <div className="border-l-2 border-slate-700/50 pl-8 ml-4 mt-4">
        {children}
      </div>
    </section>
  );
};

export default Section;
