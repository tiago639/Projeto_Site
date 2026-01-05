'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ExpertiseSectionProps {
  expertise: {
    title: string;
    description: string;
    domains: Array<{
      id: string;
      name: string;
      icon: string;
      color: string;
      skills: string[];
      caseStudy: {
        title: string;
        description: string;
        impact: string;
      };
    }>;
  };
}

const ExpertiseSection = ({ expertise }: ExpertiseSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeDomain, setActiveDomain] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleDomainClick = (index: number) => {
    if (!isHydrated) return;
    setActiveDomain(index);
  };

  const currentDomain = expertise.domains[activeDomain];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            {expertise.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {expertise.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {expertise.domains.map((domain, index) => (
            <button
              key={domain.id}
              onClick={() => handleDomainClick(index)}
              className={`px-6 py-3 rounded-lg font-cta font-semibold text-sm transition-all duration-300 ${
                isHydrated && activeDomain === index
                  ? `bg-${domain.color} text-white shadow-lg scale-105`
                  : 'bg-card text-muted-foreground border border-border hover:border-primary/50'
              }`}
            >
              <Icon
                name={domain.icon as any}
                size={20}
                className="inline-block mr-2"
              />
              {domain.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-8 border border-border">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
              Competências Técnicas
            </h3>
            <div className="space-y-3">
              {currentDomain.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-background rounded-lg"
                >
                  <Icon
                    name="CheckCircleIcon"
                    size={20}
                    className="text-conversion flex-shrink-0"
                  />
                  <span className="text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="LightBulbIcon" size={24} className="text-primary" />
              <h3 className="text-2xl font-headline font-bold text-foreground">
                Caso de Estudo
              </h3>
            </div>
            <h4 className="text-xl font-cta font-semibold text-primary mb-3">
              {currentDomain.caseStudy.title}
            </h4>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {currentDomain.caseStudy.description}
            </p>
            <div className="bg-conversion/10 border border-conversion/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon
                  name="ChartBarIcon"
                  size={20}
                  className="text-conversion flex-shrink-0 mt-1"
                />
                <div>
                  <div className="text-sm font-semibold text-conversion mb-1">
                    Impacto Mensurável
                  </div>
                  <div className="text-sm text-foreground">
                    {currentDomain.caseStudy.impact}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;