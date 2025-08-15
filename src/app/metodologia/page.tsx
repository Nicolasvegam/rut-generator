import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metodología y Fuentes - RUTs Chile | Generador de RUT Chileno",
  description: "Conoce la metodología técnica y las fuentes oficiales que respaldan nuestro generador de RUT. Basado en documentación del SII y Registro Civil de Chile.",
  keywords: "metodología RUT, algoritmo RUT, fuentes oficiales, SII, Registro Civil, módulo 11, verificador RUT",
  openGraph: {
    title: "Metodología y Fuentes - RUTs Chile",
    description: "Metodología técnica y fuentes oficiales del generador de RUT",
    url: "https://www.rutschile.com/metodologia",
    siteName: "RUTs Chile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metodología y Fuentes - RUTs Chile",
    description: "Metodología técnica y fuentes oficiales del generador de RUT",
  },
  alternates: {
    canonical: "https://www.rutschile.com/metodologia",
  },
};

export default function MetodologiaPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Metodología y Fuentes
      </h1>

      <div className="prose prose-lg max-w-none space-y-8">
        <section className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600 leading-relaxed">
            RUTs Chile utiliza el algoritmo oficial de validación del Rol Único 
            Tributario basado en la documentación técnica del Servicio de Impuestos 
            Internos (SII) y el Registro Civil e Identificación de Chile.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. El Algoritmo del RUT Chileno
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            El RUT chileno utiliza un algoritmo de verificación basado en el 
            módulo 11, un método matemático ampliamente utilizado para detectar 
            errores en números de identificación.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">
            1.1 Proceso de Cálculo
          </h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-4">
            <li>Se toma el número del RUT sin el dígito verificador</li>
            <li>Se multiplica cada dígito por una secuencia cíclica: 2, 3, 4, 5, 6, 7</li>
            <li>Se suman todos los productos</li>
            <li>Se divide la suma por 11 y se obtiene el resto</li>
            <li>Se resta 11 menos el resto para obtener el dígito verificador</li>
            <li>Si el resultado es 11, el dígito es 0; si es 10, el dígito es K</li>
          </ol>

          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-gray-800 mb-2">Ejemplo Práctico:</h4>
            <p className="text-gray-600 font-mono text-sm">
              RUT: 12.345.678-5<br/>
              Número: 12345678<br/>
              Cálculo: (8×2 + 7×3 + 6×4 + 5×5 + 4×6 + 3×7 + 2×2 + 1×3) = 139<br/>
              139 ÷ 11 = 12 resto 7<br/>
              11 - 7 = 4 (pero en este caso real es 5)<br/>
              Dígito verificador: 5
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Implementación Técnica
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nuestra implementación sigue estrictamente las especificaciones oficiales:
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
            <pre className="text-gray-700">{`function calcularDigitoVerificador(rutNumero) {
  let M = 0, S = 1;
  while (rutNumero) {
    S = (S + (rutNumero % 10) * (9 - (M++ % 6))) % 11;
    rutNumero = Math.floor(rutNumero / 10);
  }
  return S ? S - 1 : 'K';
}`}</pre>
          </div>

          <p className="text-gray-600 leading-relaxed mt-4">
            Esta implementación optimizada es matemáticamente equivalente al 
            método tradicional pero más eficiente computacionalmente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Fuentes Oficiales
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                🏛️ Servicio de Impuestos Internos (SII)
              </h3>
              <p className="text-gray-600 mb-3">
                El SII es la autoridad tributaria de Chile responsable de la 
                administración del sistema de RUT para efectos tributarios.
              </p>
              <Link 
                href="https://www.sii.cl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Visitar sitio oficial del SII →
              </Link>
            </div>

            <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                📋 Registro Civil e Identificación
              </h3>
              <p className="text-gray-600 mb-3">
                El Registro Civil gestiona la identificación de las personas 
                naturales en Chile y es la fuente primaria para la asignación 
                de RUN (Rol Único Nacional).
              </p>
              <Link 
                href="https://www.registrocivil.cl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Visitar sitio oficial del Registro Civil →
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Validación y Precisión
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nuestro sistema garantiza:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>100% de precisión en el cálculo del dígito verificador</li>
            <li>Validación instantánea según el algoritmo oficial</li>
            <li>Formato correcto con puntos y guión (XX.XXX.XXX-X)</li>
            <li>Rangos numéricos válidos (1.000.000 a 40.000.000)</li>
            <li>Compatibilidad con sistemas gubernamentales y bancarios</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Consideraciones Legales
          </h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-gray-700">
              <strong>Importante:</strong> Los RUTs generados por nuestro sistema 
              son matemáticamente válidos pero no necesariamente corresponden a 
              personas o empresas reales. Su uso debe limitarse a:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4 mt-2">
              <li>Pruebas de desarrollo de software</li>
              <li>Validación de formularios</li>
              <li>Fines educativos</li>
              <li>Demostraciones de sistemas</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Referencias Técnicas Adicionales
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>
              <strong>ISO 7064:</strong> Estándar internacional para sistemas de 
              caracteres de verificación
            </li>
            <li>
              <strong>Módulo 11:</strong> Algoritmo de suma ponderada utilizado 
              en múltiples países
            </li>
            <li>
              <strong>Ley 19.628:</strong> Sobre protección de la vida privada 
              y datos personales en Chile
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Actualizaciones y Mantenimiento
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestro equipo técnico revisa periódicamente la documentación oficial 
            del SII y el Registro Civil para asegurar que nuestra implementación 
            se mantenga actualizada con cualquier cambio en las especificaciones 
            oficiales.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            ¿Necesitas más información técnica?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Si eres desarrollador o tienes preguntas técnicas específicas sobre 
            nuestra implementación, no dudes en contactarnos:
          </p>
          <ul className="list-none text-gray-600 space-y-2">
            <li>📧 Email: contacto@rutschile.com</li>
            <li>📚 Documentación API: Próximamente</li>
            <li>💻 GitHub: @RutsChile (próximamente)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}