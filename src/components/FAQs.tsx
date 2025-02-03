import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQs() {
  return (
    <section className="mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-8 text-[#212121] text-left">
        Preguntas Frecuentes
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4 text-left"
      >
        <AccordionItem
          value="item-1"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Qué es un RUT?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            El RUT (Rol Único Tributario) es un número de identificación único
            asignado a personas naturales y jurídicas en Chile para fines
            tributarios y de identificación.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Cómo se calcula el dígito verificador?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            El dígito verificador se calcula mediante un algoritmo que
            multiplica cada dígito del RUT por una secuencia de números (de
            derecha a izquierda: 2,3,4,5,6,7) y luego realiza una operación
            matemática para obtener el dígito final.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Los RUTs generados son reales?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            Los RUTs generados son matemáticamente válidos pero son generados
            aleatoriamente. No corresponden a personas o empresas reales y son
            solo para propósitos de prueba o desarrollo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Puedo usar estos RUTs en sistemas reales?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            Estos RUTs son solo para pruebas y desarrollo. No debes usarlos en
            sistemas reales o para fines oficiales, ya que podrían coincidir con
            RUTs de personas o empresas reales.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
