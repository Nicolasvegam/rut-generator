import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autor del Blog - RUTs Chile | Generador de RUT Chileno",
  description: "Conoce al autor detrás del blog de RUTs Chile. Experto en desarrollo web y tecnología chilena.",
  keywords: "autor blog, RUTs Chile blog, escritor tecnología Chile",
  openGraph: {
    title: "Autor del Blog - RUTs Chile",
    description: "Conoce al autor detrás del blog de RUTs Chile",
    url: "https://www.rutschile.com/blog/autor",
    siteName: "RUTs Chile",
    locale: "es_CL",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autor del Blog - RUTs Chile",
    description: "Conoce al autor detrás del blog de RUTs Chile",
  },
  alternates: {
    canonical: "https://www.rutschile.com/blog/autor",
  },
};

export default function AutorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Sobre el Autor
      </h1>

      <div className="prose prose-lg max-w-none">
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
            <span className="text-4xl text-gray-600">👨‍💻</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Equipo Editorial RUTs Chile
          </h2>
          <p className="text-gray-600 text-center">
            Desarrolladores y expertos en tecnología chilena
          </p>
        </div>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Nuestra Misión Editorial
          </h3>
          <p className="text-gray-600 leading-relaxed">
            En el blog de RUTs Chile, nuestro equipo editorial se dedica a crear 
            contenido útil y educativo sobre el sistema de identificación tributaria 
            chileno, desarrollo web, y tecnología aplicada al contexto nacional.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Experiencia y Conocimientos
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nuestro equipo cuenta con:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>Más de 10 años de experiencia en desarrollo de software</li>
            <li>Especialización en sistemas de validación y algoritmos</li>
            <li>Conocimiento profundo del sistema tributario chileno</li>
            <li>Experiencia en educación tecnológica y divulgación</li>
            <li>Compromiso con la precisión técnica y legal</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Áreas de Enfoque
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Tecnología</h4>
              <p className="text-gray-600 text-sm">
                Desarrollo web, algoritmos, mejores prácticas de programación
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Educación</h4>
              <p className="text-gray-600 text-sm">
                Tutoriales, guías paso a paso, explicaciones técnicas
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Normativa</h4>
              <p className="text-gray-600 text-sm">
                Aspectos legales del RUT, actualizaciones del SII
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Herramientas</h4>
              <p className="text-gray-600 text-sm">
                Desarrollo de utilidades prácticas para la comunidad
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Filosofía Editorial
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Creemos en la importancia de democratizar el conocimiento técnico. 
            Nuestros artículos buscan ser accesibles para todos, desde estudiantes 
            hasta profesionales experimentados, manteniendo siempre la precisión 
            técnica y la utilidad práctica.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Publicaciones Destacadas
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            <li>
              <Link href="/blog/que-es-el-rut-chileno" className="text-blue-600 hover:underline">
                ¿Qué es el RUT chileno? Guía completa 2024
              </Link>
            </li>
            <li>
              <Link href="/blog/como-validar-rut-chileno" className="text-blue-600 hover:underline">
                Cómo validar un RUT chileno: Guía técnica completa
              </Link>
            </li>
            <li>
              <Link href="/blog/algoritmo-verificador-rut" className="text-blue-600 hover:underline">
                El algoritmo del dígito verificador del RUT explicado
              </Link>
            </li>
            <li>
              <Link href="/blog/rut-empresas-chile" className="text-blue-600 hover:underline">
                RUT para empresas en Chile: Todo lo que necesitas saber
              </Link>
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Colabora con Nosotros
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            ¿Tienes experiencia en desarrollo, sistemas tributarios o educación 
            tecnológica? Nos encantaría conocer tus ideas para mejorar nuestro 
            contenido.
          </p>
          <p className="text-gray-600">
            📧 Escríbenos a: <span className="font-medium">editorial@rutschile.com</span>
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Compromiso con la Calidad
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Cada artículo publicado en nuestro blog pasa por un riguroso proceso 
            de revisión técnica y editorial. Nos aseguramos de que toda la información 
            sea precisa, actualizada y útil para nuestra comunidad.
          </p>
        </section>

        <section className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Síguenos para más contenido sobre tecnología y RUT chileno
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}