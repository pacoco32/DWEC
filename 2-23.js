"use strict";

const codigos = [101,108,115,123,137,142,156,164,178,190];

let codigo = prompt("Introduce un código para buscar: ");

let codigo_num = Number(codigo);
let izquierda = 0;
let derecha = codigos.length - 1;
let encontrado = false;

while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);
    if (codigos[medio] === codigo_num) {
        encontrado = true;
        break;
    } else if (codigos[medio] < codigo_num) {
        izquierda = medio + 1;
    } else {
        derecha = medio - 1;
    }
}

if (encontrado) {
    console.log("Código encontrado.");
} else {
    console.log("Código no encontrado.");
}