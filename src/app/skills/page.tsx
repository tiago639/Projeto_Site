import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import SkillsInteractive from './components/SkillsInteractive';

export const metadata: Metadata = {
  title: 'Habilidades - DataDev Portfolio',
  description: 'Explore minhas habilidades técnicas em análise de dados e desenvolvimento web. Demonstração interativa de competências em Python, SQL, React, Next.js e ferramentas híbridas que conectam dados e desenvolvimento.',
};

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main>
        <SkillsInteractive />
      </main>
    </>
  );
}