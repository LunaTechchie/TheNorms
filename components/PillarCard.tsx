import React from 'react';
import type { Pillar } from '../types';

interface PillarCardProps {
  pillar: Pillar;
  onSelectPillar: (pillar: Pillar) => void;
}


const PillarCard: React.FC<PillarCardProps> = ({ pillar, onSelectPillar }) => {
  return (
    <div 
      className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 flex flex-col transition-all duration-300 hover:bg-slate-800 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1 cursor-pointer"
      onClick={() => onSelectPillar(pillar)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectPillar(pillar)}
      aria-label={`View details for ${pillar.name}`}
    >
      <div className="mb-4">
        <span className="bg-sky-500/10 text-sky-400 text-xs font-semibold px-2.5 py-1 rounded-full">
          Pillar {pillar.pillar}
        </span>
        <h3 className="text-xl font-bold text-slate-200 mt-3">{pillar.name}</h3>
      </div>
      <p className="text-slate-400 text-sm mb-4 flex-grow">"{pillar.principle}"</p>
      <div>
        <h4 className="font-semibold text-slate-300 text-sm mb-2">Protocols:</h4>
        <ul className="space-y-2 list-disc list-inside text-xs text-slate-400">
          {Object.keys(pillar.protocols).map(key => (
            <li key={key} className="truncate hover:whitespace-normal">
              <span className="font-medium text-slate-300">{key.replace(/_/g, ' ')}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillarCard;