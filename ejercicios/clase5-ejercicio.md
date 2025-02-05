# Propuesta de ejercicio clase 3

## Sala de atención médica

Hay que crear un sistema para una recepcionista de una clínica con las siguientes especificaciones (las propiedades y métodos no hace falta que respeten el texto dado, es solo explicativo y pueden llamarlo como quieran):

* Los pacientes se van agregando a una cola (array) segun su orden de entrada.
  * Todos los cambios a esta se guardan en local storage
  * Al iniciar el proyecto se obtiene del storage si existe ahi.
* Los pacientes deben de ser:
  * Generados por una clase
  * Tener propiedades de:
    nombre
    consulta
  * Tener métodos:
    mostrar información muestra el nombre y su consulta en un string.
    modificar nombre
    modificar consulta
* La simulación debe de correr en un loop hasta que desea salirse
* Tiene que tener un panel de control que permita:
  * hacer pasar al siguiente paciente (llama al primero de la lista, lo quita de la lista y dice que se prepare el proximo paciente)
  * mostrar lista de espera
  * buscar orden en la lista
  * modificar mis datos
  * agregar paciente a la lista
  * borrar lista guardada (tiene que tener una confirmación extra)
  * cerrar por hoy


