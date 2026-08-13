import Link from 'next/link';

type PageBreadcrumbProps = {
  current: string;
  className?: string;
};

export default function PageBreadcrumb({ current, className = '' }: PageBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-gray-500 ${className}`}>
      <Link href="/" className="hover:text-ruler-primary hover:underline">Home</Link>
      <span aria-hidden="true" className="mx-2">/</span>
      <span aria-current="page">{current}</span>
    </nav>
  );
}
