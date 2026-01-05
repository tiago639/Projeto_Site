import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PortfolioInteractive from './components/PortfolioInteractive';

export const metadata: Metadata = {
  title: 'Portfólio - DataDev Portfolio',
  description: 'Explore minha coleção de projetos que demonstram a integração única entre análise de dados e desenvolvimento web, com soluções completas que combinam insights analíticos e implementação técnica de excelência.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        <PortfolioInteractive />
      </main>
    </div>
  );
}