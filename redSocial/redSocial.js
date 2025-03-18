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
  constructor({nombre, edad, mail, comentarios = [], observados = []}){
    // destructuring en parámetros
    this.nombre = nombre
    this.edad = edad
    this.mail = mail
    this.comentarios = []
    this.observados = observados
    comentarios.forEach(({texto, fecha})=>{
      const comm = new Comentario(texto, this.nombre, fecha)
      // nunca los pushie
      this.comentarios.push(comm)
    })
  }
  crearCartaUsuario(){
    const usuariosDOM = document.getElementById("usuarios")

    const carta = document.createElement("article")
    const nombre = document.createElement("h3")
    const observados = document.createElement("div")
    const formComentario = document.createElement("form")
    const formAlert = document.createElement("div")
    const formTextarea = document.createElement("textarea")
    const formSubmit = document.createElement("input")
    const comentarios = document.createElement("ul")

    // nombre
    nombre.textContent = this.nombre

    //observados
    observados.textContent = this.mostrarObservados()

    // formulario de comentarios
    formTextarea.name = "texto"
    formTextarea.textContent = "Yo estoy pensando en..."
    formSubmit.type = "submit"
    formSubmit.textContent = "Comentar"
    formComentario.appendChild(formAlert)
    formComentario.appendChild(formTextarea)
    formComentario.appendChild(formSubmit)

    // comentarios previos
    function mostrarComentarios(usuario){
      comentarios.innerHTML = ""
      usuario.comentarios.forEach(comentario=>{
        const comm = document.createElement("li")
        comm.textContent = comentario.mostrar()
        comentarios.appendChild(comm)
      })
    }

    mostrarComentarios(this)

    function agregarComentario(usuario){
      // logica que evalua el texto y si esta bien crea el comentario
      const texto = formTextarea.value.trim()
      if(texto || texto!==""){
        usuario.crearComentario(texto)
        formAlert.textContent = ""
        mostrarComentarios(usuario)
      } else {
        formAlert.textContent = "Por favor ingrese un texto válido"
      }
    }

    formComentario.addEventListener("submit", evento=>{
      // evento submit para crear comentario
      evento.preventDefault()
      agregarComentario(this)
    })

    // ensamblo la carta
    carta.appendChild(nombre)
    carta.appendChild(observados)
    carta.appendChild(formComentario)
    carta.appendChild(comentarios)

    // Agrego la carta al DOM

    usuariosDOM.appendChild(carta)
  }
  crearComentario(textoIngresado){
    // crea comentarios de usuario, los agrega al inicio del array
    let texto = textoIngresado.trim() //saco espacios exceso
    // pedimos el texto al usuario
    if(texto || texto===""){
      // creamos el comentario
      const comentario = new Comentario(texto, this.nombre)
      // agregamos al array
      this.comentarios.unshift(comentario)
      // guardo cambios en storage
      usuarios.guardarCambios()
    } else {
      console.warn("texto inválido")
    }
  }
  mostrarObservados(){
    return `Los usuarios que tenes observados son: ${this.observados.join("; ")}`
  }
}
// propiedades
const usuarios = {
  // Aplico Object in object out, facilita el manejo de los usuarios al tenerlos en un único objeto
  // Esto tranquilamente podría ser un singleton
  lista: [],
  guardarCambios: function(){
    // guarda cambios de la lista de usuarios
    const guardadoTemp = JSON.stringify(this.lista)
    localStorage.setItem("redSocial-usuarios", guardadoTemp)
  },
  crearUsuario: function({nombre, edad, mail, comentarios, observados}){
    if(this.lista.some(usuario=>usuario.nombre===nombre)){
      console.warn("El nombre debe de ser único")
    } else {
      const usuario = new Usuario({nombre, edad, mail, comentarios, observados})
      this.lista.push(usuario)
      this.guardarCambios()
    }
  },
  cargarUsuarios:function(){
    const usuariosTemp = JSON.parse(localStorage.getItem("redSocial-usuarios"))
    if(usuariosTemp) usuariosTemp.forEach(function(usuario){usuarios.crearUsuario(usuario)})
  }
}

const alCargar = function(){
  usuarios.cargarUsuarios()
  if(usuarios.lista.length === 0){
    usuarios.crearUsuario({nombre:"Andres", edad:32, mail:"asd@coder.com", comentarios:[], observados:["Matias"]})
    usuarios.crearUsuario({nombre:"Matias", edad:32, mail:"asd@coder.com", comentarios:[{texto:"Primero",fecha: new Date()}], observados:[]})
    usuarios.crearUsuario({nombre:"Samantha", edad:32, mail:"asd@coder.com", comentarios:[{texto:"Mi primer comentario",fecha: new Date()}, {texto:"Hermoso día",fecha: new Date()}], observados:[]})
    usuarios.crearUsuario({nombre:"Espia", edad:32, mail:"asd@coder.com", comentarios:[], observados:["Andres", "Matias", "Samantha"]})
  }
}

function app(){
  alCargar()
  usuarios.lista .forEach(usuario=>{
    usuario.crearCartaUsuario()
  })
}

// Ejecución de código



app()