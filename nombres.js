const nombre = "Lucía";

//Predicción: Hola, ${nombre}
const simples = 'Hola, ${nombre}';

//Predicción: Hola, ${nombre}
const dobles = "Hola, ${nombre}";

//Predicción: Hola, Lucía
const invertidas = `Hola, ${nombre}`;
//Las unicas comillas que interpolan variables son ` `

console.log(simples);
console.log(dobles);
console.log(invertidas);


//Predicción: Hola, Lucía
const concatenacionSimples = 'Hola, ' + nombre;
const concatenacionDobles = "Hola, " + nombre;

console.log(concatenacionSimples);
console.log(concatenacionDobles);

const mensaje1 = 'Lucía dice: "Hola"';
const mensaje2 = "It's JavaScript";

console.log(mensaje1);
console.log(mensaje2);

//Las predicciones no se cambian
let cambio = "Paco";
//Predicción: Hola, ${cambio}
const simples1 = 'Hola, ${cambio}';

//Predicción: Hola, ${cambio}
const dobles1 = "Hola, ${cambio}";

//Predicción: Hola, Paco
const invertidas1 = `Hola, ${cambio}`;
//Las unicas comillas que interpolan variables son ` `

console.log(simples1);
console.log(dobles1);
console.log(invertidas1);


//Predicción: Hola, Lucía
const concatenacionSimplesPa = 'Hola, ' + cambio;
const concatenacionDoblesPa = "Hola, " + cambio;

console.log(concatenacionSimplesPa);
console.log(concatenacionDoblesPa);

const mensajea = 'Paco dice: "Hola"';
const mensajeb = "It's JavaScript";

console.log(mensajea);
console.log(mensajeb);

/*
Mis conclusiones
Las comillas simples (' ') y dobles (" ") nos permiten escribir cadenas
de texto, pero no interpretan variables mediante ${}.

Las comillas invertidas (` `) nos permiten interpolar las variables, por ejemplo ${nombre}.

El operador + permite concatenar cadenas de texto con variables.

Podemos incluir comillas dentro de una cadena si utilizamos
delimitadores diferentes para el texto exterior y el interior.

*/

