// Entradas
const general2d = 8400;
const general3d = 10000;
const especial = 6000;

// Descuento
let descuentoCodigoActivado = false;
let descuenoDiaActivado = false;
const codigo = "PROMO";
const valorDescuentoCodigo = 1000;
const descuenoDiaValor = 0.5;

// Textos
let entradasGeneral = "";
let entradasEspeciales = "";
let textoDescuentos = ""
const textoDescuentoCodigo = "Se ha activado el descuento exitosamente.";
const textoDescuentoDia = "Se ha activado descuento por día.";

// totales
let valorTotal = 0;

// cantidad
let cantidad = parseInt(prompt("¿Cuantas entradas desea comprar?"));
while(isNaN(cantidad) && cantidad<1){
  cantidad = parseInt(prompt("¿Cuantas entradas desea comprar?. Por favor ingrese un número entero mayor a 1."));
}

// tipo
let tipoEntrada = parseInt(prompt("¿Para función 2d o 3d? Ingrese 2 para 2d y 3 para 3d."));
while(!(tipoEntrada ===2 || tipoEntrada === 3)){
  tipoEntrada = parseInt(prompt("¿Para función 2d o 3d? Ingrese 2 para 2d y 3 para 3d."));
}

// descuento
let intentos = 0;
while(intentos<3 && !descuentoCodigoActivado){
  const codigoIngresado = prompt("Ingrese el código de descuento en mayúsculas si lo posee, tiene 3 intentos, si apreta cancelar se entiende que no tiene uno.");
  if(codigoIngresado === codigo){
    descuentoCodigoActivado = true;
    alert(textoDescuentoCodigo)
    textoDescuentos += `Descuento por código activado ($${valorDescuentoCodigo} por entrada). `
  }
  intentos++;
}

// día
let diaActual = prompt("Ingrese el día de la película representado por un número 0-domingo, 1-lunes, 2-martes, 3- miércoles, 4-jueves, 5-viernes, 6-sábado, 7-domingo.");

while(!(diaActual>=0 && diaActual<=6)){
  // uso esto para poder captar tambien los NaN, ya que un NaN siempre da verdadero en esos parámetros
  diaActual = prompt("Ingrese el día de la película representado por un número 0-domingo, 1-lunes, 2-martes, 3- miércoles, 4-jueves, 5-viernes, 6-sábado, 7-domingo.");
};

if(diaActual>0 && diaActual<=3){
  descuenoDiaActivado = true;
  alert(textoDescuentoDia)
  textoDescuentos += `Descuento por día activado (%${100*descuenoDiaValor}). `
};

alert("Ingrese uno a uno la edad de los que van a utilizar los boletos.");
for(let i =0; i<cantidad; i++){
  let edad = parseInt(prompt(`Ingrese la edad del cliente del boleto número ${i} en años.`));
  while(isNaN(edad) && edad<0){
    edad = parseInt(prompt(`Ingrese la edad del cliente del boleto número ${i} en años.`));
  };
  let valorEntradaActual = 0;
  let tipo = "general";
  // calculo precio
  if(edad<=13 || edad>=65){
    tipo = "especial";
    valorEntradaActual = especial;
  } else if (tipoEntrada === 2){
    valorEntradaActual = general2d;
  } else {
    valorEntradaActual = general3d;
  };
  if(descuentoCodigoActivado){
    valorEntradaActual -= 1000;
  };
  if(descuenoDiaActivado){
    valorEntradaActual *= descuenoDiaValor;
  }
  valorTotal += valorEntradaActual;
  // escribo el subtotal
  if(tipo === "especial"){
    entradasEspeciales += `- Entrada especial ${tipoEntrada}d para ${edad} años. ~ $${valorEntradaActual} \n`;
  } else {
    entradasGeneral += `- Entrada general ${tipoEntrada}d para ${edad} años. ~ $${valorEntradaActual} \n`;
  };
};

let textoFinal = `Su compra es de un valor total de ${valorTotal} para la función ${tipoEntrada}d. De los cuales: \n Entradas generales: \n${entradasGeneral}\n Entradas ESPECIALES: \n${entradasEspeciales}\n ${textoDescuentos} \nMuchas gracias por su compra`

alert(textoFinal)

