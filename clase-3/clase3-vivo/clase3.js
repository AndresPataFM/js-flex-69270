let nombre = ""

function saludar(){
  nombre = prompt("Por favor ingrese su nombre") ?? "Anónimo"
  alert(`¡Bienvenido ${nombre}!😁`)
}

function despedir(){
  alert(`chau ${nombre}`)
}

/* saludar()
despedir() */

/* function exponente(){
  const numero = Number(prompt("Ingrese el número base"))
  const potencia = parseInt(prompt("Ingrese el número de la potencia"))
  let rta = 1 
  if(potencia === 0){
    // frenamos
  } else{
    for(let i = 0; i < potencia; i++){
      rta *= numero
    }
  }
  alert(rta)
} */

/* function exponente(){
  const numero = Number(prompt("Ingrese el número base"))
  const potencia = parseInt(prompt("Ingrese el número de la potencia"))
  let rta = 1 
  if(potencia === 0){
    return 1
  }else if(potencia<0){
    alert("No es tan avanzado este programa")
    return NaN
  }else{
    for(let i = 0; i < potencia; i++){
      rta *= numero
    }
  }
  return rta
} */


// let pregunta1 = exponente(3,4)

function exponente(base, potencia){
  console.log("base", base)
  console.log("potencia", potencia)
  let rta = 1 
  if(potencia === 0){
    return 1
  }else if(potencia<0){
    alert("No es tan avanzado este programa")
    return NaN
  }else{
    for(let i = 0; i < potencia; i++){
      rta *= base
    }
  }
  console.log("rta", rta)
  return rta
}


/* let pregunta1 = exponente(3,4)
let pregunta2 = exponente(2,5)
let pregunta3 = exponente(7,2)
let pregunta4 = exponente(5,5)
let pregunta5 = exponente(10,3) */

// exponente()
// exponente(3, "a")

/* const pregunta1 = 1
const numero = 3
const potencia = 4
if(potencia === 0){
  // frenamos
} else{
  for(let i = 0; i < potencia; i++){
    potencia1 *= numero
  }
}
 */


/* function pedirNombre(){
  let nombre = prompt("Por favor ingrese su nombre") ?? "Anónimo"
  return nombre
}

const usuario1 = pedirNombre()
const usuario2 = pedirNombre()
const usuario3 = pedirNombre()
const usuario4 = pedirNombre()
const usuario5 = pedirNombre()
const usuario6 = pedirNombre() */


console.log(1)

// console.log(online) // Error por acceder a la variable antes de declararla
let online = true
console.log(online)


/* console.log(suma(7,4)) // funciona gracias a hoisting

function suma (a, b){
  return a+b
}

console.log(suma(4,7)) */

/* function suma (a, b){
  return a+b
}

console.log(suma(4,7))

console.log(suma)
suma = 25+4
console.log(suma)

console.log(suma(4,7)) */

// función anónima
/* const suma = function (a, b){
  return a+b
}

console.log(suma(4,7))

console.log(suma)
// suma = 25+4
console.log(suma)

console.log(suma(4,7)) */

/* 4 + 7 es igual a 11
2 + 3 es igual a 5
11 + 9 es igual a 20
7 + 7 es igual a 14 */
// 4 + 7 = 11


/* const suma = function (a, b){
  return a+b
} */

/* const suma = (a,b) => {
  return a+b
}


console.log(suma(2,3))
 */

const suma = (a,b) => a+b

console.log(suma(2,3))



/* const alCuadrado = (a)=>{
  return a*a
} */

// const alCuadrado = a => {
//   return a*a
// }

const alCuadrado = a => a*a


console.log(alCuadrado(7))






















































exponente()