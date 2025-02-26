class Gato {
    constructor(nombre, genero, edad){
        this.nombre = nombre
        this.genero = genero
        this.edad = edad
    }
    maullar(){
        console.log("miau")
    }
    // funciona la función flecha pero no es recomendado
    /* mostrarDatos = ()=>{
        console.log(this.nombre)
    } */
    // haganlo así
    mostrarDatos(){
        console.log(this.nombre, this.edad, this.genero)
    }
    cumpleanios(){
        console.log("🎉")
        this.edad++
    }
}

const numerito = 123
const booleano = true
const string = "asd"

const sif = new Gato("Sif", "macho", 0)
console.log(sif)

const aJson = JSON.stringify(sif)

console.log(aJson)

const reconvertido = JSON.parse(aJson)

// al hacer JSON => JS con objetos, se los suele apsar por su constructor

const reconvertirGato = new Gato(reconvertido.nombre, reconvertido.genero, reconvertido.edad)

console.log(reconvertido)
console.log(reconvertirGato)


// localStorage.setItem("numerito", numerito)
// localStorage.setItem("string", string)
// localStorage.setItem("booleano", booleano)
// localStorage.setItem("sif", sif)

function guardarObjeto(clave, objeto){
    const objJSON = JSON.stringify(objeto)
    localStorage.setItem(clave, objJSON)
}

const dato1 = localStorage.getItem("numerito")
const dato2 = localStorage.getItem("string")
const dato3 = localStorage.getItem("booleano")

console.log(dato1, dato2, dato3)
console.log(typeof dato1, typeof dato2, typeof dato3)

// guardarObjeto("Sif", sif)

function conseguirObjeto(clave){
    const objStorage = localStorage.getItem(clave)
    const objetoParseado = JSON.parse(objStorage)
    return objetoParseado
}

console.log(conseguirObjeto("Sif"))

// sessionStorage.setItem("temporal", 1234) 