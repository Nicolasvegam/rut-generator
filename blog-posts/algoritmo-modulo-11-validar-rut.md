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