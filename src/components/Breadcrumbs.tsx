<<<<<<< HEAD
import Link from "next/link"
import Script from "next/script"

interface BreadcrumbItem {
  name: string
  url?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url && {
        "item": `https://www.rutschile.com${item.url}`
      })
    }))
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2"
=======
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  name: string;
  href: string;
}

const routeNames: Record<string, string> = {
  "/": "Generador RUT",
  "/validar": "Validar RUT",
  "/rut-al-azar": "RUT al Azar",
  "/creador-rut": "Creador RUT",
};

export function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === "/") return null;

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Inicio", href: "/" },
  ];

  // Add current page
  if (routeNames[pathname]) {
    breadcrumbItems.push({
      name: routeNames[pathname],
      href: pathname,
    });
  }

  // Generate JSON-LD schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://nicovega.dev/rutificador${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
>>>>>>> f373c334956a6b096f7d95a73a0852b169d2a35b
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
<<<<<<< HEAD
              {item.url && index < items.length - 1 ? (
                <Link
                  href={item.url}
=======
              {index === breadcrumbItems.length - 1 ? (
                <span
                  className="font-medium text-[#0033A0]"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
>>>>>>> f373c334956a6b096f7d95a73a0852b169d2a35b
                  className="hover:text-[#0033A0] transition-colors"
                >
                  {item.name}
                </Link>
<<<<<<< HEAD
              ) : (
                <span className={index === items.length - 1 ? "text-gray-900 font-medium" : ""}>
                  {item.name}
                </span>
=======
>>>>>>> f373c334956a6b096f7d95a73a0852b169d2a35b
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> f373c334956a6b096f7d95a73a0852b169d2a35b
}