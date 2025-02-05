/* console.log(!!123)
console.log(!!"asd")
console.log(!!" ")
console.log(!!"0")
console.log(!!{})

console.log(!!null)
console.log(!!undefined)
console.log(!!"")
console.log(!!0)
console.log(!!-0)
console.log(!!0n)
// console.log(!!document.all)


console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(1 && null)
console.log(1 && " ")
console.log(0 && "")

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(1 || null)
console.log(1 || " ")
console.log(0 || "")

console.log(!true)
console.log(!false)

console.log(!0)
console.log(!!0)

console.log(true && !false || false)

console.log("3">2)

// esto marea
console.log("A">"a")

console.log(1 === 1.0)
console.log(1 === 1)

console.log(1.00000000)

console.log(true == 1)
console.log(true == 123)
console.log(true == "true")
console.log("1" == 1)
console.log(" " == 0)
console.log(NaN == NaN)
console.log(NaN === NaN)
console.log(isNaN(123))
console.log(isNaN(NaN))
console.log(isNaN("7"))
console.log(isNaN("asd"))
console.log(isNaN(7))
 */

// let saldo = parseFloat(prompt("Ingrese su saldo en número"))

// if(saldo < 0){
//   alert("Tenes saldo negativo")
// }
/* 
let saludo = confirm("¿Queres un saludo?")

if(saludo){
  console.log("hola")
  console.log("¿Como estas?")
  console.log("Espero que bien")
} */

/* console.log(parseFloat("1.21"))
console.log(parseInt("1.21"))

let edad = parseInt(prompt("Cuantos años tiene"))

// if(edad >= 18){
//   alert("pase")
// } else {
//   alert("usted es menor de edad, detengase")
// } 

if(edad > 17){
  alert("pase")
} else {
  alert("usted es menor de edad, detengase")
}  */
/* 
const numero = 4

const numeroPedido = parseInt(prompt("ingrese un número del 1 al 10 (entero como número)"))
 */
/*
if(numeroPedido === 4){
  console.log("Exito, adivinaste")
} else if(numeroPedido < 1 || numeroPedido > 10){
  console.log("Ingrese un dato válido")
} else if (isNaN(numeroPedido)){
  console.log("Eso no es un número")
}else {
  console.log("Te equivocaste")
}
 */

/* if(isNaN(numeroPedido)){
  console.log("Eso no es un número")
} else if(numeroPedido < 1 || numeroPedido > 10){
  console.log("Ingrese un dato válido")
} else if(numeroPedido === 4){
  console.log("Exito, adivinaste")
} else {
  console.log("Te equivocaste")
}
 */
/* 
if(false){
  console.log(1)
} else if(true){
  console.log(2)
} else{
  console.log(3)
} */

// En un apartamento hay 6 inquilinos, 2 viven en el mismo cuarto, crea un algoritmo con switch para que nuestra máquina pueda con el nombre dado, decirle a que cuarto/piso ir

/* let nombre = prompt("diga su nombre").toLowerCase();

switch (nombre) {
  case "andres":
    alert("1A");
    break;
  case "diana":
    alert("1B");
    break;
  case "jaime":
    alert("Hola Jaime")
  case "juan":
    alert("2A");
    break;
  case "laura":
    alert("2B");
    break;
  case "matilda":
    alert("3");
    break;
  default:
    alert("Usted no vive aqui");
}
 */
/* 
for(let i=0; i<=5; i=i+1){
  console.log("Este es i:", i)
}


for(let i=0; i<=5; i+=1){
  console.log("Este es i:", i)
}


for(let i=0; i<=5; i++){
  console.log("Este es i:", i)
} */

/* for(let i=0; i<=5; i=i+2){
  console.log("Este es i:", i)
}


for(let i=0; i<=5; i+=2){
  console.log("Este es i:", i)
}


for(let i=0; i<=5; i++){
  console.log("Este es i:", i)
} */

/* let repetir = true
let contador = 0

while(repetir){
  console.log(`Iteraste ${++contador} veces`)
  repetir = confirm("Deceas iterar otra vez?")
}
 */
/* 
let numero = Number(prompt("Ingrese un número"))

while(isNaN(numero)){
  numero = Number(prompt("Ingreso un tipo de dato incorrecto, por favor ingrese un número"))
} */

/* let saludo = false;
let despedida = false;

while (saludo) {
  alert("¡HOLA!😀");
  saludo = confirm("¿Otro saludo?");
}

do {
  alert("¡Chau!😥");
  despedida = confirm("¿Otra despedida?");
} while (despedida); */


let login = false
let pass = "1234"
let intentos = 0

do{
  let passIngresada = prompt("Ingrese su contraseña")
  intentos++
  if(passIngresada === pass){
    login = true
    alert("Contraseña correcta")
  } else {
    alert("Contraseña equivocada")
    alert(`Le quedan ${3-intentos} intentos`)
  }

} while(!login && intentos < 3)

if(login){
  alert("Bienvenido a la página")
}