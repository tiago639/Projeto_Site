'use client';

import React, { useState } from 'react';
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
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-base hover:shadow-elevation-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 bg-conversion text-conversion-foreground px-3 py-1 rounded-full text-xs font-cta font-semibold">
          Featured
        </div>
      )}

      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.alt}
          className={`w-full h-full object-cover transition-transform duration-slow ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base" />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-headline font-bold text-foreground group-hover:text-primary transition-colors duration-base line-clamp-2">
            {project.title}
          </h3>
          <span
            className={`flex-shrink-0 px-2 py-1 rounded-md text-xs font-medium border ${getCategoryColor(
              project.category
            )}`}
          >
            {getCategoryLabel(project.category)}
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted/30 text-muted-foreground rounded text-xs font-body"
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-muted/30 text-muted-foreground rounded text-xs font-body">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-cta font-semibold text-sm hover:bg-primary/90 transition-colors duration-base"
          >
            <Icon name="EyeIcon" size={16} />
            View Details
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors duration-base"
              aria-label="View live project"
            >
              <Icon name="ArrowTopRightOnSquareIcon" size={20} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors duration-base"
              aria-label="View GitHub repository"
            >
              <Icon name="CodeBracketIcon" size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;