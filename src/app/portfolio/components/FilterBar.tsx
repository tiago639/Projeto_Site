'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  projectCounts: {
    all: number;
    data: number;
    web: number;
    both: number;
  };
}

const FilterBar = ({ activeFilter, onFilterChange, projectCounts }: FilterBarProps) => {
  const filters = [
    { id: 'all', label: 'Todos os Projetos', icon: 'RectangleStackIcon', count: projectCounts.all },
    { id: 'data', label: 'Data Analytics', icon: 'ChartBarIcon', count: projectCounts.data },
    { id: 'web', label: 'Web Development', icon: 'CodeBracketIcon', count: projectCounts.web },
    { id: 'both', label: 'Soluções Integradas', icon: 'CpuChipIcon', count: projectCounts.both },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-cta font-semibold text-sm transition-all duration-base ${
            activeFilter === filter.id
              ? 'bg-primary text-primary-foreground shadow-elevation-md'
              : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted/50 border border-border'
          }`}
        >
          <Icon name={filter.icon as any} size={20} />
          <span>{filter.label}</span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs ${
              activeFilter === filter.id
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            {filter.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default FilterBar;