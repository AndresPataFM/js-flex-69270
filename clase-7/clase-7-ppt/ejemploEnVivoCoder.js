/* const frutas = ['Ananá', 'Banana', 'Durazno', 'Kiwi', 'Manzana', 'Papaya', 'Pera']

const titulo = document.getElementById("titulo")
const listado = document.getElementById("listado")

const cargarDOM = ()=>{
  titulo.textContent = "www.mandafruta.com"

  frutas.forEach(prod=>{
    const li = document.createElement("li")
    li.textContent = prod
    listado.appendChild(li)
  })

}

cargarDOM() */

const frutas = [
  {nombre:'Ananá', precio:123},
  {nombre:'Banana', precio:200},
  {nombre:'Durazno', precio:55},
  {nombre:'Kiwi', precio:4564},
  {nombre:'Manzana', precio:57}
]
const mensajes = document.getElementById("mensajes")
const carritoDOM = document.getElementById("carrito")
const btnComprar = document.getElementById("comprar")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

const agregarCarrito = (prod)=>{
  carrito.push(prod)
  localStorage.setItem("carrito", JSON.stringify(carrito))
  carritoDOM.innerHTML = ""
  carrito.forEach(prodCarr=>{
    const li = document.createElement("li")
    li.textContent = `${prodCarr.nombre} $${prodCarr.precio}`
    carritoDOM.appendChild(li)
  })
  const total = document.createElement("li")
  total.textContent = `Total : $${carrito.reduce((total, prodEnCarr)=> total + prodEnCarr.precio, 0)}`
  carritoDOM.appendChild(total)
}

const comprar = ()=>{
  carrito = []
  localStorage.setItem("carrito", JSON.stringify(carrito))
  mensajes.textContent = "Gracias por su compra"
  carritoDOM.innerHTML = ""
}

const cargarDOM = ()=>{
  titulo.textContent = "www.mandafruta.com"

  frutas.forEach(prod=>{
    const li = document.createElement("li")
    const cartaProducto = document.createElement("div")
    const h3 = document.createElement("h3")
    const p = document.createElement("p")
    const boton = document.createElement("button")
    h3.textContent = prod.nombre
    p.textContent = `${prod.precio}`
    boton.textContent = "comprar"

    boton.addEventListener("click", ()=>{
      agregarCarrito(prod)
    })

    cartaProducto.appendChild(h3)
    cartaProducto.appendChild(p)
    cartaProducto.appendChild(boton)

    li.appendChild(cartaProducto)

    listado.appendChild(li)
  })
  btnComprar.addEventListener("click", comprar)
}

cargarDOM()