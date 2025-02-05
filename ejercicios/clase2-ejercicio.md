# Propuestas de ejercicios para la clase 2

Te contrataron para ayudar a automatizar las compra de entradas de cine, para ello debes desarrollar un algortimo que sea capaz de identificar cuanto tiene que pagar por ticket un usuario. Los criterios en consideración al precio son:

* Precio base del boleto en pesos
  * General 2d: 8400
  * General 3d: 10000
  * Menores de 13 (inclusive) y mayores de 65  (inclusive): 6000
* Días de descuento: lunes, martes y miércoles hay un descuento del 50%
* Si ingresan el código de descuento "PROMO" hay un descuento de 1000$ en cada ticket

Orden de preguntas a realziar:
1. ¿Cuantas entradas desea comprar?
2. ¿Para función 2d o 3d? Ingrese 2 para 2d y 3 para 3d.
3. Ingrese el código de descuento en mayúsculas si lo posee, tiene 3 intentos, si apreta cancelar se entiende que no tiene uno.
4. Ingrese el día de la película representado por un número 0-domingo, 1-lunes, 2-martes, 3- miércoles, 4-jueves, 5-viernes, 6-sábado, 7-domingo.
5. Ingrese uno a uno la edad de los que van a utilizar los boletos.

Al finalizar las preguntas se mostrará un ticket de compra con subtotal por cada ticket en un alert único.

Entrada y salida:
* Las entradas se manejan exclusivamente con prompt
* Las salidas se manejan exclusivamente por alert

Herramientas útiles:
- parseInt(numero)
- null === null es true
- if statement
- ciclo for
- string templates con ``