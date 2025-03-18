// Los get
// find
const lista = document.getElementById("lista")

// console.log(lista)
// console.dir(lista)

// filter
const rojos = document.getElementsByClassName("rojo")
// console.log(rojos)

// filter
const todosLosli = document.getElementsByTagName("li")
// console.log(todosLosli)

// Los query

// find
const tituloPpal = document.querySelector("#titulo-ppal")
console.log(tituloPpal)
const rojito = document.querySelector(".rojo")
// console.log(rojito)
// console.log(document.querySelector("#lista").children)

// const segundo = document.querySelector(".rojo.azul")
const segundo = document.querySelector("li.rojo")
// console.log(segundo)


// filter
const azules = document.querySelectorAll(".azul")
// console.log(azules)

// Modificarlos

console.dir(tituloPpal)
tituloPpal.textContent = "Modificado con JS"
tituloPpal.classList.add("verde")

// inner html

const cartaBalanca = document.getElementById("carta-blanca")

const textitoInterno = "hola soy un gatito y no te dejo dormir"
cartaBalanca.innerHTML = `<img width="200px" src="https://images.unsplash.com/photo-1690214141978-3a038a437dec?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2F0aXRvJTIwZW4lMjBsYSUyMGNhbWF8ZW58MHx8MHx8fDA%3D" onclick="alert('Porque me estas usando, vas a perder puntos en la entrega, me quieren tanto como el var')"  alt="gatito">
<p>${textitoInterno}</p>`

// create element

const textoAlFinal = document.createElement("p")
textoAlFinal.classList.add("verde")
textoAlFinal.classList.add("grande")
textoAlFinal.innerText = "Hola fui generado enteramente con JS"

console.log(textoAlFinal)


const nuevaImagen = document.createElement("img")
nuevaImagen.src = "https://www.zooplus.es/magazine/wp-content/uploads/2018/04/fotolia_169457098.jpg"
// append

cartaBalanca.appendChild(textoAlFinal)
cartaBalanca.appendChild(nuevaImagen)


textoAlFinal.id ="soyEspecial"


// Eventos

/* nuevaImagen.onclick = ()=>{alert("Miau")}
nuevaImagen.onclick = function(){
  nuevaImagen.width = 800
} */

nuevaImagen.addEventListener("click", ()=>{
  alert("Miau")
} )
nuevaImagen.addEventListener("click", ()=>{
  nuevaImagen.width = 800
} )

// formulario

const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", (event)=>{
  event.preventDefault()
  console.log("submit")
  console.log(event.target[0].value)
  console.log(event.target[1].value)
  console.log(event.target[2].value)

})

formulario.addEventListener("submit", (event)=>{
  event.preventDefault()
  const nombre = document.getElementById("nombre").value
  const telefono = document.getElementById("telefono").value
  console.log(nombre, telefono)
})