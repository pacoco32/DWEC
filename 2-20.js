"use strict";

let numero = prompt("Introduce un número anda: ");
let numeroNum = Number(numero);

if (numeroNum <= 1) {

    console.log("No es primo");

} else {

    let i = 0;

    for ( i = 2; i < numeroNum; i++) {

        if (numeroNum % i == 0) {
            console.log("No es primo");
            break;
        } 
    }

    if (i == numeroNum) {
        console.log("Es primo");
    }
}