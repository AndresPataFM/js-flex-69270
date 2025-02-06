// Actividad 01:
/* 
let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidad; index) {
  console.log(texto);
} 
*/

/* let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES') ?? 0;
let cantidadNumero = Number(cantidad)
let texto = prompt('INGRESE TEXTO A REPETIR');

for (let index = 0; index < cantidadNumero; index++) {
  console.log(texto);
}; */





// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?


// Actividad 02:
/* 
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
  if (index > 3) {

  }
  alert("lado");
} 
*/

let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
  if (index === 3) {
    alert("Ya no podes ser un triángulo")
  }
  alert("lado");
}
// ¿Qué tiene que hacer este código?
// ¿Por qué no cumple con su función?
// ¿Qué propuesta podrías hacer para que tenga sentido su uso?