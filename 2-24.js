"use strict";

let numero = prompt("Introduce un número para calcular su factorial:");

if (numero === null) {
    console.log("Adiosito.");

} else if (numero === "") {
    console.log("Error: no puedes dejarlo vacio.");

} else if (isNaN(numero)) {
    console.log("Error: dame un número.");

} else {
    let numeroNum = Number(numero);

    if (numeroNum === Infinity || numeroNum === -Infinity) {
        console.log("Error: el número debe ser finito.");

    } else if (numeroNum % 1 !== 0) {
        console.log("Error: el número debe ser entero.");

    } else if (numeroNum < 0) {
        console.log("Error: el número no puede ser negativo.");

    } else if (numeroNum === 19) {
        console.log("Error: no se puede calcular el factorial de 19.");

    } else {
        let factorial = 1;

        for (let i = 1; i <= numeroNum; i++) {
            factorial = factorial * i;
        }

        console.log("El factorial de " + numeroNum + " es " + factorial);
    }
}
