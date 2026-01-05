'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = [
  'Data Analyst',
  'Web Developer',
  'Full-Stack Engineer',
  'Data Visualization Expert'];


  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const currentFullText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, isHydrated]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="inicio"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background ${className}`}>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="w-2 h-2 bg-conversion rounded-full mr-2 animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Disponível para Projetos
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-foreground leading-tight">
                Olá, eu sou{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  DataDev
                </span>
              </h1>

              <div className="h-16 sm:h-20">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-headline font-semibold text-muted-foreground">
                  {isHydrated ?
                  <>
                      {displayText}
                      <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-pulse" />
                    </> :

                  'Data Analyst'
                  }
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Onde Dados Encontram o Digital. Eu não apenas analiso dados ou
                construo websites - eu crio experiências digitais orientadas por
                dados que transformam insights em ação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-conversion text-conversion-foreground rounded-lg font-cta font-semibold text-base hover:bg-conversion/90 hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base group">

                Ver Projetos
                <Icon
                  name="ArrowRightIcon"
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-base" />

              </Link>

              <button
                onClick={() => scrollToSection('contato')}
                className="inline-flex items-center justify-center px-8 py-4 bg-card border-2 border-primary text-primary rounded-lg font-cta font-semibold text-base hover:bg-primary hover:text-primary-foreground hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base group">

                Entre em Contato
                <Icon
                  name="EnvelopeIcon"
                  size={20}
                  className="ml-2 group-hover:scale-110 transition-transform duration-base" />

              </button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/datadev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md hover:-translate-y-1 transition-all duration-base"
                aria-label="GitHub Profile">

                <Icon name="CodeBracketIcon" size={24} />
              </a>
              <a
                href="https://linkedin.com/in/datadev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md hover:-translate-y-1 transition-all duration-base"
                aria-label="LinkedIn Profile">

                <Icon name="UserIcon" size={24} />
              </a>
              <a
                href="mailto:contact@datadev.com"
                className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md hover:-translate-y-1 transition-all duration-base"
                aria-label="Email Contact">

                <Icon name="EnvelopeIcon" size={24} />
              </a>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative bg-card border border-border rounded-2xl p-8 shadow-elevation-lg backdrop-blur-sm">
                <div className="aspect-square relative rounded-xl overflow-hidden mb-6 group">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1ef1089a9-1763296862327.png"
                    alt="Professional headshot of DataDev - a confident data analyst and web developer with short dark hair wearing a navy blue shirt against a neutral background"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-slow" />

                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon
                          name="ChartBarIcon"
                          size={24}
                          className="text-primary" />

                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Projetos de Dados
                        </p>
                        <p className="text-2xl font-headline font-bold text-foreground">
                          50+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <Icon
                          name="CodeBracketIcon"
                          size={24}
                          className="text-secondary" />

                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Sites Desenvolvidos
                        </p>
                        <p className="text-2xl font-headline font-bold text-foreground">
                          75+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon
                          name="StarIcon"
                          size={24}
                          className="text-accent" />

                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Clientes Satisfeitos
                        </p>
                        <p className="text-2xl font-headline font-bold text-foreground">
                          100%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('sobre')}
            className="p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md transition-all duration-base"
            aria-label="Scroll to About Section">

            <Icon name="ChevronDownIcon" size={24} />
          </button>
        </div>
      </div>
    </section>);

};

export default HeroSection;