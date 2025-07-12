import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RUT al Azar - Generador de RUTs Chilenos Aleatorios",
  description:
    "🎲 Crea RUTs chilenos 100% aleatorios en 1 clic ✓ Perfectos para testing y desarrollo ⚡ Genera hasta 35 RUTs válidos simultáneamente. ¡Empieza GRATIS!",
  keywords: [
    "rut al azar",
    "generador rut aleatorio",
    "rut chileno aleatorio",
    "generar rut al azar",
    "rut aleatorio chile",
    "rut random chileno",
    "generador random rut",
    "numero rut aleatorio",
    "rut chile random"
  ],
  openGraph: {
    title: "RUT al Azar - Generador de RUTs Chilenos Aleatorios",
    description:
      "Genera RUTs chilenos completamente al azar con dígito verificador válido. Herramienta gratuita para crear RUTs aleatorios.",
    url: "https://www.rutschile.com/rut-al-azar",
    images: [
      {
        url: "/og-azar.png",
        width: 1200,
        height: 630,
        alt: "RUT al Azar - Generador Aleatorio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUT al Azar - Generador de RUTs Chilenos Aleatorios",
    description:
      "Genera RUTs chilenos completamente al azar con dígito verificador válido.",
    images: ["/og-azar.png"],
  },
};

export default function RutAlAzarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}