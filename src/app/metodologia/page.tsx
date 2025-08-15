import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Metodología | Cómo Funciona el Generador de RUT Chileno",
  description: "Descubre la metodología y el algoritmo detrás del generador de RUT chileno. Aprende cómo se calcula el dígito verificador y la validación del RUT.",
  keywords: "metodología RUT, algoritmo RUT chileno, cálculo dígito verificador, módulo 11, validación RUT",
  openGraph: {
    title: "Metodología del Generador de RUT | RUT Chile",
    description: "Conoce el algoritmo y la metodología para generar y validar RUT chilenos correctamente.",
    url: "https://www.rutschile.com/metodologia",
    siteName: "RUT Chile",
    locale: "es_CL",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metodología del Generador de RUT",
    description: "Conoce el algoritmo y la metodología para generar y validar RUT chilenos.",
  },
  alternates: {
    canonical: "https://www.rutschile.com/metodologia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MetodologiaPage() {
  const breadcrumbItems = [
    { name: "Inicio", url: "/" },
    { name: "Metodología", url: "/metodologia" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Metodología del Generador de RUT
            </h1>
            <p className="text-xl text-gray-600">
              Comprende el algoritmo oficial para generar y validar RUT chilenos
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>¿Qué es un RUT?</CardTitle>
              <CardDescription>
                Rol Único Tributario - Identificación chilena
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                El RUT (Rol Único Tributario) es el número de identificación tributaria utilizado 
                en Chile. Consta de un número base de 7 u 8 dígitos seguido de un guión y un 
                dígito verificador (DV) que puede ser un número del 0 al 9 o la letra K.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-mono text-lg text-center">
                  12.345.678-9
                </p>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Número base (12.345.678) + Dígito verificador (9)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>El Algoritmo Módulo 11</CardTitle>
              <CardDescription>
                Método oficial de cálculo del dígito verificador
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                El dígito verificador del RUT se calcula utilizando el algoritmo de módulo 11, 
                que es el método oficial establecido por el Servicio de Impuestos Internos (SII) 
                de Chile.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Proceso paso a paso:</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Badge className="mt-1">1</Badge>
                    <div>
                      <p className="font-semibold">Inversión del número</p>
                      <p className="text-gray-600">Se toma el número del RUT y se invierte su orden.</p>
                      <p className="text-sm text-gray-500 mt-1">Ejemplo: 12345678 → 87654321</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Badge className="mt-1">2</Badge>
                    <div>
                      <p className="font-semibold">Multiplicación por serie</p>
                      <p className="text-gray-600">
                        Cada dígito se multiplica por los números de la serie: 2, 3, 4, 5, 6, 7 
                        (repitiéndose si es necesario).
                      </p>
                      <div className="bg-gray-100 p-3 rounded mt-2 font-mono text-sm">
                        8×2 + 7×3 + 6×4 + 5×5 + 4×6 + 3×7 + 2×2 + 1×3
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Badge className="mt-1">3</Badge>
                    <div>
                      <p className="font-semibold">Suma total</p>
                      <p className="text-gray-600">Se suman todos los productos obtenidos.</p>
                      <p className="text-sm text-gray-500 mt-1">
                        16 + 21 + 24 + 25 + 24 + 21 + 4 + 3 = 138
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Badge className="mt-1">4</Badge>
                    <div>
                      <p className="font-semibold">División por 11</p>
                      <p className="text-gray-600">
                        Se divide la suma por 11 y se obtiene el resto.
                      </p>
                      <p className="text-sm text-gray-500 mt-1">138 ÷ 11 = 12 con resto 6</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Badge className="mt-1">5</Badge>
                    <div>
                      <p className="font-semibold">Cálculo del DV</p>
                      <p className="text-gray-600">
                        El dígito verificador es: 11 - resto
                      </p>
                      <p className="text-sm text-gray-500 mt-1">11 - 6 = 5</p>
                      <div className="bg-blue-50 p-3 rounded mt-2">
                        <p className="text-sm">
                          <strong>Casos especiales:</strong><br/>
                          • Si el resultado es 11 → DV = 0<br/>
                          • Si el resultado es 10 → DV = K
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Implementación en Código</CardTitle>
              <CardDescription>
                Ejemplo de implementación del algoritmo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`function calcularDigitoVerificador(rut) {
  let suma = 0;
  let multiplicador = 2;
  
  // Procesar de derecha a izquierda
  for (let i = rut.length - 1; i >= 0; i--) {
    suma += parseInt(rut[i]) * multiplicador;
    multiplicador++;
    
    // Reiniciar multiplicador si llega a 8
    if (multiplicador === 8) {
      multiplicador = 2;
    }
  }
  
  // Calcular el dígito verificador
  const resto = suma % 11;
  const dv = 11 - resto;
  
  // Casos especiales
  if (dv === 11) return '0';
  if (dv === 10) return 'K';
  
  return dv.toString();
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Generación de RUT Aleatorios</CardTitle>
              <CardDescription>
                Proceso para crear RUT válidos de prueba
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Nuestro generador crea RUT válidos siguiendo estos pasos:
              </p>
              
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>Generación del número base:</strong> Se genera un número aleatorio 
                  entre 1.000.000 y 40.000.000 para asegurar un formato válido.
                </li>
                <li>
                  <strong>Cálculo del DV:</strong> Se aplica el algoritmo módulo 11 al número 
                  generado para obtener el dígito verificador correcto.
                </li>
                <li>
                  <strong>Formateo:</strong> Se formatea el RUT con puntos y guión según el 
                  estándar chileno (XX.XXX.XXX-X).
                </li>
                <li>
                  <strong>Validación:</strong> Se verifica que el RUT generado cumple con todas 
                  las reglas de validación.
                </li>
              </ol>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-6">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ Importante:</strong> Los RUT generados son completamente aleatorios 
                  y no corresponden a personas reales. Solo deben usarse para pruebas y desarrollo.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Validación de RUT</CardTitle>
              <CardDescription>
                Verificación de la validez de un RUT
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Para validar un RUT, nuestro sistema realiza las siguientes verificaciones:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Formato correcto:</strong> Verifica que el RUT tenga el formato 
                  adecuado (números y DV).
                </li>
                <li>
                  <strong>Rango válido:</strong> Confirma que el número esté en un rango 
                  razonable (mayor a 1 millón).
                </li>
                <li>
                  <strong>Dígito verificador:</strong> Recalcula el DV usando el algoritmo 
                  módulo 11 y lo compara con el proporcionado.
                </li>
                <li>
                  <strong>Caracteres válidos:</strong> Verifica que solo contenga números y, 
                  opcionalmente, la letra K como DV.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Precisión y Confiabilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Nuestro generador garantiza:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-2">✓ 100% Precisión</p>
                  <p className="text-sm text-gray-700">
                    Todos los RUT generados son matemáticamente válidos según el algoritmo oficial.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-2">✓ Aleatorización Total</p>
                  <p className="text-sm text-gray-700">
                    Cada RUT es generado de forma completamente aleatoria e independiente.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-2">✓ Sin Duplicados</p>
                  <p className="text-sm text-gray-700">
                    En generación masiva, verificamos que no haya RUT duplicados en el mismo lote.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-900 mb-2">✓ Procesamiento Local</p>
                  <p className="text-sm text-gray-700">
                    Todo el cálculo se realiza en tu navegador, sin enviar datos a servidores.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">¿Necesitas generar RUT?</CardTitle>
              <CardDescription className="text-blue-700">
                Prueba nuestras herramientas gratuitas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Generar RUT
                </a>
                <a 
                  href="/validar" 
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Validar RUT
                </a>
                <a 
                  href="/generador-masivo" 
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Generación Masiva
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}