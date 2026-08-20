import React from 'react';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export const ScoreBadge = ({ classification, score, size = 'md', showIcon = true }) => {
  let bg = 'bg-slate-100 text-slate-800 border-slate-200';
  let Icon = AlertCircle;
  let label = 'Unclassified';

  if (classification === 'CORRECT') {
    bg = 'bg-emerald-50 text-emerald-800 border-emerald-300';
    Icon = CheckCircle2;
    label = 'Correct Choice';
  } else if (classification === 'PARTIALLY_CORRECT') {
    bg = 'bg-amber-50 text-amber-800 border-amber-300';
    Icon = AlertCircle;
    label = 'Partially Correct';
  } else if (classification === 'WRONG') {
    bg = 'bg-rose-50 text-rose-800 border-rose-300';
    Icon = XCircle;
    label = 'Incorrect Tool';
  }

  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 space-x-1',
    md: 'text-xs px-2.5 py-1 space-x-1.5',
    lg: 'text-sm px-3 py-1.5 space-x-2'
  };

  return (
    <span className={`inline-flex items-center font-semibold rounded-full border ${bg} ${sizeClasses[size]}`}>
      {showIcon && <Icon className={`${size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} />}
      <span>{label}</span>
      {score !== undefined && score !== null && (
        <span className="font-bold opacity-90">({score} pts)</span>
      )}
    </span>
  );
};
