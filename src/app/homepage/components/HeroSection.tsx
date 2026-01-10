'use client';

import React, { useState, useEffect } from 'react';

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
    'Data Visualization Expert'
  ];

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
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background ${className}`}
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 xl:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-conversion rounded-full mr-1.5 sm:mr-2 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-primary">
                  Disponível para Projetos
                </span>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-headline font-bold text-foreground leading-tight">
                  Olá, eu sou{' '}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block sm:inline">
                    Tiago Silva
                  </span>
                </h1>
              </div>

              <div className="h-12 sm:h-14 md:h-16 lg:h-20">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-headline font-semibold text-muted-foreground">
                  {isHydrated ? (
                    <>
                      {displayText}
                      <span className="inline-block w-0.5 h-5 sm:h-6 md:h-7 lg:h-8 bg-primary ml-1 animate-pulse" />
                    </>
                  ) : (
                    'Data Analyst'
                  )}
                </p>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
                Onde Dados Encontram o Digital. Eu não apenas analiso dados ou
                construo websites - eu crio experiências digitais orientadas por
                dados que transformam insights em ação.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-conversion text-conversion-foreground rounded-lg font-cta font-semibold text-sm sm:text-base hover:bg-conversion/90 hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base group"
              >
                Ver Projetos
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <button
                onClick={() => scrollToSection('contato')}
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-card border-2 border-primary text-primary rounded-lg font-cta font-semibold text-sm sm:text-base hover:bg-primary hover:text-primary-foreground hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base group"
              >
                Entre em Contato
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-base" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-3 sm:pt-4">
              <a
                href="https://github.com/tiago639"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md hover:-translate-y-1 transition-all duration-base"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/tiago-fonseca-da-silva-/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md hover:-translate-y-1 transition-all duration-base"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Container da imagem - visível em telas médias e maiores */}
          <div className="relative mt-8 sm:mt-10 md:mt-12 lg:mt-0 lg:block hidden">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md 2xl:max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-elevation-lg backdrop-blur-sm">
                <div className="aspect-square relative rounded-lg sm:rounded-xl overflow-hidden mb-2 sm:mb-3 md:mb-4 group">
                  <img
                    src="/Capa.png"
                    alt="Professional headshot of DataDev - a confident data analyst and web developer with short dark hair wearing a navy blue shirt against a neutral background"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base" />
                </div>

                <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                  <div className="flex items-center justify-between p-2 sm:p-2.5 md:p-3 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                      <div className="p-1 sm:p-1.5 md:p-2 bg-primary/10 rounded-lg">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm md:text-sm text-muted-foreground">
                          Projetos de Dados
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-headline font-bold text-foreground">
                          50+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 sm:p-2.5 md:p-3 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                      <div className="p-1 sm:p-1.5 md:p-2 bg-secondary/10 rounded-lg">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm md:text-sm text-muted-foreground">
                          Sites Desenvolvidos
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-headline font-bold text-foreground">
                          75+
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 sm:p-2.5 md:p-3 bg-background rounded-lg border border-border">
                    <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                      <div className="p-1 sm:p-1.5 md:p-2 bg-accent/10 rounded-lg">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm md:text-sm text-muted-foreground">
                          Clientes Satisfeitos
                        </p>
                        <p className="text-base sm:text-lg md:text-xl font-headline font-bold text-foreground">
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

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('sobre')}
            className="p-2 sm:p-3 bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md transition-all duration-base"
            aria-label="Scroll to About Section"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;