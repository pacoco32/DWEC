"use strict"

function suma(...numeros){
    let suma = 0;
    if (numeros.length == 0) {
        return 0
    }else{
        for (let i  = 0; i < numeros.length;i++){
            suma = suma + numeros[i];
        }
    }

    return suma;

}

console.log(suma());
console.log(suma(7));
console.log(suma(2,3,4));
console.log(suma(-2,5));
console.log(suma(1.5,2.25));
//Da 0 porque si la longitud del array medida con .lenght es 0 hemos hecho que nos devuelva 0.