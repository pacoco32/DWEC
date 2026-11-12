"use strict"

function mensaje(nombre, saludo = "Hola caracola") {
    console.log(nombre + " " + saludo);
}

mensaje("Paco","Hey");
mensaje("Paco");
mensaje("Paco",undefined);
mensaje("Paco","");
//Se aplica el valor por defecto cuando no se pasa un argumento o se pasa undefined.