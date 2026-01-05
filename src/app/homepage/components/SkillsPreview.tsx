'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  level: number;
  category: 'data' | 'web';
}

interface SkillsPreviewProps {
  className?: string;
}

const SkillsPreview = ({ className = '' }: SkillsPreviewProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'data' | 'web'>(
    'all'
  );

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const skills: Skill[] = [
    { name: 'Python', level: 95, category: 'data' },
    { name: 'SQL', level: 90, category: 'data' },
    { name: 'Tableau', level: 85, category: 'data' },
    { name: 'Power BI', level: 88, category: 'data' },
    { name: 'React', level: 92, category: 'web' },
    { name: 'Next.js', level: 90, category: 'web' },
    { name: 'TypeScript', level: 88, category: 'web' },
    { name: 'Tailwind CSS', level: 95, category: 'web' },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="habilidades"
      className={`py-20 lg:py-32 bg-background relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon
              name="CodeBracketIcon"
              size={16}
              className="text-primary mr-2"
            />
            <span className="text-sm font-medium text-primary">
              Habilidades
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Expertise em{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Dados & Desenvolvimento
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Domínio técnico em análise de dados e desenvolvimento web,
            permitindo criar soluções completas e integradas.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-lg font-cta font-semibold text-sm transition-all duration-base ${
              activeCategory === 'all' ?'bg-primary text-primary-foreground shadow-elevation-md' :'bg-card text-muted-foreground border border-border hover:border-primary hover:text-foreground'
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setActiveCategory('data')}
            className={`px-6 py-3 rounded-lg font-cta font-semibold text-sm transition-all duration-base ${
              activeCategory === 'data' ?'bg-primary text-primary-foreground shadow-elevation-md' :'bg-card text-muted-foreground border border-border hover:border-primary hover:text-foreground'
            }`}
          >
            Análise de Dados
          </button>
          <button
            onClick={() => setActiveCategory('web')}
            className={`px-6 py-3 rounded-lg font-cta font-semibold text-sm transition-all duration-base ${
              activeCategory === 'web' ?'bg-primary text-primary-foreground shadow-elevation-md' :'bg-card text-muted-foreground border border-border hover:border-primary hover:text-foreground'
            }`}
          >
            Desenvolvimento Web
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-elevation-lg transition-all duration-base"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-headline font-semibold text-foreground">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-primary">
                  {isHydrated ? `${skill.level}%` : '0%'}
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-slow ${
                    skill.category === 'data' ?'bg-gradient-to-r from-primary to-accent' :'bg-gradient-to-r from-secondary to-primary'
                  }`}
                  style={{
                    width: isHydrated ? `${skill.level}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/skills"
            className="inline-flex items-center px-8 py-4 bg-conversion text-conversion-foreground rounded-lg font-cta font-semibold text-base hover:bg-conversion/90 hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base group"
          >
            Ver Todas as Habilidades
            <Icon
              name="ArrowRightIcon"
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-base"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;