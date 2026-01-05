'use client';

import React, { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  category: 'data' | 'web' | 'both';
}

interface Metric {
  label: string;
  value: string;
  improvement: string;
}

interface Project {
  id: number;
  title: string;
  category: 'data' | 'web' | 'both';
  shortDescription: string;
  fullDescription: string;
  image: string;
  alt: string;
  technologies: Technology[];
  metrics: Metric[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  challenge?: string;
  solution?: string;
  outcome?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'data':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'web':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'both':
        return 'bg-conversion/10 text-conversion border-conversion/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'data':
        return 'Data Analytics';
      case 'web':
        return 'Web Development';
      case 'both':
        return 'Integrated Solution';
      default:
        return 'Project';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-lg shadow-elevation-lg overflow-y-auto animate-slide-in-from-bottom"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-foreground rounded-full transition-colors duration-base"
          aria-label="Close modal"
        >
          <Icon name="XMarkIcon" size={24} />
        </button>

        <div className="relative h-64 md:h-80 overflow-hidden">
          <AppImage
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-3xl font-headline font-bold text-foreground">
                {project.title}
              </h2>
              <span
                className={`flex-shrink-0 px-3 py-1 rounded-md text-sm font-medium border ${getCategoryColor(
                  project.category
                )}`}
              >
                {getCategoryLabel(project.category)}
              </span>
            </div>
            <p className="text-base text-muted-foreground">
              {project.fullDescription}
            </p>
          </div>

          {project.challenge && (
            <div className="space-y-2">
              <h3 className="text-lg font-headline font-semibold text-foreground flex items-center gap-2">
                <Icon name="ExclamationTriangleIcon" size={20} className="text-warning" />
                Challenge
              </h3>
              <p className="text-sm text-muted-foreground">{project.challenge}</p>
            </div>
          )}

          {project.solution && (
            <div className="space-y-2">
              <h3 className="text-lg font-headline font-semibold text-foreground flex items-center gap-2">
                <Icon name="LightBulbIcon" size={20} className="text-accent" />
                Solution
              </h3>
              <p className="text-sm text-muted-foreground">{project.solution}</p>
            </div>
          )}

          {project.outcome && (
            <div className="space-y-2">
              <h3 className="text-lg font-headline font-semibold text-foreground flex items-center gap-2">
                <Icon name="CheckCircleIcon" size={20} className="text-conversion" />
                Outcome
              </h3>
              <p className="text-sm text-muted-foreground">{project.outcome}</p>
            </div>
          )}

          <div className="space-y-3">
            <h3 className="text-lg font-headline font-semibold text-foreground">
              Key Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 bg-muted/20 rounded-lg border border-border space-y-1"
                >
                  <p className="text-xs text-muted-foreground font-body">
                    {metric.label}
                  </p>
                  <p className="text-2xl font-headline font-bold text-foreground">
                    {metric.value}
                  </p>
                  <p className="text-xs text-conversion font-medium">
                    {metric.improvement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-headline font-semibold text-foreground">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 rounded-md text-sm font-body border ${
                    tech.category === 'data' ?'bg-accent/10 text-accent border-accent/20'
                      : tech.category === 'web' ?'bg-secondary/10 text-secondary border-secondary/20' :'bg-conversion/10 text-conversion border-conversion/20'
                  }`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-conversion text-conversion-foreground rounded-md font-cta font-semibold text-sm hover:bg-conversion/90 transition-colors duration-base"
              >
                <Icon name="ArrowTopRightOnSquareIcon" size={20} />
                View Live Project
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-cta font-semibold text-sm hover:bg-primary/90 transition-colors duration-base"
              >
                <Icon name="CodeBracketIcon" size={20} />
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;