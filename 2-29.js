"use strict"

function precioConDescuento(precio, descuento) {
    return precio - (precio * (descuento / 100));
}

console.log(precioConDescuento(80, 0));   
console.log(precioConDescuento(80, 25));   
console.log(precioConDescuento(80, 100)); 