"use strict";
//1

let a = 10;
let b = 5;

{
    //let a = 3;
    a = 3;
    //Modifica la variable de fuera del bloque, imprimirá lo mismo
    console.log(a,b);
    //Va a imprimir 3 y 5, ya que la variable a cambia aquí dentro a 3
}

console.log(a,b);
//Va a imprimir 10 y 5, ya que la variable a fuera del bloque sigue siendo 10

//2

console.log(++a); //Va a imprimir 11, ya que a es 10 y se incrementa en 1
console.log(b--); //Va a imprimir 5, ya que b es 5 y se decrementa en 1 después
console.log(a);//11
console.log(b);//4

//3

console.log(a + b); 
console.log(a - b); 
console.log(a * b); 
console.log(a / b); 
console.log(a % b);

a++;
b--;

console.log(a);
console.log(b);
console.log(a == b);  
console.log(a != b);  
console.log(a === b); 
console.log(a !== b); 
console.log(a > b);   
console.log(a < b);   
console.log(a >= b);  
console.log(a <= b);  