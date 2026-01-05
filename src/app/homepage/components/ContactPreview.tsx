'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ContactPreviewProps {
  className?: string;
}

const ContactPreview = ({ className = '' }: ContactPreviewProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const contactMethods = [
    {
      icon: 'EnvelopeIcon',
      title: 'Email',
      value: 'contact@datadev.com',
      link: 'mailto:contact@datadev.com',
      color: 'primary',
    },
    {
      icon: 'PhoneIcon',
      title: 'Telefone',
      value: '+55 (11) 98765-4321',
      link: 'tel:+5511987654321',
      color: 'secondary',
    },
    {
      icon: 'MapPinIcon',
      title: 'Localização',
      value: 'São Paulo, Brasil',
      link: '#',
      color: 'accent',
    },
  ];

  return (
    <section
      id="contato"
      className={`py-20 lg:py-32 bg-card relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-secondary" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon
              name="EnvelopeIcon"
              size={16}
              className="text-primary mr-2"
            />
            <span className="text-sm font-medium text-primary">Contato</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Vamos Trabalhar{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Juntos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tem um projeto em mente? Entre em contato e vamos transformar suas
            ideias em realidade digital.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group p-6 bg-background border border-border rounded-xl hover:border-primary hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base text-center"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-${method.color}/10 rounded-full flex items-center justify-center group-hover:bg-${method.color}/20 transition-colors duration-base`}
                >
                  <Icon
                    name={method.icon as any}
                    size={28}
                    className={`text-${method.color}`}
                  />
                </div>
                <h3 className="text-lg font-headline font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
                  Pronto para começar seu projeto?
                </h3>
                <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                  Seja para análise de dados, desenvolvimento web ou uma solução
                  integrada, estou aqui para ajudar a transformar seus desafios
                  em oportunidades.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-conversion mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground">
                      Resposta em até 24 horas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-conversion mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground">
                      Consulta inicial gratuita
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      className="text-conversion mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground">
                      Orçamento personalizado
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-card border border-border rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon
                        name="ClockIcon"
                        size={24}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-headline font-semibold text-foreground">
                        Horário de Atendimento
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Seg - Sex: 9h às 18h
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-8 py-4 bg-conversion text-conversion-foreground rounded-lg font-cta font-semibold text-base hover:bg-conversion/90 hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base group"
                >
                  Enviar Mensagem
                  <Icon
                    name="PaperAirplaneIcon"
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-base"
                  />
                </Link>

                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://github.com/datadev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md transition-all duration-base"
                    aria-label="GitHub Profile"
                  >
                    <Icon name="CodeBracketIcon" size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/datadev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md transition-all duration-base"
                    aria-label="LinkedIn Profile"
                  >
                    <Icon name="UserIcon" size={24} />
                  </a>
                  <a
                    href="https://twitter.com/datadev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md transition-all duration-base"
                    aria-label="Twitter Profile"
                  >
                    <Icon name="ChatBubbleLeftIcon" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;