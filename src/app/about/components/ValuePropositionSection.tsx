import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ValuePropositionSectionProps {
  valueProps: {
    title: string;
    subtitle: string;
    propositions: Array<{
      icon: string;
      title: string;
      description: string;
      benefits: string[];
    }>;
  };
}

const ValuePropositionSection = ({ valueProps }: ValuePropositionSectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            {valueProps.title}
          </h2>
          <p className="text-xl text-primary font-cta font-semibold max-w-3xl mx-auto">
            {valueProps.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {valueProps.propositions.map((prop, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Icon name={prop.icon as any} size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-headline font-bold text-foreground mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {prop.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Icon
                      name="ArrowRightIcon"
                      size={16}
                      className="text-primary flex-shrink-0 mt-1"
                    />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;