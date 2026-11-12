"use strict"

function solicitarConfirmacion(pregunta, alAceptar, alCancelar) {
    if (confirm(pregunta)) {
        alAceptar();
    } else {
        alCancelar();
    }
}

//Guardamos las expresiones de funcion en constantes
const confirmarReserva = function() {
    console.log("Reserva confirmada");
};

const cancelarReserva = function() {
    console.log("Reserva cancelada");
};

//Usamos los callbacks
solicitarConfirmacion("¿Quieres confirmar tu plaza en el taller de JavaScript?",confirmarReserva,cancelarReserva
);

//Sin usar variables intermedias
solicitarConfirmacion("¿Quieres confirmar tu plaza en el taller de JavaScript?",
    function() {
        console.log("Reserva confirmada");
    },
    function() {
        console.log("Reserva cancelada");
    }
);

//Se pasan 'confirmarReserva' y 'cancelarReserva' sin paréntesis porque buscamos que 
//'solicitarConfirmacion' decida cuándo ejecutarlas según la respuesta del usuario.