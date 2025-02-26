// Yo se que voy a crear una clase que se va a utilizar mucho, por lo tanto ahorro memoria y procesamiento en un método/propiedad que se que no va a variar entre instancias o que combiene tener a nivel general.
// Aca el contador es para ver cuantas instancias fueron creadas en esta sesion
// todos lso gatos maullan igual así que ahorro memoria haciendo que la clase maulee
class Gato{
    static contador = 0
    static familia = "felino"
    constructor(nombre){
        this.nombre = nombre
        Gato.contador++
    }
    static maullar = function(){
        alert('miau')
    }
}

const michifus = new Gato("Michifus")
console.log(michifus)
// michifus.maullar()// Error porque es un método de la clase y no del objeto
console.log(Gato.contador)

const gatoConBotas = new Gato("Gato con botas")
console.log(Gato.contador)
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
new Gato("Gato con botas")
// Gato.maullar()
console.log(Gato.contador)

