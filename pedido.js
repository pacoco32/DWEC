"use strict";

const PRECIO = 8;//Ya que nos pide que el resultado sea 24 y 40, pues he dedudido que el precio de cada memoria USB es 8€.

let nombre = prompt("Cual es tu nombre? ");
let cantidad = prompt("Cuantas memorias USB quieres comprar? ");

let cantidadNum = Number(cantidad);//Convertimos la cantidad a número con Number()

let total = PRECIO * cantidadNum;//Para calcular el total multiplicamos el precio por la cantidad de memorias USB

console.log(`Hola ${nombre}, has comprado ${cantidad} memorias USB, el total de tu compra es: ${total}€`);

