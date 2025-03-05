/* 

Crear en JS una clase con el nombre hamburguesa
En su constructor define "nombre", "precio","ingredientes" y "número de combo"

("Krusty Burger", 150.00, ['Carne', 'Queso'], 1)
("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2)
("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3)
("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso',
'Aderezo'], 4)
("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5)
("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6)
("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7)
("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8)

Almacena las instancias de la clase en un array de objetosllamado 'hamburguesas', utilizando el método push().
Ten presente que el precio debe ser un valor numérico y puede contener decimales (2). El número de combo también es numérico y debe ser un número entero. Por último, los ingredientes de cada hamburguesa deben estar contenidos en un array de elementos.

*/

const hamburguesas = []

class Hamburguesa{
  constructor(nombre, precio, ingredientes, nroCombo){
    this.nombre = nombre
    this.precio = precio
    this.ingredientes = ingredientes
    this.nroCombo = nroCombo
    hamburguesas.push(this)
  }
}

new Hamburguesa("Krusty Burger", 150.00, ['Carne', 'Queso'], 1)
new Hamburguesa("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2)
new Hamburguesa("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3)
new Hamburguesa("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso',
'Aderezo'], 4)
new Hamburguesa("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5)
new Hamburguesa("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6)
new Hamburguesa("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7)
new Hamburguesa("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8)
new Hamburguesa("Alitas de algo", 125.00, ['Espinaca', 'Soja'], 8)

console.table(hamburguesas)

function buscarNombreCombo(palabra){
  const encontrado = hamburguesas.find(hamburguesa=>{
    const combo = hamburguesa.nombre.toLowerCase()
    const bool = combo.includes(palabra.toLowerCase())
    return bool
  })
  if(encontrado){
    alert(`El combo encontrado es: ${encontrado.nombre}`)
    console.log(encontrado.nombre)
    return encontrado.nombre
  } else {
    console.warn("No existe un combo con dicha palabra en su nombre.")
  }
}

const resultadoalitas = buscarNombreCombo("alitas")

console.log(resultadoalitas)