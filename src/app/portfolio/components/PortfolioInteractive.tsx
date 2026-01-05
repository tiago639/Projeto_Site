'use client';

import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FilterBar from './FilterBar';
import RelatedProjects from './RelatedProjects';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  category: 'data' | 'web' | 'both';
}

interface Metric {
  label: string;
  value: string;
  improvement: string;
}

interface Project {
  id: number;
  title: string;
  category: 'data' | 'web' | 'both';
  shortDescription: string;
  fullDescription: string;
  image: string;
  alt: string;
  technologies: Technology[];
  metrics: Metric[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  challenge?: string;
  solution?: string;
  outcome?: string;
}

const PortfolioInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockProjects: Project[] = [
  {
    id: 1,
    title: 'Dashboard de Análise de Vendas em Tempo Real',
    category: 'both',
    shortDescription: 'Plataforma web integrada que combina análise de dados avançada com visualizações interativas para monitoramento de vendas em tempo real.',
    fullDescription: 'Sistema completo de business intelligence que integra análise de dados com desenvolvimento web moderno. A solução processa milhares de transações por minuto, oferecendo insights acionáveis através de uma interface intuitiva e responsiva.',
    image: "https://images.unsplash.com/photo-1562071674-4e2b15a4c839",
    alt: 'Modern analytics dashboard showing colorful charts and graphs on multiple computer monitors in dark office environment',
    technologies: [
    { name: 'Python', category: 'data' },
    { name: 'Pandas', category: 'data' },
    { name: 'React', category: 'web' },
    { name: 'Next.js', category: 'web' },
    { name: 'D3.js', category: 'both' },
    { name: 'PostgreSQL', category: 'data' },
    { name: 'Redis', category: 'both' },
    { name: 'Docker', category: 'web' }],

    metrics: [
    { label: 'Redução no Tempo de Análise', value: '75%', improvement: '↓ 6h para 1.5h' },
    { label: 'Aumento na Precisão', value: '94%', improvement: '↑ de 78%' },
    { label: 'Usuários Ativos', value: '2.5K+', improvement: '↑ 340%' }],

    liveUrl: 'https://example.com/sales-dashboard',
    githubUrl: 'https://github.com/example/sales-dashboard',
    featured: true,
    challenge: 'A empresa enfrentava dificuldades para processar e visualizar grandes volumes de dados de vendas em tempo real, resultando em decisões baseadas em informações desatualizadas.',
    solution: 'Desenvolvi uma arquitetura híbrida que combina processamento de dados em Python com uma interface web moderna em React/Next.js. Implementei cache inteligente com Redis e otimizações de consulta que reduziram drasticamente o tempo de resposta.',
    outcome: 'A solução permitiu que a equipe de vendas tomasse decisões baseadas em dados atualizados em tempo real, resultando em um aumento de 28% na eficiência operacional e redução de 45% em oportunidades perdidas.'
  },
  {
    id: 2,
    title: 'Sistema de Previsão de Demanda com ML',
    category: 'data',
    shortDescription: 'Modelo de machine learning para previsão de demanda de produtos com 92% de precisão, otimizando gestão de estoque e reduzindo custos.',
    fullDescription: 'Solução de análise preditiva que utiliza algoritmos avançados de machine learning para prever demanda futura de produtos. O sistema analisa padrões históricos, sazonalidade e fatores externos para gerar previsões precisas.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_142fe8497-1767497886402.png",
    alt: 'Financial charts and graphs with upward trending lines displayed on computer screen with calculator and documents',
    technologies: [
    { name: 'Python', category: 'data' },
    { name: 'Scikit-learn', category: 'data' },
    { name: 'TensorFlow', category: 'data' },
    { name: 'Jupyter', category: 'data' },
    { name: 'NumPy', category: 'data' },
    { name: 'Matplotlib', category: 'data' }],

    metrics: [
    { label: 'Precisão do Modelo', value: '92%', improvement: '↑ de 67%' },
    { label: 'Redução de Custos', value: 'R$ 450K', improvement: '↓ 35% anual' },
    { label: 'Otimização de Estoque', value: '68%', improvement: '↑ de 42%' }],

    githubUrl: 'https://github.com/example/demand-forecast',
    featured: true,
    challenge: 'A empresa mantinha níveis de estoque inadequados, resultando em excesso de produtos de baixa demanda e falta de produtos populares.',
    solution: 'Implementei um modelo ensemble combinando ARIMA, Prophet e redes neurais LSTM para capturar diferentes padrões de demanda. O sistema considera múltiplas variáveis incluindo sazonalidade, promoções e tendências de mercado.',
    outcome: 'O modelo reduziu em 35% os custos com estoque parado e eliminou 78% das situações de ruptura de estoque, melhorando significativamente a satisfação do cliente.'
  },
  {
    id: 3,
    title: 'E-commerce Responsivo com Checkout Otimizado',
    category: 'web',
    shortDescription: 'Plataforma de e-commerce moderna com foco em conversão, featuring checkout em uma página e integração completa com gateways de pagamento.',
    fullDescription: 'Loja virtual completa desenvolvida com as melhores práticas de UX/UI e otimização de conversão. A plataforma oferece experiência fluida em todos os dispositivos com carregamento ultra-rápido e processo de compra simplificado.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb7c1cb3-1764655134961.png",
    alt: 'Modern e-commerce website displayed on laptop showing product catalog with shopping cart and payment options',
    technologies: [
    { name: 'Next.js', category: 'web' },
    { name: 'TypeScript', category: 'web' },
    { name: 'Tailwind CSS', category: 'web' },
    { name: 'Stripe', category: 'web' },
    { name: 'Vercel', category: 'web' },
    { name: 'MongoDB', category: 'web' }],

    metrics: [
    { label: 'Taxa de Conversão', value: '4.8%', improvement: '↑ de 2.1%' },
    { label: 'Tempo de Carregamento', value: '1.2s', improvement: '↓ de 4.5s' },
    { label: 'Abandono de Carrinho', value: '32%', improvement: '↓ de 68%' }],

    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: false,
    challenge: 'O cliente tinha uma loja online com alta taxa de abandono de carrinho e baixa conversão devido a processo de checkout complexo e performance lenta.',
    solution: 'Redesenhei completamente a experiência do usuário com foco em simplicidade e velocidade. Implementei checkout em uma página, otimizações de performance e integração seamless com múltiplos métodos de pagamento.',
    outcome: 'A nova plataforma dobrou a taxa de conversão e reduziu o abandono de carrinho em 53%, resultando em aumento de 180% no faturamento mensal.'
  },
  {
    id: 4,
    title: 'Análise de Sentimento em Redes Sociais',
    category: 'data',
    shortDescription: 'Sistema de análise de sentimento que processa milhares de menções em redes sociais, identificando tendências e insights sobre percepção de marca.',
    fullDescription: 'Ferramenta de social listening que utiliza processamento de linguagem natural para analisar menções de marca em tempo real. O sistema classifica sentimentos, identifica influenciadores e detecta crises potenciais.',
    image: "https://images.unsplash.com/photo-1587372723658-faa91cf660d9",
    alt: 'Social media analytics dashboard showing sentiment analysis graphs and engagement metrics on tablet device',
    technologies: [
    { name: 'Python', category: 'data' },
    { name: 'NLTK', category: 'data' },
    { name: 'spaCy', category: 'data' },
    { name: 'Twitter API', category: 'data' },
    { name: 'Elasticsearch', category: 'data' },
    { name: 'Kibana', category: 'data' }],

    metrics: [
    { label: 'Menções Processadas', value: '50K+', improvement: 'por dia' },
    { label: 'Precisão de Sentimento', value: '89%', improvement: '↑ de 72%' },
    { label: 'Tempo de Detecção', value: '< 5min', improvement: '↓ de 2h' }],

    githubUrl: 'https://github.com/example/sentiment-analysis',
    featured: false,
    challenge: 'A equipe de marketing não conseguia acompanhar o volume de menções nas redes sociais e frequentemente perdia oportunidades de engajamento ou gestão de crises.',
    solution: 'Desenvolvi um pipeline de processamento que coleta, limpa e analisa menções em tempo real usando técnicas avançadas de NLP. O sistema envia alertas automáticos para situações críticas.',
    outcome: 'A empresa reduziu em 85% o tempo de resposta a crises e aumentou em 240% o engajamento positivo com clientes nas redes sociais.'
  },
  {
    id: 5,
    title: 'Portal Corporativo com Sistema de Gestão',
    category: 'web',
    shortDescription: 'Intranet corporativa completa com gestão de documentos, comunicação interna e workflows automatizados para empresa com 500+ colaboradores.',
    fullDescription: 'Sistema web robusto que centraliza todas as operações internas da empresa. Inclui gestão de documentos, aprovações, comunicados, diretório de colaboradores e integração com sistemas legados.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1483f596e-1767552463508.png",
    alt: 'Corporate intranet portal interface showing document management system and employee directory on desktop computer',
    technologies: [
    { name: 'React', category: 'web' },
    { name: 'Node.js', category: 'web' },
    { name: 'Express', category: 'web' },
    { name: 'PostgreSQL', category: 'web' },
    { name: 'AWS', category: 'web' },
    { name: 'Docker', category: 'web' }],

    metrics: [
    { label: 'Usuários Ativos', value: '500+', improvement: '98% adoção' },
    { label: 'Redução de Emails', value: '65%', improvement: '↓ comunicação' },
    { label: 'Economia Anual', value: 'R$ 280K', improvement: '↓ processos manuais' }],

    liveUrl: 'https://example.com/corporate-portal',
    featured: false,
    challenge: 'A empresa sofria com comunicação fragmentada, processos manuais demorados e dificuldade em localizar documentos e informações importantes.',
    solution: 'Criei uma plataforma centralizada que integra todos os processos internos com interface intuitiva e busca poderosa. Implementei workflows automatizados e notificações inteligentes.',
    outcome: 'O portal reduziu em 70% o tempo gasto em tarefas administrativas e melhorou significativamente a comunicação interna, resultando em aumento de 45% na produtividade.'
  },
  {
    id: 6,
    title: 'Sistema de Recomendação Personalizado',
    category: 'both',
    shortDescription: 'Engine de recomendação baseado em machine learning integrado a plataforma web, aumentando engajamento e vendas através de sugestões personalizadas.',
    fullDescription: 'Sistema completo de recomendação que combina algoritmos de collaborative filtering e content-based filtering. A solução aprende continuamente com o comportamento do usuário para oferecer sugestões cada vez mais precisas.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12850311f-1766472084308.png",
    alt: 'Personalized recommendation system interface showing product suggestions and user preferences on modern web application',
    technologies: [
    { name: 'Python', category: 'data' },
    { name: 'Scikit-learn', category: 'data' },
    { name: 'FastAPI', category: 'both' },
    { name: 'React', category: 'web' },
    { name: 'Redis', category: 'both' },
    { name: 'MongoDB', category: 'data' },
    { name: 'Kubernetes', category: 'web' }],

    metrics: [
    { label: 'Aumento em Vendas', value: '38%', improvement: '↑ conversão' },
    { label: 'Tempo de Sessão', value: '+5.2min', improvement: '↑ 85%' },
    { label: 'Taxa de Clique', value: '12.4%', improvement: '↑ de 3.8%' }],

    liveUrl: 'https://example.com/recommendations',
    githubUrl: 'https://github.com/example/recommendation-engine',
    featured: true,
    challenge: 'A plataforma de e-commerce tinha baixo engajamento e os usuários tinham dificuldade em descobrir produtos relevantes no catálogo extenso.',
    solution: 'Implementei um sistema híbrido de recomendação que combina análise de comportamento, similaridade de produtos e tendências de mercado. A API de recomendações foi otimizada para responder em menos de 100ms.',
    outcome: 'O sistema aumentou em 38% as vendas cruzadas e em 85% o tempo médio de sessão, além de melhorar significativamente a satisfação do cliente.'
  }];


  const filteredProjects = isHydrated ?
  activeFilter === 'all' ?
  mockProjects :
  mockProjects.filter((p) => p.category === activeFilter) :
  mockProjects;

  const projectCounts = isHydrated ?
  {
    all: mockProjects.length,
    data: mockProjects.filter((p) => p.category === 'data').length,
    web: mockProjects.filter((p) => p.category === 'web').length,
    both: mockProjects.filter((p) => p.category === 'both').length
  } :
  { all: 0, data: 0, web: 0, both: 0 };

  const handleFilterChange = (filter: string) => {
    setIsLoading(true);
    setActiveFilter(filter);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4 mb-12">
            <div className="h-12 bg-muted/20 rounded-lg w-64 mx-auto animate-pulse" />
            <div className="h-6 bg-muted/20 rounded-lg w-96 mx-auto animate-pulse" />
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {[1, 2, 3, 4].map((i) =>
            <div key={i} className="h-12 w-48 bg-muted/20 rounded-lg animate-pulse" />
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) =>
            <div key={i} className="h-96 bg-muted/20 rounded-lg animate-pulse" />
            )}
          </div>
        </div>
      </div>);

  }

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground">
              Portfólio de Projetos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore minha coleção de projetos que demonstram a integração única entre análise de dados e desenvolvimento web. Cada projeto representa uma solução completa que combina insights analíticos com implementação técnica de excelência.
            </p>
          </div>

          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            projectCounts={projectCounts} />

        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
            <div key={i} className="h-96 bg-muted/20 rounded-lg animate-pulse" />
            )}
            </div> :
          filteredProjects.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredProjects.map((project) =>
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails} />

            )}
            </div> :

          <div className="text-center py-16">
              <Icon name="FolderOpenIcon" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                Nenhum projeto encontrado
              </h3>
              <p className="text-muted-foreground">
                Tente selecionar um filtro diferente para ver mais projetos.
              </p>
            </div>
          }
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
              Pronto para Transformar Seus Dados em Soluções Digitais?
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada projeto no meu portfólio representa uma jornada única de descoberta de insights e implementação técnica. Se você tem um desafio que requer tanto análise de dados quanto desenvolvimento web, vamos conversar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-conversion text-conversion-foreground rounded-lg font-cta font-semibold text-base hover:bg-conversion/90 hover:shadow-elevation-md hover:-translate-y-0.5 transition-all duration-base">

                <Icon name="ChatBubbleLeftRightIcon" size={20} />
                Iniciar Conversa
              </a>
              <a
                href="/skills"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-cta font-semibold text-base hover:bg-primary/90 hover:shadow-elevation-md hover:-translate-y-0.5 transition-all duration-base">

                <Icon name="CodeBracketIcon" size={20} />
                Ver Habilidades
              </a>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <>
          <ProjectModal 
            project={selectedProject} 
            onClose={handleCloseModal} />
          <RelatedProjects
            currentProject={selectedProject}
            allProjects={mockProjects}
            onViewProject={handleViewDetails} />
        </>
      )}
    </>);

};

export default PortfolioInteractive;