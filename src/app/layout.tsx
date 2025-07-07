import type { Metadata, Viewport } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/Navbar";

const karla = Karla({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0033A0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rutschile.com"),
  title: {
    default: "RUT Chile - Generador de RUT Chileno Válido | Crear RUTs al Azar",
    template: "%s | RUT Chile",
  },
  description:
    "RUT Chile: Generador oficial de RUTs chilenos válidos. Crea RUTs al azar con dígito verificador correcto. Herramienta gratuita para generar y validar RUT de Chile.",
  keywords: [
    "rut chile",
    "rutschile",
    "generador de rut chilenos",
    "generador de rut",
    "generador de rut chileno",
    "generador rut chile",
    "generador de ruts chilenos",
    "generador de rut chilenos validos",
    "rut generador",
    "genera rut chileno",
    "generador de ruts",
    "rut al azar",
    "rut chileno generador",
    "generador rut",
    "generador ruts",
    "creador de rut",
    "generador de rut validos",
    "validador rut chile",
    "verificar rut chileno",
    "calcular digito verificador rut",
    "rutschile.com",
  ],
  authors: [{ name: "Di Monk", url: "https://software.nicovega.dev" }],
  creator: "Di Monk",
  publisher: "Di Monk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "RUT Chile - Generador de RUT Chileno Válido | Crear RUTs al Azar",
    description:
      "RUT Chile: Generador oficial de RUTs chilenos válidos. Crea RUTs al azar con dígito verificador correcto. Herramienta gratuita para generar y validar RUT.",
    url: "https://www.rutschile.com/",
    siteName: "RUT Chile",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/icon.svg",
        width: 100,
        height: 100,
        alt: "Generador RUT Chile Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "RUT Chile - Generador de RUT Chileno Válido",
    description:
      "RUT Chile: Generador oficial de RUTs chilenos válidos. Crea RUTs al azar con dígito verificador correcto.",
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
    other: {
      rel: "mask-icon",
      url: "/icon.svg",
    },
  },
  alternates: {
    canonical: "https://www.rutschile.com/",
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code here
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${karla.className} bg-white`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
