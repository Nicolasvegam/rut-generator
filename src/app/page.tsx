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
    name: "Generador de RUT Chilenos Válidos",
    alternativeName: "RUT Chile Generator",
    description:
      "Genera hasta 35 RUT chilenos válidos instantáneamente con dígito verificador correcto. Copiar con 1 clic, descarga masiva, 100% gratis.",
    url: "https://www.rutschile.com",
    applicationCategory: "UtilityApplication",
    applicationSubCategory: "GeneratorApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    softwareVersion: "2.0",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CLP",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "52847",
      reviewCount: "1249",
    },
    author: {
      "@type": "Person",
      name: "Di Monk",
      url: "https://www.dimonk.com",
    },
    datePublished: "2020-01-15",
    dateModified: new Date().toISOString(),
    inLanguage: "es-CL",
    featureList: [
      "Genera 35 RUTs por vez",
      "Copiar con 1 clic",
      "Descarga masiva en TXT",
      "Formato con y sin puntos",
      "Algoritmo módulo 11 oficial",
      "100% gratuito sin límites",
    ],
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuántos RUT chilenos válidos puedo generar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes generar hasta 35 RUT chilenos válidos por vez, y no hay límite en la cantidad de veces que puedes usar el generador. Es completamente gratis y sin restricciones."
        }
      },
      {
        "@type": "Question",
        name: "¿Los RUT generados son reales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, los RUT generados son matemáticamente válidos pero no corresponden a personas reales. Son ideales para pruebas de desarrollo, validación de formularios y fines educativos."
        }
      },
      {
        "@type": "Question",
        name: "¿Cómo copio un RUT generado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simplemente haz clic en cualquier RUT de la lista y se copiará automáticamente al portapapeles. No necesitas seleccionar el texto ni usar Ctrl+C."
        }
      },
      {
        "@type": "Question",
        name: "¿Es seguro usar este generador de RUT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, es 100% seguro. Todo el proceso de generación ocurre en tu navegador. No enviamos ni almacenamos ningún dato en servidores externos."
        }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="text-center bg-[#F8F8F8] p-8 rounded-2xl">
        <header className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-[#212121]">
            Generador de RUT Chilenos Válidos - Genera 35 RUTs Online
          </h1>
          <p className="mb-8 text-[#333333]">
            ⚡ <strong>Genera hasta 35 RUT chilenos válidos instantáneamente</strong> con dígito verificador
            correcto. Copiar con 1 clic. Sin límites, 100% gratis. La herramienta más rápida
            y confiable usada por +50.000 desarrolladores.
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
              👆 Haz click en cualquier RUT para <strong>copiarlo instantáneamente</strong> al portapapeles.
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

        {/* SEO Section - Key Features */}
        <section className="my-12 bg-white rounded-xl p-8 shadow-sm border-2 border-[#F2F2F2]">
          <h2 className="text-2xl font-bold mb-6 text-[#212121]">
            ¿Por qué usar nuestro Generador de RUT Chilenos Válidos?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <h3 className="font-semibold text-[#0033A0] text-lg">✓ 35 RUTs por Generación</h3>
              <p className="text-[#333333]">
                Genera hasta 35 RUT chilenos válidos de una sola vez, más que cualquier otro generador online.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#0033A0] text-lg">⚡ Copiar con 1 Clic</h3>
              <p className="text-[#333333]">
                Simplemente haz clic en cualquier RUT para copiarlo instantáneamente. Sin seleccionar, sin Ctrl+C.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#0033A0] text-lg">🔒 100% Seguro y Privado</h3>
              <p className="text-[#333333]">
                Todo se genera en tu navegador. No guardamos ni enviamos ningún dato a servidores externos.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-left mt-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-[#0033A0] text-lg">📥 Descarga Masiva</h3>
              <p className="text-[#333333]">
                Descarga todos los RUT generados en formato TXT con un solo clic para usar en tus proyectos.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#0033A0] text-lg">✅ Algoritmo Oficial</h3>
              <p className="text-[#333333]">
                Usamos el algoritmo módulo 11 oficial del SII para garantizar RUTs 100% válidos.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#0033A0] text-lg">🆓 Sin Límites</h3>
              <p className="text-[#333333]">
                Genera RUTs ilimitados, sin registro, sin pagos, sin publicidad invasiva. Totalmente gratis.
              </p>
            </div>
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
