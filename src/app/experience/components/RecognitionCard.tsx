import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface RecognitionCardProps {
  type: 'github' | 'linkedin' | 'certification' | 'speaking' | 'article';
  title: string;
  description: string;
  metric?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
}

const RecognitionCard = ({ type, title, description, metric, image, imageAlt, url }: RecognitionCardProps) => {
  const typeConfig = {
    github: { icon: 'CodeBracketIcon', color: 'text-primary', bgColor: 'bg-primary/10' },
    linkedin: { icon: 'UserGroupIcon', color: 'text-accent', bgColor: 'bg-accent/10' },
    certification: { icon: 'AcademicCapIcon', color: 'text-success', bgColor: 'bg-success/10' },
    speaking: { icon: 'MicrophoneIcon', color: 'text-warning', bgColor: 'bg-warning/10' },
    article: { icon: 'DocumentTextIcon', color: 'text-secondary', bgColor: 'bg-secondary/10' }
  };

  const config = typeConfig[type];
  const CardWrapper = url ? 'a' : 'div';
  const cardProps = url ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <CardWrapper
      {...cardProps}
      className={`bg-card border border-border rounded-lg p-6 hover:shadow-elevation-md hover:border-primary/50 transition-all duration-base ${
        url ? 'cursor-pointer group' : ''
      }`}
    >
      <div className="flex items-start gap-4">
        {image && imageAlt && (
          <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface flex-shrink-0">
            <AppImage src={image} alt={imageAlt} className="w-full h-full object-cover" />
          </div>
        )}
        {!image && (
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${config.bgColor} flex-shrink-0`}>
            <Icon name={config.icon as any} size={24} className={config.color} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className={`text-base font-headline font-semibold text-foreground mb-2 ${url ? 'group-hover:text-primary transition-colors duration-base' : ''}`}>
            {title}
          </h4>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          {metric && (
            <div className="flex items-center gap-2">
              <Icon name="ChartBarIcon" size={16} className={config.color} />
              <span className={`text-sm font-medium ${config.color}`}>{metric}</span>
            </div>
          )}
        </div>
        {url && (
          <Icon name="ArrowTopRightOnSquareIcon" size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-base flex-shrink-0" />
        )}
      </div>
    </CardWrapper>
  );
};

export default RecognitionCard;