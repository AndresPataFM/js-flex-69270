const animal = {
  nombre: "Michifus",
  especie: "gato",
  edadMeses: 34,
  maullar: function(){
    alert("Miau")
  }
}

// console.log(animal.genero)
/* animal.edadMeses
animal["nombre"]

animal.maullar()
animal["maullar"]() */
/* 
animal.genero = "femenino"

animal["castrado"] = false

// console.log(animal.genero)

animal["No se como llamar esto"] = 24

console.log(animal) */

function crearPerro(nombre, edad, castrado){
  const perro = {
    nombre:nombre,
    edad:edad,
    castrado:castrado
  }
  return perro
}

const firulais = crearPerro("Firulais", 3, true)

// console.log(firulais)

function Perro(nombre, edad, castrado){
  this.nombre = nombre
  this.edad = edad
  this.edadMeses = edad*12
  this.castrado = castrado
  this.chicoBueno = true
  this.ladrar = ()=>{console.log("Guau")}
}

const firulais2 = new Perro("Firulais", 3, true)
console.log(firulais2)


class Gato{
  constructor(nombre, edad, castrado){
    this.nombre = nombre
    this.edad = edad
    this.castrado = castrado
  }
  maullar(){
    alert("Miau")
  }
}

const gatos = []

const crearGatos = ()=>{
  const nombre = prompt("ingrese el nombre del gato")
  const edad = parseInt(prompt("Ingrese su edad"))
  const castrado = confirm("esta castrado?")
  const gatito = new Gato(nombre, edad, castrado)
  gatos.push(gatito)
}

// crearGatos("Malaquias", 10, true)
// crearGatos("Princesa", 1, false)
// crearGatos("Krishna", 14, true)
// crearGatos("Pucara", 7, true)

/* crearGatos()
crearGatos()
crearGatos()
crearGatos() */


const numero = 42
console.log(typeof numero)

// localStorage.setItem("numerito", numero)

// localStorage.setItem("perrito", firulais2)


const datoConseguido = localStorage.getItem("numerito")

/* console.log(datoConseguido)
console.log(typeof datoConseguido)

// convertimos el dato a guardar a JSON
const datoIntermedio = JSON.stringify(firulais2)
console.log(firulais2)
console.log(datoIntermedio)
// Guardamos el objeto JSON
localStorage.setItem("perrito", datoIntermedio)
 */

// traer dato de storage
const traerPerro = localStorage.getItem("perrito")
console.log(traerPerro)
// convertir el json a js
const datoUsable = JSON.parse(traerPerro)
console.log(datoUsable)

// Lo pasamos por la clase
const datoFinal = new Perro(datoUsable.nombre, datoUsable.edad, datoUsable.castrado)
console.log(datoFinal)

datoFinal.ladrar()
// console.log(String(firulais2))

// JSON
// Javascript Object Notatio

const firulais3 = JSON.parse(JSON.stringify(firulais2))
firulais3.edad = 7

console.log(firulais3)
console.log(firulais2)