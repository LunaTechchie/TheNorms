import React, { useEffect } from 'react';
import type { Pillar, ProtocolDetail } from '../types';
import { XMarkIcon } from './icons';

interface PillarDetailModalProps {
  pillar: Pillar;
  onClose: () => void;
}

const DetailItem: React.FC<{ label: string; value: string | string[] }> = ({ label, value }) => (
  <div className="mb-3">
    <p className="text-xs font-semibold text-sky-400/80 capitalize">{label.replace(/_/g, ' ')}</p>
    {Array.isArray(value) ? (
      <ul className="list-disc list-inside text-sm text-slate-300 pl-2">
        {value.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    ) : (
      <p className="text-sm text-slate-300">{value}</p>
    )}
  </div>
);

const PillarDetailModal: React.FC<PillarDetailModalProps> = ({ pillar, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pillar-modal-title"
    >
      <div 
        className="bg-slate-800 border border-sky-500/30 rounded-lg shadow-2xl shadow-sky-500/10 w-full max-w-2xl max-h-[90vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-700">
          <div>
            <span className="bg-sky-500/10 text-sky-400 text-xs font-semibold px-2.5 py-1 rounded-full">
              Pillar {pillar.pillar}
            </span>
            <h2 id="pillar-modal-title" className="text-2xl font-bold text-slate-200 mt-2">{pillar.name}</h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </header>

        <main className="p-6 overflow-y-auto">
          <p className="text-slate-400 italic mb-6">"{pillar.principle}"</p>

          <div className="space-y-6">
            {Object.entries(pillar.protocols).map(([protocolName, details]) => (
              <div key={protocolName} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold text-sky-400 mb-3">{protocolName.replace(/_/g, ' ')}</h3>
                {Object.entries(details).map(([key, value]) => (
                  <DetailItem key={key} label={key} value={value} />
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>

       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default PillarDetailModal;