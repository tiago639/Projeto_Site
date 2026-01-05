'use client';

import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';
import FilterButton from './FilterButton';
import StatsCard from './StatsCard';
import RecognitionCard from './RecognitionCard';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  title: string;
  description: string;
  icon: string;
}

interface Publication {
  title: string;
  type: string;
  url: string;
}

interface ExperienceData {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'data' | 'web' | 'hybrid';
  description: string;
  responsibilities: string[];
  achievements: Achievement[];
  technologies: string[];
  publications?: Publication[];
  certifications?: string[];
  logo: string;
  logoAlt: string;
}

interface RecognitionData {
  type: 'github' | 'linkedin' | 'certification' | 'speaking' | 'article';
  title: string;
  description: string;
  metric?: string;
  image?: string;
  imageAlt?: string;
  url?: string;
}

const ExperienceInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'data' | 'web' | 'hybrid'>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const experiences: ExperienceData[] = [
  {
    id: 1,
    role: 'Desenvolvedor Full Stack & Analista de Dados Sênior',
    company: 'TechVision Solutions',
    location: 'São Paulo, SP',
    period: 'Janeiro 2023 - Presente',
    type: 'hybrid',
    description: 'Liderando projetos que integram análise de dados avançada com desenvolvimento web moderno, criando soluções data-driven que transformam insights em experiências digitais impactantes.',
    responsibilities: [
    'Arquitetar e desenvolver aplicações web full-stack com Next.js, React e TypeScript',
    'Implementar pipelines de análise de dados usando Python, Pandas e SQL',
    'Criar dashboards interativos com visualizações de dados em tempo real',
    'Liderar equipe de 5 desenvolvedores em metodologia ágil',
    'Otimizar performance de aplicações processando milhões de registros'],

    achievements: [
    {
      title: 'Redução de 60% no Tempo de Processamento',
      description: 'Otimização de queries e implementação de cache inteligente',
      icon: 'BoltIcon'
    },
    {
      title: 'Dashboard Analytics Premiado',
      description: 'Reconhecido como melhor projeto interno de 2024',
      icon: 'TrophyIcon'
    },
    {
      title: 'Aumento de 45% em Conversões',
      description: 'Implementação de features baseadas em análise de comportamento',
      icon: 'ChartBarIcon'
    },
    {
      title: 'Mentoria de 8 Desenvolvedores',
      description: 'Programa de desenvolvimento de talentos júnior',
      icon: 'AcademicCapIcon'
    }],

    technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Python',
    'Pandas',
    'PostgreSQL',
    'MongoDB',
    'Docker',
    'AWS',
    'Tableau',
    'Power BI'],

    publications: [
    {
      title: 'Building Data-Driven Web Applications with Next.js',
      type: 'Artigo Técnico - Medium',
      url: 'https://medium.com/@datadev/building-data-driven-apps'
    },
    {
      title: 'Optimizing React Performance for Large Datasets',
      type: 'Tutorial - Dev.to',
      url: 'https://dev.to/datadev/react-performance'
    }],

    certifications: [
    'AWS Certified Solutions Architect',
    'Google Data Analytics Professional'],

    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11349ac97-1764635716722.png",
    logoAlt: 'TechVision Solutions company logo with modern geometric design in blue and purple gradient'
  },
  {
    id: 2,
    role: 'Analista de Dados & Desenvolvedor Frontend',
    company: 'DataFlow Analytics',
    location: 'Rio de Janeiro, RJ',
    period: 'Março 2021 - Dezembro 2022',
    type: 'hybrid',
    description: 'Desenvolvendo interfaces web intuitivas para visualização de dados complexos, transformando análises estatísticas em experiências de usuário acessíveis e acionáveis.',
    responsibilities: [
    'Desenvolver componentes React para visualização de dados complexos',
    'Realizar análises exploratórias e preditivas com Python e R',
    'Criar relatórios automatizados e dashboards interativos',
    'Colaborar com cientistas de dados na implementação de modelos ML',
    'Documentar processos e melhores práticas de desenvolvimento'],

    achievements: [
    {
      title: 'Sistema de Previsão de Vendas',
      description: 'Precisão de 92% em previsões trimestrais',
      icon: 'ChartBarIcon'
    },
    {
      title: 'Biblioteca de Componentes',
      description: 'Criação de 50+ componentes reutilizáveis',
      icon: 'CubeIcon'
    },
    {
      title: 'Redução de 70% em Tempo de Relatórios',
      description: 'Automação completa do processo de reporting',
      icon: 'ClockIcon'
    }],

    technologies: [
    'React',
    'JavaScript',
    'Python',
    'R',
    'D3.js',
    'Recharts',
    'MySQL',
    'Git',
    'Jupyter',
    'Scikit-learn'],

    publications: [
    {
      title: 'Interactive Data Visualization Best Practices',
      type: 'Palestra - React Conf Brasil 2022',
      url: 'https://reactconf.com.br/talks/data-viz'
    }],

    certifications: ['Microsoft Certified: Data Analyst Associate'],
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1749da4bf-1766501281755.png",
    logoAlt: 'DataFlow Analytics logo featuring flowing data streams in gradient colors'
  },
  {
    id: 3,
    role: 'Desenvolvedor Web Full Stack',
    company: 'WebCraft Digital',
    location: 'Belo Horizonte, MG',
    period: 'Janeiro 2020 - Fevereiro 2021',
    type: 'web',
    description: 'Construindo aplicações web escaláveis e performáticas, com foco em arquitetura limpa, experiência do usuário e boas práticas de desenvolvimento.',
    responsibilities: [
    'Desenvolver aplicações web completas usando MERN stack',
    'Implementar APIs RESTful e GraphQL',
    'Criar interfaces responsivas e acessíveis',
    'Realizar code reviews e pair programming',
    'Otimizar SEO e performance de aplicações'],

    achievements: [
    {
      title: 'E-commerce de Alto Tráfego',
      description: 'Suporte a 100k+ usuários simultâneos',
      icon: 'ShoppingCartIcon'
    },
    {
      title: 'Score 98 no Lighthouse',
      description: 'Otimização completa de performance',
      icon: 'BoltIcon'
    },
    {
      title: '15 Projetos Entregues',
      description: 'Todos dentro do prazo e orçamento',
      icon: 'CheckCircleIcon'
    }],

    technologies: [
    'Node.js',
    'Express',
    'React',
    'MongoDB',
    'Redis',
    'GraphQL',
    'Jest',
    'Webpack',
    'Nginx'],

    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_150ce4dec-1764997704463.png",
    logoAlt: 'WebCraft Digital logo with creative web design elements and vibrant colors'
  },
  {
    id: 4,
    role: 'Analista de Dados Júnior',
    company: 'InsightLab Research',
    location: 'Curitiba, PR',
    period: 'Junho 2018 - Dezembro 2019',
    type: 'data',
    description: 'Iniciando carreira em análise de dados, desenvolvendo habilidades em estatística, visualização e storytelling com dados para apoiar decisões estratégicas.',
    responsibilities: [
    'Coletar, limpar e processar grandes volumes de dados',
    'Criar visualizações e relatórios em Power BI e Tableau',
    'Realizar análises estatísticas e testes de hipóteses',
    'Apoiar equipe sênior em projetos de machine learning',
    'Apresentar insights para stakeholders não-técnicos'],

    achievements: [
    {
      title: 'Primeiro Dashboard Corporativo',
      description: 'Adotado por 5 departamentos',
      icon: 'PresentationChartBarIcon'
    },
    {
      title: 'Certificação em SQL',
      description: 'Top 5% na avaliação nacional',
      icon: 'AcademicCapIcon'
    },
    {
      title: 'Projeto de Segmentação',
      description: 'Identificação de 7 perfis de clientes',
      icon: 'UserGroupIcon'
    }],

    technologies: [
    'SQL',
    'Python',
    'Excel',
    'Power BI',
    'Tableau',
    'SPSS',
    'Google Analytics'],

    certifications: ['IBM Data Science Professional Certificate'],
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac6bc117-1767552462510.png",
    logoAlt: 'InsightLab Research logo with scientific data visualization elements'
  }];


  const recognitions: RecognitionData[] = [
  {
    type: 'github',
    title: 'Contribuidor Open Source Ativo',
    description: 'Mais de 500 contribuições em 2024, mantendo 3 projetos populares',
    metric: '2.5k+ Stars • 450+ Forks',
    url: 'https://github.com/datadev',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15c4c8a37-1766746450128.png",
    imageAlt: 'GitHub contribution graph showing consistent green squares indicating daily coding activity'
  },
  {
    type: 'linkedin',
    title: '15 Recomendações Profissionais',
    description: 'Reconhecimento de colegas, gestores e clientes por excelência técnica',
    metric: '3.2k+ Conexões',
    url: 'https://linkedin.com/in/datadev'
  },
  {
    type: 'certification',
    title: '8 Certificações Profissionais',
    description: 'AWS, Google Cloud, Microsoft Azure, e especializações em Data Science',
    metric: 'Todas Ativas'
  },
  {
    type: 'speaking',
    title: 'Palestrante em 6 Conferências',
    description: 'React Conf, Data Science Summit, DevFest, e meetups locais',
    metric: '1.5k+ Participantes',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15220b66a-1767523991306.png",
    imageAlt: 'Professional speaker presenting at tech conference with large audience and presentation slides visible'
  },
  {
    type: 'article',
    title: '25+ Artigos Técnicos Publicados',
    description: 'Medium, Dev.to, e blog pessoal sobre desenvolvimento e análise de dados',
    metric: '50k+ Visualizações',
    url: 'https://medium.com/@datadev'
  },
  {
    type: 'github',
    title: 'Projeto DataViz Library',
    description: 'Biblioteca React para visualização de dados, usada por 200+ empresas',
    metric: '5.8k Stars • 890 Forks',
    url: 'https://github.com/datadev/dataviz-lib',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_113617219-1764737686388.png",
    imageAlt: 'Colorful data visualization charts and graphs displayed on computer screen'
  }];


  const filteredExperiences = isHydrated ?
  experiences.filter((exp) => activeFilter === 'all' || exp.type === activeFilter) :
  experiences;

  const stats = {
    totalYears: '6+',
    projects: '45+',
    certifications: '8',
    contributions: '500+'
  };

  const filterCounts = {
    all: experiences.length,
    data: experiences.filter((e) => e.type === 'data').length,
    web: experiences.filter((e) => e.type === 'web').length,
    hybrid: experiences.filter((e) => e.type === 'hybrid').length
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-surface rounded-lg w-1/3" />
            <div className="h-6 bg-surface rounded-lg w-2/3" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) =>
              <div key={i} className="h-32 bg-surface rounded-lg" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="space-y-16">
      <section>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Jornada Profissional
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma trajetória de evolução contínua, conectando análise de dados e desenvolvimento web para criar soluções inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatsCard icon="CalendarIcon" label="Anos de Experiência" value={stats.totalYears} color="primary" />
          <StatsCard icon="BriefcaseIcon" label="Projetos Concluídos" value={stats.projects} color="success" />
          <StatsCard icon="AcademicCapIcon" label="Certificações" value={stats.certifications} color="warning" />
          <StatsCard icon="CodeBracketIcon" label="Contribuições OSS" value={stats.contributions} color="accent" />
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <FilterButton
            label="Todas"
            icon="ViewColumnsIcon"
            isActive={activeFilter === 'all'}
            count={filterCounts.all}
            onClick={() => setActiveFilter('all')} />

          <FilterButton
            label="Análise de Dados"
            icon="ChartBarIcon"
            isActive={activeFilter === 'data'}
            count={filterCounts.data}
            onClick={() => setActiveFilter('data')} />

          <FilterButton
            label="Desenvolvimento Web"
            icon="CodeBracketIcon"
            isActive={activeFilter === 'web'}
            count={filterCounts.web}
            onClick={() => setActiveFilter('web')} />

          <FilterButton
            label="Híbrido"
            icon="CpuChipIcon"
            isActive={activeFilter === 'hybrid'}
            count={filterCounts.hybrid}
            onClick={() => setActiveFilter('hybrid')} />

        </div>

        <div className="space-y-8">
          {filteredExperiences.map((experience, index) =>
          <TimelineItem
            key={experience.id}
            experience={experience}
            index={index}
            isExpanded={expandedId === experience.id}
            onToggle={() => setExpandedId(expandedId === experience.id ? null : experience.id)} />

          )}
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <Icon name="StarIcon" size={16} />
            <span>Reconhecimento Profissional</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Validação da Comunidade
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contribuições, certificações e reconhecimento que validam expertise técnica e liderança na comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recognitions.map((recognition, index) =>
          <RecognitionCard key={index} {...recognition} />
          )}
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
        <Icon name="RocketLaunchIcon" size={48} className="text-primary mx-auto mb-6" />
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-4">
          Pronto para Colaborar?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Vamos transformar seus dados em insights acionáveis e construir experiências digitais que fazem a diferença
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-conversion text-conversion-foreground rounded-lg font-cta font-semibold hover:bg-conversion/90 hover:shadow-elevation-md hover:-translate-y-0.5 transition-all duration-base">

            <Icon name="EnvelopeIcon" size={20} />
            <span>Iniciar Conversa</span>
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3 bg-surface text-foreground rounded-lg font-cta font-semibold border border-border hover:bg-surface/80 hover:shadow-elevation-md hover:-translate-y-0.5 transition-all duration-base">

            <Icon name="BriefcaseIcon" size={20} />
            <span>Ver Projetos</span>
          </a>
        </div>
      </section>
    </div>);

};

export default ExperienceInteractive;