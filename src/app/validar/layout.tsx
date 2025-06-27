import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Validador de RUT Chileno",
  description:
    "Valida RUTs chilenos en línea. Verifica si un RUT es válido de forma rápida y segura. Herramienta gratuita para validación de RUTs.",
  keywords: [
    "validar rut chileno",
    "verificar rut chile", 
    "comprobar rut válido",
    "revisar cedula chilena",
    "validador rut online",
    "verificador rut chile",
    "comprobar digito verificador",
    "validacion rut chileno",
    "revisar rut válido"
  ],
  openGraph: {
    title: "Validador de RUT Chileno",
    description:
      "Valida RUTs chilenos en línea. Verifica si un RUT es válido de forma rápida y segura.",
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
