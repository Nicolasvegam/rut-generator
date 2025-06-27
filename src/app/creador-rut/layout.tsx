import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creador de RUT - Genera RUTs Chilenos Válidos",
  description:
    "Creador de RUT chilenos válidos. Herramienta para crear RUTs con dígito verificador correcto. Generador gratuito de RUTs.",
  keywords: [
    "creador de rut",
    "crear rut chileno",
    "creador rut chile",
    "herramienta crear rut",
    "crear rut válido",
    "constructor rut chile",
    "fabricar rut chileno",
    "diseñar rut chile",
    "hacer rut válido"
  ],
  openGraph: {
    title: "Creador de RUT - Genera RUTs Chilenos Válidos",
    description:
      "Creador de RUT chilenos válidos. Herramienta para crear RUTs con dígito verificador correcto. Generador gratuito de RUTs.",
    url: "https://nicovega.dev/rutificador/creador-rut",
    images: [
      {
        url: "/og-creador.png",
        width: 1200,
        height: 630,
        alt: "Creador de RUT Chileno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creador de RUT - Genera RUTs Chilenos Válidos",
    description:
      "Creador de RUT chilenos válidos. Herramienta para crear RUTs con dígito verificador correcto.",
    images: ["/og-creador.png"],
  },
};

export default function CreadorRutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
