import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Privacidad | RUT Chile - Generador de RUT Chileno",
  description: "Conoce nuestra política de privacidad y cómo protegemos tu información al usar el generador y validador de RUT chileno.",
  keywords: "política privacidad, RUT Chile, protección datos, seguridad, privacidad",
  openGraph: {
    title: "Política de Privacidad | RUT Chile",
    description: "Conoce nuestra política de privacidad y cómo protegemos tu información.",
    url: "https://www.rutschile.com/politica-privacidad",
    siteName: "RUT Chile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidad | RUT Chile",
    description: "Conoce nuestra política de privacidad y cómo protegemos tu información.",
  },
  alternates: {
    canonical: "https://www.rutschile.com/politica-privacidad",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidadPage() {
  const breadcrumbItems = [
    { name: "Inicio", url: "/" },
    { name: "Política de Privacidad", url: "/politica-privacidad" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidad
            </h1>
            <p className="text-xl text-gray-600">
              Tu privacidad es nuestra prioridad
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Última actualización: Enero 2025
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>1. Introducción</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                En RUT Chile (www.rutschile.com), nos comprometemos a proteger tu privacidad. 
                Esta política describe cómo recopilamos, usamos y protegemos tu información cuando 
                utilizas nuestro generador y validador de RUT chileno.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Información que NO Recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Es importante destacar que:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>No almacenamos RUT generados o validados:</strong> Todos los RUT que 
                  generas o validas se procesan únicamente en tu navegador.
                </li>
                <li>
                  <strong>No registramos información personal:</strong> No solicitamos ni 
                  almacenamos nombres, correos electrónicos, ni ningún dato personal.
                </li>
                <li>
                  <strong>No utilizamos cookies de rastreo:</strong> No empleamos cookies para 
                  rastrear tu actividad en otros sitios web.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Información que Recopilamos Automáticamente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Al visitar nuestro sitio web, podemos recopilar automáticamente cierta información 
                técnica para mejorar nuestro servicio:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Datos de uso anónimos:</strong> Páginas visitadas, tiempo en el sitio, 
                  tipo de navegador, sistema operativo.
                </li>
                <li>
                  <strong>Información de rendimiento:</strong> Tiempos de carga, errores técnicos 
                  para mejorar la experiencia del usuario.
                </li>
                <li>
                  <strong>Datos analíticos agregados:</strong> Estadísticas generales de uso sin 
                  identificación personal.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Uso de la Información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                La información técnica recopilada se utiliza exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Mejorar el rendimiento y la funcionalidad del sitio web</li>
                <li>Identificar y solucionar problemas técnicos</li>
                <li>Entender cómo los usuarios interactúan con nuestras herramientas</li>
                <li>Optimizar la experiencia del usuario</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Seguridad de los Datos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Implementamos medidas de seguridad técnicas y organizativas para proteger 
                cualquier información que procesemos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Conexión segura HTTPS en todo el sitio</li>
                <li>Procesamiento local en el navegador para datos sensibles</li>
                <li>No transmisión de RUT a servidores externos</li>
                <li>Actualizaciones regulares de seguridad</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Servicios de Terceros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Nuestro sitio puede utilizar servicios de terceros para análisis y mejora del 
                rendimiento:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Vercel Analytics:</strong> Para análisis de rendimiento y uso del sitio 
                  (datos anónimos y agregados)
                </li>
                <li>
                  <strong>CDN (Content Delivery Network):</strong> Para mejorar la velocidad de 
                  carga del sitio
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Estos servicios tienen sus propias políticas de privacidad y procesamiento de datos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Tus Derechos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Tienes derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Usar nuestro servicio de forma anónima</li>
                <li>No proporcionar ninguna información personal</li>
                <li>Desactivar JavaScript para evitar cualquier procesamiento (aunque esto limitará la funcionalidad)</li>
                <li>Solicitar información sobre cualquier dato que podamos tener</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Uso Responsable</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Los RUT generados por nuestro servicio son aleatorios y no corresponden a personas 
                reales. Están diseñados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Pruebas de desarrollo de software</li>
                <li>Fines educativos y de aprendizaje</li>
                <li>Demostración de sistemas</li>
                <li>Validación de formularios en ambientes de prueba</li>
              </ul>
              <p className="text-gray-700 mt-4 font-semibold">
                El uso de RUT generados para actividades fraudulentas o ilegales está 
                estrictamente prohibido.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Cambios en la Política</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Nos reservamos el derecho de actualizar esta política de privacidad. Cualquier 
                cambio será publicado en esta página con la fecha de actualización correspondiente.
              </p>
              <p className="text-gray-700">
                Te recomendamos revisar periódicamente esta política para estar informado sobre 
                cómo protegemos tu privacidad.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">10. Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos 
                la información, puedes contactarnos visitando nuestra página principal en{" "}
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