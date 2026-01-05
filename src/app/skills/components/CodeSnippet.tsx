'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CodeSnippetProps {
  title: string;
  language: string;
  code: string;
}

export default function CodeSnippet({ title, language, code }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border">
        <div className="flex items-center space-x-3">
          <Icon name="CodeBracketIcon" size={20} className="text-primary" />
          <span className="font-medium text-foreground">{title}</span>
          <span className="px-2 py-1 text-xs rounded bg-primary/10 text-primary font-accent">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-muted hover:bg-muted/70 transition-colors duration-base"
          aria-label="Copy code"
        >
          <Icon name={copied ? 'CheckIcon' : 'ClipboardDocumentIcon'} size={16} />
          <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-accent text-foreground leading-relaxed">{code}</code>
      </pre>
    </div>
  );
}