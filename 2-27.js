"use strict"


function numeroMenor(a, b) {
    
    if (a < b) {
        return a + " es menor que " + b;

    } else if (a > b) {
        return b + " es menor que " + a;

    } else {
        return "Son iguales";

    }

}

function potencia(base, exponente) {

    if (exponente < 0) {
        return "El exponente no puede ser negativo";
    } else {
        return Math.pow(base, exponente);
    }
    
}

console.log(numeroMenor(2,3));
console.log(numeroMenor(3,2));
console.log(numeroMenor(2,2));

//Exponente par
console.log(potencia(-2,2));//Espero 4, ya que al elevar un numero negativo a un exponente par, da positivo. Resultado 4

//Exponente impar
console.log(potencia(-2,3));//Espero -8, ya que al elevar un numero negativo a un exponente impar, da negativo. Resultado -8