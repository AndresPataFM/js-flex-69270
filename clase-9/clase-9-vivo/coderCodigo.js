const botonLista = document.getElementById("verLista")

const URLplaceholder = "https://jsonplaceholder.typicode.com/posts"

const generarLista = (listaConseguida)=>{
    const lista = document.getElementById("lista")
    lista.innerHTML = ""
    listaConseguida.forEach(elemento => {
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.innerText = elemento.userId
        btn.addEventListener("click", ()=>{
            Swal.fire({
                title: elemento.title,
                text: elemento.body
            })
        })
        li.appendChild(btn)
        lista.appendChild(li)
    });

}


const conseguirDatos = async()=>{
    const datosFetch = await fetch(URLplaceholder)
    const datosParseados = await datosFetch.json()

    generarLista(datosParseados)
}



botonLista.addEventListener("click", conseguirDatos)














































/* async function cargarPublicaciones() {
    try {
        const resp = await fetch(URL)
        const posts = await resp.json()
        console.table(posts)
    } catch (error) {
        Swal.fire({
            title: 'Error',
            icon: "error",
            text: error
        })
    }
} */

// cargarPublicaciones()

/* function confirmarCarga() {
    Swal.fire({
        title: '¿Descargar publicaciones del servidor?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, ver posts',
        cancelButtonText: 'No por ahora'
    }).then((response)=> {
        if (response.isConfirmed) {
            cargarPublicaciones()
        } else {
            Swal.fire({
                title: 'Que lástima',
            })
        }
    })
} */

// botonSWAL.addEventListener("click", confirmarCarga)