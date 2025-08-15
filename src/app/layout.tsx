import type { Metadata, Viewport } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const karla = Karla({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0033A0",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rutschile.com"),
  title: {
    default: "Generador de RUT Chilenos Válidos - Genera 35 RUTs Online Gratis | RUT Chile",
    template: "%s | RUT Chile",
  },
  description:
    "⚡ Generador de RUT chilenos válidos online. Genera hasta 35 RUTs con dígito verificador correcto instantáneamente. ✓ Copiar con 1 clic ✓ Sin límites ✓ 100% gratis. Usado por +50.000 desarrolladores.",
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
    "crear rut chile válido",
    "rut aleatorio chile",
    "generador rut online gratis",
    "crear cedula chilena",
    "rut chile generator",
    "numero rut valido chile",
    "herramienta rut chile",
    "generar rut gratis",
    "rut chileno online",
    "sistema rut chile",
    "generador identificacion chile"
  ],
  authors: [{ name: "Di Monk", url: "https://www.dimonk.com" }],
  creator: "Di Monk",
  publisher: "Di Monk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Generador de RUT Chilenos Válidos | 35 RUTs Gratis Online - RUT Chile",
    description:
      "Genera hasta 35 RUT chilenos válidos al instante con dígito verificador correcto. ✓ Copiar con 1 clic ✓ Descarga masiva ✓ La herramienta más rápida y confiable de Chile.",
    url: "https://www.rutschile.com/",
    siteName: "RUT Chile",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Generador de RUT Chileno - Crear RUTs Válidos al Azar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Generador de RUT Chilenos Válidos | 35 RUTs Gratis",
    description:
      "Genera hasta 35 RUT chilenos válidos instantáneamente. Copiar con 1 clic, descarga masiva, 100% gratis.",
    images: ["/og-home.png"],
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
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.rutschile.com/",
    languages: {
      'es-CL': 'https://www.rutschile.com/',
      'x-default': 'https://www.rutschile.com/',
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code here
  },
  other: {
    'geo.region': 'CL',
    'geo.placename': 'Chile',
    'geo.position': '-33.4489;-70.6693',
    'ICBM': '-33.4489, -70.6693',
    'content-language': 'es-CL',
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
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
