import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Validador de RUT Chileno",
  description:
    "Valida RUTs chilenos en línea. Verifica si un RUT es válido de forma rápida y segura. Herramienta gratuita para validación de RUTs.",
  openGraph: {
    title: "Validador de RUT Chileno",
    description:
      "Valida RUTs chilenos en línea. Verifica si un RUT es válido de forma rápida y segura.",
    url: "https://www.rutschile.com/validar",
  },
};

export default function ValidarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
