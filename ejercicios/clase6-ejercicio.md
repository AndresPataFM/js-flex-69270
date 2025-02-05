# Ejercicios para temas de la clase 6

## 1: Palindromos

Utilizando recursividad crear una función que detecte si un string es un palindromo o no.

### Recursos
* Palindromo: Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda
* String.length: retorna como interger la cantidad de carácteres en un string
* String.slice(a,b): retorna un string con los carácteres desde su índice 'a' hasta el índice 'b'. El primer carácter tien un índice 0. No modifica el string original. Es más complejo pero no hace falta sus otras funcionalidades apra el ejercicio.

# 2: Buscador

Crear un buscador que consuma un array de productos en el cual se puede buscar con 2 o más de los siguientes criterios (no necesariamente de manera simultánea):
* id
* nombre
* precio
* stock
* descripción
y que los resultados se puedan ordenar de:
* mayor precio
* menor precio
* A->z nombre | id
* z->A nombre | id

Esta es la lista de productos:
```js
const prodList = [
    {name:"Antipulgas Gato", id:"001", type:"Medicinal", price:450, stock:"32", description:"Antipulgas felino Frontline Plus",},
    {name:"Antipulgas Perro", id:"002", type:"Medicinal", price:450, stock:"28", description:"Antipulgas Canino Frontline Plus",},
    {name:"Antiparasitario", id:"003", type:"Medicinal", price:370, stock:"15", description:"Antiparasitario interno Oral Paraqueños",},
    {name:"Alimento Gato Joven", id:"004", type:"Medicinal", price:4530, stock:"18", description:"Alimento para gatos Kitten de Royal Canin",},
    {name:"Alimento Gato Adulto", id:"005", type:"Alimento", price:3900, stock:"27", description:"Alimento para gatos adultos Royal Canin Active Life",},
    {name:"Alimento Gato Edad Avanzada", id:"006", type:"Alimento", price:4620, stock:"15", description:"Alimento para gatos de edad avanzada Royal Canin Mature Consult Stage 1",},
    {name:"Alimento Perro Joven", id:"007", type:"Alimento", price:4450, stock:"22", description:"Alimento para perros jóvenes de tamaño mediano Royal Canin Puppy Medium.",},
    {name:"Alimento Perro Adulto", id:"008", type:"Alimento", price:3780, stock:"24", description:"Alimento para perros adultos de tamaño mediano Royal Canin Adult Medium.",},
    {name:"Alimento Perro Edad Avanzada", id:"009", type:"Alimento", price:4370, stock:"11", description:"Alimento para perros de edad avanzada de tamaño mediano Royal Canin Adgeing",},
    {name:"Juguete de Ratón", id:"010", type:"Juguete", price:170, stock:"10", description:"Un juguete de ratón de plastico y tela hipoalergénicos",},
    {name:"Hueso Comestible", id:"011", type:"Alimento", price:450, stock:"7", description:"12(Doce) unidades de huesos comestibles de cuero para perros",},
    {name:"Pelota", id:"012", type:"Juguete", price:210, stock:"9", description:"Pelota plástica hipoalergénica chillona de mascotas (díametro de 12 cm)",},
]
```

Recursos:
* [Array.filter()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [Array.sort()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)