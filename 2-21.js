"use strict";

let numAleatorio = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

let numero = prompt("Introduce un número entre 1 y 100: ");
let numeroNum = Number(numero);

let intento = 10;

while (intento > 0) {

    if (numeroNum == numAleatorio) {
        console.log("Has acertado");
        break;

    } else {

        intento--;
        console.log("Te quedan " + intento + " intentos");
    }

}