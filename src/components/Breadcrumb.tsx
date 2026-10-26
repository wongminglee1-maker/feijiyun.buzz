import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const allItems: BreadcrumbItem[] = [{ name: "首页", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href ? `${siteConfig.baseUrl}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs text-[#868C96] flex-wrap gap-1.5 font-mono">
        {allItems.map((item, idx) => {
          const isLast = idx === allItems.length - 1;
          return (
            <React.Fragment key={idx}>
              {idx > 0 && <span className="text-[#D7D9D6]">/</span>}
              {isLast || !item.href ? (
                <span className="text-[#17191D] font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#3457D5] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
};
