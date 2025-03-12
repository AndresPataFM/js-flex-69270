const principal = document.getElementById("principal")

console.log(principal)
console.dir(principal)

// esto tambien es agregar eventos mediante atributo html, esta mal
const btn = `<button onclick="alert('¿Porque me estas usando?')">Haceme click</button>`

document.body.innerHTML += btn