import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = new Date().toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Herramientas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#0033A0] transition-colors">
                  Generador de RUT
                </Link>
              </li>
              <li>
                <Link href="/validar" className="text-gray-600 hover:text-[#0033A0] transition-colors">
                  Validador de RUT
                </Link>
              </li>
              <li>
                <Link href="/rut-al-azar" className="text-gray-600 hover:text-[#0033A0] transition-colors">
                  RUT al Azar
                </Link>
              </li>
              <li>
                <Link href="/creador-rut" className="text-gray-600 hover:text-[#0033A0] transition-colors">
                  Creador de RUT
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Información
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#faqs" className="text-gray-600 hover:text-[#0033A0] transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="/validar#como-validar" className="text-gray-600 hover:text-[#0033A0] transition-colors">
                  Cómo Validar RUT
                </Link>
              </li>
              <li>
                <Link href="/#que-es-rut" className="text-gray-600 hover:text-[#0033A0] transition-colors">
                  ¿Qué es un RUT?
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Recursos
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.sii.cl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-[#0033A0] transition-colors"
                >
                  SII Chile ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.registrocivil.cl" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-[#0033A0] transition-colors"
                >
                  Registro Civil ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Sobre RUT Chile
            </h3>
            <p className="text-gray-600 text-sm">
              Herramienta gratuita para generar y validar RUTs chilenos. 
              Más de 8,900 usuarios confían en nosotros.
            </p>
            <ul className="space-y-2 mt-4">
              <li>
                <Link href="/quienes-somos" className="text-gray-600 hover:text-[#0033A0] transition-colors text-sm">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link href="/terminos-condiciones" className="text-gray-600 hover:text-[#0033A0] transition-colors text-sm">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="text-gray-600 hover:text-[#0033A0] transition-colors text-sm">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} RUT Chile. Todos los derechos reservados. 
            {" "}Creado por{" "}
            <a 
              href="https://www.dimonk.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0033A0] hover:underline"
            >
              Di Monk
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}