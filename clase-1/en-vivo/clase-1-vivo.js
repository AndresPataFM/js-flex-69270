// console.log("Funciono")
// var soyFeo = "No me usen"
// var soyFeo = 123

// dejar
let usuario = "Miguel"
// let usuario = 123 no permite tener 2 variables con el mismo nombre
console.log("usuario: ",usuario)

// reasignar
usuario = "Andrés"

// constante
const dni = 45456456
// las constantes no permiten reaccionar
// dni = 123123

let numero = 10 + 2 * 7

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence

const pedirUsuario = prompt("Ingrese su usuario")
// let confirmar = confirm("si o no")

const texto = "El usuario ingresado es: " + pedirUsuario

alert(texto)

console.log("usuario: ",usuario)

const dijo = 'Andres dijo "Hola"'

// const introducir = `Hola ` + usuario
const introducir = `Hola ${usuario}`