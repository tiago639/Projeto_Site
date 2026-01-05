'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

interface Publication {
  title: string;
  type: string;
  url: string;
}

interface ExperienceData {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'data' | 'web' | 'hybrid';
  description: string;
  responsibilities: string[];
  achievements: Achievement[];
  technologies: string[];
  publications?: Publication[];
  certifications?: string[];
  logo: string;
  logoAlt: string;
}

interface TimelineItemProps {
  experience: ExperienceData;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const TimelineItem = ({ experience, index, isExpanded, onToggle }: TimelineItemProps) => {
  const typeColors = {
    data: 'bg-accent/10 text-accent border-accent/30',
    web: 'bg-secondary/10 text-secondary border-secondary/30',
    hybrid: 'bg-primary/10 text-primary border-primary/30'
  };

  const typeLabels = {
    data: 'Data Analytics',
    web: 'Web Development',
    hybrid: 'Hybrid Role'
  };

  return (
    <div className="relative">
      <div className={`flex gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="flex-1">
          <div
            className={`bg-card border border-border rounded-lg p-6 hover:shadow-elevation-md transition-all duration-base cursor-pointer ${
              isExpanded ? 'shadow-elevation-md' : ''
            }`}
            onClick={onToggle}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-surface flex-shrink-0">
                  <AppImage
                    src={experience.logo}
                    alt={experience.logoAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-headline font-bold text-foreground mb-1">
                    {experience.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {experience.company} • {experience.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${typeColors[experience.type]}`}>
                  {typeLabels[experience.type]}
                </span>
                <Icon
                  name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={20}
                  className="text-muted-foreground"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Icon name="CalendarIcon" size={16} />
              <span>{experience.period}</span>
            </div>

            <p className="text-sm text-foreground leading-relaxed mb-4">
              {experience.description}
            </p>

            {isExpanded && (
              <div className="space-y-6 animate-slide-in-from-top">
                <div>
                  <h4 className="text-sm font-headline font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="ClipboardDocumentListIcon" size={18} className="text-primary" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-headline font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="TrophyIcon" size={18} className="text-warning" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {experience.achievements.map((achievement, idx) => (
                      <div key={idx} className="bg-surface/50 rounded-lg p-4 border border-border/50">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center flex-shrink-0">
                            <Icon name={achievement.icon as any} size={16} className="text-warning" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-sm font-medium text-foreground mb-1">
                              {achievement.title}
                            </h5>
                            <p className="text-xs text-muted-foreground">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-headline font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="CodeBracketIcon" size={18} className="text-secondary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-surface/50 text-foreground text-xs rounded-md border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {experience.publications && experience.publications.length > 0 && (
                  <div>
                    <h4 className="text-sm font-headline font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon name="DocumentTextIcon" size={18} className="text-accent" />
                      Publications & Contributions
                    </h4>
                    <div className="space-y-2">
                      {experience.publications.map((pub, idx) => (
                        <a
                          key={idx}
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 bg-surface/50 rounded-lg border border-border/50 hover:border-accent/50 transition-colors duration-base group"
                        >
                          <Icon name="LinkIcon" size={16} className="text-accent group-hover:scale-110 transition-transform duration-base" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-foreground group-hover:text-accent transition-colors duration-base">
                              {pub.title}
                            </p>
                            <p className="text-xs text-muted-foreground">{pub.type}</p>
                          </div>
                          <Icon name="ArrowTopRightOnSquareIcon" size={14} className="text-muted-foreground" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {experience.certifications && experience.certifications.length > 0 && (
                  <div>
                    <h4 className="text-sm font-headline font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Icon name="AcademicCapIcon" size={18} className="text-success" />
                      Certifications Earned
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.certifications.map((cert, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 bg-success/10 text-success text-xs rounded-md border border-success/30"
                        >
                          <Icon name="CheckBadgeIcon" size={14} />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="w-px bg-border relative flex-shrink-0">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-elevation-sm" />
        </div>

        <div className="flex-1" />
      </div>
    </div>
  );
};

export default TimelineItem;