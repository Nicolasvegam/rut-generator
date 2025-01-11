import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Generador de RUT Chileno - Genera RUTs válidos al azar",
  description:
    "Genera RUTs chilenos válidos de forma aleatoria. Herramienta gratuita para generar RUTs con dígito verificador.",
  keywords: [
    "generador RUT",
    "RUT chileno",
    "generar RUT",
    "RUT aleatorio",
    "RUT válido",
  ],
  openGraph: {
    title: "Generador de RUT Chileno",
    description:
      "Genera RUTs chilenos válidos de forma aleatoria. Herramienta gratuita para generar RUTs con dígito verificador.",
    url: "https://rut-generator.vercel.app/",
    siteName: "Generador de RUT",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  canonical: "https://rut-generator.vercel.app/",
  locale: "es_CL",
  themeColor: "#3B82F6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
