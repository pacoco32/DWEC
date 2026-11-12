"use strict"

//QuerySelector para coger por id del primer <p>
const text = document.querySelector("#mensaje");
//textContent - Muestra literalmente el contenido del elemento, sin interpretar etiquetas HTML
text.textContent = "<strong>Importante</strong>";

//QuerySelector para coger por id del segundo <p>
const text2 = document.querySelector("#mensaje2");
//innerHTML - Muestra el contenido del elemento, interpretando etiquetas HTML
text2.innerHTML = "<strong>Importante</strong>";

//Crear un elemento pre
const pre = document.createElement("pre");
//Mostrar el outerHTML del primer párrafo
//outerHTML - Muestra el contenido del elemento, interpretando etiquetas HTML
pre.textContent = text.outerHTML;

//Esta parte la he tenido que buscar en internet, no la sabia hacer
document.body.appendChild(pre);

//Pedir un mensaje al usuario
const mensaje = prompt("Escribe un mensaje");

//Crear un párrafo para mostrar el mensaje
const parrafo = document.createElement("p");

//Comprobar si se ha cancelado el mensaje
if (mensaje === null) {
    parrafo.textContent = "Entrada cancelada";
} else {
    parrafo.textContent = mensaje;
}

//Añadir el párrafo al HTML
document.body.appendChild(parrafo);

//Solo muestra negrita con innerHTML, con textContent muestra literalmente el contenido del elemento, sin interpretar etiquetas HTML
//Al pulsar Cancelar, muestra el mensaje "Entrada cancelada", al pulsar Aceptar, muestra el mensaje introducido por el usuario