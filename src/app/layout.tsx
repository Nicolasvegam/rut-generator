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
  metadataBase: new URL("https://nicovega.dev/rutificador"),
  title: {
    default: "Generador de RUT Chileno - Crear RUTs Válidos al Azar",
    template: "%s | Generador RUT Chile",
  },
  description:
    "Genera RUTs chilenos válidos al azar gratis. Herramienta para crear RUTs de Chile con dígito verificador correcto. Validador de RUT incluido.",
  keywords: [
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
    title: "Generador de RUT Chileno - Crear RUTs Válidos al Azar",
    description:
      "Genera RUTs chilenos válidos al azar gratis. Herramienta para crear RUTs de Chile con dígito verificador correcto. Validador de RUT incluido.",
    url: "https://nicovega.dev/rutificador/",
    siteName: "Generador RUT Chile",
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
    title: "Generador de RUT Chileno - Crear RUTs Válidos al Azar",
    description:
      "Genera RUTs chilenos válidos al azar gratis. Herramienta para crear RUTs de Chile con dígito verificador correcto.",
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
    canonical: "https://nicovega.dev/rutificador/",
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
