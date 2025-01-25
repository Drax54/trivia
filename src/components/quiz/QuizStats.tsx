import React, { ReactNode } from 'react';

interface QuizStatsProps {
  icon: ReactNode;
  label: string;
  value: string;
  className?: string;
}

export default function QuizStats({ 
  icon, 
  label, 
  value, 
  className = 'text-gray-600 bg-gray-50' 
}: QuizStatsProps) {
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${className}`}>
      {icon}
      <div className="flex flex-col">
        <span className="text-xs text-gray-500">{label}</span>
        <span className="text-sm font-medium capitalize">{value}</span>
      </div>
    </div>
  );
}