'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  newsletter: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className = '' }: ContactFormProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    newsletter: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projectTypes = [
    { value: '', label: 'Selecione o tipo de projeto' },
    { value: 'web-development', label: 'Desenvolvimento Web' },
    { value: 'data-analytics', label: 'Análise de Dados' },
    { value: 'full-stack', label: 'Projeto Full-Stack' },
    { value: 'consulting', label: 'Consultoria' },
    { value: 'other', label: 'Outro' }
  ];

  const budgetRanges = [
    { value: '', label: 'Selecione o orçamento' },
    { value: 'under-5k', label: 'Até R$ 5.000' },
    { value: '5k-10k', label: 'R$ 5.000 - R$ 10.000' },
    { value: '10k-25k', label: 'R$ 10.000 - R$ 25.000' },
    { value: '25k-50k', label: 'R$ 25.000 - R$ 50.000' },
    { value: 'above-50k', label: 'Acima de R$ 50.000' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Telefone inválido';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Selecione o tipo de projeto';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Mensagem deve ter pelo menos 20 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');

    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
      newsletter: false
    });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  if (!isHydrated) {
    return (
      <div className={`bg-card rounded-lg p-6 lg:p-8 ${className}`}>
        <h2 className="text-2xl font-headline font-bold text-foreground mb-6">
          Envie sua Mensagem
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-md bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-md bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                disabled
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-lg p-6 lg:p-8 ${className}`}>
      <h2 className="text-2xl font-headline font-bold text-foreground mb-6">
        Envie sua Mensagem
      </h2>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 rounded-lg bg-success/10 border border-success/20 flex items-start space-x-3">
          <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-success font-semibold mb-1">Mensagem enviada com sucesso!</p>
            <p className="text-sm text-success/80">Entrarei em contato em breve.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md bg-input border ${
                errors.name ? 'border-error' : 'border-border'
              } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-base`}
              placeholder="João Silva"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-error flex items-center space-x-1">
                <Icon name="ExclamationCircleIcon" size={16} />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md bg-input border ${
                errors.email ? 'border-error' : 'border-border'
              } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-base`}
              placeholder="joao@exemplo.com.br"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error flex items-center space-x-1">
                <Icon name="ExclamationCircleIcon" size={16} />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md bg-input border ${
                errors.phone ? 'border-error' : 'border-border'
              } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-base`}
              placeholder="+55 (11) 98765-4321"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-error flex items-center space-x-1">
                <Icon name="ExclamationCircleIcon" size={16} />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
              Tipo de Projeto *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md bg-input border ${
                errors.projectType ? 'border-error' : 'border-border'
              } text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-base`}
            >
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="mt-1 text-sm text-error flex items-center space-x-1">
                <Icon name="ExclamationCircleIcon" size={16} />
                <span>{errors.projectType}</span>
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
            Orçamento Estimado
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-base"
          >
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Mensagem *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 rounded-md bg-input border ${
              errors.message ? 'border-error' : 'border-border'
            } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-base resize-none`}
            placeholder="Conte-me sobre seu projeto e como posso ajudar..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error flex items-center space-x-1">
              <Icon name="ExclamationCircleIcon" size={16} />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
          />
          <label htmlFor="newsletter" className="text-sm text-muted-foreground">
            Quero receber atualizações sobre novos projetos, artigos e insights sobre desenvolvimento web e análise de dados.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-conversion text-conversion-foreground rounded-md font-cta font-semibold text-base hover:bg-conversion/90 hover:shadow-elevation-md hover:-translate-y-0.5 transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Icon name="PaperAirplaneIcon" size={20} />
              <span>Enviar Mensagem</span>
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          * Campos obrigatórios. Seus dados estão protegidos e não serão compartilhados.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;