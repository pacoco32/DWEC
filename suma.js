"use strict";

//1

const primero = prompt("Primer número", "4");
const segundo = prompt("Segundo número", "7");

//Predicción
//Si introducimos 4 y 7, el resultado es "47", porque prompt() devuelve texto y el operador + concatena cadenas.

//Convertimos a números enteros con parseInt().
const num1 = parseInt(primero, 10);
const num2 = parseInt(segundo, 10);

console.log("Primer número:", num1);
console.log("Segundo número:", num2);
console.log("Suma de enteros:", num1 + num2);

//Pruebas:
//4 + 7 = 11
//-3 + 8 = 5


//2

const tercero = prompt("Introduce el primer número real", "2.5");
const cuarto = prompt("Introduce el segundo número real", "3.75");

//parseFloat() conserva los decimales. ParseFloat("2.5") devuelve 2.5.
//Por eso utilizamos parseFloat(), que conserva los decimales.

const numero3 = parseFloat(tercero);
const numero4 = parseFloat(cuarto);

console.log("Primer número real:", numero3);
console.log("Segundo número real:", numero4);
console.log("Suma de números reales:", numero3 + numero4);

//Pruebas:
//2.5 + 3.75 = 6.25
//-1.5 + 4 = 2.5
//0 + 0.25 = 0.25