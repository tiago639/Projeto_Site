'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2026');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerLinks = {
    navegacao: [
      { label: 'Início', href: '/homepage' },
      { label: 'Sobre', href: '/about' },
      { label: 'Habilidades', href: '/skills' },
      { label: 'Projetos', href: '/portfolio' },
    ],
    recursos: [
      { label: 'Experiência', href: '/experience' },
      { label: 'Contato', href: '/contact' },
      { label: 'Blog', href: '#' },
      { label: 'Recursos', href: '#' },
    ],
    social: [
      {
        label: 'GitHub',
        href: 'https://github.com/datadev',
        icon: 'CodeBracketIcon',
      },
      {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/datadev',
        icon: 'UserIcon',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/datadev',
        icon: 'ChatBubbleLeftIcon',
      },
      {
        label: 'Email',
        href: 'mailto:contact@datadev.com',
        icon: 'EnvelopeIcon',
      },
    ],
  };

  return (
    <footer
      className={`bg-card border-t border-border relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-primary via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Link
                href="/homepage"
                className="inline-flex items-center space-x-3 group mb-4"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-base group-hover:scale-110"
                >
                  <rect
                    width="40"
                    height="40"
                    rx="8"
                    fill="url(#footer-logo-gradient)"
                  />
                  <path
                    d="M12 14L16 10L20 14M20 14L24 10L28 14M20 14V26M12 26L16 30L20 26M20 26L24 30L28 26"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="footer-logo-gradient"
                      x1="0"
                      y1="0"
                      x2="40"
                      y2="40"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="var(--color-primary)" />
                      <stop offset="1" stopColor="var(--color-secondary)" />
                    </linearGradient>
                  </defs>
                </svg>
                <div>
                  <span className="text-xl font-headline font-bold text-foreground group-hover:text-primary transition-colors duration-base">
                    DataDev
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    Portfolio
                  </span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md">
                Transformando dados em insights e insights em experiências
                digitais excepcionais. Especialista em análise de dados e
                desenvolvimento web.
              </p>
              <div className="flex items-center gap-3">
                {footerLinks.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={
                      social.href.startsWith('http') ? '_blank' : undefined
                    }
                    rel={
                      social.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="p-2 bg-background border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary hover:shadow-elevation-md transition-all duration-base"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon as any} size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-headline font-semibold text-foreground mb-4">
                Navegação
              </h3>
              <ul className="space-y-3">
                {footerLinks.navegacao.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-base inline-flex items-center group"
                    >
                      <Icon
                        name="ChevronRightIcon"
                        size={16}
                        className="mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-base"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base font-headline font-semibold text-foreground mb-4">
                Recursos
              </h3>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-base inline-flex items-center group"
                    >
                      <Icon
                        name="ChevronRightIcon"
                        size={16}
                        className="mr-1 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-base"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {isHydrated
                ? `© ${currentYear} DataDev Portfolio. Todos os direitos reservados.`
                : '© 2026 DataDev Portfolio. Todos os direitos reservados.'}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-base"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-base"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;