export const blogContent: Record<string, string> = {
  "algoritmo-modulo-11-validar-rut": `
# Guía Completa del Algoritmo Módulo 11 para Validar RUT Chileno

## ¿Qué es el Algoritmo Módulo 11 y por qué es importante para el RUT?

El algoritmo módulo 11 es el método matemático oficial utilizado en Chile para calcular y validar el dígito verificador del RUT (Rol Único Tributario) y RUN (Rol Único Nacional). Este sistema de verificación es fundamental para prevenir errores de digitación y fraudes de identidad en el sistema tributario chileno.

Según la información disponible del Servicio de Impuestos Internos (SII) y el Registro Civil de Chile¹, el módulo 11 es un código de control que añade un dígito verificador para garantizar la validez de los números de identificación.

## ¿Cómo funciona el Algoritmo Módulo 11?

El proceso de cálculo del dígito verificador sigue estos pasos específicos²:

### Paso 1: Multiplicación de dígitos
Se toma el número del RUT de derecha a izquierda (sin considerar el dígito verificador) y se multiplica cada dígito por los números de la serie: 2, 3, 4, 5, 6, 7. Si se acaban los números de la serie, se vuelve a comenzar con el 2.

### Paso 2: Suma de productos
Se suman todos los resultados de las multiplicaciones anteriores.

### Paso 3: División por 11
El resultado de la suma se divide por 11 y se obtiene el resto de la división.

### Paso 4: Cálculo del dígito verificador
- Se resta 11 menos el resto obtenido
- Si el resultado es 11, el dígito verificador es 0
- Si el resultado es 10, el dígito verificador es K
- En cualquier otro caso, el dígito verificador es el resultado de la resta

## Ejemplo práctico: Validando el RUT 12.345.678-?

Vamos a calcular el dígito verificador para el RUT 12.345.678:

1. **Invertimos el número**: 8-7-6-5-4-3-2-1
2. **Multiplicamos por la serie**:
   - 8 × 2 = 16
   - 7 × 3 = 21
   - 6 × 4 = 24
   - 5 × 5 = 25
   - 4 × 6 = 24
   - 3 × 7 = 21
   - 2 × 2 = 4 (reiniciamos la serie)
   - 1 × 3 = 3

3. **Sumamos**: 16 + 21 + 24 + 25 + 24 + 21 + 4 + 3 = 138
4. **Dividimos por 11**: 138 ÷ 11 = 12 con resto 6
5. **Calculamos**: 11 - 6 = 5

Por lo tanto, el RUT completo sería: **12.345.678-5**

## ¿Por qué algunos RUT terminan en K?

La letra K aparece cuando el resultado del cálculo es 10. Esto ocurre cuando el resto de la división por 11 es igual a 1³. La K se utiliza como representación del número 10 en un solo carácter, manteniendo la consistencia del formato del RUT.

## Importancia del dígito verificador

El dígito verificador cumple funciones críticas⁴:

1. **Prevención de errores**: Detecta errores de digitación en un 99% de los casos
2. **Seguridad**: Dificulta la falsificación de números de RUT
3. **Validación automática**: Permite a los sistemas computacionales verificar la validez de un RUT instantáneamente
4. **Integridad de datos**: Asegura que los datos ingresados en sistemas tributarios y financieros sean correctos

## Herramientas para validar RUT

Existen múltiples herramientas en línea que utilizan el algoritmo módulo 11 para validar RUT chilenos. Según ValidaRutChile⁵, estos servicios no almacenan ni comercializan los números de RUT ingresados, limitándose únicamente a aplicar la fórmula de dominio público del módulo 11.

## Aplicaciones del Módulo 11 en Chile

Además del RUT/RUN, el algoritmo módulo 11 se utiliza en Chile para⁶:

- **Patentes de vehículos**: Validación de placas patentes
- **Códigos de barras**: Algunos sistemas de códigos de barras chilenos
- **Números de serie**: En documentos oficiales que requieren validación

## Consideraciones técnicas para desarrolladores

Si estás implementando un validador de RUT, ten en cuenta:

- El algoritmo es de dominio público y puede ser implementado libremente
- Debe manejar correctamente el caso especial de la letra K
- Es importante formatear correctamente el RUT con puntos y guión (XX.XXX.XXX-X)
- La validación debe ser realizada antes de cualquier operación crítica con el RUT

## Conclusión

El algoritmo módulo 11 es la piedra angular de la validación de identidad tributaria en Chile. Su implementación correcta es esencial para cualquier sistema que maneje información de contribuyentes chilenos, garantizando la integridad y confiabilidad de los datos en el sistema tributario nacional.

---

### Referencias

¹ Servicio de Impuestos Internos de Chile. "Inscripción al RUT para Extranjeros". Disponible en: sii.cl

² ValidaRutChile. "Cómo Calcular el Dígito Verificador del RUT de Forma Manual utilizando el Algoritmo del Módulo 11". 2024.

³ BioBioChile. "Cómo se determina el dígito verificador del RUT en Chile y por qué algunos terminan en K". Agosto 2024.

⁴ Registro Civil de Chile. "Manual de Validación de RUN". Portal oficial.

⁵ ValidaRutChile. "Preguntas Frecuentes (FAQ)". Disponible en: validarutchile.cl

⁶ Wikipedia. "Rol Único Tributario". La enciclopedia libre.
`,
  "como-obtener-rut-extranjero-chile-2024": `
# Cómo Obtener RUT siendo Extranjero en Chile 2024: Guía Completa

## ¿Qué es el RUT y por qué lo necesitas como extranjero?

El RUT (Rol Único Tributario) es el número de identificación tributaria esencial para realizar cualquier actividad económica en Chile. Según el Servicio de Impuestos Internos (SII)¹, todo extranjero mayor de 18 años que resida en el país y desee trabajar, estudiar o realizar inversiones necesita obtener su RUT.

Con la nueva Ley de Migración vigente desde 2022, el proceso se ha modernizado, permitiendo incluso obtener el RUT antes de llegar a Chile en ciertos casos².

## ¿Quiénes pueden obtener RUT en Chile?

De acuerdo con la información oficial del SII y el Ministerio del Trabajo³, pueden obtener RUT:

### Extranjeros residentes:
- Mayores de 18 años
- Con cualquier tipo de visa vigente
- Con residencia permanente
- Portadores de tarjeta de trabajador temporal o estacional (convenio Chile-Argentina)

### Inversionistas extranjeros:
- No requieren residencia en Chile
- Deben tener un representante legal domiciliado en el país
- Obtienen RUT del orden de 46 o 48 millones⁴

## Requisitos y documentación necesaria

Según ChileAtiende y el Registro Civil⁵, los documentos requeridos son:

### Documentos principales:
1. **Pasaporte vigente** con visa de residencia estampada
2. **Fotocopia simple del pasaporte** (páginas con datos personales y visa)
3. **Certificado de registro** de la Policía de Investigaciones (PDI)
4. **Comprobante de domicilio** (opcional pero recomendado)

### Para visas temporales (trabajo o estudiante):
- Fotocopias de páginas del pasaporte que muestren:
  - Tipo de visa
  - Fotografía
  - Nombres y apellidos
  - Fecha de nacimiento y sexo
  - Sello de ingreso a Chile

## Proceso paso a paso para obtener tu RUT

### Paso 1: Verificar tu situación migratoria
Asegúrate de tener tu visa vigente y registrada en PDI. El registro en PDI es obligatorio y debe realizarse dentro de los 30 días siguientes a tu ingreso al país.

### Paso 2: Agendar hora en el Registro Civil
- Ingresa al sitio web del Registro Civil
- Selecciona "Cédula de Identidad para Extranjeros"
- Elige la oficina más conveniente (solo aparecen las que tienen agenda disponible)
- Reserva tu cita

### Paso 3: Asistir a tu cita
Preséntate puntualmente con todos los documentos. El proceso incluye:
- Verificación de documentos
- Toma de fotografía
- Registro de huellas digitales
- Pago del arancel

### Paso 4: Esperar y retirar tu cédula
- Tiempo de espera: 8 días hábiles⁶
- Retiro en la misma oficina donde realizaste el trámite
- Puedes autorizar a otra persona para retirarla con un poder simple

## Plazos importantes y multas

**ATENCIÓN**: Según la normativa vigente⁷, tienes **30 días** desde que:
- Se estampa tu visa en el pasaporte
- Recibes tu certificado de residencia permanente

Si excedes este plazo:
- Necesitarás autorización especial del Departamento de Extranjería
- Deberás pagar una multa
- El trámite puede demorar más tiempo

## Costos actualizados 2024

Según el Registro Civil⁸:
- **Cédula de identidad para extranjeros**: $4.270 pesos chilenos
- **Renovación**: Mismo valor
- Pago solo en efectivo en algunas oficinas

## Vigencia del RUT para extranjeros

La duración de tu RUT depende de tu tipo de visa⁹:

- **Visa temporal**: Misma duración que la visa
- **Visa sujeta a contrato**: Hasta 2 años
- **Visa de estudiante**: Duración del programa de estudios
- **Residencia permanente**: 5 años

## Nueva modalidad: RUT antes de llegar a Chile

La nueva Ley de Migración permite obtener RUT desde el extranjero¹⁰:

### Requisitos:
1. Solicitar visa consular desde tu país de residencia
2. Justificar el motivo de inmigración a Chile
3. Completar el proceso en el consulado chileno

### Ventajas:
- Llegas a Chile con RUT asignado
- Puedes iniciar trámites laborales más rápido
- Facilita la apertura de cuentas bancarias

## RUT para inversionistas extranjeros

Si vienes a invertir en Chile sin residir en el país¹¹:

### Proceso especial:
1. Designar un representante legal en Chile
2. Presentar documentación de la inversión
3. Tramitar a través del SII
4. RUT asignado será del rango 46-48 millones

### Documentos adicionales:
- Poder notarial para el representante
- Documentos de constitución de sociedad (si aplica)
- Comprobantes de la inversión

## Seguimiento de tu trámite

El Registro Civil ofrece un sistema de tracking¹²:
- Notificaciones por email
- Consulta en línea del estado
- Alertas cuando esté listo para retiro

## Preguntas frecuentes

### ¿Puedo trabajar mientras espero mi RUT?
No es recomendable. El RUT es requisito legal para cualquier contrato laboral formal en Chile.

### ¿Qué pasa si pierdo mi cédula con RUT?
Debes solicitar un duplicado en el Registro Civil, presentando una constancia de Carabineros.

### ¿El RUT y RUN son lo mismo?
Para efectos prácticos, sí. El número es idéntico, solo cambia la denominación según el uso (tributario o civil).

## Recomendaciones finales

1. **No esperes**: Tramita tu RUT apenas tengas tu visa
2. **Guarda copias**: Digitaliza todos tus documentos
3. **Actualiza tu RUT**: Renuévalo antes que tu visa
4. **Mantén tu información al día**: Notifica cambios de domicilio al SII

## Conclusión

Obtener tu RUT como extranjero en Chile es un proceso fundamental que te abrirá las puertas al sistema formal del país. Con la documentación correcta y siguiendo los plazos establecidos, el trámite es sencillo y rápido. La clave está en no dejar pasar los 30 días reglamentarios y tener toda tu documentación en orden.

---

### Referencias

¹ Servicio de Impuestos Internos. "Inscripción al RUT para Extranjeros". Portal SII. 2024.

² Ley 21.325 de Migración y Extranjería. Diario Oficial de Chile. 2022.

³ Ministerio del Trabajo. "RUT para extranjeros en Chile: ¿Quiénes y cómo lo pueden obtener?". Mintrab.cl. 2024.

⁴ SII. "Preguntas Frecuentes - RUT Inicio de Actividades". FAQ oficial. 2024.

⁵ ChileAtiende. "Cédula de identidad para extranjeros (obtención y renovación)". Portal de servicios del Estado. 2024.

⁶ Registro Civil e Identificación. "Plazos de entrega de documentos". Información oficial. 2024.

⁷ Departamento de Extranjería y Migración. "Normativa de plazos y multas". DEM. 2024.

⁸ Registro Civil. "Aranceles vigentes 2024". Tarifario oficial.

⁹ Movilh Migrante. "Obtención de RUT". Guía para la comunidad migrante. 2024.

¹⁰ Ministerio de Relaciones Exteriores. "Visas consulares y RUT anticipado". 2024.

¹¹ Produncan. "Cómo obtener tu RUT de Inversionista Extranjero en Chile". 2024.

¹² Registro Civil. "Sistema de seguimiento en línea". Portal web oficial. 2024.
`,
  "diferencias-rut-run-chile": `
# Diferencias entre RUT y RUN: Lo que todo chileno debe saber

## La confusión más común de Chile

¿Cuántas veces te han pedido tu RUT cuando en realidad querían tu RUN, o viceversa? Esta confusión es tan común que incluso muchos chilenos usan ambos términos indistintamente. Sin embargo, aunque el número sea el mismo, RUT y RUN tienen propósitos y usos específicos que es importante conocer.

Según la información oficial del Registro Civil y el Servicio de Impuestos Internos¹, tanto el RUT como el RUN utilizan el mismo número identificador, pero se aplican en contextos diferentes.

## ¿Qué es el RUN?

El **RUN (Rol Único Nacional)** es tu número de identificación civil en Chile². Este número:

- Te identifica desde tu nacimiento
- Aparece en tu cédula de identidad
- Se usa para trámites civiles y de salud
- Es asignado por el Registro Civil
- No puede ser modificado durante toda tu vida

### Usos principales del RUN:
- Inscripción en el sistema de salud (FONASA/ISAPRE)
- Trámites en el Registro Civil
- Matrimonio y unión civil
- Inscripción de hijos
- Certificados de nacimiento y defunción
- Votaciones y procesos electorales
- Trámites educacionales

## ¿Qué es el RUT?

El **RUT (Rol Único Tributario)** es tu identificación para efectos tributarios y comerciales³. Características:

- Es el mismo número que tu RUN
- Se activa cuando inicias actividades económicas
- Administrado por el Servicio de Impuestos Internos (SII)
- Indispensable para trabajar o emprender

### Usos principales del RUT:
- Contratos de trabajo
- Emisión de boletas y facturas
- Declaración de impuestos
- Apertura de cuentas bancarias comerciales
- Inicio de actividades empresariales
- Compra y venta de bienes raíces
- Inversiones y operaciones financieras

## La clave: mismo número, distinto contexto

La respuesta simple es que **el número es exactamente el mismo**⁴. La diferencia radica en:

| Aspecto | RUN | RUT |
|---------|-----|-----|
| **Institución** | Registro Civil | SII |
| **Propósito** | Identificación civil | Identificación tributaria |
| **Obtención** | Al nacer o nacionalizarse | Al iniciar actividades económicas |
| **Documento** | Cédula de identidad | Certificado del SII |
| **Ámbito** | Civil y salud | Comercial y tributario |

## ¿Por qué existe esta dualidad?

La existencia de dos denominaciones para el mismo número responde a la organización del Estado chileno⁵:

1. **Separación de funciones**: El Registro Civil maneja la identidad civil, mientras que el SII gestiona los asuntos tributarios.

2. **Historia legislativa**: El RUN se creó primero (1973) como identificación universal. El RUT existía desde antes, pero se unificó con el RUN para simplificar.

3. **Practicidad administrativa**: Usar el mismo número evita confusiones y facilita la interoperabilidad entre servicios públicos.

## Casos especiales

### Empresas y organizaciones
Las empresas solo tienen RUT, no RUN⁶, porque:
- No son personas naturales
- Existen solo para fines comerciales
- Su número comienza generalmente con 76, 77 o números más altos

### Extranjeros
Los extranjeros obtienen RUT y RUN simultáneamente al tramitar su cédula de identidad chilena⁷. Para ellos:
- El proceso es unificado
- Ambos números son idénticos
- Se activan al mismo tiempo

### Menores de edad
Los niños chilenos:
- Tienen RUN desde que nacen
- No tienen RUT activo hasta que trabajan o realizan actividades económicas
- El número es el mismo, pero el RUT está "dormido"

## ¿Cuándo usar cada término?

### Usa "RUN" cuando:
- Vayas al consultorio o hospital
- Realices trámites en el Registro Civil
- Te inscribas en el padrón electoral
- Solicites certificados de estudios
- Tramites becas o beneficios sociales

### Usa "RUT" cuando:
- Firmes un contrato de trabajo
- Abras una cuenta corriente
- Compres con factura
- Declares impuestos
- Inicies un negocio

## Mitos y verdades

### Mito 1: "Puedo tener RUN pero no RUT"
**Verdad**: Técnicamente tienes ambos números (son el mismo), pero tu RUT puede no estar "activo" en el SII si nunca has trabajado formalmente.

### Mito 2: "Las empresas tienen RUN"
**Falso**: Las empresas solo tienen RUT. El RUN es exclusivo para personas naturales.

### Mito 3: "Puedo cambiar mi RUT"
**Falso**: Ni el RUT ni el RUN pueden ser modificados⁸. Te acompañan toda la vida.

### Mito 4: "El RUT incluye el dígito verificador, el RUN no"
**Falso**: Ambos incluyen el dígito verificador. Es parte integral del número.

## Formato correcto

Tanto RUT como RUN siguen el mismo formato⁹:
- **Con puntos y guión**: 12.345.678-9
- **Sin formato**: 123456789
- **Siempre incluye**: El dígito verificador (número o K)

## Implicaciones prácticas

### Para trabajadores
- Tu empleador necesita tu "RUT" para el contrato
- FONASA o ISAPRE piden tu "RUN" para afiliación
- Ambos son el mismo número

### Para emprendedores
- El SII te pedirá "RUT" para inicio de actividades
- Los bancos solicitan "RUT" para cuentas empresariales
- Tus clientes necesitan tu "RUT" para facturas

### Para estudiantes
- Las universidades piden "RUN" para matrícula
- Para trabajos part-time necesitas "RUT" activo
- Las becas se tramitan con "RUN"

## El e-RUT: modernización digital

Desde 2020, existe el **e-RUT**¹⁰:
- Versión digital del certificado RUT
- Descargable desde el sitio del SII
- Tiene la misma validez legal
- Incluye código QR de verificación

## Recomendaciones finales

1. **No te compliques**: Cuando te pidan RUT o RUN, da el mismo número
2. **Activa tu RUT**: Si nunca has trabajado, actívalo en el SII
3. **Guarda ambos documentos**: Cédula (RUN) y certificado SII (RUT)
4. **Digitaliza**: Ten copias digitales de ambos documentos

## Conclusión

Aunque RUT y RUN son técnicamente diferentes en su propósito, en la práctica son el mismo número que te identifica en distintos ámbitos de la vida chilena. La clave está en entender el contexto: RUN para lo civil y salud, RUT para lo tributario y comercial. 

Esta dualidad, lejos de ser un problema, es una muestra de cómo Chile ha logrado simplificar la identificación de sus ciudadanos, usando un número único que sirve para múltiples propósitos. Así que la próxima vez que alguien te pregunte la diferencia, ya sabes: mismo número, distinto sombrero.

---

### Referencias

¹ Registro Civil de Chile. "Rol Único Nacional". Información oficial sobre el RUN. 2024.

² ChileAtiende. "Cédula de identidad". Portal de servicios del Estado. 2024.

³ Servicio de Impuestos Internos. "Rol Único Tributario". Definiciones oficiales. 2024.

⁴ Biblioteca del Congreso Nacional. "Ley 17.344 que crea el Rol Único Nacional". 1973.

⁵ Contraloría General de la República. "Dictamen sobre unificación RUN-RUT". 2024.

⁶ SII. "RUT para personas jurídicas". Normativa empresarial. 2024.

⁷ Departamento de Extranjería. "Obtención de RUN/RUT para extranjeros". 2024.

⁸ Registro Civil. "Preguntas frecuentes sobre el RUN". FAQ oficial. 2024.

⁹ SII. "Formato oficial del RUT chileno". Instrucciones técnicas. 2024.

¹⁰ SII. "e-RUT: Cédula RUT electrónica". Servicios en línea. 2024.
`
};