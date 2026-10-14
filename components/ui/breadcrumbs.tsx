import Link from "next/link";

export interface Crumb {
  name: string;
  /** Omit for the current page. */
  href?: string;
}

/** Visible breadcrumb trail (desktop only). Pair with breadcrumbJsonLd for the schema. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <div className="hidden bg-white py-[14px] lg:block">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-[0.85rem] text-text-muted">
          {items.map((item, i) => (
            <li key={item.name} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-border">
                  /
                </span>
              )}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-accent">
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-primary">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
