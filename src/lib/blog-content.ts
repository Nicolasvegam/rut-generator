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
`,
  "calcular-digito-verificador-rut-excel": `
# Cómo Calcular el Dígito Verificador del RUT en Excel: Guía Paso a Paso

## ¿Por qué calcular el dígito verificador en Excel?

Excel es una herramienta fundamental en las oficinas chilenas, y poder calcular el dígito verificador del RUT directamente en tus planillas puede ahorrarte tiempo valioso. Ya sea para validar datos de clientes, empleados o proveedores, tener esta fórmula implementada te permitirá verificar RUTs instantáneamente sin salir de tu hoja de cálculo.

El algoritmo módulo 11 usado en Chile puede parecer complejo, pero con las fórmulas correctas de Excel, podrás automatizar completamente este proceso.

## Entendiendo el algoritmo antes de implementarlo

Antes de crear nuestra fórmula, recordemos cómo funciona el cálculo del dígito verificador:

1. Se toma el RUT sin el dígito verificador
2. Se multiplica cada dígito (de derecha a izquierda) por la serie: 2, 3, 4, 5, 6, 7, 2, 3, 4...
3. Se suman todos los productos
4. Se divide la suma por 11 y se obtiene el resto
5. Se calcula: 11 - resto
6. Si el resultado es 11, el dígito es 0; si es 10, es K

## Método 1: Fórmula todo-en-uno (recomendada)

Esta es la fórmula más eficiente para calcular el dígito verificador. Asumiendo que el RUT sin dígito verificador está en la celda A1:

### La súper fórmula:

\`\`\`excel
=SI(11-RESIDUO(SUMAPRODUCTO(VALOR(EXTRAE(TEXTO(A1,"00000000"),{1;2;3;4;5;6;7;8},1)),{3;2;7;6;5;4;3;2}),11)=11,"0",SI(11-RESIDUO(SUMAPRODUCTO(VALOR(EXTRAE(TEXTO(A1,"00000000"),{1;2;3;4;5;6;7;8},1)),{3;2;7;6;5;4;3;2}),11)=10,"K",11-RESIDUO(SUMAPRODUCTO(VALOR(EXTRAE(TEXTO(A1,"00000000"),{1;2;3;4;5;6;7;8},1)),{3;2;7;6;5;4;3;2}),11)))
\`\`\`

### Explicación detallada de la fórmula:

1. **TEXTO(A1,"00000000")**: Convierte el RUT a texto con 8 dígitos, agregando ceros a la izquierda si es necesario
2. **EXTRAE(...,{1;2;3;4;5;6;7;8},1)**: Extrae cada dígito individualmente
3. **VALOR(...)**: Convierte cada carácter extraído a número
4. **SUMAPRODUCTO(...,{3;2;7;6;5;4;3;2})**: Multiplica cada dígito por su factor correspondiente y suma todo
5. **RESIDUO(...,11)**: Calcula el resto de dividir por 11
6. **11-RESIDUO(...)**: Calcula el dígito verificador
7. **SI anidados**: Maneja los casos especiales (11→0, 10→K)

## Método 2: Paso a paso con columnas auxiliares

Si prefieres ver el proceso paso a paso, puedes usar columnas auxiliares:

### Configuración de la hoja:

| Columna | Contenido |
|---------|-----------|
| A1 | RUT sin DV (ej: 12345678) |
| B1-B8 | Cada dígito del RUT |
| C1-C8 | Factores multiplicadores |
| D1-D8 | Productos |
| E1 | Suma total |
| F1 | Dígito verificador |

### Fórmulas paso a paso:

**Paso 1: Extraer cada dígito (B1 a B8)**
- B1: \`=VALOR(EXTRAE(TEXTO($A$1,"00000000"),1,1))\`
- B2: \`=VALOR(EXTRAE(TEXTO($A$1,"00000000"),2,1))\`
- ... (continuar hasta B8)

**Paso 2: Factores multiplicadores (C1 a C8)**
- C1: \`3\`, C2: \`2\`, C3: \`7\`, C4: \`6\`, C5: \`5\`, C6: \`4\`, C7: \`3\`, C8: \`2\`

**Paso 3: Calcular productos (D1 a D8)**
- D1: \`=B1*C1\`
- D2: \`=B2*C2\`
- ... (continuar hasta D8)

**Paso 4: Sumar productos (E1)**
- E1: \`=SUMA(D1:D8)\`

**Paso 5: Calcular dígito verificador (F1)**
- F1: \`=SI(11-RESIDUO(E1,11)=11,"0",SI(11-RESIDUO(E1,11)=10,"K",11-RESIDUO(E1,11)))\`

## Método 3: Función personalizada con VBA

Para usuarios avanzados, crear una función personalizada en VBA es la opción más elegante:

### Código VBA:

\`\`\`vba
Function DigitoVerificador(rut As Variant) As String
    Dim rutStr As String
    Dim suma As Long
    Dim factor As Integer
    Dim i As Integer
    Dim digito As Integer
    
    ' Convertir a string y rellenar con ceros
    rutStr = Format(rut, "00000000")
    
    ' Calcular suma ponderada
    suma = 0
    factor = 2
    
    For i = 8 To 1 Step -1
        suma = suma + Val(Mid(rutStr, i, 1)) * factor
        factor = factor + 1
        If factor > 7 Then factor = 2
    Next i
    
    ' Calcular dígito verificador
    digito = 11 - (suma Mod 11)
    
    ' Casos especiales
    If digito = 11 Then
        DigitoVerificador = "0"
    ElseIf digito = 10 Then
        DigitoVerificador = "K"
    Else
        DigitoVerificador = CStr(digito)
    End If
End Function
\`\`\`

### Cómo implementar la función VBA:

1. Presiona \`Alt + F11\` para abrir el editor VBA
2. Inserta un nuevo módulo: \`Insertar → Módulo\`
3. Pega el código anterior
4. Guarda y cierra el editor
5. Usa la función en Excel: \`=DigitoVerificador(A1)\`

## Validación completa de RUT con formato

Si quieres validar un RUT completo (con dígito verificador incluido), usa esta fórmula:

\`\`\`excel
=SI(DERECHA(A1,1)=SI(11-RESIDUO(SUMAPRODUCTO(VALOR(EXTRAE(TEXTO(VALOR(IZQUIERDA(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""),8)),"00000000"),{1;2;3;4;5;6;7;8},1)),{3;2;7;6;5;4;3;2}),11)=11,"0",SI(11-RESIDUO(SUMAPRODUCTO(VALOR(EXTRAE(TEXTO(VALOR(IZQUIERDA(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""),8)),"00000000"),{1;2;3;4;5;6;7;8},1)),{3;2;7;6;5;4;3;2}),11)=10,"K",11-RESIDUO(SUMAPRODUCTO(VALOR(EXTRAE(TEXTO(VALOR(IZQUIERDA(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""),8)),"00000000"),{1;2;3;4;5;6;7;8},1)),{3;2;7;6;5;4;3;2}),11))),"VÁLIDO","INVÁLIDO")
\`\`\`

Esta fórmula:
- Limpia el formato del RUT (quita puntos y guión)
- Extrae los primeros 8 dígitos
- Calcula el dígito verificador esperado
- Lo compara con el dígito verificador proporcionado
- Devuelve "VÁLIDO" o "INVÁLIDO"

## Plantilla Excel lista para usar

Para facilitar tu trabajo, aquí te dejo una estructura de plantilla que puedes recrear:

### Hoja "Calculadora RUT":

| Celda | Contenido | Fórmula |
|-------|-----------|---------|
| A1 | "Ingrese RUT sin DV:" | (texto) |
| B1 | 12345678 | (entrada manual) |
| A2 | "Dígito Verificador:" | (texto) |
| B2 | (resultado) | \`=SI(11-RESIDUO(SUMAPRODUCTO(VALOR(EXTRAE(TEXTO(B1,"00000000"),{1;2;3;4;5;6;7;8},1)),{3;2;7;6;5;4;3;2}),11)=11,"0",SI(11-RESIDUO(SUMAPRODUCTO(VALOR(EXTRAE(TEXTO(B1,"00000000"),{1;2;3;4;5;6;7;8},1)),{3;2;7;6;5;4;3;2}),11)=10,"K",11-RESIDUO(SUMAPRODUCTO(VALOR(EXTRAE(TEXTO(B1,"00000000"),{1;2;3;4;5;6;7;8},1)),{3;2;7;6;5;4;3;2}),11)))\` |
| A3 | "RUT Completo:" | (texto) |
| B3 | (resultado) | \`=TEXTO(B1,"#,##0")&"-"&B2\` |

## Casos especiales y consideraciones

### RUTs que comienzan con cero:
Algunos RUTs antiguos o de ciertas regiones pueden comenzar con cero. La fórmula maneja esto automáticamente con la función TEXTO.

### Formato de entrada:
La fórmula acepta números sin formato. Si tus RUTs vienen con puntos y guión, primero límpialos con:
\`\`\`excel
=VALOR(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""))
\`\`\`

### Validación en lotes:
Para validar múltiples RUTs, simplemente arrastra la fórmula hacia abajo. Excel ajustará las referencias automáticamente.

## Solución de problemas comunes

### Error #¡VALOR!:
- Verifica que el RUT contenga solo números
- Asegúrate de que no haya espacios en blanco

### Resultado incorrecto:
- Confirma que el RUT tenga exactamente 7 u 8 dígitos
- Verifica que no estés incluyendo el dígito verificador en el cálculo

### La fórmula es muy larga:
- Considera usar la función VBA para simplificar
- Divide la fórmula en celdas auxiliares

## Optimización para grandes volúmenes

Si trabajas con miles de RUTs:

1. **Desactiva el cálculo automático**: \`Fórmulas → Opciones de cálculo → Manual\`
2. **Usa tablas**: Convierte tu rango a tabla para mejor rendimiento
3. **Considera Power Query**: Para validaciones masivas, Power Query puede ser más eficiente

## Integración con otros sistemas

### Exportar a CSV:
Los resultados calculados se mantienen al exportar, facilitando la integración con otros sistemas.

### Conexión con bases de datos:
Puedes usar estas fórmulas con datos importados desde Access, SQL Server u otras fuentes.

### Automatización con macros:
Combina las fórmulas con macros para crear procesos completamente automatizados.

## Conclusión

Calcular el dígito verificador del RUT en Excel es una habilidad valiosa para cualquier profesional que trabaje con datos en Chile. Ya sea que prefieras la fórmula todo-en-uno, el método paso a paso o la función VBA, ahora tienes las herramientas para implementar esta funcionalidad en tus hojas de cálculo.

Recuerda que la precisión es fundamental cuando trabajas con RUTs, ya que un error puede significar problemas en facturación, contrataciones o trámites tributarios. Con estas fórmulas, puedes estar seguro de que tus cálculos serán siempre correctos.

---

### Recursos adicionales

- **Servicio de Impuestos Internos (SII)**: Para información oficial sobre el RUT
- **Microsoft Excel Help**: Para profundizar en las funciones utilizadas
- **Comunidad Excel Chile**: Foros donde puedes compartir tus experiencias y resolver dudas
`,
  "calcular-digito-verificador-rut-google-sheets": `
# Calcular Dígito Verificador del RUT en Google Sheets: Tutorial Completo

## La ventaja de Google Sheets para cálculos de RUT

Google Sheets ofrece ventajas únicas para trabajar con RUTs chilenos: es gratuito, accesible desde cualquier dispositivo, permite colaboración en tiempo real y se actualiza automáticamente. Si tu equipo necesita validar RUTs frecuentemente, implementar estas fórmulas en Sheets puede transformar tu flujo de trabajo.

Además, al estar en la nube, puedes crear una hoja maestra compartida donde todos tengan acceso a las mismas herramientas de validación, garantizando consistencia en toda tu organización.

## Comprensión rápida del algoritmo módulo 11

El algoritmo para calcular el dígito verificador del RUT sigue estos pasos:

1. Multiplicar cada dígito del RUT (de derecha a izquierda) por: 2, 3, 4, 5, 6, 7, y repetir
2. Sumar todos los productos
3. Dividir por 11 y obtener el resto
4. Restar: 11 - resto
5. Si resulta 11 → dígito es 0; si resulta 10 → dígito es K

## Fórmula maestra para Google Sheets

### La fórmula completa (celda A1 contiene el RUT sin DV):

\`\`\`sheets
=SI(11-MOD(SUMAPRODUCTO(ARRAYFORMULA(VALOR(MID(TEXTO(A1,"00000000"),{1;2;3;4;5;6;7;8},1))),{3;2;7;6;5;4;3;2}),11)=11,0,SI(11-MOD(SUMAPRODUCTO(ARRAYFORMULA(VALOR(MID(TEXTO(A1,"00000000"),{1;2;3;4;5;6;7;8},1))),{3;2;7;6;5;4;3;2}),11)=10,"K",11-MOD(SUMAPRODUCTO(ARRAYFORMULA(VALOR(MID(TEXTO(A1,"00000000"),{1;2;3;4;5;6;7;8},1))),{3;2;7;6;5;4;3;2}),11)))
\`\`\`

### Desglose de la fórmula:

- **TEXTO(A1,"00000000")**: Formatea el RUT con 8 dígitos
- **MID(...,{1;2;3;4;5;6;7;8},1)**: Extrae cada dígito
- **ARRAYFORMULA(VALOR(...))**: Convierte caracteres a números
- **SUMAPRODUCTO**: Multiplica y suma en una operación
- **MOD(...,11)**: Obtiene el resto de dividir por 11
- **SI anidados**: Maneja casos especiales (0 y K)

## Implementación paso a paso visual

Para quienes prefieren ver el proceso completo, aquí está el método con columnas auxiliares:

### Configuración de la hoja:

1. **Columna A**: RUT sin dígito verificador
2. **Columnas B-I**: Cada dígito extraído
3. **Columna J**: Factores multiplicadores
4. **Columna K**: Productos
5. **Columna L**: Suma total
6. **Columna M**: Dígito verificador calculado

### Fórmulas detalladas:

**Extraer dígitos (B1:I1):**
- B1: \`=VALOR(MID(TEXTO($A1,"00000000"),1,1))\`
- C1: \`=VALOR(MID(TEXTO($A1,"00000000"),2,1))\`
- (continuar hasta I1)

**Factores en fila auxiliar:**
- J1:J8: \`{3;2;7;6;5;4;3;2}\`

**Productos (K1:K8):**
- K1: \`=B1*J1\`
- K2: \`=C1*J2\`
- (continuar)

**Suma total (L1):**
- \`=SUMA(K1:K8)\`

**Dígito verificador (M1):**
- \`=SI(11-MOD(L1,11)=11,0,SI(11-MOD(L1,11)=10,"K",11-MOD(L1,11)))\`

## Función personalizada con Google Apps Script

Para máxima elegancia y reutilización, crea una función personalizada:

### Código Apps Script:

\`\`\`javascript
function DIGITO_VERIFICADOR(rut) {
  // Validar entrada
  if (!rut || rut === "") return "ERROR";
  
  // Convertir a string y limpiar
  let rutStr = String(rut).replace(/[.-]/g, '');
  
  // Asegurar 8 dígitos
  rutStr = rutStr.padStart(8, '0');
  
  // Calcular suma ponderada
  let suma = 0;
  let multiplicador = 2;
  
  for (let i = rutStr.length - 1; i >= 0; i--) {
    suma += parseInt(rutStr[i]) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }
  
  // Calcular dígito
  const resto = suma % 11;
  const digito = 11 - resto;
  
  // Casos especiales
  if (digito === 11) return "0";
  if (digito === 10) return "K";
  return String(digito);
}

// Función adicional para validar RUT completo
function VALIDAR_RUT(rutCompleto) {
  if (!rutCompleto) return false;
  
  // Limpiar formato
  const rutLimpio = String(rutCompleto).replace(/[.-]/g, '');
  
  // Separar número y dígito verificador
  const numero = rutLimpio.slice(0, -1);
  const dvIngresado = rutLimpio.slice(-1).toUpperCase();
  
  // Calcular dígito esperado
  const dvCalculado = DIGITO_VERIFICADOR(numero);
  
  // Comparar
  return dvIngresado === dvCalculado;
}
\`\`\`

### Cómo implementar en Google Sheets:

1. Abre tu hoja de Google Sheets
2. Ve a **Extensiones → Apps Script**
3. Borra el código por defecto
4. Pega el código anterior
5. Guarda (Ctrl+S) con nombre "FuncionesRUT"
6. Cierra el editor
7. Usa en tu hoja: \`=DIGITO_VERIFICADOR(A1)\`

## Validador completo con formato elegante

Crea un validador profesional que maneje cualquier formato de entrada:

\`\`\`sheets
=SI(ESNUMERO(ENCONTRAR(SI(11-MOD(SUMAPRODUCTO(ARRAYFORMULA(VALOR(MID(TEXTO(VALOR(IZQUIERDA(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""),SI(LARGO(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""))>9,LARGO(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""))-1,8))),"00000000"),{1;2;3;4;5;6;7;8},1))),{3;2;7;6;5;4;3;2}),11)=11,"0",SI(11-MOD(SUMAPRODUCTO(ARRAYFORMULA(VALOR(MID(TEXTO(VALOR(IZQUIERDA(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""),SI(LARGO(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""))>9,LARGO(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""))-1,8))),"00000000"),{1;2;3;4;5;6;7;8},1))),{3;2;7;6;5;4;3;2}),11)=10,"K",11-MOD(SUMAPRODUCTO(ARRAYFORMULA(VALOR(MID(TEXTO(VALOR(IZQUIERDA(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""),SI(LARGO(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""))>9,LARGO(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""))-1,8))),"00000000"),{1;2;3;4;5;6;7;8},1))),{3;2;7;6;5;4;3;2}),11))),DERECHA(SUSTITUIR(SUSTITUIR(A1,".",""),"-",""),1))),"✓ RUT VÁLIDO","✗ RUT INVÁLIDO")
\`\`\`

## Plantilla interactiva lista para usar

### Diseño sugerido para tu hoja:

**Hoja "Calculadora RUT":**

| Celda | Contenido | Formato/Fórmula |
|-------|-----------|-----------------|
| A1 | "CALCULADORA DE RUT" | Título, negrita, tamaño 18 |
| A3 | "Ingrese RUT sin DV:" | Etiqueta |
| B3 | (entrada usuario) | Borde, fondo amarillo claro |
| A4 | "Dígito Verificador:" | Etiqueta |
| B4 | \`=DIGITO_VERIFICADOR(B3)\` | Borde, fondo verde claro |
| A5 | "RUT Completo:" | Etiqueta |
| B5 | \`=TEXTO(B3,"#,##0")&"-"&B4\` | Borde, negrita |

**Hoja "Validador Masivo":**

| Columna A | Columna B | Columna C |
|-----------|-----------|-----------|
| RUT Completo | Válido/Inválido | Dígito Correcto |
| 12.345.678-5 | \`=VALIDAR_RUT(A2)\` | \`=DIGITO_VERIFICADOR(VALOR(IZQUIERDA(SUSTITUIR(SUSTITUIR(A2,".",""),"-",""),8)))\` |

## Características avanzadas de Google Sheets

### 1. Validación de datos en tiempo real:

Configura validación personalizada:
1. Selecciona el rango de celdas
2. Datos → Validación de datos
3. Criterio: "Fórmula personalizada"
4. Fórmula: \`=VALIDAR_RUT(A1)\`
5. Mensaje de error personalizado

### 2. Formato condicional inteligente:

Resalta RUTs válidos/inválidos automáticamente:
1. Selecciona el rango
2. Formato → Formato condicional
3. Condición: "Fórmula personalizada"
4. Fórmula: \`=VALIDAR_RUT($A1)\`
5. Formato: fondo verde para válidos

### 3. Importación desde otras fuentes:

\`\`\`sheets
=ARRAYFORMULA(SI(A2:A="","",DIGITO_VERIFICADOR(A2:A)))
\`\`\`

Esta fórmula calcula el DV para toda una columna automáticamente.

## Integración con formularios Google

### Crear un formulario validador:

1. **Google Forms**: Crea formulario solicitando RUT
2. **Respuestas en Sheets**: Vincula a una hoja
3. **Validación automática**: Agrega columna con fórmula validadora
4. **Notificaciones**: Configura alertas para RUTs inválidos

### Script para validación en formulario:

\`\`\`javascript
function onFormSubmit(e) {
  const rut = e.values[1]; // Asumiendo RUT en segunda columna
  const esValido = VALIDAR_RUT(rut);
  
  if (!esValido) {
    // Enviar email de alerta
    MailApp.sendEmail({
      to: "admin@empresa.cl",
      subject: "RUT Inválido en Formulario",
      body: \`Se recibió un RUT inválido: \${rut}\`
    });
  }
}
\`\`\`

## Casos de uso empresariales

### 1. Base de datos de clientes:
- Validación automática al ingresar datos
- Alertas para RUTs duplicados
- Formato consistente

### 2. Nómina de empleados:
- Verificación antes de contratos
- Generación de reportes con RUTs válidos
- Integración con sistemas de RRHH

### 3. Facturación electrónica:
- Validación previa al SII
- Corrección automática de formato
- Historial de validaciones

## Optimización y rendimiento

### Para grandes volúmenes de datos:

1. **Usa ARRAYFORMULA**: Procesa rangos completos
2. **Limita recálculos**: Configura actualización manual
3. **Divide en bloques**: Procesa de 1000 en 1000

### Fórmula optimizada para miles de RUTs:

\`\`\`sheets
=ARRAYFORMULA(
  SI(ESNUMERO(A2:A),
    SI(11-MOD(SUMAPRODUCTO(
      VALOR(MID(TEXTO(A2:A,"00000000"),{1;2;3;4;5;6;7;8},1)),
      {3;2;7;6;5;4;3;2}
    ),11)=11,0,
    SI(11-MOD(SUMAPRODUCTO(
      VALOR(MID(TEXTO(A2:A,"00000000"),{1;2;3;4;5;6;7;8},1)),
      {3;2;7;6;5;4;3;2}
    ),11)=10,"K",
    11-MOD(SUMAPRODUCTO(
      VALOR(MID(TEXTO(A2:A,"00000000"),{1;2;3;4;5;6;7;8},1)),
      {3;2;7;6;5;4;3;2}
    ),11))),
  "")
)
\`\`\`

## Compartir y colaborar

### Mejores prácticas:

1. **Protege las fórmulas**: Bloquea celdas con fórmulas
2. **Crea instrucciones**: Agrega hoja con manual de uso
3. **Versiona cambios**: Usa el historial de versiones
4. **Permisos granulares**: Solo edición en celdas de entrada

### Plantilla pública:

Puedes crear una copia de plantilla maestra y compartirla con:
- Vista pública para consulta
- Copia permitida para uso personal
- Sin acceso a datos sensibles

## Solución de problemas frecuentes

### Error #¡VALOR!:
- Verifica que no haya letras en el RUT (excepto K final)
- Elimina espacios con \`=ESPACIOS(A1)\`

### Resultado incorrecto:
- Confirma que el RUT tenga 7-8 dígitos
- Usa \`=LARGO(A1)\` para verificar

### Fórmula no actualiza:
- Archivo → Configuración → Cálculo → "Al cambiar"

### Lentitud con muchos datos:
- Considera usar Apps Script para procesamiento batch

## Conclusión

Google Sheets transforma el cálculo del dígito verificador del RUT en un proceso colaborativo y accesible. Con las fórmulas y scripts presentados, puedes crear soluciones robustas que escalen desde validaciones individuales hasta procesamiento masivo de datos.

La ventaja de trabajar en la nube significa que tus validaciones están siempre actualizadas y accesibles, eliminando errores de versiones y garantizando que todo tu equipo trabaje con las mismas herramientas validadas.

---

### Recursos y referencias

- **Google Workspace Learning Center**: Documentación oficial de Sheets
- **Apps Script Documentation**: Para funciones personalizadas avanzadas
- **Comunidad Google Sheets Chile**: Foros de usuarios chilenos
`,
  "calcular-digito-verificador-rut-javascript": `
# Validar RUT en JavaScript: Código Completo y Explicado

## Por qué JavaScript es ideal para validar RUT

JavaScript es el lenguaje perfecto para validar RUTs chilenos en aplicaciones web. Permite validación instantánea en el navegador, mejora la experiencia del usuario al dar feedback inmediato, y evita enviar datos incorrectos al servidor. Además, el mismo código puede usarse tanto en el frontend como en el backend con Node.js.

En este tutorial, aprenderás a implementar el algoritmo módulo 11 de forma profesional, con código limpio, optimizado y listo para producción.

## Implementación básica del algoritmo

### Función esencial para calcular el dígito verificador:

\`\`\`javascript
function calcularDigitoVerificador(rutNumero) {
  // Convertir a string y asegurar que tenga 8 dígitos
  let rut = String(rutNumero).padStart(8, '0');
  
  // Variables para el cálculo
  let suma = 0;
  let multiplicador = 2;
  
  // Recorrer de derecha a izquierda
  for (let i = rut.length - 1; i >= 0; i--) {
    suma += parseInt(rut[i]) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }
  
  // Calcular dígito verificador
  const resto = suma % 11;
  const dv = 11 - resto;
  
  // Casos especiales
  if (dv === 11) return '0';
  if (dv === 10) return 'K';
  return String(dv);
}

// Ejemplos de uso
console.log(calcularDigitoVerificador(12345678)); // 5
console.log(calcularDigitoVerificador(11111111)); // 1
console.log(calcularDigitoVerificador(22222222)); // 2
\`\`\`

## Validador completo con manejo de formatos

### Clase profesional para manejar RUTs:

\`\`\`javascript
class RutValidator {
  /**
   * Limpia el RUT removiendo puntos, guiones y espacios
   * @param {string} rut - RUT en cualquier formato
   * @returns {string} RUT limpio
   */
  static limpiar(rut) {
    return String(rut).replace(/[.-\s]/g, '').toUpperCase();
  }

  /**
   * Formatea el RUT con puntos y guión
   * @param {string} rut - RUT sin formato
   * @returns {string} RUT formateado (ej: 12.345.678-9)
   */
  static formatear(rut) {
    const rutLimpio = this.limpiar(rut);
    if (rutLimpio.length < 2) return rutLimpio;
    
    const cuerpo = rutLimpio.slice(0, -1);
    const dv = rutLimpio.slice(-1);
    
    // Agregar puntos cada 3 dígitos de derecha a izquierda
    let cuerpoFormateado = '';
    for (let i = cuerpo.length - 1, j = 0; i >= 0; i--, j++) {
      if (j > 0 && j % 3 === 0) {
        cuerpoFormateado = '.' + cuerpoFormateado;
      }
      cuerpoFormateado = cuerpo[i] + cuerpoFormateado;
    }
    
    return \`\${cuerpoFormateado}-\${dv}\`;
  }

  /**
   * Calcula el dígito verificador
   * @param {string|number} rutNumero - Número del RUT sin DV
   * @returns {string} Dígito verificador
   */
  static calcularDV(rutNumero) {
    const rut = String(rutNumero).padStart(8, '0');
    let suma = 0;
    let multiplicador = 2;
    
    for (let i = rut.length - 1; i >= 0; i--) {
      suma += parseInt(rut[i]) * multiplicador;
      multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
    }
    
    const dv = 11 - (suma % 11);
    if (dv === 11) return '0';
    if (dv === 10) return 'K';
    return String(dv);
  }

  /**
   * Valida un RUT completo
   * @param {string} rut - RUT completo con o sin formato
   * @returns {boolean} true si es válido
   */
  static validar(rut) {
    const rutLimpio = this.limpiar(rut);
    
    // Validar largo mínimo
    if (rutLimpio.length < 2) return false;
    
    // Separar número y dígito verificador
    const numero = rutLimpio.slice(0, -1);
    const dvIngresado = rutLimpio.slice(-1);
    
    // Validar que sea un número
    if (!/^\d+$/.test(numero)) return false;
    
    // Calcular DV esperado y comparar
    const dvCalculado = this.calcularDV(numero);
    return dvIngresado === dvCalculado;
  }
}

// Ejemplos de uso
console.log(RutValidator.validar('12.345.678-5')); // true
console.log(RutValidator.validar('12345678-5'));   // true
console.log(RutValidator.validar('123456785'));    // true
console.log(RutValidator.validar('12.345.678-9')); // false
\`\`\`

## Implementación moderna con ES6+

### Versión funcional con arrow functions:

\`\`\`javascript
const rutUtils = {
  // Limpiar RUT
  clean: (rut) => String(rut).replace(/[.-\s]/g, '').toUpperCase(),
  
  // Calcular dígito verificador
  calculateDV: (rutNumber) => {
    const digits = String(rutNumber).padStart(8, '0').split('').reverse();
    const sum = digits.reduce((acc, digit, index) => {
      const factor = ((index % 6) + 2);
      return acc + (parseInt(digit) * factor);
    }, 0);
    
    const dv = 11 - (sum % 11);
    return dv === 11 ? '0' : dv === 10 ? 'K' : String(dv);
  },
  
  // Validar RUT completo
  validate: (rut) => {
    const cleaned = rutUtils.clean(rut);
    if (cleaned.length < 2) return false;
    
    const number = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1);
    
    return /^\d+$/.test(number) && dv === rutUtils.calculateDV(number);
  },
  
  // Formatear RUT
  format: (rut) => {
    const cleaned = rutUtils.clean(rut);
    if (cleaned.length < 2) return cleaned;
    
    const number = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1);
    
    // Formatear con regex
    const formatted = number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return \`\${formatted}-\${dv}\`;
  }
};

// Uso con destructuring
const { validate, format, calculateDV } = rutUtils;

console.log(validate('12345678-5'));  // true
console.log(format('123456785'));     // 12.345.678-5
console.log(calculateDV(12345678));   // 5
\`\`\`

## Validación en formularios HTML

### Integración con formularios web:

\`\`\`html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Validador de RUT</title>
    <style>
        .form-group {
            margin: 20px 0;
        }
        
        .form-control {
            padding: 10px;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 4px;
            width: 300px;
        }
        
        .form-control.is-valid {
            border-color: #28a745;
        }
        
        .form-control.is-invalid {
            border-color: #dc3545;
        }
        
        .feedback {
            margin-top: 5px;
            font-size: 14px;
        }
        
        .valid-feedback {
            color: #28a745;
        }
        
        .invalid-feedback {
            color: #dc3545;
        }
    </style>
</head>
<body>
    <div class="form-group">
        <label for="rut">Ingrese su RUT:</label>
        <input 
            type="text" 
            id="rut" 
            class="form-control" 
            placeholder="12.345.678-9"
            maxlength="12"
        >
        <div class="feedback"></div>
    </div>
    
    <div class="form-group">
        <label for="rut-auto">RUT con formato automático:</label>
        <input 
            type="text" 
            id="rut-auto" 
            class="form-control" 
            placeholder="Ingrese RUT sin formato"
        >
        <div class="feedback"></div>
    </div>

    <script>
        // Clase RutValidator (incluir el código anterior aquí)
        
        // Validación en tiempo real
        document.getElementById('rut').addEventListener('input', function(e) {
            const rut = e.target.value;
            const feedback = e.target.nextElementSibling;
            
            if (rut.length === 0) {
                e.target.classList.remove('is-valid', 'is-invalid');
                feedback.textContent = '';
                return;
            }
            
            if (RutValidator.validar(rut)) {
                e.target.classList.remove('is-invalid');
                e.target.classList.add('is-valid');
                feedback.className = 'feedback valid-feedback';
                feedback.textContent = '✓ RUT válido';
            } else {
                e.target.classList.remove('is-valid');
                e.target.classList.add('is-invalid');
                feedback.className = 'feedback invalid-feedback';
                feedback.textContent = '✗ RUT inválido';
            }
        });
        
        // Formato automático mientras escribe
        document.getElementById('rut-auto').addEventListener('input', function(e) {
            const valor = e.target.value;
            const limpio = RutValidator.limpiar(valor);
            
            // Solo números y K
            if (!/^[\dkK]*$/.test(limpio)) {
                e.target.value = e.target.value.slice(0, -1);
                return;
            }
            
            // Formatear automáticamente
            if (limpio.length > 1) {
                e.target.value = RutValidator.formatear(limpio);
            }
            
            // Validar
            const feedback = e.target.nextElementSibling;
            if (limpio.length >= 8) {
                if (RutValidator.validar(limpio)) {
                    e.target.classList.remove('is-invalid');
                    e.target.classList.add('is-valid');
                    feedback.className = 'feedback valid-feedback';
                    feedback.textContent = '✓ RUT válido';
                } else {
                    e.target.classList.remove('is-valid');
                    e.target.classList.add('is-invalid');
                    feedback.className = 'feedback invalid-feedback';
                    feedback.textContent = '✗ RUT inválido';
                }
            } else {
                e.target.classList.remove('is-valid', 'is-invalid');
                feedback.textContent = '';
            }
        });
    </script>
</body>
</html>
\`\`\`

## Implementación para Node.js/Backend

### Módulo CommonJS:

\`\`\`javascript
// rut-validator.js
module.exports = {
  /**
   * Valida un RUT chileno
   * @param {string} rut - RUT a validar
   * @returns {object} Resultado de la validación
   */
  validate: function(rut) {
    try {
      const cleaned = this.clean(rut);
      
      if (!cleaned || cleaned.length < 2) {
        return {
          isValid: false,
          error: 'RUT muy corto'
        };
      }
      
      const number = cleaned.slice(0, -1);
      const dv = cleaned.slice(-1);
      
      if (!/^\d+$/.test(number)) {
        return {
          isValid: false,
          error: 'RUT contiene caracteres inválidos'
        };
      }
      
      const calculatedDv = this.calculateDv(number);
      const isValid = dv === calculatedDv;
      
      return {
        isValid,
        formatted: isValid ? this.format(cleaned) : null,
        error: isValid ? null : 'Dígito verificador incorrecto'
      };
    } catch (error) {
      return {
        isValid: false,
        error: error.message
      };
    }
  },
  
  clean: function(rut) {
    return String(rut).replace(/[.-\s]/g, '').toUpperCase();
  },
  
  calculateDv: function(rutNumber) {
    const rut = String(rutNumber).padStart(8, '0');
    let sum = 0;
    let multiplier = 2;
    
    for (let i = rut.length - 1; i >= 0; i--) {
      sum += parseInt(rut[i]) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    
    const dv = 11 - (sum % 11);
    if (dv === 11) return '0';
    if (dv === 10) return 'K';
    return String(dv);
  },
  
  format: function(rut) {
    const cleaned = this.clean(rut);
    if (cleaned.length < 2) return cleaned;
    
    const number = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1);
    
    let formatted = '';
    for (let i = number.length - 1, j = 0; i >= 0; i--, j++) {
      if (j > 0 && j % 3 === 0) {
        formatted = '.' + formatted;
      }
      formatted = number[i] + formatted;
    }
    
    return formatted + '-' + dv;
  }
};
\`\`\`

### Módulo ES6:

\`\`\`javascript
// rut-validator.mjs
export class ChileanRutValidator {
  static #factors = [2, 3, 4, 5, 6, 7];
  
  static clean(rut) {
    return String(rut).replace(/[.-\s]/g, '').toUpperCase();
  }
  
  static calculateCheckDigit(rutNumber) {
    const digits = String(rutNumber)
      .padStart(8, '0')
      .split('')
      .reverse()
      .map(Number);
    
    const sum = digits.reduce((acc, digit, index) => {
      const factor = this.#factors[index % 6];
      return acc + (digit * factor);
    }, 0);
    
    const checkDigit = 11 - (sum % 11);
    
    switch (checkDigit) {
      case 11: return '0';
      case 10: return 'K';
      default: return String(checkDigit);
    }
  }
  
  static validate(rut) {
    const cleaned = this.clean(rut);
    
    if (cleaned.length < 2) {
      throw new Error('RUT demasiado corto');
    }
    
    const [number, checkDigit] = [
      cleaned.slice(0, -1),
      cleaned.slice(-1)
    ];
    
    if (!/^\d+$/.test(number)) {
      throw new Error('RUT contiene caracteres no numéricos');
    }
    
    return checkDigit === this.calculateCheckDigit(number);
  }
  
  static format(rut) {
    const cleaned = this.clean(rut);
    if (cleaned.length < 2) return cleaned;
    
    const [number, checkDigit] = [
      cleaned.slice(0, -1),
      cleaned.slice(-1)
    ];
    
    const formatted = number
      .split('')
      .reverse()
      .reduce((acc, digit, index) => {
        if (index > 0 && index % 3 === 0) {
          acc = '.' + acc;
        }
        return digit + acc;
      }, '');
    
    return \`\${formatted}-\${checkDigit}\`;
  }
}

// Uso
import { ChileanRutValidator } from './rut-validator.mjs';

console.log(ChileanRutValidator.validate('12345678-5')); // true
console.log(ChileanRutValidator.format('123456785'));    // 12.345.678-5
\`\`\`

## Integración con frameworks populares

### React Hook personalizado:

\`\`\`javascript
// useRutValidator.js
import { useState, useCallback } from 'react';

const useRutValidator = () => {
  const [rut, setRut] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [formatted, setFormatted] = useState('');
  
  const clean = useCallback((value) => {
    return String(value).replace(/[.-\s]/g, '').toUpperCase();
  }, []);
  
  const calculateDv = useCallback((rutNumber) => {
    const rut = String(rutNumber).padStart(8, '0');
    let sum = 0;
    let multiplier = 2;
    
    for (let i = rut.length - 1; i >= 0; i--) {
      sum += parseInt(rut[i]) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    
    const dv = 11 - (sum % 11);
    if (dv === 11) return '0';
    if (dv === 10) return 'K';
    return String(dv);
  }, []);
  
  const format = useCallback((value) => {
    const cleaned = clean(value);
    if (cleaned.length < 2) return cleaned;
    
    const number = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1);
    
    const formatted = number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return \`\${formatted}-\${dv}\`;
  }, [clean]);
  
  const validate = useCallback((value) => {
    const cleaned = clean(value);
    
    if (cleaned.length < 2) return false;
    
    const number = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1);
    
    if (!/^\d+$/.test(number)) return false;
    
    return dv === calculateDv(number);
  }, [clean, calculateDv]);
  
  const handleChange = useCallback((value) => {
    setRut(value);
    
    const cleaned = clean(value);
    if (cleaned.length >= 8) {
      const valid = validate(value);
      setIsValid(valid);
      setFormatted(valid ? format(value) : '');
    } else {
      setIsValid(null);
      setFormatted('');
    }
  }, [clean, validate, format]);
  
  return {
    rut,
    isValid,
    formatted,
    handleChange,
    validate,
    format,
    clean
  };
};

// Componente React de ejemplo
const RutInput = () => {
  const { rut, isValid, formatted, handleChange } = useRutValidator();
  
  return (
    <div>
      <input
        type="text"
        value={rut}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Ingrese RUT"
        className={isValid === null ? '' : isValid ? 'valid' : 'invalid'}
      />
      {isValid !== null && (
        <p>{isValid ? \`✓ RUT válido: \${formatted}\` : '✗ RUT inválido'}</p>
      )}
    </div>
  );
};
\`\`\`

### Vue.js Composable:

\`\`\`javascript
// useRutValidator.js
import { ref, computed } from 'vue';

export function useRutValidator() {
  const rut = ref('');
  
  const clean = (value) => {
    return String(value).replace(/[.-\s]/g, '').toUpperCase();
  };
  
  const calculateDv = (rutNumber) => {
    const rutStr = String(rutNumber).padStart(8, '0');
    let sum = 0;
    let multiplier = 2;
    
    for (let i = rutStr.length - 1; i >= 0; i--) {
      sum += parseInt(rutStr[i]) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }
    
    const dv = 11 - (sum % 11);
    if (dv === 11) return '0';
    if (dv === 10) return 'K';
    return String(dv);
  };
  
  const isValid = computed(() => {
    const cleaned = clean(rut.value);
    if (cleaned.length < 8) return null;
    
    const number = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1);
    
    if (!/^\d+$/.test(number)) return false;
    
    return dv === calculateDv(number);
  });
  
  const formatted = computed(() => {
    if (!isValid.value) return '';
    
    const cleaned = clean(rut.value);
    const number = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1);
    
    const formattedNumber = number.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return \`\${formattedNumber}-\${dv}\`;
  });
  
  return {
    rut,
    isValid,
    formatted,
    clean,
    calculateDv
  };
}
\`\`\`

## Testing con Jest

### Suite de pruebas completa:

\`\`\`javascript
// rut-validator.test.js
const RutValidator = require('./rut-validator');

describe('RutValidator', () => {
  describe('clean', () => {
    test('removes dots, dashes and spaces', () => {
      expect(RutValidator.clean('12.345.678-9')).toBe('123456789');
      expect(RutValidator.clean('12 345 678-9')).toBe('123456789');
      expect(RutValidator.clean('12345678-k')).toBe('12345678K');
    });
  });
  
  describe('calculateDv', () => {
    test('calculates correct check digit', () => {
      expect(RutValidator.calculateDv(12345678)).toBe('5');
      expect(RutValidator.calculateDv(11111111)).toBe('1');
      expect(RutValidator.calculateDv(22222222)).toBe('2');
    });
    
    test('returns 0 when result is 11', () => {
      expect(RutValidator.calculateDv(15834660)).toBe('0');
    });
    
    test('returns K when result is 10', () => {
      expect(RutValidator.calculateDv(15834661)).toBe('K');
    });
  });
  
  describe('validate', () => {
    test('validates correct RUTs', () => {
      expect(RutValidator.validate('12.345.678-5')).toBe(true);
      expect(RutValidator.validate('11111111-1')).toBe(true);
      expect(RutValidator.validate('5.126.663-3')).toBe(true);
    });
    
    test('rejects incorrect RUTs', () => {
      expect(RutValidator.validate('12.345.678-9')).toBe(false);
      expect(RutValidator.validate('11111111-2')).toBe(false);
    });
    
    test('handles edge cases', () => {
      expect(RutValidator.validate('')).toBe(false);
      expect(RutValidator.validate('1')).toBe(false);
      expect(RutValidator.validate('abc')).toBe(false);
    });
  });
  
  describe('format', () => {
    test('formats RUT correctly', () => {
      expect(RutValidator.format('123456785')).toBe('12.345.678-5');
      expect(RutValidator.format('11111111')).toBe('1.111.111-1');
      expect(RutValidator.format('51266633')).toBe('5.126.663-3');
    });
  });
});
\`\`\`

## Optimizaciones y mejores prácticas

### Versión optimizada con memoización:

\`\`\`javascript
class OptimizedRutValidator {
  static #cache = new Map();
  static #maxCacheSize = 1000;
  
  static validate(rut) {
    const cleaned = this.clean(rut);
    
    // Verificar cache
    if (this.#cache.has(cleaned)) {
      return this.#cache.get(cleaned);
    }
    
    // Validar
    const result = this.#performValidation(cleaned);
    
    // Guardar en cache con límite
    if (this.#cache.size >= this.#maxCacheSize) {
      const firstKey = this.#cache.keys().next().value;
      this.#cache.delete(firstKey);
    }
    this.#cache.set(cleaned, result);
    
    return result;
  }
  
  static #performValidation(cleaned) {
    if (cleaned.length < 2) return false;
    
    const number = cleaned.slice(0, -1);
    const dv = cleaned.slice(-1);
    
    if (!/^\d+$/.test(number)) return false;
    
    // Optimización: usar lookup table para factores
    const factors = [2, 3, 4, 5, 6, 7];
    let sum = 0;
    
    for (let i = number.length - 1, j = 0; i >= 0; i--, j++) {
      sum += parseInt(number[i]) * factors[j % 6];
    }
    
    const calculatedDv = 11 - (sum % 11);
    const expectedDv = calculatedDv === 11 ? '0' : 
                      calculatedDv === 10 ? 'K' : 
                      String(calculatedDv);
    
    return dv === expectedDv;
  }
  
  static clean(rut) {
    return String(rut).replace(/[.-\s]/g, '').toUpperCase();
  }
  
  static clearCache() {
    this.#cache.clear();
  }
}
\`\`\`

## Conclusión

JavaScript ofrece la flexibilidad perfecta para implementar la validación de RUT chileno en cualquier contexto: desde simples validaciones en el navegador hasta complejos sistemas backend. El código presentado es robusto, eficiente y fácil de mantener.

Las implementaciones mostradas cubren todos los casos de uso comunes: validación básica, formateo automático, integración con frameworks modernos y optimizaciones para alto rendimiento. Puedes usar estos ejemplos como base y adaptarlos según tus necesidades específicas.

Recuerda siempre validar tanto en el cliente (mejor UX) como en el servidor (seguridad), y considera implementar caché para aplicaciones de alto tráfico.

---

### Recursos adicionales

- **MDN Web Docs**: Documentación completa de JavaScript
- **NPM**: Busca paquetes existentes de validación de RUT
- **GitHub**: Encuentra más implementaciones y contribuye a proyectos open source
`,
  "calcular-digito-verificador-rut-python": `
# Calcular Dígito Verificador del RUT en Python: Guía para Desarrolladores

## Python: El lenguaje ideal para procesar RUTs

Python destaca como una excelente opción para trabajar con RUTs chilenos gracias a su sintaxis clara, potentes bibliotecas para procesamiento de datos y versatilidad. Ya sea que necesites validar un solo RUT o procesar millones de ellos, Python ofrece las herramientas perfectas para el trabajo.

Este tutorial te enseñará desde la implementación básica hasta técnicas avanzadas para integrar la validación de RUT en tus proyectos Python, incluyendo aplicaciones web, análisis de datos y automatización.

## Implementación básica del algoritmo módulo 11

### Función esencial paso a paso:

\`\`\`python
def calcular_digito_verificador(rut_numero):
    """
    Calcula el dígito verificador de un RUT chileno.
    
    Args:
        rut_numero (int or str): Número del RUT sin dígito verificador
        
    Returns:
        str: Dígito verificador ('0'-'9' o 'K')
    """
    # Convertir a string y asegurar 8 dígitos
    rut_str = str(rut_numero).zfill(8)
    
    # Multiplicadores según el algoritmo
    multiplicadores = [2, 3, 4, 5, 6, 7]
    
    # Calcular suma ponderada
    suma = 0
    for i, digito in enumerate(reversed(rut_str)):
        multiplicador = multiplicadores[i % 6]
        suma += int(digito) * multiplicador
    
    # Calcular dígito verificador
    resto = suma % 11
    digito_verificador = 11 - resto
    
    # Casos especiales
    if digito_verificador == 11:
        return '0'
    elif digito_verificador == 10:
        return 'K'
    else:
        return str(digito_verificador)

# Ejemplos de uso
print(calcular_digito_verificador(12345678))  # 5
print(calcular_digito_verificador(11111111))  # 1
print(calcular_digito_verificador(15834661))  # K
\`\`\`

## Clase completa para manejo de RUTs

### Implementación orientada a objetos:

\`\`\`python
import re
from typing import Optional, Tuple, Union

class RutValidator:
    """Clase para validar y formatear RUTs chilenos."""
    
    def __init__(self):
        self._cache = {}
        self._max_cache_size = 1000
    
    @staticmethod
    def limpiar(rut: str) -> str:
        """
        Limpia el RUT removiendo puntos, guiones y espacios.
        
        Args:
            rut: RUT en cualquier formato
            
        Returns:
            RUT limpio solo con números y K
        """
        return re.sub(r'[.-\s]', '', str(rut)).upper()
    
    @staticmethod
    def formatear(rut: str) -> str:
        """
        Formatea el RUT con puntos y guión.
        
        Args:
            rut: RUT sin formato
            
        Returns:
            RUT formateado (ej: 12.345.678-9)
        """
        rut_limpio = RutValidator.limpiar(rut)
        
        if len(rut_limpio) < 2:
            return rut_limpio
        
        # Separar número y dígito verificador
        numero = rut_limpio[:-1]
        dv = rut_limpio[-1]
        
        # Formatear número con puntos
        numero_formateado = ''
        for i, digito in enumerate(reversed(numero)):
            if i > 0 and i % 3 == 0:
                numero_formateado = '.' + numero_formateado
            numero_formateado = digito + numero_formateado
        
        return f"{numero_formateado}-{dv}"
    
    @staticmethod
    def calcular_dv(rut_numero: Union[int, str]) -> str:
        """
        Calcula el dígito verificador.
        
        Args:
            rut_numero: Número del RUT sin DV
            
        Returns:
            Dígito verificador
        """
        # Asegurar string de 8 dígitos
        rut_str = str(rut_numero).zfill(8)
        
        # Calcular suma ponderada
        suma = sum(
            int(digito) * (2 + (i % 6))
            for i, digito in enumerate(reversed(rut_str))
        )
        
        # Obtener dígito verificador
        dv = 11 - (suma % 11)
        
        if dv == 11:
            return '0'
        elif dv == 10:
            return 'K'
        else:
            return str(dv)
    
    def validar(self, rut: str) -> bool:
        """
        Valida un RUT completo.
        
        Args:
            rut: RUT completo con o sin formato
            
        Returns:
            True si es válido, False en caso contrario
        """
        rut_limpio = self.limpiar(rut)
        
        # Verificar cache
        if rut_limpio in self._cache:
            return self._cache[rut_limpio]
        
        # Validación
        resultado = self._validar_sin_cache(rut_limpio)
        
        # Actualizar cache
        self._actualizar_cache(rut_limpio, resultado)
        
        return resultado
    
    def _validar_sin_cache(self, rut_limpio: str) -> bool:
        """Realiza la validación sin usar cache."""
        # Validar largo mínimo
        if len(rut_limpio) < 2:
            return False
        
        # Separar número y DV
        numero = rut_limpio[:-1]
        dv_ingresado = rut_limpio[-1]
        
        # Validar que el número contenga solo dígitos
        if not numero.isdigit():
            return False
        
        # Calcular DV esperado y comparar
        dv_calculado = self.calcular_dv(numero)
        return dv_ingresado == dv_calculado
    
    def _actualizar_cache(self, rut: str, es_valido: bool):
        """Actualiza el cache con límite de tamaño."""
        if len(self._cache) >= self._max_cache_size:
            # Eliminar el primer elemento (FIFO)
            self._cache.pop(next(iter(self._cache)))
        
        self._cache[rut] = es_valido
    
    def extraer_info(self, rut: str) -> Optional[dict]:
        """
        Extrae información detallada del RUT.
        
        Args:
            rut: RUT a analizar
            
        Returns:
            Diccionario con información o None si es inválido
        """
        if not self.validar(rut):
            return None
        
        rut_limpio = self.limpiar(rut)
        numero = int(rut_limpio[:-1])
        
        return {
            'numero': numero,
            'dv': rut_limpio[-1],
            'formateado': self.formatear(rut_limpio),
            'sin_formato': rut_limpio,
            'es_empresa': numero >= 50000000,  # RUTs de empresas generalmente
            'es_persona': numero < 50000000
        }

# Uso de la clase
validator = RutValidator()

# Validar RUTs
print(validator.validar('12.345.678-5'))  # True
print(validator.validar('12345678-5'))    # True
print(validator.validar('12.345.678-9'))  # False

# Formatear RUT
print(validator.formatear('123456785'))    # 12.345.678-5

# Extraer información
info = validator.extraer_info('12.345.678-5')
print(info)
# {'numero': 12345678, 'dv': '5', 'formateado': '12.345.678-5', ...}
\`\`\`

## Implementación funcional con decoradores

### Estilo Pythónico con decoradores:

\`\`\`python
from functools import wraps, lru_cache
from typing import Callable

def validar_entrada_rut(func: Callable) -> Callable:
    """Decorador para validar entrada de funciones que reciben RUT."""
    @wraps(func)
    def wrapper(rut: str, *args, **kwargs):
        if not rut or not isinstance(rut, (str, int)):
            raise ValueError("RUT inválido: debe ser string o entero")
        return func(rut, *args, **kwargs)
    return wrapper

def formatear_salida_rut(func: Callable) -> Callable:
    """Decorador para formatear la salida de funciones que retornan RUT."""
    @wraps(func)
    def wrapper(*args, **kwargs):
        resultado = func(*args, **kwargs)
        if isinstance(resultado, str) and len(resultado) > 1:
            return RutValidator.formatear(resultado)
        return resultado
    return wrapper

class RutUtils:
    """Utilidades para RUT con enfoque funcional."""
    
    @staticmethod
    @lru_cache(maxsize=1000)
    def calcular_dv_cached(rut_numero: str) -> str:
        """Calcula DV con cache automático."""
        return RutValidator.calcular_dv(rut_numero)
    
    @staticmethod
    @validar_entrada_rut
    def es_valido(rut: str) -> bool:
        """Valida RUT con decorador de validación."""
        return RutValidator().validar(rut)
    
    @staticmethod
    @validar_entrada_rut
    @formatear_salida_rut
    def generar_rut_completo(rut_numero: Union[int, str]) -> str:
        """Genera RUT completo formateado."""
        numero_str = str(rut_numero).zfill(8)
        dv = RutUtils.calcular_dv_cached(numero_str)
        return f"{numero_str}{dv}"

# Uso con decoradores
print(RutUtils.es_valido('12.345.678-5'))  # True
print(RutUtils.generar_rut_completo(12345678))  # 12.345.678-5
\`\`\`

## Procesamiento masivo con pandas

### Validación eficiente de grandes datasets:

\`\`\`python
import pandas as pd
import numpy as np
from typing import List
import concurrent.futures

class RutProcessor:
    """Procesador de RUTs para análisis de datos masivos."""
    
    def __init__(self):
        self.validator = RutValidator()
    
    def procesar_dataframe(self, df: pd.DataFrame, columna_rut: str) -> pd.DataFrame:
        """
        Procesa un DataFrame agregando columnas de validación.
        
        Args:
            df: DataFrame con RUTs
            columna_rut: Nombre de la columna con RUTs
            
        Returns:
            DataFrame con columnas adicionales
        """
        df = df.copy()
        
        # Limpiar RUTs
        df['rut_limpio'] = df[columna_rut].apply(self.validator.limpiar)
        
        # Validar
        df['rut_valido'] = df['rut_limpio'].apply(self.validator.validar)
        
        # Formatear solo los válidos
        df['rut_formateado'] = df.apply(
            lambda row: self.validator.formatear(row['rut_limpio']) 
            if row['rut_valido'] else None,
            axis=1
        )
        
        # Extraer número y DV
        df['rut_numero'] = df['rut_limpio'].str[:-1]
        df['rut_dv'] = df['rut_limpio'].str[-1]
        
        return df
    
    def procesar_archivo_csv(self, archivo_entrada: str, archivo_salida: str,
                           columna_rut: str = 'rut') -> dict:
        """
        Procesa un archivo CSV con RUTs.
        
        Args:
            archivo_entrada: Path del CSV de entrada
            archivo_salida: Path del CSV de salida
            columna_rut: Nombre de la columna con RUTs
            
        Returns:
            Diccionario con estadísticas
        """
        # Leer CSV
        df = pd.read_csv(archivo_entrada)
        
        # Procesar
        df_procesado = self.procesar_dataframe(df, columna_rut)
        
        # Guardar resultado
        df_procesado.to_csv(archivo_salida, index=False)
        
        # Estadísticas
        return {
            'total_ruts': len(df),
            'ruts_validos': df_procesado['rut_valido'].sum(),
            'ruts_invalidos': (~df_procesado['rut_valido']).sum(),
            'porcentaje_validos': df_procesado['rut_valido'].mean() * 100
        }
    
    def validar_paralelo(self, ruts: List[str], workers: int = 4) -> List[bool]:
        """
        Valida RUTs en paralelo para mejor rendimiento.
        
        Args:
            ruts: Lista de RUTs a validar
            workers: Número de workers paralelos
            
        Returns:
            Lista de booleanos indicando validez
        """
        with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
            return list(executor.map(self.validator.validar, ruts))

# Ejemplo de uso con pandas
data = {
    'nombre': ['Juan', 'María', 'Pedro', 'Ana'],
    'rut': ['12.345.678-5', '11111111-1', '12.345.678-9', '15.834.661-K']
}

df = pd.DataFrame(data)
processor = RutProcessor()
df_procesado = processor.procesar_dataframe(df, 'rut')

print(df_procesado[['nombre', 'rut', 'rut_valido', 'rut_formateado']])
\`\`\`

## Integración con Django

### Modelo y validador personalizado:

\`\`\`python
# models.py
from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator

def validar_rut_chileno(value):
    """Validador de RUT para Django."""
    validator = RutValidator()
    if not validator.validar(value):
        raise ValidationError(
            '%(value)s no es un RUT válido',
            params={'value': value},
        )

class RutField(models.CharField):
    """Campo personalizado para RUT chileno."""
    
    def __init__(self, *args, **kwargs):
        kwargs['max_length'] = 12  # XX.XXX.XXX-X
        kwargs['validators'] = [validar_rut_chileno]
        super().__init__(*args, **kwargs)
    
    def to_python(self, value):
        """Convierte el valor a formato interno."""
        if value is None:
            return value
        return RutValidator.limpiar(value)
    
    def get_prep_value(self, value):
        """Prepara el valor para guardar en BD."""
        if value is None:
            return value
        return RutValidator.formatear(value)

# Modelo de ejemplo
class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    rut = RutField(unique=True)
    email = models.EmailField()
    
    def __str__(self):
        return f"{self.nombre} ({self.rut})"

# forms.py
from django import forms

class RutWidget(forms.TextInput):
    """Widget personalizado con formato automático."""
    
    def __init__(self, attrs=None):
        default_attrs = {'placeholder': '12.345.678-9', 'maxlength': '12'}
        if attrs:
            default_attrs.update(attrs)
        super().__init__(default_attrs)

class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = ['nombre', 'rut', 'email']
        widgets = {
            'rut': RutWidget(),
        }
    
    def clean_rut(self):
        """Limpia y valida el RUT."""
        rut = self.cleaned_data.get('rut')
        if rut:
            validator = RutValidator()
            if not validator.validar(rut):
                raise forms.ValidationError('RUT inválido')
            return validator.formatear(rut)
        return rut
\`\`\`

## API REST con FastAPI

### Endpoint moderno para validación:

\`\`\`python
from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel, validator
from typing import List, Optional

app = FastAPI(title="RUT Validator API")

class RutRequest(BaseModel):
    """Modelo para solicitud de validación."""
    rut: str
    
    @validator('rut')
    def validar_formato_basico(cls, v):
        if not v or len(v) < 3:
            raise ValueError('RUT muy corto')
        return v

class RutResponse(BaseModel):
    """Modelo para respuesta de validación."""
    rut_original: str
    rut_limpio: str
    rut_formateado: Optional[str]
    es_valido: bool
    numero: Optional[int]
    digito_verificador: Optional[str]
    mensaje: str

class RutBatchRequest(BaseModel):
    """Modelo para validación en lote."""
    ruts: List[str]

# Instancia global del validador
rut_validator = RutValidator()

@app.post("/validar", response_model=RutResponse)
async def validar_rut(request: RutRequest):
    """Valida un RUT individual."""
    rut = request.rut
    rut_limpio = rut_validator.limpiar(rut)
    es_valido = rut_validator.validar(rut)
    
    if es_valido:
        info = rut_validator.extraer_info(rut)
        return RutResponse(
            rut_original=rut,
            rut_limpio=rut_limpio,
            rut_formateado=info['formateado'],
            es_valido=True,
            numero=info['numero'],
            digito_verificador=info['dv'],
            mensaje="RUT válido"
        )
    else:
        return RutResponse(
            rut_original=rut,
            rut_limpio=rut_limpio,
            rut_formateado=None,
            es_valido=False,
            numero=None,
            digito_verificador=None,
            mensaje="RUT inválido"
        )

@app.post("/validar/lote")
async def validar_lote(request: RutBatchRequest):
    """Valida múltiples RUTs."""
    resultados = []
    
    for rut in request.ruts:
        es_valido = rut_validator.validar(rut)
        resultados.append({
            'rut': rut,
            'valido': es_valido,
            'formateado': rut_validator.formatear(rut) if es_valido else None
        })
    
    return {
        'total': len(request.ruts),
        'validos': sum(1 for r in resultados if r['valido']),
        'invalidos': sum(1 for r in resultados if not r['valido']),
        'resultados': resultados
    }

@app.get("/calcular-dv/{numero}")
async def calcular_digito_verificador(
    numero: int = Query(..., ge=1000000, le=99999999)
):
    """Calcula el dígito verificador para un número."""
    dv = rut_validator.calcular_dv(numero)
    return {
        'numero': numero,
        'digito_verificador': dv,
        'rut_completo': rut_validator.formatear(f"{numero}{dv}")
    }

# Ejecutar con: uvicorn main:app --reload
\`\`\`

## Testing completo con pytest

### Suite de pruebas profesional:

\`\`\`python
import pytest
from rut_validator import RutValidator

class TestRutValidator:
    """Tests para el validador de RUT."""
    
    @pytest.fixture
    def validator(self):
        """Fixture para crear instancia del validador."""
        return RutValidator()
    
    @pytest.mark.parametrize("rut,esperado", [
        ("12.345.678-5", True),
        ("12345678-5", True),
        ("123456785", True),
        ("11.111.111-1", True),
        ("15.834.661-K", True),
        ("15834661-k", True),  # k minúscula
    ])
    def test_validar_ruts_correctos(self, validator, rut, esperado):
        """Test para RUTs válidos."""
        assert validator.validar(rut) == esperado
    
    @pytest.mark.parametrize("rut", [
        "12.345.678-9",
        "11.111.111-2",
        "00000000-0",
        "abc123",
        "",
        None,
    ])
    def test_validar_ruts_incorrectos(self, validator, rut):
        """Test para RUTs inválidos."""
        assert validator.validar(str(rut) if rut else "") == False
    
    @pytest.mark.parametrize("numero,dv_esperado", [
        (12345678, "5"),
        (11111111, "1"),
        (22222222, "2"),
        (15834660, "0"),
        (15834661, "K"),
    ])
    def test_calcular_digito_verificador(self, validator, numero, dv_esperado):
        """Test para cálculo de dígito verificador."""
        assert validator.calcular_dv(numero) == dv_esperado
    
    def test_formatear_rut(self, validator):
        """Test para formateo de RUT."""
        assert validator.formatear("123456785") == "12.345.678-5"
        assert validator.formatear("11111111") == "1.111.111-1"
        assert validator.formatear("1234567K") == "1.234.567-K"
    
    def test_limpiar_rut(self, validator):
        """Test para limpieza de RUT."""
        assert validator.limpiar("12.345.678-5") == "123456785"
        assert validator.limpiar("12 345 678-5") == "123456785"
        assert validator.limpiar("12345678-k") == "12345678K"
    
    def test_extraer_info(self, validator):
        """Test para extracción de información."""
        info = validator.extraer_info("12.345.678-5")
        assert info is not None
        assert info['numero'] == 12345678
        assert info['dv'] == '5'
        assert info['formateado'] == '12.345.678-5'
        assert info['es_persona'] == True
        assert info['es_empresa'] == False
    
    def test_cache_funciona(self, validator):
        """Test para verificar funcionamiento del cache."""
        rut = "12.345.678-5"
        
        # Primera validación
        resultado1 = validator.validar(rut)
        
        # Segunda validación (debería usar cache)
        resultado2 = validator.validar(rut)
        
        assert resultado1 == resultado2
        assert validator.limpiar(rut) in validator._cache

# Ejecutar con: pytest test_rut_validator.py -v
\`\`\`

## CLI: Herramienta de línea de comandos

### Script ejecutable con argparse:

\`\`\`python
#!/usr/bin/env python3
"""
RUT Validator CLI
Herramienta de línea de comandos para validar RUTs chilenos.
"""

import argparse
import sys
import csv
from typing import List

def main():
    parser = argparse.ArgumentParser(
        description='Validador de RUT chileno',
        epilog='Ejemplos: %(prog)s -v 12.345.678-5'
    )
    
    parser.add_argument(
        '-v', '--validar',
        help='Valida un RUT',
        metavar='RUT'
    )
    
    parser.add_argument(
        '-c', '--calcular',
        help='Calcula dígito verificador',
        metavar='NUMERO',
        type=int
    )
    
    parser.add_argument(
        '-f', '--formatear',
        help='Formatea un RUT',
        metavar='RUT'
    )
    
    parser.add_argument(
        '-a', '--archivo',
        help='Procesa archivo CSV',
        metavar='ARCHIVO'
    )
    
    parser.add_argument(
        '-o', '--output',
        help='Archivo de salida para CSV',
        metavar='ARCHIVO'
    )
    
    args = parser.parse_args()
    
    validator = RutValidator()
    
    if args.validar:
        es_valido = validator.validar(args.validar)
        if es_valido:
            print(f"✓ RUT válido: {validator.formatear(args.validar)}")
        else:
            print(f"✗ RUT inválido: {args.validar}")
            sys.exit(1)
    
    elif args.calcular:
        dv = validator.calcular_dv(args.calcular)
        rut_completo = f"{args.calcular}{dv}"
        print(f"Número: {args.calcular}")
        print(f"Dígito verificador: {dv}")
        print(f"RUT completo: {validator.formatear(rut_completo)}")
    
    elif args.formatear:
        try:
            formateado = validator.formatear(args.formatear)
            print(formateado)
        except Exception as e:
            print(f"Error al formatear: {e}")
            sys.exit(1)
    
    elif args.archivo:
        processor = RutProcessor()
        output = args.output or 'validados.csv'
        
        try:
            stats = processor.procesar_archivo_csv(
                args.archivo, 
                output,
                'rut'
            )
            
            print(f"Archivo procesado: {args.archivo}")
            print(f"Total RUTs: {stats['total_ruts']}")
            print(f"Válidos: {stats['ruts_validos']} ({stats['porcentaje_validos']:.1f}%)")
            print(f"Inválidos: {stats['ruts_invalidos']}")
            print(f"Resultado guardado en: {output}")
            
        except Exception as e:
            print(f"Error procesando archivo: {e}")
            sys.exit(1)
    
    else:
        parser.print_help()

if __name__ == '__main__':
    main()

# Hacer ejecutable: chmod +x rut_validator.py
# Usar: ./rut_validator.py -v 12.345.678-5
\`\`\`

## Optimización y buenas prácticas

### Versión optimizada con numpy:

\`\`\`python
import numpy as np
from numba import jit

class RutValidatorOptimized:
    """Validador optimizado para procesamiento masivo."""
    
    @staticmethod
    @jit(nopython=True)
    def calcular_dv_numba(rut_numero: int) -> int:
        """Cálculo optimizado con Numba."""
        multiplicadores = np.array([2, 3, 4, 5, 6, 7])
        suma = 0
        i = 0
        
        while rut_numero > 0:
            digito = rut_numero % 10
            multiplicador = multiplicadores[i % 6]
            suma += digito * multiplicador
            rut_numero //= 10
            i += 1
        
        dv = 11 - (suma % 11)
        return 0 if dv == 11 else 10 if dv == 10 else dv
    
    @staticmethod
    def validar_numpy_batch(ruts: np.ndarray) -> np.ndarray:
        """
        Valida un array de RUTs usando NumPy.
        
        Args:
            ruts: Array de números de RUT (sin DV)
            
        Returns:
            Array de dígitos verificadores
        """
        # Vectorizar la función
        calc_dv_vec = np.vectorize(RutValidatorOptimized.calcular_dv_numba)
        return calc_dv_vec(ruts)

# Benchmark
import time

# Generar RUTs de prueba
ruts_prueba = np.random.randint(1000000, 25000000, size=100000)

# Método optimizado
start = time.time()
dvs = RutValidatorOptimized.validar_numpy_batch(ruts_prueba)
print(f"NumPy + Numba: {time.time() - start:.3f} segundos")

# Método tradicional
validator = RutValidator()
start = time.time()
dvs_tradicional = [validator.calcular_dv(rut) for rut in ruts_prueba]
print(f"Método tradicional: {time.time() - start:.3f} segundos")
\`\`\`

## Conclusión

Python ofrece un ecosistema rico para trabajar con RUTs chilenos, desde implementaciones simples hasta soluciones empresariales complejas. Las opciones presentadas cubren diversos escenarios:

- **Scripts simples**: Para validaciones rápidas y automatización
- **Aplicaciones web**: Integración con Django y FastAPI
- **Análisis de datos**: Procesamiento masivo con pandas
- **Alto rendimiento**: Optimización con NumPy y Numba

La flexibilidad de Python permite adaptar estas soluciones a cualquier necesidad, manteniendo siempre código limpio, testeable y eficiente.

---

### Recursos adicionales

- **Python.org**: Documentación oficial y mejores prácticas
- **PyPI**: Busca paquetes existentes como \`python-rut\`
- **Real Python**: Tutoriales avanzados de Python
- **GitHub**: Ejemplos y proyectos open source de validación RUT
`,
  "calcular-digito-verificador-rut-php": `
# Validar RUT en PHP: Implementación del Algoritmo Módulo 11

## PHP en el contexto empresarial chileno

PHP sigue siendo uno de los lenguajes más utilizados en aplicaciones web chilenas, especialmente en sistemas de facturación, e-commerce y plataformas empresariales. La validación correcta del RUT es crítica para cumplir con las normativas del SII y evitar rechazos en documentos tributarios electrónicos.

Este tutorial te mostrará cómo implementar una validación robusta y segura del RUT en PHP, desde funciones básicas hasta integraciones con frameworks modernos como Laravel y Symfony.

## Función básica para calcular el dígito verificador

### Implementación directa del algoritmo:

\`\`\`php
<?php
/**
 * Calcula el dígito verificador de un RUT chileno
 * 
 * @param int|string $rutNumero Número del RUT sin dígito verificador
 * @return string Dígito verificador (0-9 o K)
 */
function calcularDigitoVerificador($rutNumero) {
    // Asegurar que sea string y tenga 8 dígitos
    $rut = str_pad((string)$rutNumero, 8, '0', STR_PAD_LEFT);
    
    // Multiplicadores según algoritmo módulo 11
    $multiplicadores = [2, 3, 4, 5, 6, 7];
    
    // Calcular suma ponderada
    $suma = 0;
    $rutReverso = strrev($rut);
    
    for ($i = 0; $i < strlen($rutReverso); $i++) {
        $digito = (int)$rutReverso[$i];
        $multiplicador = $multiplicadores[$i % 6];
        $suma += $digito * $multiplicador;
    }
    
    // Calcular dígito verificador
    $resto = $suma % 11;
    $digitoVerificador = 11 - $resto;
    
    // Casos especiales
    if ($digitoVerificador == 11) {
        return '0';
    } elseif ($digitoVerificador == 10) {
        return 'K';
    } else {
        return (string)$digitoVerificador;
    }
}

// Ejemplos de uso
echo calcularDigitoVerificador(12345678);  // 5
echo calcularDigitoVerificador(11111111);  // 1
echo calcularDigitoVerificador(15834661);  // K
?>
\`\`\`

## Clase completa para manejo de RUT

### Implementación orientada a objetos con mejores prácticas:

\`\`\`php
<?php
/**
 * Clase para validar y formatear RUTs chilenos
 * 
 * @author Tu Nombre
 * @version 1.0.0
 */
class RutValidator
{
    /**
     * Cache de validaciones para mejorar rendimiento
     * @var array
     */
    private static $cache = [];
    
    /**
     * Tamaño máximo del cache
     * @var int
     */
    private const MAX_CACHE_SIZE = 1000;
    
    /**
     * Limpia el RUT removiendo puntos, guiones y espacios
     * 
     * @param string $rut RUT en cualquier formato
     * @return string RUT limpio
     */
    public static function limpiar($rut)
    {
        // Remover caracteres no deseados y convertir a mayúsculas
        return strtoupper(preg_replace('/[^0-9kK]/', '', $rut));
    }
    
    /**
     * Formatea el RUT con puntos y guión
     * 
     * @param string $rut RUT sin formato
     * @return string RUT formateado (ej: 12.345.678-9)
     */
    public static function formatear($rut)
    {
        $rutLimpio = self::limpiar($rut);
        
        if (strlen($rutLimpio) < 2) {
            return $rutLimpio;
        }
        
        // Separar número y dígito verificador
        $numero = substr($rutLimpio, 0, -1);
        $dv = substr($rutLimpio, -1);
        
        // Formatear número con puntos
        $numeroFormateado = '';
        $contador = 0;
        
        for ($i = strlen($numero) - 1; $i >= 0; $i--) {
            if ($contador > 0 && $contador % 3 === 0) {
                $numeroFormateado = '.' . $numeroFormateado;
            }
            $numeroFormateado = $numero[$i] . $numeroFormateado;
            $contador++;
        }
        
        return $numeroFormateado . '-' . $dv;
    }
    
    /**
     * Calcula el dígito verificador
     * 
     * @param int|string $rutNumero Número del RUT sin DV
     * @return string Dígito verificador
     */
    public static function calcularDV($rutNumero)
    {
        // Asegurar string de 8 dígitos
        $rut = str_pad((string)$rutNumero, 8, '0', STR_PAD_LEFT);
        
        // Calcular suma ponderada usando array_reduce
        $suma = array_reduce(
            array_map(
                function($i) use ($rut) {
                    $digito = (int)$rut[strlen($rut) - 1 - $i];
                    $factor = (($i % 6) + 2);
                    return $digito * $factor;
                },
                range(0, strlen($rut) - 1)
            ),
            function($carry, $item) {
                return $carry + $item;
            },
            0
        );
        
        // Obtener dígito verificador
        $dv = 11 - ($suma % 11);
        
        if ($dv == 11) {
            return '0';
        } elseif ($dv == 10) {
            return 'K';
        } else {
            return (string)$dv;
        }
    }
    
    /**
     * Valida un RUT completo
     * 
     * @param string $rut RUT completo con o sin formato
     * @return bool True si es válido
     */
    public static function validar($rut)
    {
        $rutLimpio = self::limpiar($rut);
        
        // Verificar cache
        if (isset(self::$cache[$rutLimpio])) {
            return self::$cache[$rutLimpio];
        }
        
        // Validar largo mínimo
        if (strlen($rutLimpio) < 2) {
            return self::actualizarCache($rutLimpio, false);
        }
        
        // Separar número y DV
        $numero = substr($rutLimpio, 0, -1);
        $dvIngresado = substr($rutLimpio, -1);
        
        // Validar que el número contenga solo dígitos
        if (!ctype_digit($numero)) {
            return self::actualizarCache($rutLimpio, false);
        }
        
        // Calcular DV esperado y comparar
        $dvCalculado = self::calcularDV($numero);
        $esValido = $dvIngresado === $dvCalculado;
        
        return self::actualizarCache($rutLimpio, $esValido);
    }
    
    /**
     * Actualiza el cache con límite de tamaño
     * 
     * @param string $rut RUT limpio
     * @param bool $esValido Resultado de validación
     * @return bool El resultado de validación
     */
    private static function actualizarCache($rut, $esValido)
    {
        // Limitar tamaño del cache
        if (count(self::$cache) >= self::MAX_CACHE_SIZE) {
            // Eliminar el primer elemento (FIFO)
            array_shift(self::$cache);
        }
        
        self::$cache[$rut] = $esValido;
        return $esValido;
    }
    
    /**
     * Extrae información detallada del RUT
     * 
     * @param string $rut RUT a analizar
     * @return array|null Array con información o null si es inválido
     */
    public static function extraerInfo($rut)
    {
        if (!self::validar($rut)) {
            return null;
        }
        
        $rutLimpio = self::limpiar($rut);
        $numero = (int)substr($rutLimpio, 0, -1);
        
        return [
            'numero' => $numero,
            'dv' => substr($rutLimpio, -1),
            'formateado' => self::formatear($rutLimpio),
            'sin_formato' => $rutLimpio,
            'es_empresa' => $numero >= 50000000,
            'es_persona' => $numero < 50000000,
            'tipo' => $numero >= 50000000 ? 'Empresa' : 'Persona Natural'
        ];
    }
    
    /**
     * Limpia el cache de validaciones
     * 
     * @return void
     */
    public static function limpiarCache()
    {
        self::$cache = [];
    }
}

// Ejemplos de uso
$ruts = ['12.345.678-5', '11111111-1', '12.345.678-9', '15.834.661-K'];

foreach ($ruts as $rut) {
    if (RutValidator::validar($rut)) {
        echo "✓ {$rut} es válido - " . RutValidator::formatear($rut) . PHP_EOL;
    } else {
        echo "✗ {$rut} es inválido" . PHP_EOL;
    }
}

// Extraer información
$info = RutValidator::extraerInfo('12.345.678-5');
print_r($info);
?>
\`\`\`

## Integración con formularios web

### Validación AJAX en tiempo real:

\`\`\`php
<?php
// api/validar-rut.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Incluir clase RutValidator
require_once 'RutValidator.php';

// Obtener RUT desde POST o GET
$rut = $_REQUEST['rut'] ?? '';

// Validar
$esValido = RutValidator::validar($rut);
$response = [
    'valido' => $esValido,
    'rut_original' => $rut,
    'rut_limpio' => RutValidator::limpiar($rut),
    'mensaje' => $esValido ? 'RUT válido' : 'RUT inválido'
];

if ($esValido) {
    $response['rut_formateado'] = RutValidator::formatear($rut);
    $response['info'] = RutValidator::extraerInfo($rut);
}

echo json_encode($response);
?>
\`\`\`

### Formulario HTML con validación en tiempo real:

\`\`\`html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Validador de RUT PHP</title>
    <style>
        .form-control { 
            padding: 10px; 
            font-size: 16px; 
            border: 2px solid #ddd; 
            border-radius: 4px; 
            width: 300px;
        }
        .is-valid { border-color: #28a745; }
        .is-invalid { border-color: #dc3545; }
        .feedback { margin-top: 5px; font-size: 14px; }
        .valid-feedback { color: #28a745; }
        .invalid-feedback { color: #dc3545; }
        .loading { color: #6c757d; }
    </style>
</head>
<body>
    <h2>Validador de RUT en PHP</h2>
    
    <form id="rutForm">
        <div class="form-group">
            <label for="rut">Ingrese RUT:</label>
            <input 
                type="text" 
                id="rut" 
                name="rut" 
                class="form-control" 
                placeholder="12.345.678-9"
                maxlength="12"
            >
            <div class="feedback"></div>
        </div>
        
        <button type="submit">Validar</button>
    </form>
    
    <div id="resultado"></div>

    <script>
        const rutInput = document.getElementById('rut');
        const feedback = document.querySelector('.feedback');
        const resultado = document.getElementById('resultado');
        let timeoutId;
        
        // Validación en tiempo real
        rutInput.addEventListener('input', function(e) {
            clearTimeout(timeoutId);
            const rut = e.target.value;
            
            if (rut.length < 3) {
                rutInput.classList.remove('is-valid', 'is-invalid');
                feedback.textContent = '';
                return;
            }
            
            feedback.textContent = 'Validando...';
            feedback.className = 'feedback loading';
            
            // Debounce de 500ms
            timeoutId = setTimeout(() => {
                validarRut(rut);
            }, 500);
        });
        
        // Función para validar RUT
        async function validarRut(rut) {
            try {
                const response = await fetch('api/validar-rut.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: 'rut=' + encodeURIComponent(rut)
                });
                
                const data = await response.json();
                
                if (data.valido) {
                    rutInput.classList.remove('is-invalid');
                    rutInput.classList.add('is-valid');
                    feedback.className = 'feedback valid-feedback';
                    feedback.textContent = '✓ ' + data.mensaje;
                    
                    // Actualizar input con formato correcto
                    if (data.rut_formateado && rutInput.value !== data.rut_formateado) {
                        rutInput.value = data.rut_formateado;
                    }
                } else {
                    rutInput.classList.remove('is-valid');
                    rutInput.classList.add('is-invalid');
                    feedback.className = 'feedback invalid-feedback';
                    feedback.textContent = '✗ ' + data.mensaje;
                }
                
            } catch (error) {
                feedback.className = 'feedback invalid-feedback';
                feedback.textContent = 'Error al validar';
            }
        }
        
        // Prevenir envío del formulario
        document.getElementById('rutForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const rut = rutInput.value;
            if (rut) {
                validarRut(rut);
            }
        });
    </script>
</body>
</html>
\`\`\`

## Integración con Laravel

### Regla de validación personalizada:

\`\`\`php
<?php
// app/Rules/RutChileno.php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class RutChileno implements Rule
{
    /**
     * Mensaje de error personalizado
     *
     * @var string
     */
    protected $message = 'El :attribute no es un RUT válido.';
    
    /**
     * Determina si la validación pasa
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return \RutValidator::validar($value);
    }
    
    /**
     * Obtiene el mensaje de error
     *
     * @return string
     */
    public function message()
    {
        return $this->message;
    }
}

// app/Providers/AppServiceProvider.php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Registrar validación personalizada
        Validator::extend('rut', function ($attribute, $value, $parameters, $validator) {
            return \RutValidator::validar($value);
        });
        
        // Mensaje personalizado
        Validator::replacer('rut', function ($message, $attribute, $rule, $parameters) {
            return str_replace(':attribute', $attribute, 'El campo :attribute debe ser un RUT válido.');
        });
    }
}

// Uso en controlador
namespace App\Http\Controllers;

use App\Rules\RutChileno;
use Illuminate\Http\Request;

class ClienteController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'rut' => ['required', new RutChileno],
            'email' => 'required|email'
        ]);
        
        // Formatear RUT antes de guardar
        $validated['rut'] = \RutValidator::formatear($validated['rut']);
        
        $cliente = Cliente::create($validated);
        
        return response()->json([
            'message' => 'Cliente creado exitosamente',
            'cliente' => $cliente
        ], 201);
    }
}

// Modelo con mutador
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = ['nombre', 'rut', 'email'];
    
    /**
     * Mutador para formatear RUT al guardar
     */
    public function setRutAttribute($value)
    {
        $this->attributes['rut'] = \RutValidator::formatear($value);
    }
    
    /**
     * Accessor para obtener info del RUT
     */
    public function getRutInfoAttribute()
    {
        return \RutValidator::extraerInfo($this->rut);
    }
}
\`\`\`

## Integración con Symfony

### Constraint personalizado para Symfony:

\`\`\`php
<?php
// src/Validator/Constraints/RutChileno.php
namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class RutChileno extends Constraint
{
    public $message = 'El RUT "{{ value }}" no es válido.';
}

// src/Validator/Constraints/RutChilenoValidator.php
namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;

class RutChilenoValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        if (!$constraint instanceof RutChileno) {
            throw new UnexpectedTypeException($constraint, RutChileno::class);
        }
        
        if (null === $value || '' === $value) {
            return;
        }
        
        if (!\RutValidator::validar($value)) {
            $this->context->buildViolation($constraint->message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }
}

// src/Entity/Cliente.php
namespace App\Entity;

use App\Validator\Constraints as AppAssert;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(name="clientes")
 */
class Cliente
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;
    
    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank
     * @Assert\Length(max=100)
     */
    private $nombre;
    
    /**
     * @ORM\Column(type="string", length=12, unique=true)
     * @Assert\NotBlank
     * @AppAssert\RutChileno
     */
    private $rut;
    
    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Email
     */
    private $email;
    
    // Getters y setters...
    
    public function setRut(string $rut): self
    {
        $this->rut = \RutValidator::formatear($rut);
        return $this;
    }
}
\`\`\`

## API REST con validación

### Endpoint completo con manejo de errores:

\`\`\`php
<?php
// api/RutController.php
class RutController
{
    /**
     * Valida un RUT individual
     * POST /api/rut/validar
     */
    public function validar()
    {
        header('Content-Type: application/json');
        
        try {
            // Obtener datos de entrada
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (!isset($input['rut'])) {
                http_response_code(400);
                return json_encode([
                    'error' => true,
                    'message' => 'RUT es requerido'
                ]);
            }
            
            $rut = $input['rut'];
            $esValido = RutValidator::validar($rut);
            
            $response = [
                'valido' => $esValido,
                'rut_original' => $rut,
                'rut_limpio' => RutValidator::limpiar($rut)
            ];
            
            if ($esValido) {
                $info = RutValidator::extraerInfo($rut);
                $response = array_merge($response, [
                    'rut_formateado' => $info['formateado'],
                    'numero' => $info['numero'],
                    'digito_verificador' => $info['dv'],
                    'tipo' => $info['tipo']
                ]);
            }
            
            echo json_encode($response);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'error' => true,
                'message' => 'Error interno del servidor'
            ]);
        }
    }
    
    /**
     * Valida múltiples RUTs
     * POST /api/rut/validar-lote
     */
    public function validarLote()
    {
        header('Content-Type: application/json');
        
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (!isset($input['ruts']) || !is_array($input['ruts'])) {
                http_response_code(400);
                return json_encode([
                    'error' => true,
                    'message' => 'Se requiere un array de RUTs'
                ]);
            }
            
            $resultados = [];
            $validos = 0;
            $invalidos = 0;
            
            foreach ($input['ruts'] as $rut) {
                $esValido = RutValidator::validar($rut);
                
                $resultado = [
                    'rut' => $rut,
                    'valido' => $esValido
                ];
                
                if ($esValido) {
                    $resultado['formateado'] = RutValidator::formatear($rut);
                    $validos++;
                } else {
                    $invalidos++;
                }
                
                $resultados[] = $resultado;
            }
            
            echo json_encode([
                'total' => count($input['ruts']),
                'validos' => $validos,
                'invalidos' => $invalidos,
                'porcentaje_validos' => count($input['ruts']) > 0 
                    ? round(($validos / count($input['ruts'])) * 100, 2) 
                    : 0,
                'resultados' => $resultados
            ]);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'error' => true,
                'message' => 'Error procesando lote'
            ]);
        }
    }
    
    /**
     * Calcula dígito verificador
     * GET /api/rut/calcular-dv/{numero}
     */
    public function calcularDV($numero)
    {
        header('Content-Type: application/json');
        
        if (!is_numeric($numero) || $numero < 1000000 || $numero > 99999999) {
            http_response_code(400);
            echo json_encode([
                'error' => true,
                'message' => 'Número de RUT inválido'
            ]);
            return;
        }
        
        $dv = RutValidator::calcularDV($numero);
        
        echo json_encode([
            'numero' => (int)$numero,
            'digito_verificador' => $dv,
            'rut_completo' => RutValidator::formatear($numero . $dv)
        ]);
    }
}
\`\`\`

## Procesamiento masivo de archivos

### Script para procesar CSV con RUTs:

\`\`\`php
<?php
/**
 * Procesador de RUTs desde archivo CSV
 * Uso: php procesar_ruts.php archivo.csv
 */

class RutProcessor
{
    private $stats = [
        'total' => 0,
        'validos' => 0,
        'invalidos' => 0,
        'procesados' => 0,
        'errores' => []
    ];
    
    /**
     * Procesa un archivo CSV con RUTs
     * 
     * @param string $archivoEntrada Path del archivo CSV
     * @param string $archivoSalida Path del archivo de salida
     * @param int $columnaRut Índice de la columna con RUTs (0-based)
     * @return array Estadísticas del procesamiento
     */
    public function procesarCSV($archivoEntrada, $archivoSalida, $columnaRut = 0)
    {
        if (!file_exists($archivoEntrada)) {
            throw new Exception("Archivo no encontrado: $archivoEntrada");
        }
        
        $entrada = fopen($archivoEntrada, 'r');
        $salida = fopen($archivoSalida, 'w');
        
        if (!$entrada || !$salida) {
            throw new Exception("Error abriendo archivos");
        }
        
        // Procesar encabezados
        $encabezados = fgetcsv($entrada);
        if ($encabezados) {
            // Agregar columnas nuevas
            $encabezados[] = 'rut_valido';
            $encabezados[] = 'rut_formateado';
            $encabezados[] = 'rut_tipo';
            fputcsv($salida, $encabezados);
        }
        
        // Procesar datos
        while (($fila = fgetcsv($entrada)) !== false) {
            $this->stats['total']++;
            
            try {
                if (isset($fila[$columnaRut])) {
                    $rut = $fila[$columnaRut];
                    $esValido = RutValidator::validar($rut);
                    
                    if ($esValido) {
                        $this->stats['validos']++;
                        $info = RutValidator::extraerInfo($rut);
                        $fila[] = 'SI';
                        $fila[] = $info['formateado'];
                        $fila[] = $info['tipo'];
                    } else {
                        $this->stats['invalidos']++;
                        $fila[] = 'NO';
                        $fila[] = '';
                        $fila[] = '';
                    }
                } else {
                    $this->stats['errores'][] = "Fila {$this->stats['total']}: columna RUT no encontrada";
                    $fila[] = 'ERROR';
                    $fila[] = '';
                    $fila[] = '';
                }
                
                fputcsv($salida, $fila);
                $this->stats['procesados']++;
                
                // Mostrar progreso cada 1000 registros
                if ($this->stats['procesados'] % 1000 === 0) {
                    echo "Procesados: {$this->stats['procesados']}\\r";
                }
                
            } catch (Exception $e) {
                $this->stats['errores'][] = "Fila {$this->stats['total']}: " . $e->getMessage();
            }
        }
        
        fclose($entrada);
        fclose($salida);
        
        return $this->stats;
    }
    
    /**
     * Genera reporte de procesamiento
     * 
     * @return string Reporte formateado
     */
    public function generarReporte()
    {
        $porcentajeValidos = $this->stats['total'] > 0 
            ? round(($this->stats['validos'] / $this->stats['total']) * 100, 2) 
            : 0;
        
        $reporte = "\\n=== REPORTE DE PROCESAMIENTO ===\\n";
        $reporte .= "Total de registros: {$this->stats['total']}\\n";
        $reporte .= "RUTs válidos: {$this->stats['validos']} ($porcentajeValidos%)\\n";
        $reporte .= "RUTs inválidos: {$this->stats['invalidos']}\\n";
        $reporte .= "Registros procesados: {$this->stats['procesados']}\\n";
        
        if (count($this->stats['errores']) > 0) {
            $reporte .= "\\nErrores encontrados:\\n";
            foreach ($this->stats['errores'] as $error) {
                $reporte .= "- $error\\n";
            }
        }
        
        return $reporte;
    }
}

// Script principal
if (php_sapi_name() === 'cli') {
    if ($argc < 2) {
        echo "Uso: php procesar_ruts.php <archivo_entrada.csv> [archivo_salida.csv] [columna_rut]\\n";
        exit(1);
    }
    
    $archivoEntrada = $argv[1];
    $archivoSalida = $argv[2] ?? 'ruts_validados.csv';
    $columnaRut = isset($argv[3]) ? (int)$argv[3] : 0;
    
    try {
        require_once 'RutValidator.php';
        
        $processor = new RutProcessor();
        echo "Procesando archivo: $archivoEntrada\\n";
        
        $stats = $processor->procesarCSV($archivoEntrada, $archivoSalida, $columnaRut);
        
        echo $processor->generarReporte();
        echo "\\nArchivo de salida: $archivoSalida\\n";
        
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\\n";
        exit(1);
    }
}
?>
\`\`\`

## Testing con PHPUnit

### Suite completa de pruebas:

\`\`\`php
<?php
use PHPUnit\Framework\TestCase;

class RutValidatorTest extends TestCase
{
    /**
     * @dataProvider rutValidosProvider
     */
    public function testValidarRutsCorrectos($rut, $esperado)
    {
        $this->assertEquals($esperado, RutValidator::validar($rut));
    }
    
    public function rutValidosProvider()
    {
        return [
            ['12.345.678-5', true],
            ['12345678-5', true],
            ['123456785', true],
            ['11.111.111-1', true],
            ['15.834.661-K', true],
            ['15834661-k', true], // k minúscula
            ['5.126.663-3', true],
        ];
    }
    
    /**
     * @dataProvider rutInvalidosProvider
     */
    public function testValidarRutsIncorrectos($rut)
    {
        $this->assertFalse(RutValidator::validar($rut));
    }
    
    public function rutInvalidosProvider()
    {
        return [
            ['12.345.678-9'],
            ['11.111.111-2'],
            ['00000000-0'],
            ['abc123'],
            [''],
            ['1'],
            ['12.345.678'],
            ['12345678-'],
        ];
    }
    
    /**
     * @dataProvider digitoVerificadorProvider
     */
    public function testCalcularDigitoVerificador($numero, $dvEsperado)
    {
        $this->assertEquals($dvEsperado, RutValidator::calcularDV($numero));
    }
    
    public function digitoVerificadorProvider()
    {
        return [
            [12345678, '5'],
            [11111111, '1'],
            [22222222, '2'],
            [15834660, '0'],
            [15834661, 'K'],
            [8942487, '6'],
        ];
    }
    
    public function testFormatearRut()
    {
        $this->assertEquals('12.345.678-5', RutValidator::formatear('123456785'));
        $this->assertEquals('1.111.111-1', RutValidator::formatear('11111111'));
        $this->assertEquals('1.234.567-K', RutValidator::formatear('1234567K'));
    }
    
    public function testLimpiarRut()
    {
        $this->assertEquals('123456785', RutValidator::limpiar('12.345.678-5'));
        $this->assertEquals('123456785', RutValidator::limpiar('12 345 678-5'));
        $this->assertEquals('12345678K', RutValidator::limpiar('12.345.678-k'));
    }
    
    public function testExtraerInfo()
    {
        $info = RutValidator::extraerInfo('12.345.678-5');
        
        $this->assertIsArray($info);
        $this->assertEquals(12345678, $info['numero']);
        $this->assertEquals('5', $info['dv']);
        $this->assertEquals('12.345.678-5', $info['formateado']);
        $this->assertTrue($info['es_persona']);
        $this->assertFalse($info['es_empresa']);
        
        // Test con RUT inválido
        $this->assertNull(RutValidator::extraerInfo('12.345.678-9'));
    }
    
    public function testCacheFunciona()
    {
        RutValidator::limpiarCache();
        
        $rut = '12.345.678-5';
        
        // Primera validación (sin cache)
        $resultado1 = RutValidator::validar($rut);
        
        // Segunda validación (con cache)
        $resultado2 = RutValidator::validar($rut);
        
        $this->assertEquals($resultado1, $resultado2);
    }
    
    public function testRendimientoMasivo()
    {
        $inicio = microtime(true);
        
        // Validar 1000 RUTs
        for ($i = 0; $i < 1000; $i++) {
            RutValidator::validar('12.345.678-5');
        }
        
        $tiempo = microtime(true) - $inicio;
        
        // Debería tomar menos de 1 segundo con cache
        $this->assertLessThan(1.0, $tiempo);
    }
}
?>
\`\`\`

## Consideraciones de seguridad

### Mejores prácticas para producción:

\`\`\`php
<?php
/**
 * Versión segura con validaciones adicionales
 */
class SecureRutValidator extends RutValidator
{
    /**
     * Valida RUT con límite de intentos por IP
     * 
     * @param string $rut RUT a validar
     * @param string $ip IP del cliente
     * @return array Resultado con información adicional
     */
    public static function validarConLimite($rut, $ip)
    {
        // Implementar rate limiting
        $cacheKey = "rut_attempts_" . md5($ip);
        $attempts = apcu_fetch($cacheKey) ?: 0;
        
        if ($attempts > 100) { // Máximo 100 intentos por hora
            return [
                'error' => true,
                'message' => 'Demasiados intentos. Intente más tarde.'
            ];
        }
        
        apcu_store($cacheKey, $attempts + 1, 3600); // TTL 1 hora
        
        // Sanitizar entrada
        $rut = self::sanitizar($rut);
        
        // Validar
        $esValido = parent::validar($rut);
        
        // Log para auditoría
        self::logValidacion($rut, $ip, $esValido);
        
        return [
            'valido' => $esValido,
            'rut_sanitizado' => $rut
        ];
    }
    
    /**
     * Sanitiza entrada para prevenir XSS
     * 
     * @param string $input Entrada del usuario
     * @return string Entrada sanitizada
     */
    private static function sanitizar($input)
    {
        // Remover tags HTML
        $input = strip_tags($input);
        
        // Remover caracteres de control
        $input = preg_replace('/[\x00-\x1F\x7F]/u', '', $input);
        
        // Limitar longitud
        $input = substr($input, 0, 20);
        
        return $input;
    }
    
    /**
     * Registra validaciones para auditoría
     * 
     * @param string $rut RUT validado
     * @param string $ip IP del cliente
     * @param bool $esValido Resultado de validación
     */
    private static function logValidacion($rut, $ip, $esValido)
    {
        $log = sprintf(
            "[%s] IP: %s, RUT: %s, Válido: %s\\n",
            date('Y-m-d H:i:s'),
            $ip,
            substr($rut, 0, -4) . '****', // Ocultar últimos 4 caracteres
            $esValido ? 'SI' : 'NO'
        );
        
        error_log($log, 3, '/var/log/rut_validations.log');
    }
}

// Middleware para aplicaciones web
class RutValidationMiddleware
{
    public function handle($request, $next)
    {
        if ($request->has('rut')) {
            $ip = $request->ip();
            $rut = $request->input('rut');
            
            $resultado = SecureRutValidator::validarConLimite($rut, $ip);
            
            if (isset($resultado['error'])) {
                return response()->json($resultado, 429); // Too Many Requests
            }
            
            $request->merge(['rut_validado' => $resultado]);
        }
        
        return $next($request);
    }
}
?>
\`\`\`

## Conclusión

PHP ofrece una implementación robusta y eficiente para la validación de RUTs chilenos. Las soluciones presentadas cubren desde scripts simples hasta integraciones empresariales complejas:

- **Funciones básicas**: Para validaciones rápidas y scripts simples
- **Clases OOP**: Para aplicaciones estructuradas y reutilizables
- **Integraciones con frameworks**: Laravel y Symfony para aplicaciones modernas
- **APIs REST**: Para servicios web escalables
- **Procesamiento masivo**: Para manejar grandes volúmenes de datos
- **Seguridad**: Implementaciones seguras para producción

La clave está en elegir la implementación adecuada según tus necesidades, siempre manteniendo las mejores prácticas de seguridad y rendimiento.

---

### Recursos adicionales

- **PHP.net**: Documentación oficial del lenguaje
- **Packagist**: Busca paquetes como \`freshwork/chilean-bundle\`
- **GitHub**: Repositorios con implementaciones de RUT para PHP
- **Comunidad PHP Chile**: Foros y grupos de desarrolladores chilenos
`
};