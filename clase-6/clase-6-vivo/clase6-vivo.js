// const FECHA_NUEVO_MILENIO = "01-01-2000"

// Funcion de Orden superior - RETURN

function dx(caras){
  return function(){
    return Math.floor(Math.random()*caras)+1
  }
}

/* const d6 = dx(6)
const d20 = dx(20)

console.log(d6)
console.log(d6())
console.log(d6())
console.log(d6()) */

class Dado{
  constructor(caras){
    this.caras=caras
  }
  tirar(){
    return Math.floor(Math.random()*this.caras)+1
  }
}

const objD6 = new Dado(6)
const objD6v2 = new Dado(6)

/* console.log(objD6)
console.log(objD6.tirar()) */

//  !6 = 6*5*4*3*2*1 = 720

function calcularFactorial(numero){
  if(numero<=1) return 1
  return numero * calcularFactorial(numero-1)
}

// console.log(calcularFactorial(6))

// Func orden superior - parámetro

function mostrarProducto(producto){
  console.log("Hola les presento este producto: ", producto)
}

class Producto{
  constructor(nombre,precio){
    this.nombre = nombre
    this.precio = precio
  }
}

const productos = [new Producto("manzana", 100), new Producto("banana", 150), new Producto("kiwi", 200), new Producto("papa", 50)]

console.log(productos)

function aplicarTodosProductos(funcion){
  for(let i=0; i<productos.length;i++){
    funcion(productos[i])
  }
}

/* function mostrarTodosProductos(){
  for(let i=0; i<productos.length;i++){
    mostrarProducto(productos[i])
  }
} */

// mostrarTodosProductos()

function actualizarPrecio(producto){
  // producto.precio = producto.precio*2
  producto.precio *= 2
}

/* aplicarTodosProductos(mostrarProducto)
aplicarTodosProductos(actualizarPrecio)
aplicarTodosProductos(mostrarProducto) */

// Este no es destructivo
productos.forEach(elemento=>{
  mostrarProducto(elemento.nombre)
})
productos.forEach(mostrarProducto)

/* // Este si lo es
productos.forEach(elemento=>{
  actualizarPrecio(elemento)
}) */

const resultadoFind = productos.find(function(elemento){
  const verificar = elemento.precio <= 120
  return verificar
})

/* const resultadoFilter = productos.filter(function(elemento){
  const verificar = elemento.precio <= 120
  return verificar
}) */
const resultadoFilter = productos.filter(function(elemento){
  const verificar = elemento.nombre.length === 4
  const validarPrecio = elemento.precio<=120
  return verificar && validarPrecio
}) 

/* const resultadoFilter = productos.filter(function(elemento){
  const verificar = elemento.nombre.length === 4
  let validacion1 = true
  if(boton1Activado){
    // revisar si se entrega mañana, si no, lo cambio a false
  }
  const validarPrecio = elemento.precio<=120
  return verificar && validarPrecio
}) */

const resultadoSome = productos.some(function(elemento){
  const verificar = elemento.precio <= 170
  return verificar
})


console.log(resultadoFind) // Mostrame algo que cumpla
console.log(resultadoFilter) // Mostrame todo lo que cumpla
console.log(resultadoSome) // Decime si algo cumple

const productosCaros = productos.map(prodBase=>{
  // Uso la clase para romper referencia y no modificar el original
  const prod = new Producto(prodBase.nombre, prodBase.precio*2)
  return prod
})

console.log(productos)
console.log(productosCaros)

/* const numerosInicial = [1,2,3,4]
const numerosFinal = numerosInicial.map(num=>num*2)

console.log(numerosInicial)
console.log(numerosFinal) */

const carrito = []

class ProductoCarrito{
  constructor(producto, cantidad){
    this.nombre = producto.nombre
    this.precio = producto.precio
    this.cantidad = cantidad
  }
  total(){
    return this.precio * this.cantidad
  }
}

function agregarCarrito(producto, cantidad){
  const prodCarr = new ProductoCarrito(producto,cantidad)
  carrito.push(prodCarr)
  // cuando modifico el carrito, lo guardo en storage
}

agregarCarrito(productos[2], 3)
agregarCarrito(productos[1], 12)
agregarCarrito(productos[1], 3564567)
agregarCarrito(productos[3], 125)
agregarCarrito(productos[0], 2435)


console.log(carrito)

const calcularTotal = ()=>{
  // const total = carrito.reduce(funcion, valorInicial)
  // const total = carrito.reduce(funcion, 0)
  // const total = carrito.reduce((acumulador, prodCarrito)=>{}, 0)
  const total = carrito.reduce((acumulador, prodCarrito)=>{
    // return acumulador + prodCarrito.precio * prodCarrito.cantidad
    return acumulador + prodCarrito.total()
  }, 0)
  console.log("El total es de: ", total)
  // cuando el usuario FINALIZA la compra, borro el contenido del carrito
}

calcularTotal()

console.log(productos)


productos.sort((prod1, prod2)=>{
  // return prod1.precio-prod2.precio //ordena menor a mayor
  // return prod2.precio-prod1.precio //ordena mayor a menor
  if(prod1.nombre.length>prod2.nombre.length){
    return 1
  } else if(prod1.nombre.length<prod2.nombre.length){
    return -1
  } else{
    return 0
  }
})


console.log(productos)