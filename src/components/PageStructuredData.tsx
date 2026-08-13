import { createBreadcrumbSchema, createWebPageSchema } from '@/lib/seo';

type PageStructuredDataProps = {
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  name: string;
  description: string;
  path: string;
};

export default function PageStructuredData({
  type = 'WebPage',
  name,
  description,
  path,
}: PageStructuredDataProps) {
  const pageSchema = createWebPageSchema({ type, name, description, path });
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name, path },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
