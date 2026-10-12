import React from 'react';

interface SpreadBarProps {
  spread: number | null;
}

export const SpreadBar: React.FC<SpreadBarProps> = ({ spread }) => {
  const ok = spread !== null && spread <= 0.99;
  return (
    <div className={`sticky top-2 z-40 mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 rounded-xl border px-4 py-2 backdrop-blur ${spread === null ? 'border-slate-700 bg-slate-900/80' : ok ? 'border-emerald-500/60 bg-emerald-500/10' : 'border-rose-500/60 bg-rose-500/10'}`}>
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Spread XAUUSD LIVE:</span>
        <span className={`font-mono text-sm font-bold ${spread === null ? 'text-slate-300' : ok ? 'text-emerald-400' : 'text-rose-400'}`}>
          {spread === null ? 'SE CONECTEAZĂ...' : `$${spread.toFixed(2)}`}
        </span>
      </div>
      <span className={`text-[11px] font-semibold ${spread === null ? 'text-slate-400' : ok ? 'text-emerald-300' : 'text-rose-300'}`}>
        {spread === null
          ? 'Se conectează la cTrader...'
          : ok
            ? '✅ NORMAL (≤ $0.99) — Toți cei 10 boți sunt activi și scanează'
            : '⚠️ MARE (> $0.99) — Boții LIVE nu fac trade. Boții DEMO sunt activi'}
      </span>
    </div>
  );
};
