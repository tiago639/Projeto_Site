import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  cta: {
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
  };
}

const CTASection = ({ cta }: CTASectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-white mb-6">
            {cta.title}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={cta.primaryButton.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-cta font-semibold text-lg hover:bg-white/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {cta.primaryButton.text}
              <Icon name="ArrowRightIcon" size={20} className="ml-2" />
            </Link>

            <Link
              href={cta.secondaryButton.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-cta font-semibold text-lg hover:bg-white hover:text-primary hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {cta.secondaryButton.text}
              <Icon name="DocumentTextIcon" size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;