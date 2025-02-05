# Entrega Final

## Objetivos Generales
Presentarás la página web interactiva en JavaScript que vienes trabajando a lo largo del curso. La misma debe simular distintos procesos. Un “simulador” es un programa que soluciona ciertas tareas, y proporciona al usuario información de valor, de forma coherente y prolija. Utilizarás FETCH y JSON para obtener datos y diversas herramientas de JS como librerías, promises y asincronía para controlar eventos en la interfaz y producir animaciones en respuesta.

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
- Incluir el uso de asincronismo y fetch.
- Utilizar minimamente 1 librería

## Prohibido
* Uso de React, Angular u otro framework de Javascript (cosas como bootstrap para estilos esta bien).
* Entregar un HTML sin Js linkeado.
* Tener que invocar funciones en consola para que funcione el simulador, para que el simulador funcione el usuario NUNCA debe de tener que escribir código (si es válido que vea salidas en consola mediante console.log)

## Requisitos
* Autoría propia/originalidad: Tu trabajo debe ser personal y original y no presentar copia o plagio ni total o parcial de otros trabajos de Coderhouse o de la web. En el caso de haber plagio total, el trabajo no será corregido ni aprobado. En caso de haber una copia parcial en alguna de las partes del trabajo, se te pedirá rehacer dicha parte.
* Entrega con permisos de accesos: El trabajo debe ser entregado con permisos de comentador para que el docente pueda acceder a su visualización. En caso de entregar un link privado o vacío, se debe solicitar al estudiante que entregue con permisos de accesos de comentador para que su trabajo pueda ser corregido        
* Formato solicitado: El trabajo es presentado bajo el formato solicitado (Google slides, Docs, Figma, Adobe XD, etc). En caso de no entregar en el formato solicitado, se debe pedir al estudiante la entrega bajo el formato establecido para la corrección de su trabajo.      

## Criterios de Evaluación

### Funcionalidad
_Se simula uno o más flujo de trabajo en termino de entrada-procesamiento-salida y no se advierten errores de cómputo._
* Tiene que ser un proceso COMPLETO (ej: si es un e-commerce, se tiene que poder finalizar la compra)
* No tener Errores en consola.

### Interactividad
_Se capturan entradas empleando inputs y eventos adecuados. Las salidas son coherentes en relación a los datos ingresados y se visualizan en el HTML de forma asíncrona._
* Uso correcto del DOM
  * NO SE UTILIZAN EVENTOS MEDIANTE ATRIBUTO HTML SEA DESDE EL LADO DEL HTML O DEL JS
* Se penaliza el uso de: alert, prompt, confirm, console.log/table (esta perfecto usar console para testear pero nunca tiene que estar en la versión entregada)
  * console.warn para cosas específicas de programador está bien.
* Utilizar minimamente 1 evento.
* Código asincrónico realiza 1 modificación al DOM
* Se utiliza una librería externa
  * Si no es una de las 3 enseñadas (sweet alert, toastify y luxon) en clase tienen que poner la versión y link a la documentación en el readme.
  * Bootstrap no se considera válido para este criterio.

### Escalabilidad
_Se declaran funciones con parámetros para definir instrucciones con una tarea específica.Se definen objetos con propiedades y métodos relevantes al contexto. Se emplean arrays para agrupar valores y objetos de forma dinámica. El recorrido de las colecciones es óptimo._
Uso de:
* arrays (con sus métodos)
* objetos (preferiblemente a partir de clases con propiedades y métodos coherentes)
* funciones propias (con parámetros que son más reutilizables)

Opcional pero se considera positivamente:
* métodos de objetos
* clases

Se ve negativo:
* Utilizar el HTML como base de datos.

_Esta igual que la anterior_

### Integridad
_Se definen el código JavaScript en un archivo .js, referenciándolo correctamente desde el HTML. La información estática en formato JSON se utiliza adecuadamente, cargandose de forma asíncrona._
Uso de:
* Buenas prácticas
* Condicionales
* Ciclos
* Storage (tanto guardar como obtener datos)
* Fetch (al menos 1)


### Legibilidad
_Los nombres de variables. funciones y objetos son significativos para el contexto, las instrucciones se escriben de forma legible y se emplean comentarios oportunos. El código fuente es ordenado en términos de declaración y secuencia._
* Nombres expresivos.
* Se respetan las reglas de nomenclatura.
* Se utilizan comentarios para aclarar el código donde se vea necesario.
* Hay un orden de declaración bueno (mínimamente que no se invoquen funciones antes de declararlas).

### Extra

* Consideren crear un README.md que describa al proyecto y las herramientas utilizadas.
* Consideren utilizar git/github.
* Si se realiza un fetch adecuadamente.

## Calificación

Cada criterio puede tener el aspecto alcanzado de:
* Óptimo 2pt
* Correcto 1pt
* Bajo 0.5pt
* Nulo 0pt

Se aprueba con 7, si se llega a sacar menos de 7, tienen una chance de re-entrega, tiempo dado por la plataforma y como nota máxima la corrección llegan a 7.

## Periodos
* Entregar: 10 días de corrido.
* Corrección: 20 días corridos.