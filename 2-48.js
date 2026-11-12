"use strict";

//Recogemos los valores a cambiar del HTML
const boton = document.querySelector("#vota");
const votos = document.querySelector("#votos");
const texto = document.querySelector("#texto");

//Votos a 0
let voto = 0;

function contarVoto() {

    //Sumamos voto y modificamos el HTML
    voto++;

    votos.textContent = voto;

    
}

function agradecer() {

    //Modificamos el HTML con el mensaje
    texto.textContent = "Gracias por votar!";

}

//boton.addEventListener("click",contarVoto);
//boton.addEventListener("click",agradecer);

//El segundo sustituye al primero, porque sólo admite un valor, por eso aparece el mensaje y no suma
boton.onclick = contarVoto;
boton.onclick = agradecer;