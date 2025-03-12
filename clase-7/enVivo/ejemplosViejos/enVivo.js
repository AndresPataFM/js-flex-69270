const string = "hola, \n mi nombre es"

// Procedimiento
// 🔶 Encontrar Nodos 🔶
// 🔶 Modificar Nodos 🔶

// o

// 🔶 Crear Nodos 🔶
// 🔶 Modificar Nodos 🔶
// 🔶 Agregarlo al DOM 🔶


// 🔶 Encontrar Nodos 🔶
// 🔹 document.getElementById 🔹
// array.find
const encontrame = document.getElementById("encontrame")

// console.log(encontrame)
// console.dir(encontrame)

// const noEstoy = document.getElementById("afhasfd")
// console.log(noEstoy)


// // 🔹 document.getElementsByClassName 🔹
// // array vivo => Nunca lo modifiquen mientras lo recorren
// // array.filter
const rojos = document.getElementsByClassName("rojo")
// console.log(rojos)

// // puede buscar combinación de clases
// const rojosCursivos = document.getElementsByClassName("cursiva rojo")
// console.log(rojosCursivos)

// // // 🔹 document.getElementsByTagName 🔹
const divs = document.getElementsByTagName("div")
// console.dir(divs)

// // // 🔹 document.querySelector 🔹
// // como find, devuelve el primero que cumpla
// const queryRojo = document.querySelector(".rojo")
// // sin espacios
// const queryRojo = document.querySelector(".rojo.verde")
const queryRojo = document.querySelector(".rojo.cursiva")
// console.log(queryRojo)

// const queryId = document.querySelector("#encontrame")
// console.log(queryId)

// // // 🔹 document.querySelectorAll 🔹
const queryRojos = document.querySelectorAll("ul")
console.log(queryRojos)

// // 🔶 Modificar Nodos 🔶
console.dir(encontrame)
console.dir(encontrame.id)
console.dir(encontrame.className)
console.dir(encontrame.classList)
// encontrame.className = "cursiva carta rojo"

encontrame.innerHTML = `
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Collage_of_Six_Cats-02.jpg/250px-Collage_of_Six_Cats-02.jpg" />
<ol>
    <li>Primero</li>
    <li>Segundo</li>
    <li>Tercero</li>
</ol>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolorem sapiente iure laboriosam, omnis sed aspernatur hic architecto quae cupiditate adipisci incidunt nobis delectus voluptates dignissimos tempore deleniti ipsa quam.</p>
`

// encontrame.classList.toggle("verde")
// encontrame.classList.toggle("verde")
// encontrame.classList.toggle("verde")


function abrirCerrarMenu(){
    const menu = document.querySelector("#menu")
    menu.classList.toggle("esconder")
}
/* 
const textito = document.getElementById("textito")
textito.innerText = "hola soy textito"
// const trabajo = document.getElementById("trabajo")

trabajo.innerText = "<div>BIENVENIDO A MI PÁGINA</div>"
// trabajo.innerHTML = "<div>BIENVENIDO A MI PÁGINA</div>" */

/* const title = document.querySelector("title")
console.log(title)
title.innerText = "JS clase 7" */

// // 🔶 Crear Nodos 🔶
const listaDeberes = document.getElementById("listaDeberes")


// metodo bruto
const deberes = ["Terminar el código", "Hacer correcciones", "Preparar la próxima clase", "dormir"]

/* const agregarDeberes = ()=>{
    listaDeberes.innerHTML = ""
    deberes.forEach(deber=>{
        listaDeberes.innerHTML += `<li>${deber}</li>`
    })
} */

/* agregarDeberes()
agregarDeberes()
agregarDeberes() */

const agregarDeberes = ()=>{
    listaDeberes.innerHTML = ""
    deberes.forEach((deber, index)=>{
        const li = document.createElement("li")
        console.log(li)
        li.innerText = deber
        li.id = `deber-${index}`
        listaDeberes.appendChild(li)
    })
}


/* 
const header = document.createElement("header")
header.innerHTML = `
<h1> Página de Prueba </h1>
<nav>
    <ul>
        <li>link</li>
        <li>link</li>
        <li>link</li>
    </ul>
</nav>
`

document.body.insertBefore(header, document.body.children[0]) */

// let numeros = [1,2,3]

// console.log(numeros)
// numeros.push(4)

// numeros = [...numeros, 4, 5]
// console.log(numeros)

let prod = {a:1, b:2}
// console.log(prod)
// prod = {...prod, c:"hola"}
// console.log(prod)

// const elementoCarrito = {...prod, cantidad: 4}
// console.log(elementoCarrito)

// Mas usados
// classlist
// innerHTML
// innerText
// id


// 🔶 Eventos 🔶

// ============
