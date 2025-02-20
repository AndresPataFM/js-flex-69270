/* const usuario = {
  // propieadad: valor,
  // propiedad2: valor
  nombre: "Andres",
  edad: 32,
  online: true,
  email: "asd@asd.com",
  presentar: function(){
    return `El usuario ${usuario.nombre}, edad ${usuario.edad} y mail ${usuario.email} ${usuario.online?" ":"no "}esta online`
  },
  hola(){
    return usuario.nombre
  }
}

console.log(usuario)

console.log(usuario.name)

console.log(usuario.presentar()) */

const numeros = [
  12, 4, 28, 33, 456, -23
]

console.log(numeros)

/* console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3]) */

/* for(let i=0; i<numeros.length; i++){
  console.log(numeros[i])
} */

/* numeros[2] = 7

console.log(numeros[2])
console.log(numeros) */

/* numeros[4] = -2

console.log(numeros)

numeros[7] = 66

console.log(numeros)

// delete numeros[3] // NUNCA USEN DELETE VAN A METER LA PATA

console.log(numeros) */


/* 
funcion agregarElemento(array, elementoAAgregar){
  const limiteLength = 4

  si(array.length < limiteLength){
    agrego el elemento a; array
  } sino {
    no lo agrego y muestro alerta con el error
  }

}

*/

const nombres = ["Andrés", "Francisco", "Facundo"]

// nombres.push("Miguel")

// nombres.unshift("Miguel")

// console.log(nombres.shift())

// console.log(nombres.pop())

console.log(nombres)

console.log(nombres.join())

/* console.log(nombres.join(" tambien esta "))
console.log(nombres.join(""))
console.log(nombres.join("-")) */
// console.log(nombres.indexOf("Francisco"))
// console.log(nombres.indexOf("Facundo"))
// console.log(nombres.indexOf("Miguel"))

console.log(nombres)


// const numeritos = [1,2,3,5,4,5,6]

const numeritos = [12, 4, 33 ,115]

console.log(numeritos)
/* console.log(numeritos.indexOf(5))
console.log(numeritos.lastIndexOf(5)) */

// numeritos.reverse()

console.log(numeritos)

numeritos.sort()

console.log(numeritos)

const letras = ["ab", "d", "cc", "aae"]

// letras.sort().reverse()

console.log(letras)


function estaAdentro(nombre){
  if(nombres.includes(nombre)){
    estaAdentro = true
  } else{
    estaAdentro = false
  }
  return estaAdentro
}