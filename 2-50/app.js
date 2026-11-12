"use strict";

// Ayuda facilitada: no necesitas implementar la reproducción de audio.
// Recibe "aviso", "acierto" o "error". Los sonidos están incluidos en el HTML.
function reproducirSonido(nombre) {
    const audio = document.querySelector("#sonido-" + nombre);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {
        document.querySelector("#mensaje").textContent = "No se pudo reproducir el audio.";
    });
}

// TODO: selecciona los tres botones y registra la MISMA función en cada uno.
//Cogemos los botones
const aviso = document.querySelector("#aviso");
const acierto = document.querySelector("#acierto");
const error = document.querySelector("#error");

//Añadimos el evento a los botones
aviso.addEventListener("click", manejarSonido);
acierto.addEventListener("click",manejarSonido);
error.addEventListener("click",manejarSonido);

// TODO: en el manejador, usa evento.currentTarget.id para llamar a la ayuda.
//Manejador  para establecer la respuesta
function manejarSonido(evento) {
    const nombre = evento.currentTarget.id;
    reproducirSonido(nombre);

// TODO: muestra el nombre del sonido en #mensaje.
const nombre1 = document.querySelector("#mensaje");
nombre1.textContent = "El sonido elegido es: " + nombre;

// TODO: muestra evento.target.tagName y evento.currentTarget.tagName
// en #detalleEvento. Compara los nombres al pulsar el botón y el span interior.

const detalle = document.querySelector("#detalleEvento");
detalle.textContent = "Target: " + evento.target.tagName + " - currentTarget: " + evento.currentTarget.tagName;

}
// No necesitas bucles, animaciones ni eventos del teclado para esta versión.

