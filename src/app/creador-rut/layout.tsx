import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creador de RUT - Genera RUTs Chilenos Válidos",
  description:
    "Creador de RUT chilenos válidos. Herramienta para crear RUTs con dígito verificador correcto. Generador gratuito de RUTs.",
  keywords: [
    "creador de rut",
    "crear rut chileno",
    "generador creador rut",
    "creador rut chile",
    "herramienta crear rut",
    "crear rut valido",
    "generador de rut creador",
  ],
  openGraph: {
    title: "Creador de RUT - Genera RUTs Chilenos Válidos",
    description:
      "Creador de RUT chilenos válidos. Herramienta para crear RUTs con dígito verificador correcto. Generador gratuito de RUTs.",
    url: "https://www.rutschile.com/creador-rut",
  },
  twitter: {
    title: "Creador de RUT - Genera RUTs Chilenos Válidos",
    description:
      "Creador de RUT chilenos válidos. Herramienta para crear RUTs con dígito verificador correcto.",
  },
};

export default function CreadorRutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
