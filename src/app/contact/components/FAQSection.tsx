'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  className?: string;
}

const FAQSection = ({ className = '' }: FAQSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'Qual é o prazo médio para desenvolvimento de um projeto?',
      answer: 'O prazo varia de acordo com a complexidade do projeto. Projetos simples podem levar de 2 a 4 semanas, enquanto projetos mais complexos podem levar de 2 a 6 meses. Durante a consulta inicial, fornecerei uma estimativa detalhada baseada nos seus requisitos específicos.'
    },
    {
      id: 2,
      question: 'Você trabalha com clientes internacionais?',
      answer: 'Sim! Trabalho com clientes em todo o mundo. Tenho experiência em colaboração remota e posso me adaptar a diferentes fusos horários. A comunicação pode ser feita em português, inglês ou espanhol.'
    },
    {
      id: 3,
      question: 'Quais são suas formas de pagamento?',
      answer: 'Aceito pagamentos via transferência bancária (PIX, TED), PayPal e cartões de crédito. Para projetos maiores, trabalho com um sistema de marcos (milestones) onde o pagamento é dividido em etapas do projeto.'
    },
    {
      id: 4,
      question: 'Você oferece suporte após a entrega do projeto?',
      answer: 'Sim! Todos os projetos incluem um período de suporte pós-lançamento de 30 dias. Após esse período, ofereço planos de manutenção mensais ou suporte sob demanda, dependendo das suas necessidades.'
    },
    {
      id: 5,
      question: 'Posso ver exemplos do seu trabalho anterior?',
      answer: 'Claro! Visite a seção de Portfolio no site para ver projetos anteriores. Para projetos sob NDA ou informações mais detalhadas, posso compartilhar estudos de caso específicos durante nossa consulta inicial.'
    },
    {
      id: 6,
      question: 'Você trabalha sozinho ou tem uma equipe?',
      answer: 'Trabalho principalmente de forma independente, mas tenho uma rede de profissionais especializados que posso trazer para projetos maiores quando necessário. Isso garante flexibilidade e expertise especializada quando seu projeto precisa.'
    }
  ];

  const toggleFAQ = (id: number) => {
    if (!isHydrated) return;
    setOpenId(openId === id ? null : id);
  };

  if (!isHydrated) {
    return (
      <div className={`space-y-6 ${className}`}>
        <div>
          <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground">
            Respostas para as dúvidas mais comuns sobre meus serviços.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-card rounded-lg border border-border">
              <button className="w-full px-6 py-4 text-left flex items-center justify-between">
                <span className="text-base font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <Icon name="ChevronDownIcon" size={20} className="text-muted-foreground flex-shrink-0" />
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
          Perguntas Frequentes
        </h2>
        <p className="text-muted-foreground">
          Respostas para as dúvidas mais comuns sobre meus serviços.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="bg-card rounded-lg border border-border overflow-hidden transition-all duration-base"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-base"
              aria-expanded={openId === faq.id}
            >
              <span className="text-base font-semibold text-foreground pr-4">
                {faq.question}
              </span>
              <Icon
                name="ChevronDownIcon"
                size={20}
                className={`text-muted-foreground flex-shrink-0 transition-transform duration-base ${
                  openId === faq.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openId === faq.id && (
              <div className="px-6 pb-4 animate-fade-in">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;