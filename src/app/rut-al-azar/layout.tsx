import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RUT al Azar - Generador de RUTs Chilenos Aleatorios",
  description:
    "Genera RUTs chilenos completamente al azar con dígito verificador válido. Herramienta gratuita para crear RUTs aleatorios para pruebas y desarrollo.",
  keywords: [
    "rut al azar",
    "generador rut aleatorio",
    "rut chileno aleatorio",
    "generar rut al azar",
    "rut aleatorio chile",
    "crear rut aleatorio",
    "generador de rut al azar",
  ],
  openGraph: {
    title: "RUT al Azar - Generador de RUTs Chilenos Aleatorios",
    description:
      "Genera RUTs chilenos completamente al azar con dígito verificador válido. Herramienta gratuita para crear RUTs aleatorios.",
    url: "https://www.rutschile.com/rut-al-azar",
  },
  twitter: {
    title: "RUT al Azar - Generador de RUTs Chilenos Aleatorios",
    description:
      "Genera RUTs chilenos completamente al azar con dígito verificador válido.",
  },
};

export default function RutAlAzarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
