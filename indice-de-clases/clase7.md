# clase 7
[Dom y Eventos](https://docs.google.com/document/d/1jxPdNcEVDc9cofMeUHnYQVY7Mpd4_Gm_Z3Y1xeXrtR4/edit?usp=sharing)

Conceptos:
* Que es el DOM
* Nodo vs Elemento
* Encontrar Nodos
  * document.getElementbyId(id)
  * document.getElementByClassName(class)
  * document.querySelector(parametro)
  * document.querySelectorAll(parametro)
  
* Modificar Nodos
  * classList
  * innerHTML vs innerText
  * atributos varios
* Crear Nodos
  * document.createElement
* Eventos
  * Agregar eventos:
    * Atributo html (mal y penalizado)
    * Nodo.onevento
    * nodo.addEventListener


Extra:
* Objeto document
* console.dir vs console.log

Guía de cambio fácil de pre entrega 1 a 2.
* prompt => input con submit
* confirm => boton con click para cada opción
* alert/console.log => cambian el innerText de un div en pantalla

Pasos a seguir:
* Modificar Existente
  1. Encontrar un elemento en el DOM.
  2. Modificar
* Agregar Elemento
  1. Buscar elemento de anclaje en el DOM
  2. Crear elemento.
  3. Modificar el elemento creado agregando todo lo necesario
  4. Meterlo al DOM mediante el append.