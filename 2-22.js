"use strict";

let bandera = true;

while (bandera) {

    let num1 = prompt("Introduce un número");

    if (num1 === null) {
        console.log("Calculadora cancelada.");
        break;
    }

    let num2 = prompt("Introduce otro número");

    if (num2 === null) {
        console.log("Calculadora cancelada.");
        break;
    }

    if (num1 === "" || num2 === "") {
        console.log("Error: no puedes dejar los números vacíos.");
        continue;
    }

    num1 = Number(num1);
    num2 = Number(num2);

    if (isNaN(num1) || isNaN(num2) || num1 === Infinity || num1 === -Infinity || num2 === Infinity || num2 === -Infinity) {

        console.log("Error: introduce números válidos y finitos.");
        continue;
    }

    let operacion = prompt(`Elige una operación:
    1. Suma
    2. Resta
    3. Multiplicación
    4. División
    5. Potencia
    6. Módulo`);

    if (operacion === null) {
        console.log("Calculadora cancelada.");
        break;
    }

    let resultado;

    switch (operacion) {

        case "1":
            resultado = num1 + num2;
            break;

        case "2":
            resultado = num1 - num2;
            break;

        case "3":
            resultado = num1 * num2;
            break;

        case "4":
            if (num2 === 0) {
                console.log("Error: no se puede dividir entre cero.");
                continue;
            } else {
                resultado = num1 / num2;
            }
            break;

        case "5":
            resultado = num1 ** num2;
            break;

        case "6":
            if (num2 === 0) {
                console.log("Error: no se puede calcular el módulo con divisor cero.");
                continue;
            } else {
                resultado = num1 % num2;
            }
            break;

        default:
            console.log("Error: operación desconocida.");
            continue;
    }

    if (isNaN(resultado) || resultado === Infinity || resultado === -Infinity) {

        console.log("Error: el resultado no es válido o no es finito.");
        continue;
    }

    console.log("Resultado:", resultado);

    let repetir = prompt("¿Quieres realizar otra operación? 1. Sí 2. No");

    if (repetir === null) {
        console.log("Calculadora cancelada.");
        break;
    } else if (repetir === "1") {
        bandera = true;
    } else if (repetir === "2") {
        bandera = false;
        console.log("Calculadora finalizada.");
    } else {
        console.log("Error: opción no válida.");
        bandera = false;
    }
}