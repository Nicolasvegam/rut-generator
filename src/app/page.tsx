"use client";
import { Button } from "@/components/ui/button";
import rutGenerator, { Rut } from "../../lib/shared/rut-generator.service";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FAQs } from "@/components/FAQs";

export default function Home() {
  const [ruts, setRuts] = useState<Rut[]>([]);
  const [showDots, setShowDots] = useState(true);
  const [toast, setToast] = useState<{ show: boolean; rut: string }>({
    show: false,
    rut: "",
  });

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
    <main className="max-w-7xl mx-auto my-12 p-8 bg-[#F5ECD5] shadow-lg rounded-3xl">
      <article className="text-center">
        <header className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-[#3D3D3D]">
            Generador de RUT Chileno
          </h1>
          <p className="mb-6 text-[#3D3D3D]/80">
            Genera RUTs chilenos válidos al azar con este generador.
          </p>
        </header>

        <section className="flex flex-col items-center">
          <div className="w-full max-w-2xl mb-8 space-y-6">
            <Button
              onClick={generateRuts}
              className="bg-[#578E7E] text-[#FFFAEC] px-10 py-6 rounded-2xl hover:bg-[#578E7E]/90 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 min-w-[280px] border-2 border-[#578E7E]/20"
              aria-label="Generar nuevos RUTs aleatorios"
            >
              Generar más RUTs al azar
            </Button>

            <div className="flex gap-3 justify-center border-t border-[#578E7E]/20 pt-6">
              <Button
                onClick={() => setShowDots(false)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  !showDots
                    ? "bg-[#578E7E] text-[#FFFAEC] hover:bg-[#578E7E]/90 shadow-md"
                    : "bg-[#FFFAEC] text-[#3D3D3D] hover:bg-[#FFFAEC]/80 border-2 border-[#578E7E]/20"
                }`}
                aria-label="Mostrar RUTs sin puntos"
              >
                RUT sin puntos
              </Button>
              <Button
                onClick={() => setShowDots(true)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  showDots
                    ? "bg-[#578E7E] text-[#FFFAEC] hover:bg-[#578E7E]/90 shadow-md"
                    : "bg-[#FFFAEC] text-[#3D3D3D] hover:bg-[#FFFAEC]/80 border-2 border-[#578E7E]/20"
                }`}
                aria-label="Mostrar RUTs con puntos"
              >
                RUT con puntos
              </Button>
            </div>
            <p className="text-sm text-[#3D3D3D]/60">
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
                  className="bg-[#FFFAEC] p-4 rounded-xl cursor-pointer hover:bg-[#FFFAEC]/80 transition-all duration-200 shadow-sm hover:shadow-md border-2 border-[#578E7E]/10 relative group"
                  onClick={() => handleCopyRut(rutString)}
                  role="listitem"
                  aria-label={`RUT ${rutString}, click para copiar`}
                >
                  <p className="text-lg font-bold text-[#3D3D3D] text-center group-hover:text-[#578E7E]">
                    {formatRut(rut.number)}
                    <span className="text-lg text-[#578E7E]">-{rut.mod}</span>
                  </p>
                  {toast.show && toast.rut === rutString && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#578E7E] text-[#FFFAEC] px-4 py-2 rounded-lg text-sm shadow-lg animate-fade-in-down">
                      Copiado
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <FAQs />

        <footer className="text-sm text-[#3D3D3D]/60 mt-12">
          Hecho con ❤️ por{" "}
          <Link
            href="https://software.nicovega.dev"
            className="text-[#578E7E] hover:text-[#578E7E]/80"
            target="_blank"
            rel="noopener noreferrer"
          >
            Di Monk
          </Link>
        </footer>
      </article>
    </main>
  );
}
