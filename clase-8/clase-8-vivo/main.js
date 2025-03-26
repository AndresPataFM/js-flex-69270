// const contador = setTimeout(funcion,tiempo)
// Tiempo en ms

/* //primero el sincrónico y luego el asincrónico
console.log(1) // sincrónico
setTimeout(()=>{ // asincrónico
  console.log(2)
},3000)
setTimeout(()=>{ // asincrónico
  console.log(3)
},0)
console.log(4) // sincrónico

// 1432
 */

/* console.log("Tres")
const temporizador = setTimeout(()=>console.log("Ya!"), 3000)
const temporizadorDos = setTimeout(()=>console.log("Dos"), 1000)
const temporizadoruno = setTimeout(()=>console.log("Uno"), 2000)

// console.log(temporizador)

clearTimeout(temporizador) */

const segundero = document.getElementById("segundero")
const btnFrenar = document.getElementById("frenar")

let segundos = 0
segundero.innerText = segundos
const idSegundero = setInterval(()=>{
  segundero.innerText = ++segundos
},1000)

btnFrenar.addEventListener("click",()=>{
  clearInterval(idSegundero)
})

const a = 123
function tirarMoneda(){
  const nroRandom = Math.floor(Math.random()*2)
  if(nroRandom === 0){
    throw "Cruz"
  } else {
    return "Cara"
  }
}


/* 
console.log("Inicio")


try{
  console.log("Hola")
  console.log("como estas")
  console.log("Esta es mi variable a:", a)
  console.log("Esta es mi moneda:", tirarMoneda())
  // console.log("Esta es mi variable b:", b)

  console.log("Espero que te haya gustado")
} catch(error){
  console.error("Mira, esto es un error:", error)
  console.log("Sucedio un error")
} finally{
  // El finally puede no estar
  console.log("Soy inevitable")
}

console.log("Fin") */



// Promesas

// const miPrimerPromesa = new Promise((resolve, reject)=>{
//   const nroRandom = Math.floor(Math.random()*2)
//   if(nroRandom === 0){
//     reject("Cruz")
//   } else {
//     resolve("Cara")
//   }
// })

// try{
//   const miPrimerPromesa = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       const nroRandom = Math.floor(Math.random()*2)
//       if(nroRandom === 0){
//         reject("Cruz")
//         return 1
//       } else {
//         resolve("Cara")
//         return 0
//       }
//     }, 5000)
//   })
//   console.log(miPrimerPromesa)
// }catch(e){
//   consolr.error(e)
// }

const url = "https://pokeapi.co/api/v2/pokemon?limit=151"
const listaDOM = document.getElementById("pokemon")

const pokemon = []

function mostrarPokemons(arrayPokemon){
  listaDOM.innerHTML = ""
  arrayPokemon.forEach(pokemon => {
    const a = document.createElement("a")
    const li = document.createElement("li")
    a.href = pokemon.url
    a.target = "_blank"
    a.textContent = pokemon.name
    li.appendChild(a)
    listaDOM.appendChild(li)
  });
}

// fetch(url)
// .then(respuesta=>{
//   // una vez que consigo los datos en forma de json, los retorno en forma de JS
//   console.log(respuesta)
//   return respuesta.json()
// })
// .then(rta=>{
//   // utilizo los datos en forma de JS
//   console.log(rta)
//   rta.results.forEach(poke=>pokemon.push(poke))
// })
// .catch(e=>{
//   console.warn(e)
// })
// .finally(console.log("siempre"))
// mostrarPokemons(pokemon)

// console.log("fin")

async function traerPokemon(){
  try{
    const datosJSON = await fetch(url)
    const datosUtilizables = await datosJSON.json()

    // Aca pongo toda la lógica de usar los datos
    console.log(datosUtilizables)
    datosUtilizables.results.forEach(poke=>pokemon.push(poke))
    mostrarPokemons(pokemon)
  }catch(e){
    console.error("Hubo un error",e)
  }
}

traerPokemon()

/* const listaDOM = document.getElementById("pokemon")
const url = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151"

function mostrarPokemons(arrayPokemon){
  listaDOM.innerHTML = ""
  arrayPokemon.forEach(pokemon => {
    const a = document.createElement("a")
    const li = document.createElement("li")
    a.href = pokemon.url
    a.target = "_blank"
    a.textContent = pokemon.name
    li.appendChild(a)
    listaDOM.appendChild(li)
  });
}


// fetch(url).then(rta=>{
//   return rta.json()
// }).then(respuesta=>{
//   console.log(respuesta)
//   mostrarPokemons(respuesta.results)
// }).catch(e=>
//   console.warn("Fetch fallido")
// )

async function cargarPokemon(){
  try{
    // promesa inicial
    const datosJSON = await fetch(url)
    // promesa para cambiar a json
    const datos = await datosJSON.json()
    // agarro lo que uso de los resultados
    const listaPoke = datos.results
    mostrarPokemons(listaPoke)
  }catch(e){
    console.warn(e)
    listaDOM.innerText = "ERROR"
  }
}

cargarPokemon() */