import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: number;
  icon: string;
  label: string;
  value: string;
  href: string;
  description: string;
}

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className = '' }: ContactInfoProps) => {
  const contactMethods: ContactMethod[] = [
    {
      id: 1,
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'contato@datadev.com.br',
      href: 'mailto:contato@datadev.com.br',
      description: 'Respondo em até 24 horas'
    },
    {
      id: 2,
      icon: 'PhoneIcon',
      label: 'Telefone',
      value: '+55 (11) 98765-4321',
      href: 'tel:+5511987654321',
      description: 'Seg-Sex, 9h às 18h'
    },
    {
      id: 3,
      icon: 'MapPinIcon',
      label: 'Localização',
      value: 'São Paulo, SP - Brasil',
      href: '#',
      description: 'Atendimento presencial ou remoto'
    }
  ];

  const socialLinks = [
    {
      id: 1,
      name: 'GitHub',
      icon: 'CodeBracketIcon',
      href: 'https://github.com/datadev',
      color: 'hover:text-primary'
    },
    {
      id: 2,
      name: 'LinkedIn',
      icon: 'UserGroupIcon',
      href: 'https://linkedin.com/in/datadev',
      color: 'hover:text-accent'
    },
    {
      id: 3,
      name: 'Twitter',
      icon: 'ChatBubbleLeftRightIcon',
      href: 'https://twitter.com/datadev',
      color: 'hover:text-secondary'
    },
    {
      id: 4,
      name: 'Instagram',
      icon: 'CameraIcon',
      href: 'https://instagram.com/datadev',
      color: 'hover:text-cta-secondary'
    }
  ];

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="space-y-6">
        <h2 className="text-2xl font-headline font-bold text-foreground">
          Informações de Contato
        </h2>
        <div className="space-y-4">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              className="flex items-start space-x-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-all duration-base group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-base">
                <Icon name={method.icon as any} size={24} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {method.label}
                </p>
                <p className="text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-base">
                  {method.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-headline font-bold text-foreground">
          Redes Sociais
        </h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-12 h-12 rounded-full bg-card hover:bg-muted/50 transition-all duration-base ${social.color}`}
              aria-label={social.name}
            >
              <Icon name={social.icon as any} size={24} />
            </a>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
        <div className="flex items-start space-x-4">
          <Icon name="InformationCircleIcon" size={24} className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Horário de Atendimento
            </h4>
            <p className="text-sm text-muted-foreground">
              Segunda a Sexta: 9h às 18h (Horário de Brasília)\nSábado: 9h às 13h\nDomingo: Fechado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;