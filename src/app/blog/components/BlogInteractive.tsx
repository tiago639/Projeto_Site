'use client';

import React, { useState, useMemo } from 'react';
import ArticleCard from './ArticleCard';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import FeaturedArticle from './FeaturedArticle';
import Footer from '@/app/homepage/components/Footer';

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

const BlogInteractive = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const articles: Article[] = [
  {
    id: 1,
    title: 'Building Real-Time Analytics Dashboards with React and WebSockets',
    excerpt: 'Learn how to create responsive, real-time data visualization dashboards that update instantly as new data arrives. This comprehensive guide covers WebSocket integration, state management, and performance optimization techniques.',
    category: 'hybrid',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_113617219-1764737686388.png",
    alt: 'Real-time analytics dashboard displaying colorful charts and graphs on computer screens',
    author: 'Rafael Silva',
    publishedDate: '2026-01-02',
    readTime: 12,
    featured: true,
    tags: ['React', 'WebSockets', 'Data Visualization', 'Real-Time']
  },
  {
    id: 2,
    title: 'Advanced SQL Techniques for Data Analysis: Window Functions and CTEs',
    excerpt: 'Master advanced SQL patterns that transform complex data queries into elegant solutions. Explore window functions, common table expressions, and recursive queries with practical examples.',
    category: 'data-analytics',
    image: "https://images.unsplash.com/photo-1614357107930-1bac8d57a0bf",
    alt: 'Database schema diagram with SQL code on laptop screen showing complex queries',
    author: 'Rafael Silva',
    publishedDate: '2025-12-28',
    readTime: 15,
    featured: false,
    tags: ['SQL', 'Data Analysis', 'Database', 'Performance']
  },
  {
    id: 3,
    title: 'Case Study: E-Commerce Analytics Platform - From Data to Insights',
    excerpt: 'Deep dive into building a comprehensive analytics platform for a major e-commerce client. Discover the challenges, technical decisions, and measurable results achieved through data-driven development.',
    category: 'hybrid',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d6ec7e4a-1764660533966.png",
    alt: 'E-commerce analytics dashboard showing sales metrics, conversion rates, and customer data',
    author: 'Rafael Silva',
    publishedDate: '2025-12-20',
    readTime: 18,
    featured: false,
    tags: ['Case Study', 'E-Commerce', 'Analytics', 'Full-Stack']
  },
  {
    id: 4,
    title: 'Next.js 14 Server Components: Building Performant Data-Heavy Applications',
    excerpt: 'Explore how Next.js 14 Server Components revolutionize data fetching and rendering for analytics applications. Learn patterns for optimal performance and user experience.',
    category: 'web-development',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ec4af866-1765728520761.png",
    alt: 'Modern web development setup with Next.js code on multiple monitors',
    author: 'Rafael Silva',
    publishedDate: '2025-12-15',
    readTime: 10,
    featured: false,
    tags: ['Next.js', 'React', 'Server Components', 'Performance']
  },
  {
    id: 5,
    title: 'Python for Data Pipeline Automation: Best Practices and Patterns',
    excerpt: 'Build robust, scalable data pipelines using Python. This guide covers error handling, logging, testing strategies, and orchestration tools for production-ready data workflows.',
    category: 'data-analytics',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bf0b947e-1765182444240.png",
    alt: 'Python code for data pipeline automation with flowchart diagrams',
    author: 'Rafael Silva',
    publishedDate: '2025-12-10',
    readTime: 14,
    featured: false,
    tags: ['Python', 'Data Pipeline', 'Automation', 'ETL']
  },
  {
    id: 6,
    title: 'The Future of Data Visualization: Interactive, Accessible, and Beautiful',
    excerpt: 'Industry insights on emerging trends in data visualization. From AI-powered insights to accessibility-first design, discover what\'s shaping the future of how we present data.',
    category: 'industry-insights',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6368784-1766480943079.png",
    alt: 'Futuristic data visualization with 3D charts and interactive elements',
    author: 'Rafael Silva',
    publishedDate: '2025-12-05',
    readTime: 8,
    featured: false,
    tags: ['Data Visualization', 'Trends', 'Accessibility', 'UX']
  },
  {
    id: 7,
    title: 'TypeScript for Data-Driven Applications: Type Safety Meets Analytics',
    excerpt: 'Leverage TypeScript\'s type system to build more reliable data applications. Learn how to model complex data structures, ensure API contract compliance, and catch errors before runtime.',
    category: 'web-development',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e55c2fca-1765282816550.png",
    alt: 'TypeScript code editor showing type definitions and data models',
    author: 'Rafael Silva',
    publishedDate: '2025-11-28',
    readTime: 11,
    featured: false,
    tags: ['TypeScript', 'Type Safety', 'Data Modeling', 'Best Practices']
  },
  {
    id: 8,
    title: 'Case Study: Healthcare Data Platform - Privacy, Performance, and Precision',
    excerpt: 'Building a HIPAA-compliant healthcare analytics platform presented unique challenges. Learn how we balanced data security, real-time performance, and regulatory compliance.',
    category: 'hybrid',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1644aff77-1764659451775.png",
    alt: 'Healthcare data dashboard with patient metrics and medical analytics',
    author: 'Rafael Silva',
    publishedDate: '2025-11-20',
    readTime: 16,
    featured: false,
    tags: ['Case Study', 'Healthcare', 'Security', 'Compliance']
  }];


  const categories = [
  { id: 'all', label: 'All Articles', count: articles.length },
  { id: 'data-analytics', label: 'Data Analytics', count: articles.filter((a) => a.category === 'data-analytics').length },
  { id: 'web-development', label: 'Web Development', count: articles.filter((a) => a.category === 'web-development').length },
  { id: 'hybrid', label: 'Hybrid Projects', count: articles.filter((a) => a.category === 'hybrid').length },
  { id: 'industry-insights', label: 'Industry Insights', count: articles.filter((a) => a.category === 'industry-insights').length }];


  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      const matchesSearch = searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = articles.find((a) => a.featured);
  const regularArticles = filteredArticles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
              Technical <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              In-depth articles, project case studies, and industry insights from a data-driven developer
            </p>
          </div>

          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory} />

        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {searchQuery === '' && selectedCategory === 'all' && featuredArticle &&
        <div className="mb-16">
            <h2 className="text-2xl font-headline font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full" />
              Featured Article
            </h2>
            <FeaturedArticle article={featuredArticle} />
          </div>
        }

        <div className="mb-8">
          <h2 className="text-2xl font-headline font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full" />
            {selectedCategory === 'all' ? 'All Articles' : categories.find((c) => c.id === selectedCategory)?.label}
            <span className="text-muted-foreground text-lg font-normal">({filteredArticles.length})</span>
          </h2>
        </div>

        {filteredArticles.length === 0 ?
        <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted/30 rounded-full mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-headline font-semibold text-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
            <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-cta font-semibold hover:bg-primary/90 transition-colors duration-base">

              Clear Filters
            </button>
          </div> :

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) =>
          <ArticleCard key={article.id} article={article} />
          )}
          </div>
        }
      </div>

      <Footer />
    </div>);

};

export default BlogInteractive;