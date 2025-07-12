import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Validador de RUT Chileno - Verifica RUTs al Instante",
  description:
    "✅ Valida cualquier RUT chileno en segundos. Verificador 100% preciso con algoritmo oficial ⚡ Sin registro, sin límites. ¡Pruébalo ahora GRATIS!",
  keywords: [
    "validador rut",
    "validar rut chile",
    "verificador rut chileno",
    "validador rut online",
    "verificar rut",
    "validar rut chileno online",
    "rutificador chile",
    "validador de rut gratis",
    "comprobar rut válido",
    "revisar cedula chilena",
    "comprobar digito verificador",
    "validacion rut chileno",
    "revisar rut válido"
  ],
  openGraph: {
    title: "Validador de RUT Chileno - Verifica RUTs al Instante",
    description:
      "✅ Valida cualquier RUT chileno en segundos. Verificador 100% preciso con algoritmo oficial.",
    url: "https://www.rutschile.com/validar",
    images: [
      {
        url: "/og-validar.png",
        width: 1200,
        height: 630,
        alt: "Validador de RUT Chileno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Validador de RUT Chileno",
    description: "Valida RUTs chilenos en línea de forma rápida y segura.",
    images: ["/og-validar.png"],
  },
};

export default function ValidarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}