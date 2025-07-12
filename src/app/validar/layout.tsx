import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Validador de RUT Chileno - Verifica RUTs al Instante",
  description:
    "✅ Valida cualquier RUT chileno en segundos. Verificador 100% preciso con algoritmo oficial ⚡ Sin registro, sin límites. ¡Pruébalo ahora GRATIS!",
  keywords: [
    "validador rut",
    "validar rut chile",
    "verificador rut chileno",
    "validador rut online",
    "verificar rut",
    "validar rut chileno online",
    "rutificador chile",
    "validador de rut gratis",
  ],
  openGraph: {
    title: "Validador de RUT Chileno - Verifica RUTs al Instante",
    description:
      "✅ Valida cualquier RUT chileno en segundos. Verificador 100% preciso con algoritmo oficial.",
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
