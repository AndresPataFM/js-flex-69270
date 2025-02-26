
function Auto (modelo, color){
  this.modelo = modelo;
  this.color = color;
  this.mostrar = function(){return `El auto es un ${this.modelo} de color ${this.color}`};
  this.mostrarInconsistente = ()=>{return this.modelo};
}

// 🔸 Crear Instancias de objeto 🔸
// Se utiliza la palabra clave "new" en referencia a su constructor
// Fijense que ahora si le hacen console.log muestra que es una instancia de la función constructora

const ferrari = new Auto("Ferrari", "rojo");

// Destructuring objetos
/* function trabajarAuto(auto){
  const {modelo, color} = auto

  // console.log(auto.modelo)
  console.log(modelo)
  console.log(color)
} */

function trabajarAuto({modelo, color}){
  // console.log(auto.modelo)
  console.log(modelo)
  console.log(color)
}

trabajarAuto(ferrari)

// spread operator de objetos
const ferrariRobado = {...ferrari, robado:true}

// const prodCarrito = {...producto, cantidad:7}
console.log(ferrariRobado)