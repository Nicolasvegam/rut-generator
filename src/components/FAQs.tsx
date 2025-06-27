import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "¿Qué es un RUT chileno?",
    answer:
      "El RUT (Rol Único Tributario) es un número de identificación único asignado a personas naturales y jurídicas en Chile para fines tributarios y de identificación. Nuestro generador de RUT chileno crea números válidos siguiendo el formato oficial.",
  },
  {
    question: "¿Cómo funciona el generador de RUTs chilenos?",
    answer:
      "Nuestro generador de RUTs chilenos utiliza el algoritmo oficial chileno para crear números válidos. El dígito verificador se calcula mediante una secuencia matemática que multiplica cada dígito del RUT por números específicos (2,3,4,5,6,7) y luego realiza operaciones para obtener el dígito final correcto.",
  },
  {
    question: "¿Cómo generar RUTs chilenos al azar?",
    answer:
      'Para generar RUTs chilenos al azar, simplemente haz clic en el botón "Generar más RUTs al azar". Nuestro creador de RUT automáticamente generará 15 nuevos RUTs válidos con dígitos verificadores correctos. Puedes generar tantos RUTs como necesites.',
  },
  {
    question: "¿Los RUTs generados son válidos y reales?",
    answer:
      "Los RUTs generados por nuestro generador de RUT chileno son matemáticamente válidos y siguen el algoritmo oficial. Sin embargo, son generados aleatoriamente y no corresponden a personas o empresas reales. Son ideales para pruebas, desarrollo y validación de sistemas.",
  },
  {
    question: "¿Puedo usar estos RUTs en sistemas reales?",
    answer:
      "Estos RUTs generados son solo para pruebas y desarrollo. No debes usarlos en sistemas reales o para fines oficiales, ya que podrían coincidir con RUTs de personas o empresas reales. Nuestro generador de RUTs chilenos es una herramienta educativa y de desarrollo.",
  },
  {
    question: "¿Qué es un creador de RUT?",
    answer:
      "Un creador de RUT es una herramienta que genera números de identificación chilenos válidos. Nuestro creador de RUT utiliza algoritmos matemáticos para asegurar que cada RUT generado tenga un dígito verificador correcto, cumpliendo con los estándares oficiales chilenos.",
  },
  {
    question: "¿Puedo generar múltiples RUTs a la vez?",
    answer:
      'Sí, nuestro generador de RUTs chilenos crea 15 RUTs válidos simultáneamente. Cada vez que hagas clic en "Generar más RUTs al azar", obtendrás un nuevo conjunto de RUTs únicos con dígitos verificadores correctos.',
  },
  {
    question: "¿Cómo copiar los RUTs generados?",
    answer:
      "Para copiar un RUT generado, simplemente haz clic sobre él. El RUT se copiará automáticamente al portapapeles. Puedes elegir entre mostrar los RUTs con puntos (formato estándar) o sin puntos según tus necesidades.",
  },
];

export function FAQs() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-8 text-[#212121] text-left">
          Preguntas Frecuentes sobre Generador de RUT Chileno
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4 text-left"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={`item-${index + 1}`}
              value={`item-${index + 1}`}
              className="border-2 border-[#F2F2F2] rounded-xl px-4 bg-white"
            >
              <AccordionTrigger className="text-[#212121] hover:text-[#0033A0] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#333333]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
