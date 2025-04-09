// console.log("hola")
// console.table([1,2,3,4,5])

// No hay document ni herramientas relacionadas
// alert("soy un alert")
// document.createElement("div")


const fs = require("node:fs")

// crear
fs.writeFileSync("ejemplo.txt", "Hola, me crearon con node.")

// leer
// fs.readFile("ejemplo.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// agregar al final | apend
fs.appendFileSync("ejemplo.txt", " A mi me agregaron con node.")
