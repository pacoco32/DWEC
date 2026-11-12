
"use strict"

//Búsqueda de tabla mediante Id
const tabla = document.getElementById("age-table");
console.log(tabla);

//Búsqueda de elementos label de la tabla (La tenemos en una constante del ejercicio anterior) por tag
const labels = tabla.getElementsByTagName("label");
console.log(labels.length); //3

//Búsqueda de elementos tds por tag
const tds = tabla.getElementsByTagName("td");
//Como nos crea un array, escogemos el primer elemento con [0]
const primer_td = tds[0];
console.log(primer_td);

//Búsqueda de form con name
const forms = document.getElementsByName("search");
console.log(forms);

//De los elementos del formulario, buscamos los inputs por tag
//Cogemos el primer input con [0] ya que es el primer elemento del array
const inputs = forms[0].getElementsByTagName("input");
const primer_input = inputs[0];
console.log(primer_input);

//Cogemos el último elemento del array (longitud - 1)
const ultimo_input = inputs[inputs.length - 1];
console.log(ultimo_input);
