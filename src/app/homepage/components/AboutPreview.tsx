import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface AboutPreviewProps {
  className?: string;
}

const AboutPreview = ({ className = '' }: AboutPreviewProps) => {
  const highlights = [
  {
    icon: 'ChartBarIcon',
    title: 'Análise de Dados',
    description:
    'Transformo dados complexos em insights acionáveis usando Python, SQL e ferramentas de visualização avançadas.'
  },
  {
    icon: 'CodeBracketIcon',
    title: 'Desenvolvimento Web',
    description:
    'Construo aplicações web modernas e responsivas com React, Next.js e tecnologias de ponta.'
  },
  {
    icon: 'LightBulbIcon',
    title: 'Soluções Integradas',
    description:
    'Combino expertise em dados e desenvolvimento para criar experiências digitais orientadas por insights.'
  }];


  return (
    <section
      id="sobre"
      className={`py-20 lg:py-32 bg-card relative overflow-hidden ${className}`}>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-secondary" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon name="UserIcon" size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Sobre Mim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Onde Dados Encontram o{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Digital
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sou um profissional híbrido que une o poder da análise de dados com
            a criatividade do desenvolvimento web para criar soluções digitais
            que realmente fazem a diferença.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
            <div className="relative bg-background border border-border rounded-2xl p-8 shadow-elevation-lg">
              <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
                <AppImage
                  src="https://images.unsplash.com/photo-1635114332743-719b5e0702b9"
                  alt="Modern workspace setup showing dual monitors displaying data analytics dashboards and web development code, with a laptop, coffee cup, and notebook on a clean white desk"
                  className="w-full h-full object-cover" />

              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-headline font-bold text-primary mb-1">
                    5+
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Anos de Experiência
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-headline font-bold text-secondary mb-1">
                    125+
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Projetos Concluídos
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <p className="text-2xl font-headline font-bold text-accent mb-1">
                    50+
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Clientes Felizes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              Com mais de 5 anos de experiência, desenvolvi uma expertise única
              que combina análise de dados profunda com desenvolvimento web de
              alta qualidade. Essa combinação rara me permite não apenas
              entender os dados, mas também criar as ferramentas digitais
              necessárias para transformar insights em ação.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Minha abordagem é centrada em resultados: cada projeto é uma
              oportunidade de unir o melhor dos dois mundos - a precisão
              analítica dos dados com a criatividade e usabilidade do
              desenvolvimento web moderno.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                Python
              </span>
              <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                SQL
              </span>
              <span className="px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary">
                React
              </span>
              <span className="px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-medium text-secondary">
                Next.js
              </span>
              <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
                Tableau
              </span>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold text-base hover:bg-primary/90 hover:shadow-elevation-md hover:-translate-y-0.5 transition-all duration-base group mt-6">

              Saiba Mais Sobre Mim
              <Icon
                name="ArrowRightIcon"
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform duration-base" />

            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) =>
          <div
            key={index}
            className="group p-6 bg-background border border-border rounded-xl hover:border-primary hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base">

              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-base">
                <Icon
                name={highlight.icon as any}
                size={24}
                className="text-primary" />

              </div>
              <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default AboutPreview;