'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface NewsletterSignupProps {
  className?: string;
}

const NewsletterSignup = ({ className = '' }: NewsletterSignupProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Por favor, insira um email válido');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setEmail('');

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  if (!isHydrated) {
    return (
      <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20 ${className}`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Icon name="EnvelopeIcon" size={32} className="text-primary" />
          </div>
          <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
            Receba Insights Exclusivos
          </h3>
          <p className="text-muted-foreground mb-6">
            Inscreva-se na newsletter e receba artigos, tutoriais e novidades sobre desenvolvimento web e análise de dados.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com.br"
              className="flex-1 px-4 py-3 rounded-md bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              disabled
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-cta font-semibold hover:bg-primary/90 transition-colors duration-base"
              disabled
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20 ${className}`}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
          <Icon name="EnvelopeIcon" size={32} className="text-primary" />
        </div>
        <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
          Receba Insights Exclusivos
        </h3>
        <p className="text-muted-foreground mb-6">
          Inscreva-se na newsletter e receba artigos, tutoriais e novidades sobre desenvolvimento web e análise de dados.
        </p>

        {submitStatus === 'success' ? (
          <div className="p-4 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center space-x-3">
            <Icon name="CheckCircleIcon" size={24} className="text-success" />
            <p className="text-success font-semibold">
              Inscrição realizada com sucesso! Verifique seu email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage('');
                }}
                placeholder="seu@email.com.br"
                className={`flex-1 px-4 py-3 rounded-md bg-input border ${
                  errorMessage ? 'border-error' : 'border-border'
                } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-base`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-cta font-semibold hover:bg-primary/90 hover:shadow-elevation-md hover:-translate-y-0.5 transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                    <span>Inscrevendo...</span>
                  </>
                ) : (
                  <span>Inscrever-se</span>
                )}
              </button>
            </div>
            {errorMessage && (
              <p className="text-sm text-error flex items-center justify-center space-x-1">
                <Icon name="ExclamationCircleIcon" size={16} />
                <span>{errorMessage}</span>
              </p>
            )}
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          Sem spam. Cancele a inscrição a qualquer momento.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;