"use strict";

//Utilizamos let porque vamos a trabajar con el vector
//y queremos poder reasignarlo si fuera necesario.
let precios = [10, 20, 30];

console.log("Vector inicial:", precios);
console.log("Longitud inicial:", precios.length);

//Primer y el último elemento
console.log("Primer precio:", precios[0]);
console.log("Último precio:", precios[precios.length - 1]);

//Modificamos el segundo elemento
precios[1] = 25;
console.log("Después de modificar el segundo:", precios);
console.log("Longitud:", precios.length);

//Añadimos un cuarto elemento con push()
precios.push(40);
console.log("Después de añadir un precio:", precios);
console.log("Longitud:", precios.length);

//Eliminamos el último elemento con pop()
let eliminado = precios.pop();

console.log("Valor eliminado:", eliminado);
console.log("Vector resultante:", precios);
console.log("Longitud final:", precios.length);

//Uso de const
const otrosPrecios = [10, 20, 30];

console.log("\nPruebas con const:");
console.log("Vector inicial:", otrosPrecios);

//Modificamos un elemento
otrosPrecios[1] = 25;
console.log("Después de modificar:", otrosPrecios);

//Añadimos un elemento
otrosPrecios.push(40);
console.log("Después de push():", otrosPrecios);

//Eliminamos el último elemento
let otroEliminado = otrosPrecios.pop();

console.log("Valor eliminado:", otroEliminado);
console.log("Vector final:", otrosPrecios);
console.log("Longitud final:", otrosPrecios.length);