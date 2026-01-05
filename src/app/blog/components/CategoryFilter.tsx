'use client';

import React from 'react';

interface Category {
  id: string;
  label: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-base ${
            selectedCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-elevation-md'
              : 'bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground'
          }`}
        >
          {category.label}
          <span className={`ml-2 ${
            selectedCategory === category.id ? 'opacity-80' : 'opacity-60'
          }`}>
            ({category.count})
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;