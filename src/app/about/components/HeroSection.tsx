'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  profile: {
    name: string;
    title: string;
    tagline: string;
    image: string;
    alt: string;
    stats: Array<{
      label: string;
      value: string;
      icon: string;
    }>;
  };
}

const HeroSection = ({ profile }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % profile.stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHydrated, profile.stats.length]);

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
              <Icon name="SparklesIcon" size={16} className="mr-2" />
              Desenvolvedor Full-Stack & Analista de Dados
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-foreground leading-tight">
              {profile.name}
            </h1>

            <p className="text-xl sm:text-2xl text-primary font-cta font-semibold">
              {profile.title}
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {profile.tagline}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {profile.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    isHydrated && activeStatIndex === index
                      ? 'bg-primary/10 border-primary shadow-lg scale-105'
                      : 'bg-card border-border'
                  }`}
                >
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className={`mx-auto mb-2 ${
                      isHydrated && activeStatIndex === index ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  />
                  <div className="text-2xl font-headline font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <AppImage
                  src={profile.image}
                  alt={profile.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-conversion rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Icon name="CheckBadgeIcon" size={48} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;