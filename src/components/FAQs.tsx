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
        Preguntas Frecuentes sobre Generador de RUT Chileno
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
            ¿Qué es un RUT chileno?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            El RUT (Rol Único Tributario) es un número de identificación único
            asignado a personas naturales y jurídicas en Chile para fines
            tributarios y de identificación. Nuestro generador de RUT chileno
            crea números válidos siguiendo el formato oficial.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Cómo funciona el generador de RUTs chilenos?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            Nuestro generador de RUTs chilenos utiliza el algoritmo oficial
            chileno para crear números válidos. El dígito verificador se calcula
            mediante una secuencia matemática que multiplica cada dígito del RUT
            por números específicos (2,3,4,5,6,7) y luego realiza operaciones
            para obtener el dígito final correcto.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Cómo generar RUTs chilenos al azar?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            Para generar RUTs chilenos al azar, simplemente haz clic en el botón
            &ldquo;Generar más RUTs al azar&rdquo;. Nuestro creador de RUT
            automáticamente generará 15 nuevos RUTs válidos con dígitos
            verificadores correctos. Puedes generar tantos RUTs como necesites.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Los RUTs generados son válidos y reales?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            Los RUTs generados por nuestro generador de RUT chileno son
            matemáticamente válidos y siguen el algoritmo oficial. Sin embargo,
            son generados aleatoriamente y no corresponden a personas o empresas
            reales. Son ideales para pruebas, desarrollo y validación de
            sistemas.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Puedo usar estos RUTs en sistemas reales?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            Estos RUTs generados son solo para pruebas y desarrollo. No debes
            usarlos en sistemas reales o para fines oficiales, ya que podrían
            coincidir con RUTs de personas o empresas reales. Nuestro generador
            de RUTs chilenos es una herramienta educativa y de desarrollo.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Qué es un creador de RUT?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            Un creador de RUT es una herramienta que genera números de
            identificación chilenos válidos. Nuestro creador de RUT utiliza
            algoritmos matemáticos para asegurar que cada RUT generado tenga un
            dígito verificador correcto, cumpliendo con los estándares oficiales
            chilenos.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-7"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Puedo generar múltiples RUTs a la vez?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            Sí, nuestro generador de RUTs chilenos crea 15 RUTs válidos
            simultáneamente. Cada vez que hagas clic en &ldquo;Generar más RUTs
            al azar&rdquo;, obtendrás un nuevo conjunto de RUTs únicos con
            dígitos verificadores correctos.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-8"
          className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
        >
          <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
            ¿Cómo copiar los RUTs generados?
          </AccordionTrigger>
          <AccordionContent className="text-[#333333]">
            Para copiar un RUT generado, simplemente haz clic sobre él. El RUT
            se copiará automáticamente al portapapeles. Puedes elegir entre
            mostrar los RUTs con puntos (formato estándar) o sin puntos según
            tus necesidades.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
