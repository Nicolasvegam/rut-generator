"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import rutify from "@/lib/utils/rut-formatter";
import { isValidChileanRut } from "@/lib/utils/rut-validator";
import { ValidarFAQs } from "@/components/ValidarFAQs";
import { RelatedTools } from "@/components/RelatedTools";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Link from "next/link";

export default function ValidarRut() {
  const [rut, setRut] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleRutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedRut = rutify(e.target.value);
    setRut(formattedRut);
    setIsValid(null);
  };

  const handleValidate = () => {
    if (!rut) {
      setIsValid(false);
      return;
    }
    setIsValid(isValidChileanRut(rut));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleValidate();
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Validador de RUTs Chilenos",
    description: "Herramienta para validar RUTs chilenos",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "6452",
    },
  };

  return (
    <main className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs 
        items={[
          { name: "Inicio", url: "/" },
          { name: "Validador de RUT" }
        ]} 
      />
      <article className="text-center bg-[#F8F8F8] p-8 rounded-2xl">
        <header className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-[#212121]">
            Validador de RUT Chileno
          </h1>
          <p className="mb-8 text-[#333333]">
            Ingresa un RUT chileno para validar si es correcto.
          </p>
        </header>

        <section className="max-w-md mx-auto">
          <div className="mb-6">
            <input
              type="text"
              value={rut}
              onChange={handleRutChange}
              onKeyPress={handleKeyPress}
              placeholder="Ingresa el RUT (ej: 12.345.678-9)"
              className="w-full px-4 py-3 rounded-xl border-2 border-[#F2F2F2] focus:border-[#0033A0] focus:outline-none bg-white text-[#212121] placeholder-[#333333]/60 transition-colors"
              maxLength={12}
            />
          </div>

          <Button
            onClick={handleValidate}
            className="bg-[#0033A0] text-white px-10 py-6 rounded-xl hover:bg-[#1a47b8] text-xl font-semibold shadow-sm hover:shadow-md transition-all duration-200 w-full"
          >
            Validar RUT
          </Button>

          {isValid !== null && (
            <div
              className={`mt-6 p-4 rounded-xl flex items-center justify-center gap-2 ${
                isValid
                  ? "bg-[#0033A0]/5 text-[#0033A0] border-2 border-[#0033A0]/10"
                  : "bg-[#ED1C24]/5 text-[#ED1C24] border-2 border-[#ED1C24]/10"
              }`}
            >
              {isValid ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">El RUT es válido</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">El RUT no es válido</span>
                </>
              )}
            </div>
          )}
        </section>

        {/* Full width FAQs section */}
        <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
          <ValidarFAQs />
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
