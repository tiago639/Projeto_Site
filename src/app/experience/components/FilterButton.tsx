'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterButtonProps {
  label: string;
  icon: string;
  isActive: boolean;
  count: number;
  onClick: () => void;
}

const FilterButton = ({ label, icon, isActive, count, onClick }: FilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-base ${
        isActive
          ? 'bg-primary text-primary-foreground shadow-elevation-sm'
          : 'bg-surface/50 text-muted-foreground hover:bg-surface hover:text-foreground border border-border/50'
      }`}
    >
      <Icon name={icon as any} size={18} />
      <span>{label}</span>
      <span
        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
          isActive ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-muted/50 text-muted-foreground'
        }`}
      >
        {count}
      </span>
    </button>
  );
};

export default FilterButton;