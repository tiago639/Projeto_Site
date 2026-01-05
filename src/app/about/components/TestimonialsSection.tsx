'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface TestimonialsSectionProps {
  testimonials: {
    title: string;
    items: Array<{
      id: string;
      name: string;
      role: string;
      company: string;
      image: string;
      alt: string;
      quote: string;
      highlight: string;
    }>;
  };
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.items.length]);

  const handleTestimonialClick = (index: number) => {
    if (!isHydrated) return;
    setActiveTestimonial(index);
  };

  const currentTestimonial = testimonials.items[activeTestimonial];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            {testimonials.title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 lg:p-12 border border-border shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <Icon name="ChatBubbleLeftRightIcon" size={48} className="text-primary" />
            </div>

            <blockquote className="text-xl lg:text-2xl text-foreground text-center mb-8 leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
              <p className="text-sm text-primary font-semibold text-center">
                💡 {currentTestimonial.highlight}
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                <AppImage
                  src={currentTestimonial.image}
                  alt={currentTestimonial.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-headline font-bold text-foreground">
                  {currentTestimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {currentTestimonial.role}
                </div>
                <div className="text-sm text-primary">{currentTestimonial.company}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.items.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isHydrated && activeTestimonial === index
                    ? 'bg-primary w-8' :'bg-muted hover:bg-primary/50'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;