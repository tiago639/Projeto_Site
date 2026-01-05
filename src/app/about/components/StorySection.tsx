'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface StorySectionProps {
  story: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    highlights: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

const StorySection = ({ story }: StorySectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleHighlightClick = (index: number) => {
    if (!isHydrated) return;
    setActiveHighlight(index);
  };

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
              {story.title}
            </h2>
            <p className="text-xl text-primary font-cta font-semibold">
              {story.subtitle}
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {story.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {story.highlights.map((highlight, index) => (
              <div
                key={index}
                onClick={() => handleHighlightClick(index)}
                className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                  isHydrated && activeHighlight === index
                    ? 'bg-primary/10 border-primary shadow-lg scale-105'
                    : 'bg-background border-border hover:border-primary/50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isHydrated && activeHighlight === index
                      ? 'bg-primary' :'bg-muted'
                  }`}
                >
                  <Icon
                    name={highlight.icon as any}
                    size={24}
                    className={
                      isHydrated && activeHighlight === index
                        ? 'text-white' :'text-muted-foreground'
                    }
                  />
                </div>
                <h3 className="text-lg font-headline font-bold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;