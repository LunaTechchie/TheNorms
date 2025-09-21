import React from 'react';
import type { CognitiveFunction } from '../types';
import { ArrowDownIcon, ArrowUpIcon } from './icons';

interface CognitiveFunctionCardProps {
  func: CognitiveFunction;
}

const CognitiveFunctionCard: React.FC<CognitiveFunctionCardProps> = ({ func }) => {
  const renderValue = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc list-inside text-xs">
          {value.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      );
    }
    return <p className="text-xs">{value}</p>;
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 transition-all duration-300 hover:bg-slate-800 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10">
      <h3 className="font-bold text-sky-400 mb-2">{func.name}</h3>
      <p className="text-sm text-slate-400 mb-4">{func.definition}</p>
      <div className="space-y-2 text-slate-300">
        <div className="flex items-start gap-2">
          <ArrowDownIcon className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" />
          <div>
            <p className="font-semibold text-xs text-green-400/80">Input</p>
            {renderValue(func.input)}
          </div>
        </div>
        <div className="flex items-start gap-2">
          <ArrowUpIcon className="w-4 h-4 mt-0.5 text-orange-400 flex-shrink-0" />
          <div>
            <p className="font-semibold text-xs text-orange-400/80">Output</p>
            {renderValue(func.output)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CognitiveFunctionCard;
