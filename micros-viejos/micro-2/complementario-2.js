// Desafíos complementarios
// Actividad 01:
/* 
Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
número es par o impar. 
*/

/* let numero = parseInt(prompt("Ingrese un número"))

if(numero%2 === 0){
  alert(`El número ${numero} es par`)
} else {
  alert(`El número ${numero} es impar`)
} */



// Actividad 02:
/* 
Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir". 
*/

let salir = ""

while(salir!=="salir"){
  let numero = parseInt(prompt("Ingrese un número a evaluar si es par"))

  if(numero%2 === 0){
    alert(`El número ${numero} es par`)
  } else {
    alert(`El número ${numero} es impar`)
  }
  salir = prompt("desea evaluar otro número? De lo contrario ingrese 'salir'").toLocaleLowerCase()
}