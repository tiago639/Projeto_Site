'use client';

import React from 'react';
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

interface RelatedProjectsProps {
  currentProject: Project;
  allProjects: Project[];
  onViewProject: (project: Project) => void;
}

const RelatedProjects = ({ currentProject, allProjects, onViewProject }: RelatedProjectsProps) => {
  const relatedProjects = allProjects
    .filter((p) => p.id !== currentProject.id && p.category === currentProject.category)
    .slice(0, 3);

  if (relatedProjects.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
        Projetos Relacionados
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-muted/20 rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-base cursor-pointer"
            onClick={() => onViewProject(project)}
          >
            <div className="relative h-32 overflow-hidden">
              <AppImage
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-slow"
              />
            </div>
            <div className="p-4 space-y-2">
              <h4 className="text-sm font-headline font-semibold text-foreground group-hover:text-primary transition-colors duration-base line-clamp-2">
                {project.title}
              </h4>
              <p className="text-xs text-muted-foreground line-clamp-2">
                {project.shortDescription}
              </p>
              <div className="flex items-center gap-2 text-xs text-primary font-medium">
                <span>Ver Projeto</span>
                <Icon name="ArrowRightIcon" size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProjects;