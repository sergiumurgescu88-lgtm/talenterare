import React from 'react';

interface SpreadBarProps {
  spread: number | null;
}

export const SpreadBar: React.FC<SpreadBarProps> = ({ spread }) => {
  const ok = spread !== null && spread <= 0.99;
  return (
    <div className={`sticky top-2 z-40 mb-3 flex items-center justify-between gap-3 rounded-xl border px-4 py-2 backdrop-blur ${spread === null ? 'border-slate-700 bg-slate-900/80' : ok ? 'border-emerald-500/60 bg-emerald-500/10' : 'border-rose-500/60 bg-rose-500/10'}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Spread XAUUSD LIVE:</span>
      <span className={`font-mono text-sm font-bold ${spread === null ? 'text-slate-300' : ok ? 'text-emerald-400' : 'text-rose-400'}`}>
        {spread === null ? 'SE CONECTEAZĂ...' : `$${spread.toFixed(2)}`}
      </span>
      <span className="text-[10px] font-semibold text-slate-400">
        {spread === null ? '' : ok ? '✅ NORMAL (≤ $0.99)' : '⚠️ MARE (> $0.99)'}
      </span>
    </div>
  );
};
