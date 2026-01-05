'use client';

import React from 'react';
import HeroSection from './HeroSection';
import StorySection from './StorySection';
import ExpertiseSection from './ExpertiseSection';
import ValuePropositionSection from './ValuePropositionSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

interface ProfileData {
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
}

interface StoryData {
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlights: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

interface ExpertiseData {
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
}

interface ValuePropsData {
  title: string;
  subtitle: string;
  propositions: Array<{
    icon: string;
    title: string;
    description: string;
    benefits: string[];
  }>;
}

interface TestimonialsData {
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
}

interface CTAData {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
}

interface AboutInteractiveProps {
  profile: ProfileData;
  story: StoryData;
  expertise: ExpertiseData;
  valueProps: ValuePropsData;
  testimonials: TestimonialsData;
  cta: CTAData;
}

const AboutInteractive = ({
  profile,
  story,
  expertise,
  valueProps,
  testimonials,
  cta,
}: AboutInteractiveProps) => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection profile={profile} />
      <StorySection story={story} />
      <ExpertiseSection expertise={expertise} />
      <ValuePropositionSection valueProps={valueProps} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection cta={cta} />
    </div>
  );
};

export default AboutInteractive;