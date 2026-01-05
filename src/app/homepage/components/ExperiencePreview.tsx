import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'data' | 'web';
}

interface ExperiencePreviewProps {
  className?: string;
}

const ExperiencePreview = ({ className = '' }: ExperiencePreviewProps) => {
  const experiences: Experience[] = [
    {
      id: 1,
      year: '2024 - Presente',
      title: 'Desenvolvedor Full-Stack & Analista de Dados',
      company: 'Tech Solutions Brasil',
      description:
        'Liderando projetos que integram análise de dados com desenvolvimento web, criando dashboards interativos e aplicações orientadas por dados.',
      type: 'data',
    },
    {
      id: 2,
      year: '2022 - 2024',
      title: 'Desenvolvedor Front-End Sênior',
      company: 'Digital Innovations',
      description:
        'Desenvolvimento de aplicações web modernas com React e Next.js, implementando designs responsivos e otimizados para performance.',
      type: 'web',
    },
    {
      id: 3,
      year: '2020 - 2022',
      title: 'Analista de Dados',
      company: 'DataCorp Analytics',
      description:
        'Análise de grandes volumes de dados, criação de relatórios automatizados e desenvolvimento de modelos preditivos para tomada de decisão.',
      type: 'data',
    },
  ];

  return (
    <section
      id="experiencia"
      className={`py-20 lg:py-32 bg-background relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-secondary via-transparent to-accent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon
              name="AcademicCapIcon"
              size={16}
              className="text-primary mr-2"
            />
            <span className="text-sm font-medium text-primary">
              Experiência
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Jornada{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Profissional
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma trajetória de crescimento contínuo, unindo expertise em análise
            de dados e desenvolvimento web.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative pl-20">
                  <div
                    className={`absolute left-4 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center ${
                      exp.type === 'data' ?'bg-primary' :'bg-secondary'
                    }`}
                  >
                    <Icon
                      name={
                        exp.type === 'data' ?'ChartBarIcon' :'CodeBracketIcon'
                      }
                      size={16}
                      className="text-white"
                    />
                  </div>

                  <div className="group p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-2">
                          {exp.year}
                        </span>
                        <h3 className="text-xl font-headline font-semibold text-foreground group-hover:text-primary transition-colors duration-base">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/experience"
            className="inline-flex items-center px-8 py-4 bg-conversion text-conversion-foreground rounded-lg font-cta font-semibold text-base hover:bg-conversion/90 hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base group"
          >
            Ver Experiência Completa
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

export default ExperiencePreview;