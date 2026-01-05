import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ExperienceInteractive from './components/ExperienceInteractive';

export const metadata: Metadata = {
  title: 'Experiência Profissional - DataDev Portfolio',
  description: 'Explore minha jornada profissional de 6+ anos conectando análise de dados e desenvolvimento web. Timeline interativa com conquistas, certificações e reconhecimento da comunidade tech.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ExperienceInteractive />
        </div>
      </main>
    </div>
  );
}