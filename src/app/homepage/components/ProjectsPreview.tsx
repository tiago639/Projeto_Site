import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  tags: string[];
  link: string;
}

interface ProjectsPreviewProps {
  className?: string;
}

const ProjectsPreview = ({ className = '' }: ProjectsPreviewProps) => {
  const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'Dashboard de Análise de Vendas',
    category: 'Análise de Dados',
    description:
    'Dashboard interativo em Python e Tableau para análise de vendas em tempo real, com insights automatizados e previsões de tendências.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_12a259989-1766490417832.png",
    alt: 'Modern analytics dashboard displaying colorful bar charts, line graphs, and pie charts with sales data on multiple screens in a dark themed interface',
    tags: ['Python', 'Tableau', 'SQL'],
    link: '/portfolio'
  },
  {
    id: 2,
    title: 'Plataforma E-commerce Completa',
    category: 'Desenvolvimento Web',
    description:
    'E-commerce moderno desenvolvido com Next.js e integração com APIs de pagamento, sistema de carrinho e painel administrativo.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1eb7c1cb3-1764655134961.png",
    alt: 'Laptop screen showing a modern e-commerce website interface with product listings, shopping cart, and clean minimalist design on a wooden desk',
    tags: ['Next.js', 'React', 'TypeScript'],
    link: '/portfolio'
  },
  {
    id: 3,
    title: 'Sistema de Visualização de Dados',
    category: 'Projeto Integrado',
    description:
    'Aplicação web que combina análise de dados com visualizações interativas, permitindo exploração dinâmica de grandes datasets.',
    image:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1c3895ecc-1764656426788.png",
    alt: 'Interactive data visualization system showing multiple connected charts, graphs, and data points with real-time updates on a large monitor',
    tags: ['React', 'D3.js', 'Python', 'API'],
    link: '/portfolio'
  }];


  return (
    <section
      id="projetos"
      className={`py-20 lg:py-32 bg-card relative overflow-hidden ${className}`}>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent via-transparent to-primary" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon
              name="BriefcaseIcon"
              size={16}
              className="text-primary mr-2" />

            <span className="text-sm font-medium text-primary">Projetos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Projetos em{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Destaque
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes que demonstram a
            integração entre análise de dados e desenvolvimento web.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) =>
          <div
            key={project.id}
            className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-elevation-lg hover:-translate-y-2 transition-all duration-base">

              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-slow" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-headline font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-base">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) =>
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full">

                      {tag}
                    </span>
                )}
                </div>

                <Link
                href={project.link}
                className="inline-flex items-center text-sm font-cta font-semibold text-primary hover:text-primary/80 transition-colors duration-base group/link">

                  Ver Detalhes
                  <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="ml-1 group-hover/link:translate-x-1 transition-transform duration-base" />

                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-4 bg-conversion text-conversion-foreground rounded-lg font-cta font-semibold text-base hover:bg-conversion/90 hover:shadow-elevation-lg hover:-translate-y-1 transition-all duration-base group">

            Ver Todos os Projetos
            <Icon
              name="ArrowRightIcon"
              size={20}
              className="ml-2 group-hover:translate-x-1 transition-transform duration-base" />

          </Link>
        </div>
      </div>
    </section>);

};

export default ProjectsPreview;