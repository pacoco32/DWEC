"use strict";

//Predicción: "a23" - Resultado: "a23"
//El operador + concatena texto y números de izquierda a derecha.
console.log("a" + 2 + 3);

//Predicción: 1 - Resultado: 4 //Pensaba que iba a aparecer 1
//El operador - convierte el texto "5" en número.
console.log("5" - 3 + 2);

//Predicción: 1 - Resultado: 1
//true vale 1 y false vale 0 al operar con números.
console.log(false + true + false);

//Predicción: 3 - Resultado: 3
//La división convierte la cadena "3" en número.
console.log(9 / "3");

//Predicción: 12 - Resultado: 12
//La multiplicación convierte ambas cadenas en números.
console.log("3" * "4");

//Predicción: "15px" - Resultado: "15px"
//Primero se suman los números y después se concatena "px".
console.log(7 + 8 + "px");

//Predicción: "f32" - Resultado: "f32"
//El operador + concatena todo con la cadena inicial.
console.log("f" + 3 + 2);

//Predicción: 4 - Resultado: 4
//La resta convierte la cadena "5" en número.
console.log("5" - 1);

//Predicción: NaN - Resultado: NaN
//"5em" no se puede convertir en un número válido.
console.log("5em" - 1);

//Predicción: " -7 3" - Resultado: " -7 3"
//El operador + concatena la cadena con el número.
console.log(" -7 " + 3);

//Predicción: -10 - Resultado: -10
//La resta convierte " -7 " en -7 y calcula -7 - 3.
console.log(" -7 " - 3);

//Predicción: 2 - Resultado: 2
//null se convierte en 0 al sumarse con un número.
console.log(null + 2);

//Predicción: NaN - Resultado: NaN
//undefined se convierte en NaN al operar con números.
console.log(undefined + 2);

//Predicción: -1 - Resultado: -1
//Los espacios y caracteres de tabulación y salto de línea se convierten en 0.
console.log(" \t \n" - 1);

//Predicción: Infinity - Resultado: Infinity
//Dividir un número positivo entre cero devuelve Infinity.
console.log(1 / 0);