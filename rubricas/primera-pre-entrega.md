# Primera Pre-Entrega

## Conceptos a incluir

Comienza a crear la estructura inicial de tu proyecto integrador. Deberás:
- Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
- Armar la estructura HTML del proyecto.
- Incorporar un algoritmo condicional
- Incorporar un algoritmo con ciclo.
- Se incorpora 1 array
- Utilizar funciones para realizar esas operaciones.
- El simulador debe de poder funcionar sin tener que ejecutar funciones en consola.
- Las interacciones se dan mediante
  * Input: prompt (obligatorio usar 1 prompt) y/o confirm.
  * Output: alert / console.log (al menos 1 de los 2)

## Prohibido
* Uso de React, Angular u otro framework de Javascript (cosas como bootstrap para estilos esta bien).
* Manipulación del DOM. Al no saber todavía las buenas prácticas estos proyectos son muy propensos a aplicar practicas que se penalzian.
* Entregar un HTML sin Js linkeado.
* Tener que invocar funciones en consola para que funcione el simulador, para que el simulador funcione el usuario NUNCA debe de tener que escribir código (si es válido que vea salidas en consola mediante console.log)

## Criterios de Evaluación

### Estructura HTML y Archivo Js
_La estructura HTML está completa y ejecutada con buenas prácticas o utiliza el el starter template de Bootstrap u otro framework para el uso adecuado de HTML5 *. El archivo JS está correctamente referenciado en el HTML._
* La estructura HTML está completa y ejecutada con buenas prácticas o utiliza el el starter template de Bootstrap u otro framework para el uso adecuado de
HTML5. _Mientras no usen etiquetas sin cerrar o pongan elementos fuera del body esta bien_
* El archivo JS está correctamente referenciado en el HTML (sea al final del body o mediante el atributo defer).

### Algoritmos
_Se utiliza algoritmo condicional, array y con ciclo (IF, bucles for) de manera óptima , reflejando lo aprendido en clase._
* Se utiliza mínimamente 1 algoritmo condicional (if/if else/else if/switch) de manera óptima, reflejando lo aprendido en clase. _No usar if(true), si se puede if(variable) y que la variable===true debido a algoritmos previos._
* Se utiliza mínimamente 1 ciclo (for/while/do while) de manera óptima, reflejando lo aprendido en clase. _Idem, while(true) esta penalizado. Similarmente, que la única salida que tenga un ciclo sea un break es mala práctica y no abusar del continue. Ciclos infinitos estan MUY mal._
* Se evalúa el uso de input/output del usuario (ver consignas arriba). _Usen las herramientas mencionadas como correctas, alert yconsole.log para salida y prompt/confirm para entrada. No usen DOM._
* Se utiliza 1 array de manera adecuada con buenas prácticas. _Que el tipo de dato dentro del array sea consistente y de ser aplicable, como en objetos, con la misma estructura._
* Se aplican buenas prácticas con variables. _No usan var, aplican const donde sea posible, buena nomenclatura, etc._

### Funciones

_Los nombres de las funciones son claros y dan a entender que acción realizan. Se emplea la estructura correcta para el armado de las mismas. Crea funciones dinámicas de manera correcta. Generan un resultado correcto cuando se ejecutan._
* Utilizar nomenclatura en las funciones intentando que la primer palabra sea un verbo. _camelCase y snakecase son nomenclaturas válidas_
* Mostrar 1 uso de parametros propios.
* Mostrar 1 uso de return propio.
* No abusar del hoisting al invocar funciones o su orden de declaración.
* Si o sí crear 1 función propia que no sea una función suma(a,b){return a+b} que sería más facil que sea una línea de código que función.

### Extra

* Buenos comentarios de código.
* Indentación consistente y que muestra relación padre/hijo.
* No tener errores de consola causado por su js.