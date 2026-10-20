"use strict";

let numero = prompt("Introduce un número anda: ");
let numeroNum = Number(numero);

if (numeroNum < 0 || numeroNum > 100) {
    
    console.log("Revisar");

} else if (numeroNum >= 0 && numeroNum <= 49) {
    
    console.log("Inicial");

} else if (numeroNum >= 50 && numeroNum <= 79) {

    console.log("Intermedio");

} else {

    console.log("Avanzado");

}