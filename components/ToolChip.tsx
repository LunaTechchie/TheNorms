import React from 'react';
import { CogIcon } from './icons';
import type { Tool } from '../types';

interface ToolChipProps {
  tool: Tool;
}

const ToolChip: React.FC<ToolChipProps> = ({ tool }) => {
  return (
    <div className="relative group">
      <div className="flex items-center gap-2 bg-slate-700/50 text-slate-300 text-xs font-medium pl-2 pr-3 py-1 rounded-full border border-slate-600/80 transition-all duration-200 hover:bg-slate-700 hover:border-sky-500/80 hover:scale-105 cursor-default">
        <CogIcon className="w-3.5 h-3.5 text-slate-400" />
        <span>{tool.name}</span>
      </div>
      {/* Tooltip element */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-800 border border-slate-600 rounded-lg shadow-lg text-xs text-slate-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 pointer-events-none">
        <p className="font-bold text-sky-400 mb-1">{tool.name}</p>
        <p>{tool.description}</p>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-slate-600 -mb-1"></div>
      </div>
    </div>
  );
};

export default ToolChip;