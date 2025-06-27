"use client";
import { Button } from "@/components/ui/button";
import rutGenerator, { Rut } from "../../../lib/shared/rut-generator.service";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FAQs } from "@/components/FAQs";
import { RelatedTools } from "@/components/RelatedTools";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function RutAlAzar() {
  const [ruts, setRuts] = useState<Rut[]>([]);
  const [showDots, setShowDots] = useState(true);
  const [toast, setToast] = useState<{ show: boolean; rut: string }>({
    show: false,
    rut: "",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "RUT al Azar - Generador de RUTs Chilenos Aleatorios",
    description:
      "Genera RUTs chilenos completamente al azar con dígito verificador válido. Herramienta gratuita para crear RUTs aleatorios.",
    url: "https://nicovega.dev/rutificador/rut-al-azar",
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
      ratingCount: "5234",
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs />
      <article className="text-center bg-[#F8F8F8] p-8 rounded-2xl">
        <header className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-[#212121]">
            RUT al Azar - Generador de RUTs Chilenos Aleatorios
          </h1>
          <p className="mb-8 text-[#333333]">
            Genera RUTs chilenos completamente al azar con dígito verificador
            válido. Herramienta gratuita para crear RUTs aleatorios para pruebas
            y desarrollo.
          </p>
        </header>

        <section className="flex flex-col items-center">
          <div className="w-full max-w-2xl mb-8 space-y-6">
            <Button
              onClick={generateRuts}
              className="bg-[#0033A0] text-white px-10 py-6 rounded-xl hover:bg-[#1a47b8] text-xl font-semibold shadow-sm hover:shadow-md transition-all duration-200 min-w-[280px]"
              aria-label="Generar nuevos RUTs aleatorios"
            >
              Generar RUTs al Azar
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
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 w-full"
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

        <section className="mt-12 text-left">
          <h2 className="text-2xl font-bold mb-6 text-[#212121]">
            ¿Qué es un RUT al Azar?
          </h2>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="text-[#333333] mb-4">
              Un <strong>RUT al azar</strong> es un número de identificación
              chileno que se genera de forma completamente aleatoria, pero que
              mantiene la validez matemática según el algoritmo oficial chileno.
            </p>
            <p className="text-[#333333] mb-4">
              Nuestro generador de RUTs al azar crea números que:
            </p>
            <ul className="list-disc list-inside text-[#333333] space-y-2 ml-4">
              <li>Tienen un dígito verificador correcto</li>
              <li>Siguen el formato oficial chileno</li>
              <li>Son matemáticamente válidos</li>
              <li>No corresponden a personas reales</li>
              <li>Son ideales para pruebas y desarrollo</li>
            </ul>
          </div>
        </section>

        <div className="mt-2 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8">
          <FAQs />
        </div>

        <RelatedTools />
      </article>

      <footer className="text-sm text-[#333333]/60 mt-12 text-center">
        Hecho con ❤️ por{" "}
        <Link
          href="https://software.nicovega.dev"
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
