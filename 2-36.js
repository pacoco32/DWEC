"use strict";

const titulo = document.getElementById("saludo");
const campoNombre = document.getElementById("nombre");

function saludar() {
    const nombre = campoNombre.value;
    titulo.textContent = "Hola " + nombre;
}
//Funcion que nos compruebe que tecla pulsamos
//Como no nos pedia botón para el submit, debemos de leer el "Enter"
//evento.code para más seguridad
function comprobarTecla(evento) {
    if (evento.key === "Enter") {
        saludar();
    }
}
//Evento "keydown" nos lee la tecla que pulsemos
campoNombre.addEventListener("keydown", comprobarTecla);
