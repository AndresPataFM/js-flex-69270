/* 
Actividad práctica
  Crea un algoritmo utilizando un ciclo

Consigna.

  Tomando como base los ejemplos de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.

Aspectos a incluir

  Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.

Sugerencias

  Usamos la instrucción for para repetir un número fijo de veces. Mientras que usamos while cuando queremos repetir algo hasta que se deje de cumplir una condición.

Ejemplo

Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces

¿Cómo te resultó el conte */


let salir = ""

while(salir!=="salir"){
  const numero = parseInt(prompt("Ingrese un número a evaluar si es par"))

  if(numero%2 === 0){
    alert(`El número ${numero} es par`)
  } else {
    alert(`El número ${numero} es impar`)
  }
  salir = prompt("desea evaluar otro número? De lo contrario ingrese 'salir'").toLocaleLowerCase()
}