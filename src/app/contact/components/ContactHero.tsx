'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  className?: string;
}

const ContactHero = ({ className = '' }: ContactHeroProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Icon name="EnvelopeIcon" size={40} className="text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6">
              Vamos Conversar
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Pronto para transformar dados em experiências digitais incríveis? Entre em contato e vamos criar algo extraordinário juntos.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent animate-pulse-slow" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 animate-bounce-slow">
            <Icon name="EnvelopeIcon" size={40} className="text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6 animate-fade-in">
            Vamos Conversar
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
            Pronto para transformar dados em experiências digitais incríveis? Entre em contato e vamos criar algo extraordinário juntos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;