"use strict";

const enlace = document.querySelector("#enlace");

function confirmar(evento) {
    const confirmar = confirm("Vamos a Google");

    if (!confirmar) {

        evento.preventDefault();

    }
}

enlace.addEventListener("click",confirmar);