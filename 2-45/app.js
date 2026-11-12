"use strict";

// TODO: guarda los pasos completados en una variable, inicialmente 0.

let pasos = 0;

// TODO: crea actualizarVista() para escribir progress.value y el resumen.

function actualizarVista() {

    //Asignamos el numero de pasos
    progreso.value= pasos;

    //Porcentaje de los pasos
    let porcentaje = (pasos / 8) * 100;

    resumen.textContent = "Has completado el " + porcentaje + " % de tu progreso."; 
}

// TODO: sumar no puede superar 8; deshacer no puede bajar de 0.
//Evento sumar
sumar.addEventListener("click", function() {

    pasos++;

    if(pasos > 8) {

        pasos = 8
    }

    //Al pulsar un botón, se actualiza la vista, por eso se llama a la función
    actualizarVista();
});

//Evento restar/deshacer
deshacer.addEventListener("click", function() {

    pasos--;

    if (pasos < 0) {
        
        pasos = 0;
    }

    actualizarVista();

});

// TODO: reiniciar vuelve a 0. Los tres manejadores llaman a actualizarVista().

reiniciar.addEventListener("click",function() {

    pasos = 0;

    actualizarVista();

});
// Registra los manejadores una sola vez y actualiza también al cargar.
//Carga al iniciar
actualizarVista();
