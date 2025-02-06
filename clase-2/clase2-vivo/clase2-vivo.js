/* console.log(Boolean(0))
console.log(Boolean(1))
// console.log(Boolean(2))

console.log(Number(true))
console.log(Number(false))

// Coerción a booleano

console.log(!!"0")

// sos mayor de edad?

let edad = 18

const mayorEdad = edad >= 18
const mayorEdad2 = edad > 17

console.log(mayorEdad)
console.log(mayorEdad2)

const comp1 = 1 != "1"
const comp2 = !(1=="1")
const comp3 = 1=="1"

console.log(comp1)
console.log(comp2)
console.log(comp3) */

// const recreo = 1
const recreo = false
const noManija = false

/* if(recreo && noManija){
  alert("hay recreo")
} */

// if(recreo){
//   alert("hay recreo")
// }

// if(recreo && noManija){
//   alert("hay recreo")
// } else {
//   alert("No hay recreo")
// }

// if(recreo && noManija){
//   alert("hay recreo")
// } else if(!noManija){
//   alert("Estamos muy manijas como para tener recreo")
// } else {
//   alert("No hay recreo")
// }

// if(recreo && noManija){
//   alert("hay recreo")
// } else if(!recreo){
//   alert("No hay recreo progamado")
// } else {
//   alert("Estamos muy manijas como para tener recreo")
// }

// if(recreo && noManija){
//   alert("hay recreo")
// } else if(!recreo){
//   alert("De verdad no hay")
// } else if(!recreo){
//   alert("No hay recreo progamado")
// } else {
//   alert("Estamos muy manijas como para tener recreo")
// }

// En un apartamento hay 6 inquilinos, 2 viven en el mismo cuarto, crea un algoritmo con switch para que nuestra máquina pueda con el nombre dado, decirle a que cuarto/piso ir


/* let nombre = prompt("diga su nombre").toLowerCase()

switch (nombre){
  case "andres":
    alert("1A")
    break
  case "diana":
    alert("1B")
    break
  case "jaime":
    alert("Hola Jaime")
  case "juan":
    alert("2A")
    break
  case "laura":
    alert("2B")
    break
  case "matilda":
    alert("3")
    break
  default:
    alert("Usted no vive aqui")
}  */


/* 
for(let i=0; i<5; i=i+1){
  console.log("Este es i:", i)
}
for(let i=0; i<5; i+=1){
  console.log("Este es i:", i)
}
for(let i=0; i<5; i++){
  console.log("Este es i:", i)
}
*/


// let a = 0
// let b = 0

// console.log(a++)
// console.log(++b)

// LOOP INFINITO, NO LO HAGAN
// for(let i=0; i<5; i=i-1){
//   console.log("Este es i:", i)
// }

// let saludo = true

// while(saludo){
//   alert("¡HOLA!😀")
//   saludo = confirm("¿Otro saludo?")
// }

// let numero = 0

// while (numero <=10){
//   console.log(numero)
//   if(numero === 4){
//     console.log("Este es mi número favorito")
//   }
//   numero++
// }

// let saludo = false
// let despedida = false

// while(saludo){
//   alert("¡HOLA!😀")
//   saludo = confirm("¿Otro saludo?")
// }

// do{
//   alert("¡Chau!😥")
//   despedida = confirm("¿Otra despedida?")
// } while(despedida) 

/* 
for(let i=0; i<5; i=i+1){
    console.log("Este es i inicial:", i)
    if(i===3){
        break
    }
    console.log("Este es i final:", i)
} 
*/

// for(let i=0; i<=3; i=i+1){
//   console.log("Este es i inicial:", i)
//   if(i!==3){
//     console.log("Este es i final:", i)
//   }
// } 

for(let i=0; i<5; i=i+1){
  console.log("Este es i inicial:", i)
  if(i!==3){
    console.log("Este es i final:", i)
  }
} 