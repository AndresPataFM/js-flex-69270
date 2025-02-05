# Segunda Pre-Entrega

## Objetivos Generales
- Codificar la funcionalidad inicial del simulador. 
- Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.

## Objetivos Específicos
- Capturar la interacción del DOM a través de eventos.
- Guardar y recuperar información de localstorage tales como objetos, arrays de objetos
- Crear funciones y/o métodos para realizar operaciones como crear objetos productos, renderizar objetos en el DOM.
- Efectuar una salida, que es el resultado de los datos procesados en el DOM.

Se avanza en el proyecto implementando DOM y objetos. Deberás:
- Tener bien linkeado el Js según lo indicado en la primera entrega.
- Se utiliza el storage de una manera coherente.
- Se utilizan funciones, arrays, objetos y métodos de arrays.
- El simulador debe de poder funcionar sin tener que ejecutar funciones en consola.
- Las interacciones se dan mediante DOM

## Prohibido
* Uso de React, Angular u otro framework de Javascript (cosas como bootstrap para estilos esta bien).
* Entregar un HTML sin Js linkeado.
* Tener que invocar funciones en consola para que funcione el simulador, para que el simulador funcione el usuario NUNCA debe de tener que escribir código (si es válido que vea salidas en consola mediante console.log)

## Criterios de Evaluación

### Funcionalidad
_Se simula un flujo de trabajo en términos de entrada,proceso y salida. La funcionalidad  es apropiada al contexto del simulador._
* Tiene que ser un proceso COMPLETO (ej: si es un e-commerce, se tiene que poder finalizar la compra)
* No tener Errores en consola.

### Interactividad
_Se capturan una o más entradas ingresadas por el usuario con prompt(). Se efectúan una o más salidas con alert() o console.log(). Las salidas son coherentes en relación a los datos ingresados._
(El texto de coder tiene error)
* Uso correcto del DOM
  * NO SE UTILIZAN EVENTOS MEDIANTE ATRIBUTO HTML SEA DESDE EL LADO DEL HTML O DEL JS
* Se penaliza el uso de: alert, prompt, confirm, console.log/table (esta perfecto usar console para testear pero nunca tiene que estar en la versión entregada)
  * console.warn para cosas específicas de programador está bien.
* utilizar minimamente 1 evento.

### Escalabilidad
_Se declaran funciones con parámetros para definir instrucciones con una tarea específica. Se emplean arrays para agrupar valores relacionados. Se definen objetos con propiedades y métodos relevantes al contexto._
Uso de:
* arrays (con sus métodos)
* objetos (preferiblemente a partir de clases con propiedades y métodos coherentes)
* funciones propias (con parámetros que son más reutilizables)

Opcional pero se considera positivamente:
* métodos de objetos
* clases


### Integridad
_Se define el código JavaScript en un archivo .js, referenciándolo correctamente desde el HTML. Se emplea el uso de storage y JSON correctamente_
Uso de:
* Buenas prácticas
* Condicionales
* Ciclos
* Storage (tanto guardar como obtener datos)


### Legibilidad
_Los nombres de variables. funciones y objetos son significativos para el contexto. Las instrucciones se escriben de forma legible y se emplean comentarios oportunos. El código está correctamente estructurado, alineado e indentado._
* Nombres expresivos.
* Se respetan las reglas de nomenclatura.
* Se utilizan comentarios para aclarar el código donde se vea necesario.
* Hay un orden de declaración bueno (mínimamente que no se invoquen funciones antes de declararlas).

### Extra

* Consideren crear un README.md que describa al proyecto y las herramientas utilizadas.
* Consideren utilizar git/github.

## Calificación

Cada criterio puede tener el aspecto alcanzado de:
* Realizado (20 pt)
* Incompleto (10 pt)
* No Realizado (0 pt)

En total se obtiene:
* Óptimo (80pt-100pt)
* Correcto (51pt-79pt)
* Bajo (0pt-50pt)