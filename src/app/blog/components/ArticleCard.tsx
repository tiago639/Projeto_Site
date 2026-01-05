'use client';

import React, { useState } from 'react';
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

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <article
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-base hover:shadow-elevation-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={article.image}
          alt={article.alt}
          className={`w-full h-full object-cover transition-transform duration-slow ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base" />
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-medium border ${getCategoryColor(
            article.category
          )}`}
        >
          {getCategoryLabel(article.category)}
        </span>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Icon name="CalendarIcon" size={14} />
            <span>{formatDate(article.publishedDate)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="ClockIcon" size={14} />
            <span>{article.readTime} min read</span>
          </div>
        </div>

        <h3 className="text-lg font-headline font-bold text-foreground group-hover:text-primary transition-colors duration-base line-clamp-2">
          {article.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {article.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted/30 text-muted-foreground rounded text-xs font-body"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-cta font-semibold text-sm hover:bg-primary/90 transition-colors duration-base"
          >
            <span>Read Article</span>
            <Icon name="ArrowRightIcon" size={16} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;