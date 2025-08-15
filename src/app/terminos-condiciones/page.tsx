import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Términos y Condiciones | RUT Chile - Generador de RUT Chileno",
  description: "Lee los términos y condiciones de uso del generador y validador de RUT chileno en RUT Chile.",
  keywords: "términos condiciones, RUT Chile, términos de uso, condiciones servicio, legal",
  openGraph: {
    title: "Términos y Condiciones | RUT Chile",
    description: "Lee los términos y condiciones de uso del generador y validador de RUT chileno.",
    url: "https://www.rutschile.com/terminos-condiciones",
    siteName: "RUT Chile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones | RUT Chile",
    description: "Lee los términos y condiciones de uso del generador y validador de RUT chileno.",
  },
  alternates: {
    canonical: "https://www.rutschile.com/terminos-condiciones",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosCondicionesPage() {
  const breadcrumbItems = [
    { name: "Inicio", url: "/" },
    { name: "Términos y Condiciones", url: "/terminos-condiciones" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Términos y Condiciones de Uso
            </h1>
            <p className="text-xl text-gray-600">
              Condiciones que rigen el uso de nuestro servicio
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Última actualización: Enero 2025
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>1. Aceptación de los Términos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Al acceder y utilizar el sitio web www.rutschile.com (&quot;el Servicio&quot;), aceptas 
                cumplir y estar sujeto a estos Términos y Condiciones de Uso. Si no estás de 
                acuerdo con alguna parte de estos términos, no debes utilizar nuestro Servicio.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Descripción del Servicio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                RUT Chile proporciona herramientas gratuitas en línea para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Generar números de RUT chilenos válidos de forma aleatoria</li>
                <li>Validar la estructura y dígito verificador de RUT existentes</li>
                <li>Calcular el dígito verificador para números de RUT</li>
                <li>Generar múltiples RUT de forma masiva</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Todos los servicios se ejecutan directamente en el navegador del usuario, sin 
                almacenamiento de datos en nuestros servidores.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Uso Permitido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                El Servicio está diseñado y debe ser utilizado exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Pruebas de desarrollo de software y aplicaciones</li>
                <li>Fines educativos y de aprendizaje</li>
                <li>Validación de formularios en ambientes de desarrollo</li>
                <li>Demostración de sistemas y aplicaciones</li>
                <li>Cualquier otro uso legal y ético que requiera RUT de prueba</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Uso Prohibido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 font-semibold">
                Está estrictamente prohibido utilizar el Servicio para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Cualquier actividad ilegal, fraudulenta o no autorizada</li>
                <li>Suplantar la identidad de personas reales</li>
                <li>Registrarse en servicios reales con RUT generados</li>
                <li>Realizar transacciones financieras o comerciales</li>
                <li>Acceder a sistemas o servicios sin autorización</li>
                <li>Cualquier actividad que viole las leyes chilenas o internacionales</li>
                <li>Causar daño o perjuicio a terceros</li>
              </ul>
              <p className="text-red-600 font-semibold mt-4">
                El incumplimiento de estas restricciones puede resultar en acciones legales.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Descargo de Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Los RUT generados por nuestro Servicio:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Son completamente aleatorios y ficticios</li>
                <li>No corresponden a personas reales</li>
                <li>No deben ser utilizados para ningún propósito oficial o legal</li>
                <li>No tienen validez legal alguna</li>
              </ul>
              <p className="text-gray-700 mt-4">
                El usuario es el único responsable del uso que haga de los RUT generados y de 
                las consecuencias que se deriven de dicho uso.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Limitación de Responsabilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                RUT Chile no será responsable por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Daños directos, indirectos, incidentales o consecuentes derivados del uso del Servicio</li>
                <li>Pérdidas económicas o de datos</li>
                <li>Interrupciones del servicio o errores técnicos</li>
                <li>Uso indebido o ilegal del Servicio por parte de los usuarios</li>
                <li>Cualquier acción tomada basándose en la información proporcionada</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Propiedad Intelectual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Todo el contenido del sitio web, incluyendo pero no limitado a texto, gráficos, 
                logos, código fuente y software, es propiedad de RUT Chile o sus licenciantes y 
                está protegido por las leyes de propiedad intelectual.
              </p>
              <p className="text-gray-700">
                El algoritmo de validación de RUT utilizado es de dominio público y se basa en 
                las especificaciones oficiales del sistema chileno.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Disponibilidad del Servicio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                El Servicio se proporciona &quot;tal cual&quot; y &quot;según disponibilidad&quot;. No garantizamos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Disponibilidad ininterrumpida del Servicio</li>
                <li>Ausencia de errores o fallos técnicos</li>
                <li>Que el Servicio cumplirá con requisitos específicos del usuario</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Nos reservamos el derecho de modificar, suspender o descontinuar el Servicio en 
                cualquier momento sin previo aviso.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Indemnización</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                El usuario acepta indemnizar y eximir de responsabilidad a RUT Chile, sus 
                afiliados, directores, empleados y agentes, de cualquier reclamo, demanda, 
                pérdida o daño, incluyendo honorarios razonables de abogados, que surjan del 
                uso indebido del Servicio o la violación de estos Términos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Modificaciones de los Términos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier 
                momento. Las modificaciones entrarán en vigor inmediatamente después de su 
                publicación en el sitio web.
              </p>
              <p className="text-gray-700">
                El uso continuado del Servicio después de cualquier modificación constituye la 
                aceptación de los nuevos términos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Ley Aplicable</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes 
                de la República de Chile, sin tener en cuenta sus disposiciones sobre conflictos 
                de leyes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">12. Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Si tienes preguntas sobre estos Términos y Condiciones, puedes contactarnos 
                visitando nuestra página principal en{" "}
                <a href="/" className="text-blue-600 hover:underline font-semibold">
                  www.rutschile.com
                </a>
              </p>
              <p className="text-gray-700 mt-4">
                Al utilizar nuestro Servicio, confirmas que has leído, entendido y aceptado 
                estos Términos y Condiciones en su totalidad.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}