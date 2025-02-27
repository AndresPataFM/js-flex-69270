// Entidades
class Comentario{
  constructor(texto, nombreUsuario, fecha = new Date()){
    this.texto = texto
    this.nombreUsuario = nombreUsuario
    this.fecha = fecha
  }
  mostrar(){
    return `${this.texto} - ${this.nombreUsuario} a las ${this.fecha}`
  }
}


class Usuario{
  constructor(nombre, edad, mail, comentarios = [], observados = []){
    this.nombre = nombre
    this.edad = edad
    this.mail = mail
    this.comentarios = []
    this.observados = observados
    for(const texto in comentarios){
      const comm = new Comentario(texto, this.nombre)
    }
  }
  crearComentario(textoIngresado){
    // crea comentarios de usuario, los agrega al inicio del array
    let texto = textoIngresado
    // pedimos el texto al usuario
    if(texto){

    } else {
      texto = prompt("Ingrese su comentario")
      while(texto.length >80 || texto === null || texto === ""){
        // validación del texto
        texto = prompt("Ingrese su comentario. No puede tener más de 80 carácteres ni apretar cancelar ni estar vacío")
      }
    }
    // creamos el comentario
    const comentario = new Comentario(texto, this.nombre)
    // agregamos al array
    this.comentarios.unshift(comentario)
  }
  mostrarObservados(){
    alert(`Los usuarios que tenes observados son: ${this.observados.join("; ")}`)
  }
  mostrarComentarios(){
    let comentariosAMostrar = "Los comentarios en su feed son: "
    for(let i =0; i<this.comentarios.length; i++){
      comentariosAMostrar += `\n #${this.comentarios.length - i} - ` +  this.comentarios[i].mostrar()
    }
    alert(comentariosAMostrar)
  }
}
// propiedades
const usuarios = []

// funciones
const crearUsuario = (nombre, edad, mail, comentarios, observados)=>{
  // crea objetos Usuario y los agrega al array usuarios
  // const nombre = prompt("Ingrese su nombre")
  // const edad
  // const mail
  // const comentarios
  // const observados
  const usuario = new Usuario(nombre, edad, mail, comentarios, observados)
  usuarios.push(usuario)
}

function app(){
  alert("Bienvenido Andrés")
  let loop = true
  while(loop){
    let opcion = parseInt(prompt("1-crear comentario \n 2-ver comentarios"))
    if(opcion === 1){
      usuarios[0].crearComentario()
    } else if (opcion === 2){
      usuarios[0].mostrarComentarios()
    } else {
      alert("no es una opción correcta")
    }
    loop = confirm("Desea tomar otra opción?")
  }
  alert("Chau")
}

// Ejecución de código

crearUsuario("Andres", 32, "asd@coder.com", [], ["Matias"])
crearUsuario("Matias", 32, "asd@coder.com", ["Primero"], [])
crearUsuario("Samantha", 32, "asd@coder.com", ["Mi primer comentario", "Hermoso día"], [])
crearUsuario("Espia", 32, "asd@coder.com", [], ["Andres", "Matias", "Samantha"])

app()