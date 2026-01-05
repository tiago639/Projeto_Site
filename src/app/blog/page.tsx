import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import BlogInteractive from './components/BlogInteractive';

export const metadata: Metadata = {
  title: 'Blog - DataDev Portfolio',
  description: 'Technical articles and project case studies showcasing expertise in data analytics and web development. Explore in-depth insights, methodologies, and industry best practices from a data-driven developer.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        <BlogInteractive />
      </main>
    </div>
  );
}