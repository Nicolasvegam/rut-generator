import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQs() {
  return (
    <section className="w-full mt-12">
      <h2 className="text-2xl font-bold mb-6 text-[#3D3D3D] text-center">
        Preguntas Frecuentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-[#578E7E]/20">
          <AccordionTrigger className="text-[#3D3D3D] hover:text-[#578E7E] hover:no-underline">
            ¿Qué es un generador de RUT?
          </AccordionTrigger>
          <AccordionContent className="text-[#3D3D3D]/80 text-left">
            Un generador de RUT es una herramienta diseñada para crear números
            de RUT (Rol Único Tributario) válidos y aleatorios. Estos números
            son esenciales para realizar pruebas en sistemas y simulaciones.
            Nuestro generador asegura que todos los RUT generados sigan el
            formato oficial y cumplan con los cálculos de verificación
            requeridos en Chile.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-[#578E7E]/20">
          <AccordionTrigger className="text-[#3D3D3D] hover:text-[#578E7E] hover:no-underline">
            ¿Cómo funciona nuestra herramienta?
          </AccordionTrigger>
          <AccordionContent className="text-[#3D3D3D]/80 text-left">
            La herramienta de generación de RUT es simple y eficiente. Solo
            necesitas un clic para obtener un RUT válido o aleatorio que cumple
            con los estándares chilenos. Úsala para proyectos, pruebas de
            sistemas o propósitos educativos. Garantizamos que los números
            generados son ficticios y no corresponden a datos reales.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-[#578E7E]/20">
          <AccordionTrigger className="text-[#3D3D3D] hover:text-[#578E7E] hover:no-underline">
            Beneficios de usar un generador de RUT
          </AccordionTrigger>
          <AccordionContent className="text-[#3D3D3D]/80 text-left">
            <ul className="list-disc pl-6 space-y-2">
              <li>Eficiencia: Obtén un RUT válido en segundos.</li>
              <li>
                Versatilidad: Ideal para desarrolladores, testers y educadores.
              </li>
              <li>Seguridad: Los RUT generados son completamente ficticios.</li>
              <li>
                Personalización: Puedes elegir entre RUT aleatorios o
                específicos según tus necesidades.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-[#578E7E]/20">
          <AccordionTrigger className="text-[#3D3D3D] hover:text-[#578E7E] hover:no-underline">
            ¿Qué es un RUT y por qué es importante?
          </AccordionTrigger>
          <AccordionContent className="text-[#3D3D3D]/80 text-left">
            El RUT (Rol Único Tributario) es un identificador único utilizado en
            Chile para personas y empresas. Es obligatorio para trámites
            legales, fiscales y administrativos. Sin embargo, cuando necesitas
            probar sistemas o aplicaciones, un RUT falso o aleatorio es la mejor
            solución para evitar usar datos reales.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
