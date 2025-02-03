import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ValidarFAQs() {
  const faqs = [
    {
      question: "¿Qué es el RUT?",
      answer:
        "El RUT (Rol Único Tributario) es un código alfanumérico que identifica a personas naturales, empresas, organizaciones y otras entidades en el sistema tributario chileno. Es esencial para realizar trámites, transacciones financieras, presentar declaraciones de impuestos y cumplir con obligaciones legales.",
    },
    {
      question: "¿Qué es un Rutificador y cómo funciona?",
      answer:
        "Un Rutificador es una herramienta en línea que permite verificar si un RUT dado es válido (o sea, si cumple con el formato y el dígito verificador correcto) y confirmar la autenticidad del dígito verificador, evitando errores en transacciones o registros. Al ingresar un RUT, el Rutificador aplica las reglas de validación (generalmente basadas en el Módulo 11) para determinar si el RUT corresponde a una numeración correcta.",
    },
    {
      question: "¿Por qué es importante validar un RUT?",
      answer:
        "La validación de RUT es crucial para garantizar la precisión en transacciones financieras y declaraciones de impuestos, evitar inconvenientes legales al presentar documentos con datos erróneos, y asegurar la integridad de la información en trámites personales o empresariales.",
    },
    {
      question: "¿Cómo puedo verificar un RUT en Chile?",
      answer:
        "Para verificar un RUT en Chile, puedes usar un Rutificador en línea: Ingresa el número en el campo designado y presiona 'Validar', o aplicar manualmente las reglas del Módulo 11, si conoces el método de cálculo del dígito verificador.",
    },
    {
      question: "¿Cómo puedo validar un RUT en línea?",
      answer:
        "Dirígete a un sitio web o aplicación que ofrezca un Rutificador, ingresa el RUT sin espacios ni caracteres especiales, y haz clic en 'Validar' para obtener de inmediato si el RUT es correcto y coincide con el dígito verificador. También es posible validar el RUT aplicando las reglas oficiales (Módulo 11), aunque hacerlo en línea resulta más rápido y práctico.",
    },
    {
      question: "¿Cuál es el formato correcto de un RUT válido?",
      answer:
        "El formato oficial de un RUT en Chile incluye 8 o 9 dígitos antes del guion (ej.: 12.345.678) y un dígito verificador después del guion (ej.: 9 o K). Ejemplo completo: 12.345.678-9. En muchos casos, se ingresan los dígitos sin puntos para simplificar (por ejemplo, 12345678-9).",
    },
    {
      question: "¿Qué sucede si utilizo un RUT inválido?",
      answer:
        "Puede generar problemas en declaraciones de impuestos, transacciones financieras o al tramitar documentación legal. Es fundamental utilizar RUTs válidos para evitar complicaciones administrativas y posibles sanciones.",
    },
    {
      question: "¿Puedo verificar la validez de un RUT antes de usarlo?",
      answer:
        "¡Por supuesto! Esa es precisamente la función principal de un Rutificador. Antes de ingresar el RUT en documentos oficiales o en plataformas en línea, asegúrate de comprobar si el número es válido.",
    },
    {
      question: "¿Cuál es el propósito del dígito verificador en el RUT?",
      answer:
        "El dígito verificador es un mecanismo de seguridad que confirma la integridad del RUT, detecta errores de tipeo o falsificaciones, y hace que cada RUT sea único y difícil de generar de manera aleatoria.",
    },
    {
      question: "¿Es posible hacer una consulta de RUT por nombre?",
      answer:
        "Actualmente, muchos rutificadores no ofrecen la opción de buscar un RUT por nombre. Esa función suele ser exclusiva de servicios oficiales (por ejemplo, el Registro Civil), y no está disponible en la mayoría de aplicaciones o sitios web de verificación.",
    },
    {
      question:
        "¿Cómo se manejan los RUTs con caracteres especiales o espacios?",
      answer:
        "Al ingresar un RUT en un Rutificador o en sistemas de validación: elimina todos los espacios en blanco y puntos extra, incluye únicamente los números y el dígito verificador (12.345.678-9 o 12345678-9), y asegúrate de mantener el guion antes del dígito verificador.",
    },
    {
      question: "¿Qué documentación se requiere para validar un RUT?",
      answer:
        "No se necesita presentar documentación adicional para verificar la validez de un RUT en línea. Basta con tener el número de RUT completo (números + dígito verificador) y usarlo en la herramienta de validación correspondiente.",
    },
    {
      question: "¿Puedo obtener la fecha de nacimiento por RUT?",
      answer:
        "No. Los rutificadores o validadores en línea solo confirman si el RUT es válido. No proporcionan datos personales adicionales como la fecha de nacimiento ni otra información confidencial.",
    },
    {
      question: "¿Cómo puedo buscar un RUT por nombre en el Registro Civil?",
      answer:
        "Para buscar un RUT por nombre a través del Registro Civil en Chile, normalmente debes acudir directamente al Registro Civil o a su sitio web oficial y consultar la normativa vigente, puesto que los datos personales suelen estar protegidos. Los servicios externos de validación (Rutificadores) no ofrecen esta función.",
    },
    {
      question: "¿Puedo verificar el RUT de una empresa?",
      answer:
        "Sí. El RUT de empresas (como personas jurídicas) también se puede validar con un Rutificador. Esto ayuda a confirmar la autenticidad de datos en trámites fiscales y evitar errores al facturar o firmar contratos con razón social.",
    },
    {
      question: "¿Es posible verificar un RUT del Registro Civil o del SII?",
      answer:
        "Sí, la mayoría de rutificadores pueden verificar RUTs registrados en el Registro Civil o en el SII (Servicio de Impuestos Internos), confirmando su autenticidad y el dígito verificador.",
    },
  ];

  return (
    <section className="mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-[#212121]">
        Preguntas Frecuentes
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4 text-left"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={`faq-${index}`}
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
  );
}
