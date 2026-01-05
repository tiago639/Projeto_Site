'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: 'data-analytics' | 'web-development' | 'hybrid' | 'industry-insights';
  image: string;
  alt: string;
  author: string;
  publishedDate: string;
  readTime: number;
  featured: boolean;
  tags: string[];
}

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'data-analytics':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'web-development':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'hybrid':
        return 'bg-conversion/10 text-conversion border-conversion/20';
      case 'industry-insights':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'data-analytics':
        return 'Data Analytics';
      case 'web-development':
        return 'Web Development';
      case 'hybrid':
        return 'Hybrid Project';
      case 'industry-insights':
        return 'Industry Insights';
      default:
        return 'Article';
    }
  };

  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <article className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-base hover:shadow-elevation-xl">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative h-64 lg:h-full overflow-hidden">
          <AppImage
            src={article.image}
            alt={article.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
          <div className="absolute top-6 left-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-conversion text-conversion-foreground rounded-full text-sm font-cta font-semibold shadow-elevation-md">
              <Icon name="StarIcon" size={16} />
              Featured
            </span>
          </div>
        </div>

        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-md text-xs font-medium border ${getCategoryColor(
                  article.category
                )}`}
              >
                {getCategoryLabel(article.category)}
              </span>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Icon name="CalendarIcon" size={16} />
                  <span>{formatDate(article.publishedDate)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="ClockIcon" size={16} />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground group-hover:text-primary transition-colors duration-base">
              {article.title}
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-md text-sm font-body"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-cta font-semibold hover:bg-primary/90 hover:shadow-elevation-md hover:-translate-y-0.5 transition-all duration-base">
                <span>Read Full Article</span>
                <Icon name="ArrowRightIcon" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;