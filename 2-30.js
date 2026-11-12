"use strict"

//1
let plazas = 12;
let estado = "Sin confirmar";

function reservar(plazas) {
    let estado = "Reserva simulada";
    plazas -= 2;
    console.log("Dentro: ", plazas, estado);
    return plazas;
}

const disponibles = reservar(plazas);
console.log("Resultado:", disponibles);
console.log("Fuera:", plazas, estado)

/* 1
Predicción:
Dentro: 0 Reserva simulada
Resultado: 10
Fuera: 12 Sin confirmar

Resultado:
Dentro: 0 Reserva simulada
Resultado: 10
Fuera: 12 Sin confirmar

Conclusiones:
- El parámetro plazas es una variable local que recibe el valor 12.
- plazas -= 2 modifica la variable local, no la variable exterior.
- El let estado dentro de la función crea una variable local
  diferente de la variable estado exterior.
- La función devuelve 10, pero no modifica las variables exteriores.
*/

//2
function reservarRenombrada(plazasRecibidas) {
    let estado = "Reserva simulada";
    plazasRecibidas -= 2;

    console.log("Dentro:", plazasRecibidas, estado);
    return plazasRecibidas;
}

const disponiblesRenombradas = reservarRenombrada(plazas);
console.log("Resultado:", disponiblesRenombradas);
console.log("Fuera:", plazas, estado);

/* 2
Predicción:
Dentro: 10 Reserva simulada
Resultado: 10
Fuera: 12 Sin confirmar

Resultado:
Dentro: 10 Reserva simulada
Resultado: 10
Fuera: 12 Sin confirmar

Conclusiones:
- Cambiar el nombre del parámetro no cambia el comportamiento.
- El parámetro sigue siendo local y recibe una copia del valor
  de las plazas.
*/

//3
function reservarNoLet(plazasRecibidas) {
    estado = "Reserva simulada";
    plazasRecibidas -= 2;

    console.log("Dentro:", plazasRecibidas, estado);
    return plazasRecibidas;
}

const disponiblesSinLet = reservarNoLet(plazas);
console.log("Resultado:", disponiblesSinLet);
console.log("Fuera:", plazas, estado);

/* 3
Predicción:
Dentro: 10 Reserva simulada
Resultado: 10
Fuera: 12 Reserva simulada

Conclusiones:
- Al quitar let, estado deja de ser una variable local.
- La asignación modifica la variable estado exterior.
- Como usamos "use strict", si estado no estuviera declarada
  previamente, la asignación produciría un ReferenceError.
*/

//4 

plazas = 12;
estado = "Sin confirmar";

        function simularReserva(plazasRecibidas) {
            plazasRecibidas -= 2;
            return plazasRecibidas;
        }

        const disponiblesFinales = simularReserva(plazas);

        // Confirmamos la reserva modificando las variables exteriores.
        plazas = disponiblesFinales;
        estado = "Confirmada";

        console.log("Plazas finales:", plazas);
        console.log("Estado final:", estado);

        /*
        
        Plazas finales: 10
        Estado final: Confirmada

        Explicación:
        return devuelve un valor, pero no modifica automáticamente
        la variable exterior.
        Para confirmar la reserva, asignamos el resultado a plazas
        y cambiamos explícitamente estado.
        */