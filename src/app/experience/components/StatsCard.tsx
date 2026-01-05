import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface StatsCardProps {
  icon: string;
  label: string;
  value: string;
  color: string;
}

const StatsCard = ({ icon, label, value, color }: StatsCardProps) => {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary border-primary/30',
    success: 'bg-success/10 text-success border-success/30',
    warning: 'bg-warning/10 text-warning border-warning/30',
    accent: 'bg-accent/10 text-accent border-accent/30'
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-elevation-md transition-all duration-base">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${colorClasses[color as keyof typeof colorClasses]}`}>
          <Icon name={icon as any} size={24} />
        </div>
        <div className="flex-1">
          <p className="text-2xl font-headline font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;