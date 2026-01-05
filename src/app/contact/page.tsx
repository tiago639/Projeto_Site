import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import LocationMap from './components/LocationMap';
import FAQSection from './components/FAQSection';
import NewsletterSignup from './components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Contato - DataDev Portfolio',
  description: 'Entre em contato para discutir projetos de desenvolvimento web e análise de dados. Múltiplas formas de contato, formulário de projeto e agendamento de consultas disponíveis.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16 lg:pt-20">
        <ContactHero />

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-1">
                <ContactInfo />
              </div>
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <LocationMap />
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FAQSection />
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup />
          </div>
        </section>

        <footer className="py-12 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} DataDev Portfolio. Todos os direitos reservados.
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Desenvolvido com Next.js, TypeScript e Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}