import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
  themeColor: "#578E7E",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  alternates: {
    canonical: "https://rut-generator.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#FFFAEC]`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
