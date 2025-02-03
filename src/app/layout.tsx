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
  metadataBase: new URL("https://rutificador.nicovega.dev"),
  title: {
    default: "Generador y Validador de RUT Chileno",
    template: "%s | RUT Chile",
  },
  description:
    "Herramienta gratuita para generar y validar RUTs chilenos. Genera RUTs válidos al azar y verifica la validez de cualquier RUT chileno.",
  keywords: [
    "generador RUT",
    "validador RUT",
    "RUT chileno",
    "generar RUT",
    "validar RUT",
    "RUT aleatorio",
    "RUT válido",
    "verificar RUT",
    "rutificador",
    "validación RUT Chile",
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
    title: "Generador y Validador de RUT Chileno",
    description:
      "Herramienta gratuita para generar y validar RUTs chilenos. Genera RUTs válidos al azar y verifica la validez de cualquier RUT.",
    url: "https://rutificador.nicovega.dev/",
    siteName: "RUT Chile",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/icon.svg",
        width: 100,
        height: 100,
        alt: "RUT Chile Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Generador y Validador de RUT Chileno",
    description: "Herramienta gratuita para generar y validar RUTs chilenos",
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
    canonical: "https://rutificador.nicovega.dev/",
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
