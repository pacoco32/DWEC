"use strict";

//1
let a = 10;
let b = 5;

a += 5;
console.log("a += 5: " + a);

b *= 3;
console.log("b *= 3: " + b);

a /= 2;
console.log("a /= 2: " + a);


//2
a = "10";
b = "5";

console.log("a + b: " + (a + b));
console.log("a * b: " + (a * b));
console.log("a - b: " + (a - b));
console.log("a / b: " + (a / b));


//3
let resultado = a > b ? "A es mayor" : "B es mayor o igual";
console.log(resultado);

//Cuando trabajamos con cadenas, se comparan por orden de caracteres.
//"10"(a) es menor que "5"(b) porque el primer carácter "1" es menor que "5".


//4
console.log("Tipo de a: " + typeof a); //Nos muestra que es tipo string


//5
console.log("Multiplicación por 2: " + (4 << 1));
console.log("División entre 2: " + (8 >> 1));