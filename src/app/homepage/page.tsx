import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import AboutPreview from './components/AboutPreview';
import SkillsPreview from './components/SkillsPreview';
import ProjectsPreview from './components/ProjectsPreview';
import ExperiencePreview from './components/ExperiencePreview';
import ContactPreview from './components/ContactPreview';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'DataDev Portfolio - Onde Dados Encontram o Digital',
  description:
    'Portfolio profissional de DataDev - Especialista em análise de dados e desenvolvimento web. Criando experiências digitais orientadas por dados que transformam insights em ação.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <SkillsPreview />
        <ProjectsPreview />
        <ExperiencePreview />
        <ContactPreview />
      </main>
      <Footer />
    </div>
  );
}