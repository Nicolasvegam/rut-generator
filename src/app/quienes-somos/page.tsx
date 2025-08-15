import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Quiénes Somos | RUT Chile - Generador de RUT Chileno",
  description: "Conoce más sobre RUT Chile, la herramienta líder para generar y validar RUT chilenos de forma rápida, segura y gratuita.",
  keywords: "quienes somos, RUT Chile, generador RUT, validador RUT, equipo, misión",
  openGraph: {
    title: "Quiénes Somos | RUT Chile",
    description: "Conoce más sobre RUT Chile, la herramienta líder para generar y validar RUT chilenos.",
    url: "https://www.rutschile.com/quienes-somos",
    siteName: "RUT Chile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos | RUT Chile",
    description: "Conoce más sobre RUT Chile, la herramienta líder para generar y validar RUT chilenos.",
  },
  alternates: {
    canonical: "https://www.rutschile.com/quienes-somos",
  },
};

export default function QuienesSomosPage() {
  const breadcrumbItems = [
    { name: "Inicio", url: "/" },
    { name: "Quiénes Somos", url: "/quienes-somos" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Quiénes Somos
            </h1>
            <p className="text-xl text-gray-600">
              La herramienta más confiable para generar y validar RUT chilenos
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                En RUT Chile, nos dedicamos a proporcionar herramientas simples, rápidas y confiables 
                para la generación y validación de RUT chilenos. Entendemos la importancia de contar 
                con números de identificación válidos para pruebas, desarrollo y fines educativos.
              </p>
              <p className="text-gray-700">
                Nuestro objetivo es ofrecer un servicio gratuito y accesible que facilite el trabajo 
                de desarrolladores, estudiantes y profesionales que necesitan RUT válidos para sus 
                proyectos y actividades.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>¿Qué Ofrecemos?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <strong>Generación de RUT:</strong> Crea RUT chilenos válidos de forma instantánea 
                    con nuestro algoritmo verificado.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <strong>Validación de RUT:</strong> Verifica si un RUT es válido según el 
                    algoritmo oficial chileno.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <strong>Generación Masiva:</strong> Genera múltiples RUT de una sola vez para 
                    proyectos que requieren grandes volúmenes de datos.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <strong>Calculadora de Dígito Verificador:</strong> Calcula el dígito verificador 
                    para cualquier número de RUT.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compromiso con la Privacidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Tu privacidad es nuestra prioridad. No almacenamos ningún RUT generado o validado 
                en nuestros servidores. Todas las operaciones se realizan directamente en tu navegador, 
                garantizando la confidencialidad total de la información.
              </p>
              <p className="text-gray-700">
                Los RUT generados son completamente aleatorios y no corresponden a personas reales. 
                Están diseñados exclusivamente para uso en pruebas, desarrollo y fines educativos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tecnología y Seguridad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Utilizamos las últimas tecnologías web para garantizar una experiencia rápida, 
                segura y confiable. Nuestro sitio está optimizado para funcionar en todos los 
                dispositivos y navegadores modernos.
              </p>
              <p className="text-gray-700">
                El algoritmo de validación implementado sigue estrictamente las especificaciones 
                oficiales del sistema de RUT chileno, asegurando resultados 100% precisos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Contacto</CardTitle>
              <CardDescription className="text-blue-700">
                ¿Tienes preguntas o sugerencias?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Estamos aquí para ayudarte. Si tienes alguna pregunta sobre nuestras herramientas 
                o sugerencias para mejorar nuestro servicio, no dudes en contactarnos.
              </p>
              <p className="text-gray-700 mt-4">
                Visita nuestra página principal en{" "}
                <a href="/" className="text-blue-600 hover:underline font-semibold">
                  www.rutschile.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}