"use client";
import { Button } from "@/components/ui/button";
import rutGenerator, { Rut } from "../../lib/shared/rut-generator.service";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FAQs } from "@/components/FAQs";
import { RelatedTools } from "@/components/RelatedTools";
import { ShareButtons } from "@/components/ShareButtons";

export default function Home() {
  const [ruts, setRuts] = useState<Rut[]>([]);
  const [showDots, setShowDots] = useState(true);
  const [toast, setToast] = useState<{ show: boolean; rut: string }>({
    show: false,
    rut: "",
  });

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "RUT Chile - Generador Oficial",
    description:
      "RUT Chile: Herramienta oficial y gratuita para generar RUTs chilenos válidos al azar con dígito verificador correcto",
    url: "https://www.rutschile.com",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CLP",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "8923",
    },
    author: {
      "@type": "Person",
      name: "Di Monk",
      url: "https://www.dimonk.com",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RUT Chile",
    url: "https://www.rutschile.com",
    logo: "https://www.rutschile.com/icon.svg",
    sameAs: [
      "https://www.dimonk.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "RUT Chile",
    url: "https://www.rutschile.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.rutschile.com/validar?rut={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://www.rutschile.com"
      }
    ]
  };

  const generateRuts = () => {
    const ruts = rutGenerator().generateRuts();
    setRuts(ruts);
  };

  useEffect(() => {
    generateRuts();
  }, []);

  const formatRut = (number: number) => {
    return showDots
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      : number.toString();
  };

  const handleCopyRut = (rut: string) => {
    navigator.clipboard.writeText(rut);
    setToast({ show: true, rut });
    setTimeout(() => setToast({ show: false, rut: "" }), 2000);
  };

  return (
    <main className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="text-center bg-[#F8F8F8] p-8 rounded-2xl">
        <header className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-[#212121]">
            RUT Chile - Generador Oficial de RUT Chileno Válido
          </h1>
          <p className="mb-8 text-[#333333]">
            Bienvenido a RUT Chile. Genera RUTs chilenos válidos al azar de
            forma gratuita. Herramienta oficial para crear RUTs con dígito
            verificador correcto.
          </p>
        </header>

        <section className="flex flex-col items-center">
          <div className="w-full max-w-2xl mb-8 space-y-6">
            <Button
              onClick={generateRuts}
              className="bg-[#0033A0] text-white px-10 py-6 rounded-xl hover:bg-[#1a47b8] text-xl font-semibold shadow-sm hover:shadow-md transition-all duration-200 min-w-[280px]"
              aria-label="Generar nuevos RUTs aleatorios"
            >
              Generar más RUTs al azar
            </Button>

            <div className="flex gap-3 justify-center border-t border-[#F2F2F2] pt-6">
              <Button
                onClick={() => setShowDots(false)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  !showDots
                    ? "bg-[#0033A0] text-white hover:bg-[#1a47b8] shadow-sm"
                    : "bg-white text-[#212121] hover:bg-[#F8F8F8] border-2 border-[#F2F2F2]"
                }`}
                aria-label="Mostrar RUTs sin puntos"
              >
                RUT sin puntos
              </Button>
              <Button
                onClick={() => setShowDots(true)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  showDots
                    ? "bg-[#0033A0] text-white hover:bg-[#1a47b8] shadow-sm"
                    : "bg-white text-[#212121] hover:bg-[#F8F8F8] border-2 border-[#F2F2F2]"
                }`}
                aria-label="Mostrar RUTs con puntos"
              >
                RUT con puntos
              </Button>
            </div>
            <p className="text-sm text-[#333333]/60">
              Haz click en un RUT para copiarlo al portapapeles.
            </p>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 w-full"
            role="list"
          >
            {ruts.map((rut, index) => {
              const rutString = showDots
                ? `${formatRut(rut.number)}-${rut.mod}`
                : `${rut.number}-${rut.mod}`;
              return (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl cursor-pointer hover:bg-[#F8F8F8] transition-all duration-200 shadow-sm hover:shadow-md border-2 border-[#F2F2F2] relative group"
                  onClick={() => handleCopyRut(rutString)}
                  role="listitem"
                  aria-label={`RUT ${rutString}, click para copiar`}
                >
                  <p className="text-lg font-bold text-[#212121] text-center group-hover:text-[#0033A0]">
                    {formatRut(rut.number)}
                    <span className="text-lg text-[#0033A0]">-{rut.mod}</span>
                  </p>
                  {toast.show && toast.rut === rutString && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#0033A0] text-white px-4 py-2 rounded-lg text-sm shadow-md">
                      Copiado
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="flex justify-center mt-8">
          <ShareButtons />
        </div>

        <div className="mt-2 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8">
          <FAQs />
        </div>

        <RelatedTools />
      </article>

      <footer className="text-sm text-[#333333]/60 mt-12 text-center">
        Hecho con ❤️ por{" "}
        <Link
          href="https://www.dimonk.com"
          className="text-[#0033A0] hover:text-[#1a47b8]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Di Monk
        </Link>
      </footer>
    </main>
  );
}
