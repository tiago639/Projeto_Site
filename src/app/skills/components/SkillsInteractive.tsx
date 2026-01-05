'use client';

import { useState, useEffect } from 'react';
import SkillCategory from './SkillCategory';
import TechnologyCard from './TechnologyCard';
import CodeSnippet from './CodeSnippet';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  level: number;
  description: string;
  icon: string;
}

interface Technology {
  name: string;
  icon: string;
  description: string;
  category: string;
}

interface CodeExample {
  title: string;
  language: string;
  code: string;
}

interface SkillsData {
  dataAnalytics: Skill[];
  webDevelopment: Skill[];
  hybridTools: Skill[];
  technologies: Technology[];
  codeExamples: CodeExample[];
}

export default function SkillsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'data' | 'web' | 'hybrid'>('all');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    dataAnalytics: true,
    webDevelopment: false,
    hybridTools: false,
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const skillsData: SkillsData = {
    dataAnalytics: [
      {
        name: 'Python',
        level: 95,
        description: 'Análise de dados avançada com Pandas, NumPy e Scikit-learn',
        icon: '🐍',
      },
      {
        name: 'SQL',
        level: 90,
        description: 'Consultas complexas, otimização e modelagem de banco de dados',
        icon: '🗄️',
      },
      {
        name: 'Power BI',
        level: 88,
        description: 'Criação de dashboards interativos e relatórios analíticos',
        icon: '📊',
      },
      {
        name: 'Excel Avançado',
        level: 92,
        description: 'Análise estatística, macros VBA e modelagem financeira',
        icon: '📈',
      },
      {
        name: 'R',
        level: 85,
        description: 'Análise estatística e visualização de dados com ggplot2',
        icon: '📉',
      },
    ],
    webDevelopment: [
      {
        name: 'React',
        level: 93,
        description: 'Desenvolvimento de interfaces modernas com hooks e context',
        icon: '⚛️',
      },
      {
        name: 'Next.js',
        level: 90,
        description: 'Aplicações full-stack com SSR, SSG e API routes',
        icon: '▲',
      },
      {
        name: 'TypeScript',
        level: 88,
        description: 'Desenvolvimento type-safe com interfaces e generics',
        icon: '🔷',
      },
      {
        name: 'Node.js',
        level: 87,
        description: 'APIs RESTful e microserviços com Express e Fastify',
        icon: '🟢',
      },
      {
        name: 'Tailwind CSS',
        level: 95,
        description: 'Design responsivo e sistemas de design escaláveis',
        icon: '🎨',
      },
    ],
    hybridTools: [
      {
        name: 'D3.js',
        level: 82,
        description: 'Visualizações de dados interativas e personalizadas',
        icon: '📊',
      },
      {
        name: 'Plotly',
        level: 85,
        description: 'Gráficos científicos e dashboards analíticos',
        icon: '📈',
      },
      {
        name: 'Chart.js',
        level: 90,
        description: 'Gráficos responsivos para aplicações web',
        icon: '📉',
      },
      {
        name: 'PostgreSQL',
        level: 88,
        description: 'Banco de dados relacional com queries analíticas',
        icon: '🐘',
      },
      {
        name: 'MongoDB',
        level: 83,
        description: 'NoSQL para dados não estruturados e big data',
        icon: '🍃',
      },
    ],
    technologies: [
      {
        name: 'Git',
        icon: '🔀',
        description: 'Controle de versão e colaboração em equipe',
        category: 'Ferramentas',
      },
      {
        name: 'Docker',
        icon: '🐳',
        description: 'Containerização e deploy de aplicações',
        category: 'DevOps',
      },
      {
        name: 'AWS',
        icon: '☁️',
        description: 'Cloud computing e serviços escaláveis',
        category: 'Cloud',
      },
      {
        name: 'Jupyter',
        icon: '📓',
        description: 'Notebooks interativos para análise de dados',
        category: 'Data Science',
      },
      {
        name: 'Figma',
        icon: '🎨',
        description: 'Design de interfaces e prototipagem',
        category: 'Design',
      },
      {
        name: 'VS Code',
        icon: '💻',
        description: 'Editor de código com extensões poderosas',
        category: 'Ferramentas',
      },
    ],
    codeExamples: [
      {
        title: 'Análise de Dados com Pandas',
        language: 'Python',
        code: `import pandas as pd\nimport numpy as np\n\n# Carregar e processar dados\ndf = pd.read_csv('dados.csv')\n\n# Análise estatística\ndf.describe()\n\n# Filtrar e agrupar\nresultado = df.groupby('categoria')['valor'].agg(['mean', 'sum'])\n\n# Visualização\ndf.plot(kind='bar', x='mes', y='vendas')`,
      },
      {
        title: 'Componente React com TypeScript',
        language: 'TypeScript',
        code: `interface DataCardProps {\n  title: string;\n  value: number;\n  trend: 'up' | 'down';\n}\n\nconst DataCard: React.FC<DataCardProps> = ({ title, value, trend }) => {\n  return (\n    <div className="card">\n      <h3>{title}</h3>\n      <p className="value">{value}</p>\n      <span className={trend}>{trend === 'up' ? '↑' : '↓'}</span>\n    </div>\n  );\n};`,
      },
      {
        title: 'Query SQL Analítica',
        language: 'SQL',
        code: `SELECT \n  DATE_TRUNC('month', data_venda) AS mes,\n  categoria,\n  SUM(valor) AS total_vendas,\n  COUNT(*) AS num_transacoes,\n  AVG(valor) AS ticket_medio\nFROM vendas\nWHERE data_venda >= '2025-01-01'\nGROUP BY mes, categoria\nHAVING SUM(valor) > 10000\nORDER BY mes DESC, total_vendas DESC;`,
      },
    ],
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const filteredTechnologies = skillsData.technologies.filter((tech) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'data') return ['Data Science', 'Cloud'].includes(tech.category);
    if (activeFilter === 'web') return ['Ferramentas', 'Design', 'DevOps'].includes(tech.category);
    if (activeFilter === 'hybrid') return tech.category === 'DevOps';
    return true;
  });

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3 mx-auto" />
            <div className="h-6 bg-muted rounded w-2/3 mx-auto" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-muted rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground">
            Laboratório de <span className="text-primary">Habilidades</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Onde dados encontram desenvolvimento: uma demonstração interativa das capacidades técnicas que conectam análise e implementação
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {[
            { id: 'all', label: 'Todas', icon: 'Squares2X2Icon' },
            { id: 'data', label: 'Data Analytics', icon: 'ChartBarIcon' },
            { id: 'web', label: 'Web Development', icon: 'CodeBracketIcon' },
            { id: 'hybrid', label: 'Ferramentas Híbridas', icon: 'CpuChipIcon' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-base ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-elevation-md'
                  : 'bg-card text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              }`}
            >
              <Icon name={filter.icon as any} size={20} />
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        <div className="space-y-6 mb-16">
          <SkillCategory
            title="Data Analytics"
            skills={skillsData.dataAnalytics}
            color="bg-gradient-to-r from-blue-500 to-cyan-500"
            isExpanded={expandedCategories.dataAnalytics}
            onToggle={() => toggleCategory('dataAnalytics')}
          />
          <SkillCategory
            title="Web Development"
            skills={skillsData.webDevelopment}
            color="bg-gradient-to-r from-purple-500 to-pink-500"
            isExpanded={expandedCategories.webDevelopment}
            onToggle={() => toggleCategory('webDevelopment')}
          />
          <SkillCategory
            title="Ferramentas Híbridas"
            skills={skillsData.hybridTools}
            color="bg-gradient-to-r from-emerald-500 to-teal-500"
            isExpanded={expandedCategories.hybridTools}
            onToggle={() => toggleCategory('hybridTools')}
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-headline font-bold text-foreground mb-8 text-center">
            Tecnologias & Ferramentas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTechnologies.map((tech, index) => (
              <TechnologyCard key={index} {...tech} />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-headline font-bold text-foreground text-center">
            Exemplos de Código
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillsData.codeExamples.map((example, index) => (
              <CodeSnippet key={index} {...example} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <Icon name="LightBulbIcon" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
            Pronto para Transformar Dados em Experiências Digitais?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Combine análise de dados profunda com desenvolvimento web de ponta para criar soluções que realmente fazem a diferença
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-conversion text-conversion-foreground rounded-lg font-cta font-semibold hover:bg-conversion/90 hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base"
          >
            <span>Vamos Conversar</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}