"use strict";

let numero = prompt("Introduce un número anda: ");
let numeroNum = Number(numero);
let tipo;
let positivo;
let paridad;

//Tipo
if (numeroNum % 1 === 0) {
    tipo = "entero";
} else {
    tipo = "real no entero";
}

//Positivo, negativo o cero
if (numeroNum > 0) {
    positivo = "positivo";
} else if (numeroNum < 0) {
    positivo = "negativo";
} else {
    positivo = "cero";
}

//Paridad
if (numeroNum % 1 !== 0) {
    paridad = "no procede";
} else if (numeroNum % 2 === 0) {
    paridad = "par";
} else {
    paridad = "impar";
}

//Mostrar resultados
console.log(numeroNum + ": " + tipo + ", " + positivo +"; paridad: " + paridad);

