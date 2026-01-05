import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
  title: 'Sobre - DataDev Portfolio',
  description: 'Conheça a história de um profissional híbrido que une análise de dados e desenvolvimento web para criar experiências digitais orientadas por insights. Descubra como a fusão de competências técnicas e analíticas pode transformar seus projetos.'
};

export default function AboutPage() {
  const profileData = {
    name: "Rafael Silva",
    title: "Desenvolvedor Full-Stack & Analista de Dados",
    tagline: "Transformando dados em insights acionáveis e construindo experiências web que fazem a diferença",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_111de63eb-1763293804928.png",
    alt: "Professional headshot of Hispanic man with short black hair wearing navy blazer and white shirt in modern office setting",
    stats: [
    { label: "Anos de Experiência", value: "8+", icon: "CalendarIcon" },
    { label: "Projetos Concluídos", value: "150+", icon: "RocketLaunchIcon" },
    { label: "Clientes Satisfeitos", value: "50+", icon: "UserGroupIcon" }]

  };

  const storyData = {
    title: "Minha Jornada",
    subtitle: "Onde Dados Encontram o Digital",
    paragraphs: [
    "Minha trajetória profissional começou com uma paixão por números e padrões. Como analista de dados, aprendi a extrair insights valiosos de conjuntos complexos de informações, transformando dados brutos em estratégias acionáveis que impulsionam decisões de negócios. Mas logo percebi que os insights mais poderosos perdiam seu impacto quando apresentados em planilhas estáticas ou relatórios tradicionais.",
    "Foi então que descobri o desenvolvimento web - não apenas como uma habilidade complementar, mas como a ponte perfeita entre análise e ação. Comecei a construir dashboards interativos, aplicações web orientadas por dados e ferramentas que não apenas mostravam insights, mas permitiam que as equipes agissem sobre eles em tempo real. Essa fusão de competências me transformou em um profissional único: alguém que não apenas entende os dados, mas sabe como torná-los acessíveis e acionáveis através de interfaces intuitivas.",
    "Hoje, não me vejo apenas como um desenvolvedor ou um analista - sou um arquiteto de experiências orientadas por dados. Cada projeto que assumo é uma oportunidade de demonstrar como a análise profunda e o desenvolvimento técnico podem trabalhar em harmonia para criar soluções que realmente fazem a diferença. Seja construindo um sistema de visualização de dados em tempo real ou desenvolvendo uma aplicação web que automatiza análises complexas, meu objetivo é sempre o mesmo: transformar dados em valor tangível."],

    highlights: [
    {
      icon: "ChartBarIcon",
      title: "Análise Profunda",
      description: "Expertise em SQL, Python, R e ferramentas de BI para extrair insights significativos de grandes volumes de dados"
    },
    {
      icon: "CodeBracketIcon",
      title: "Desenvolvimento Técnico",
      description: "Domínio de React, Next.js, TypeScript e frameworks modernos para criar aplicações web robustas e escaláveis"
    },
    {
      icon: "LightBulbIcon",
      title: "Pensamento Integrado",
      description: "Capacidade única de conectar análise de dados com implementação técnica para soluções completas e eficazes"
    }]

  };

  const expertiseData = {
    title: "Dupla Expertise em Ação",
    description: "Minha abordagem única combina o rigor analítico da ciência de dados com a criatividade técnica do desenvolvimento web, criando soluções que são tanto inteligentes quanto intuitivas.",
    domains: [
    {
      id: "data-analytics",
      name: "Análise de Dados",
      icon: "ChartPieIcon",
      color: "primary",
      skills: [
      "Análise Exploratória de Dados (EDA) com Python e R",
      "Modelagem Estatística e Machine Learning",
      "SQL Avançado e Otimização de Queries",
      "Visualização de Dados com Tableau e Power BI",
      "ETL e Pipeline de Dados com Apache Airflow",
      "Big Data com Spark e Hadoop"],

      caseStudy: {
        title: "Sistema de Previsão de Vendas para E-commerce",
        description: "Desenvolvi um modelo de machine learning que analisa padrões históricos de vendas, sazonalidade e comportamento do cliente para prever demanda futura. O sistema processa mais de 2 milhões de transações mensais e gera previsões com 92% de acurácia.",
        impact: "Redução de 35% em custos de estoque e aumento de 28% na satisfação do cliente através de melhor disponibilidade de produtos"
      }
    },
    {
      id: "web-development",
      name: "Desenvolvimento Web",
      icon: "CodeBracketSquareIcon",
      color: "secondary",
      skills: [
      "React, Next.js e TypeScript para aplicações modernas",
      "Node.js e Express para APIs RESTful",
      "Integração com bancos de dados SQL e NoSQL",
      "Autenticação e Segurança (JWT, OAuth)",
      "Otimização de Performance e SEO",
      "Deploy e CI/CD com Vercel e GitHub Actions"],

      caseStudy: {
        title: "Dashboard Analítico em Tempo Real",
        description: "Construí uma aplicação web completa que conecta múltiplas fontes de dados e apresenta métricas de negócio em tempo real através de visualizações interativas. A plataforma processa atualizações a cada 30 segundos e suporta mais de 500 usuários simultâneos.",
        impact: "Tempo de tomada de decisão reduzido de horas para minutos, com 90% dos executivos usando a plataforma diariamente"
      }
    },
    {
      id: "integration",
      name: "Integração de Sistemas",
      icon: "CpuChipIcon",
      color: "accent",
      skills: [
      "APIs RESTful e GraphQL para integração de dados",
      "Webhooks e processamento de eventos em tempo real",
      "Automação de workflows com Python e JavaScript",
      "Integração com serviços cloud (AWS, Azure, GCP)",
      "Microserviços e arquitetura distribuída",
      "Monitoramento e logging com ferramentas modernas"],

      caseStudy: {
        title: "Plataforma de Integração Multi-Sistema",
        description: "Criei uma solução que conecta CRM, ERP e ferramentas de marketing, sincronizando dados automaticamente e eliminando entrada manual. O sistema processa mais de 50.000 registros diários através de 15 integrações diferentes.",
        impact: "Economia de 200 horas mensais de trabalho manual e redução de 95% em erros de dados duplicados ou inconsistentes"
      }
    }]

  };

  const valuePropsData = {
    title: "Por Que Escolher um Profissional Híbrido?",
    subtitle: "Seus dados merecem mais do que planilhas - vamos construir algo incrível",
    propositions: [
    {
      icon: "PuzzlePieceIcon",
      title: "Solução Completa, Um Único Profissional",
      description: "Elimine a necessidade de coordenar entre analistas e desenvolvedores. Eu entendo ambos os mundos e garanto que a análise e a implementação trabalhem em perfeita harmonia.",
      benefits: [
      "Comunicação simplificada sem perda de contexto entre equipes",
      "Desenvolvimento mais rápido com menos retrabalho",
      "Visão holística do projeto do início ao fim",
      "Custo-benefício superior comparado a contratar múltiplos especialistas"]

    },
    {
      icon: "BoltIcon",
      title: "Insights que Viram Ação Imediatamente",
      description: "Não apenas analiso seus dados - construo as ferramentas que permitem sua equipe agir sobre os insights em tempo real, transformando análise em resultados tangíveis.",
      benefits: [
      "Dashboards interativos que vão além de gráficos estáticos",
      "Automação de processos baseada em análises de dados",
      "Alertas inteligentes e notificações acionáveis",
      "Interfaces intuitivas que democratizam o acesso aos dados"]

    },
    {
      icon: "ShieldCheckIcon",
      title: "Qualidade Técnica em Ambas as Frentes",
      description: "Código limpo e bem documentado encontra análises rigorosas e metodologicamente sólidas. Cada projeto é construído com as melhores práticas de ambas as disciplinas.",
      benefits: [
      "Código testado e mantível seguindo padrões da indústria",
      "Análises estatisticamente válidas e reproduzíveis",
      "Documentação completa para análises e código",
      "Segurança e privacidade de dados como prioridade"]

    },
    {
      icon: "AcademicCapIcon",
      title: "Aprendizado Contínuo e Inovação",
      description: "Mantenho-me atualizado com as últimas tendências em ambas as áreas, trazendo técnicas modernas de machine learning e frameworks web de ponta para seus projetos.",
      benefits: [
      "Acesso às tecnologias mais recentes e eficientes",
      "Soluções inovadoras que combinam o melhor de ambos os mundos",
      "Consultoria estratégica sobre tendências tecnológicas",
      "Transferência de conhecimento para sua equipe"]

    }]

  };

  const testimonialsData = {
    title: "O Que Dizem Sobre Meu Trabalho",
    items: [
    {
      id: "testimonial-1",
      name: "Mariana Costa",
      role: "Diretora de Tecnologia",
      company: "TechVision Solutions",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_12474730f-1763296027036.png",
      alt: "Professional woman with long brown hair wearing black blazer smiling at camera in corporate office",
      quote: "Rafael é exatamente o tipo de profissional que toda empresa precisa - alguém que não apenas entende dados, mas sabe como transformá-los em produtos digitais que realmente funcionam. Ele construiu nosso dashboard analítico do zero e o resultado superou todas as expectativas.",
      highlight: "A capacidade de Rafael de unir análise profunda com desenvolvimento técnico impecável economizou meses de trabalho e eliminou completamente a necessidade de coordenação entre equipes separadas"
    },
    {
      id: "testimonial-2",
      name: "Carlos Mendes",
      role: "CEO",
      company: "DataFlow Analytics",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ef9de699-1763296311745.png",
      alt: "Professional man with short dark hair wearing navy suit and tie in modern office environment",
      quote: "Contratamos Rafael para um projeto que exigia tanto expertise em análise de dados quanto desenvolvimento web. Sua abordagem integrada não apenas entregou resultados excepcionais, mas também nos ensinou como essas duas disciplinas podem trabalhar juntas de forma poderosa.",
      highlight: "O sistema que Rafael desenvolveu processa milhões de registros diariamente e apresenta insights em uma interface tão intuitiva que até nossa equipe não-técnica consegue usar sem treinamento"
    },
    {
      id: "testimonial-3",
      name: "Ana Paula Rodrigues",
      role: "Gerente de Produto",
      company: "InnovateTech",
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_12f477032-1763301009691.png",
      alt: "Young professional woman with shoulder-length black hair wearing white blouse in bright office space",
      quote: "Trabalhar com Rafael foi uma revelação. Ele não apenas entregou um produto tecnicamente sólido, mas também nos ajudou a entender nossos próprios dados de maneiras que nunca havíamos considerado. Sua visão híbrida trouxe insights que mudaram nossa estratégia de produto.",
      highlight: "A plataforma que Rafael construiu aumentou nossa eficiência operacional em 40% e se tornou a ferramenta mais utilizada por toda a equipe de produto"
    }]

  };

  const ctaData = {
    title: "Vamos Transformar Seus Dados em Resultados?",
    description: "Se você está procurando alguém que possa não apenas analisar seus dados, mas também construir as ferramentas para torná-los acionáveis, vamos conversar sobre como posso ajudar seu projeto.",
    primaryButton: {
      text: "Iniciar Conversa",
      href: "/contact"
    },
    secondaryButton: {
      text: "Ver Meu Portfólio",
      href: "/portfolio"
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <AboutInteractive
          profile={profileData}
          story={storyData}
          expertise={expertiseData}
          valueProps={valuePropsData}
          testimonials={testimonialsData}
          cta={ctaData} />

      </main>
    </>);

}