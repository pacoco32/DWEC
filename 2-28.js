"use strict"

function contarCaracter(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

console.log(contarCaracter("manzana", "a")); 
console.log(contarCaracter("manzanA", "A")); 
console.log(contarCaracter("MANZANA", "a")); 
console.log(contarCaracter("MANZANA", "A"));