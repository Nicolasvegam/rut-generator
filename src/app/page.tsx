"use client";
import { Button } from "@/components/ui/button";
import rutGenerator, { Rut } from "../../lib/shared/rut-generator.service";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const rutGen = rutGenerator();
  const [ruts, setRuts] = useState<Rut[]>(rutGen.generateRuts());

  const generateRuts = () => {
    const ruts = rutGenerator().generateRuts();
    setRuts(ruts);
  };

  return (
    <>
      <Head>
        <title>Generador de RUT Chileno - Genera RUTs válidos al azar</title>
        <meta
          name="description"
          content="Genera RUTs chilenos válidos de forma aleatoria. Herramienta gratuita para generar RUTs con dígito verificador."
        />
        <meta
          name="keywords"
          content="generador RUT, RUT chileno, generar RUT, RUT aleatorio, RUT válido"
        />
        <meta property="og:title" content="Generador de RUT Chileno" />
        <meta
          property="og:description"
          content="Genera RUTs chilenos válidos de forma aleatoria. Herramienta gratuita para generar RUTs con dígito verificador."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rut-generator.vercel.app/" />
        <link rel="canonical" href="https://rut-generator.vercel.app/" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="max-w-2xl mx-auto my-12 p-8 bg-white shadow-lg rounded-3xl">
        <article>
          <header>
            <h1 className="text-4xl font-bold mb-4 text-blue-600 text-center sm:text-left">
              Generador de RUT Chileno
            </h1>
            <p className="mb-6 text-gray-600 text-center sm:text-left">
              Genera RUTs chilenos válidos al azar con este generador. Haz click
              en un RUT para copiarlo al portapapeles.
            </p>
          </header>

          <section>
            <Button
              onClick={generateRuts}
              className="bg-blue-500 text-white px-6 py-2 mb-8 rounded-full hover:bg-blue-600 w-full sm:w-auto"
              aria-label="Generar nuevos RUTs aleatorios"
            >
              Generar más RUTs al azar
            </Button>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8"
              role="list"
            >
              {ruts.map((rut, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    navigator.clipboard.writeText(rut.number + "-" + rut.mod)
                  }
                  role="listitem"
                  aria-label={`RUT ${rut.number}-${rut.mod}, click para copiar`}
                >
                  <p className="text-lg font-bold text-gray-800 text-center">
                    {rut.number.toLocaleString("cl-ES")}
                    <span className="text-lg text-gray-800">-{rut.mod}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          <footer className="text-center text-sm text-gray-500">
            Generado por{" "}
            <Link
              href="https://www.nicovega.dev"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              nvm
            </Link>
          </footer>
        </article>
      </main>
    </>
  );
}
