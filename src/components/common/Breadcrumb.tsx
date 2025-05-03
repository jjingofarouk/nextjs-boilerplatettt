import Link from 'next/link';

interface BreadcrumbProps {
  items: { label: string; href: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex gap-2 text-sm">
      {items.map((item, index) => (
        <span key={item.href}>
          <Link href={item.href} className="hover:text-blue-600">{item.label}</Link>
          {index < items.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
}
