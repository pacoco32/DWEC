"use strict"

//Cogemos los enlaces que contienen '://' - * contiene
//"a[href*='://']" comentado en clase
const enlaces = document.querySelectorAll("a[href*='://']");

//Cogemos los enlaces que empiezan por '://internal.com' - ^ empiezan por
const enlacesInternos = document.querySelectorAll("[href^='http://internal.com']"); 

//Bucle para recorrer todos los enlaces y comprobar si son internos o externos, y cambiar el color de los externos a naranja
for(const enlace of enlaces) {

    //Booleano para comprobar si el enlace es interno o externo
    let esInterno = false;

    //Bucle para recorrer todos los enlaces internos y comprobar si el enlace es interno o externo
    for(const enlaceInterno of enlacesInternos) {

        //Comprobamos si el enlace es interno o externo
        if(enlace === enlaceInterno) {

            //Si el enlace es interno, cambiamos el booleano a true
            esInterno = true;

        }   
        
    }

    //Si el enlace es externo, cambiamos el color a naranja
    if(esInterno === false) {

        enlace.style.color = "orange";

    }

}