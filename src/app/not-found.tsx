import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página no encontrada - RUT Chile",
  description: "La página que buscas no existe. Vuelve al generador de RUT chileno.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className="max-w-7xl mx-auto my-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="py-16">
        <h1 className="text-6xl font-bold text-[#0033A0] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          ¡Ups! Página no encontrada
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Parece que el RUT que buscas no existe en nuestro sistema. 
          No te preocupes, puedes generar uno nuevo o validar el tuyo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button className="bg-[#0033A0] hover:bg-[#00297A] text-white px-6 py-3">
              Generar RUT Nuevo
            </Button>
          </Link>
          <Link href="/validar">
            <Button 
              variant="outline" 
              className="border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white px-6 py-3"
            >
              Validar RUT
            </Button>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ¿Qué puedes hacer?
          </h3>
          <ul className="text-left space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#0033A0] mr-2">•</span>
              <span>Genera RUTs chilenos válidos al instante con nuestro <Link href="/" className="text-[#0033A0] hover:underline">generador de RUT</Link></span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0033A0] mr-2">•</span>
              <span>Verifica si un RUT es válido con nuestro <Link href="/validar" className="text-[#0033A0] hover:underline">validador de RUT</Link></span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0033A0] mr-2">•</span>
              <span>Crea RUTs completamente aleatorios con el <Link href="/rut-al-azar" className="text-[#0033A0] hover:underline">generador al azar</Link></span>
            </li>
            <li className="flex items-start">
              <span className="text-[#0033A0] mr-2">•</span>
              <span>Utiliza nuestro <Link href="/creador-rut" className="text-[#0033A0] hover:underline">creador de RUT</Link> para proyectos específicos</span>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-500">
            Si crees que esto es un error, por favor{" "}
            <Link href="/" className="text-[#0033A0] hover:underline">
              vuelve al inicio
            </Link>{" "}
            o intenta más tarde.
          </p>
        </div>
      </div>
    </main>
  )
}