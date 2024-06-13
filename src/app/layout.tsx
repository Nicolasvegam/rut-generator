import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generador de RUTs",
  description: "Generador de RUTs al azar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body className={`${inter.className} flex items-center justify-center min-h-screen bg-gray-800`}>

        {children}</body>
    </html>
  );
}
