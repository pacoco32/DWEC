"use strict"

//Funcion lanza dados, crea una tirada del 1 - 6
function lanzaDado(){
    let dado = Math.floor(Math.random() * 6) + 1;
    return dado;
}

//Creamos dos arrays donde se guardan las tiradas, tanto de jugador, como de la maquina
let dados_jugador = [];
let dados_maquina = [];

//Creamos una funcion que clasifica los tres resultados como trio, pareja o ninguna combinacion
function clasificar(dados){

    if (dados[0] == dados[1] && dados[0] == dados[2]){
        return "Trío de " + dados[0];
    } else if (dados[0] == dados[1]){
        return "Pareja de " + dados[0];
    } else if (dados[0] == dados[2]){
        return "Pareja de " + dados[0];
    } else if (dados[1] == dados[2]){
        return "Pareja de " + dados[1];
    } else {
        return "Ninguna combinación";
    }

}

//Se necesitan 3 tiradas por jugador, recorremos un bucle y las guardamos en los arrays
function lanzarDados(){

    dados_jugador = [];
    dados_maquina = [];

    for (let i = 0; i < 3; i++){

        dados_jugador.push(lanzaDado());
        dados_maquina.push(lanzaDado());

    }

    //Mostramos los dados en pantalla
    document.querySelector("#jugador").textContent = dados_jugador[0] + " - " + dados_jugador[1] + " - " + dados_jugador[2];
    document.querySelector("#maquina").textContent = dados_maquina[0] + " - " + dados_maquina[1] + " - " + dados_maquina[2];

    //Clasificamos las combinaciones
    let combinacion_jugador = clasificar(dados_jugador);
    let combinacion_maquina = clasificar(dados_maquina);

    document.querySelector("#combinacion_jugador").textContent = combinacion_jugador;
    document.querySelector("#combinacion_maquina").textContent = combinacion_maquina;

    //Comprobamos quien gana
    let resultado = comprobarGanador(combinacion_jugador, combinacion_maquina);

    document.querySelector("#resultado").textContent = resultado;

}

//Creamos una funcion para saber quien gana
function comprobarGanador(combinacion_jugador, combinacion_maquina){

    //Comprobamos si alguno tiene trio
    if (combinacion_jugador == "Trío de " + dados_jugador[0] && combinacion_maquina != "Trío de " + dados_maquina[0]){
        return "Ganasssss!";
    } else if (combinacion_maquina == "Trío de " + dados_maquina[0] && combinacion_jugador != "Trío de " + dados_jugador[0]){
        return "Gana la machine!";
    }

    //Comprobamos si alguno tiene pareja
    if (combinacion_jugador != "Ninguna combinación" && combinacion_maquina == "Ninguna combinación"){
        return "Ganasssss!";
    } else if(combinacion_maquina != "Ninguna combinación" && combinacion_jugador == "Ninguna combinación"){
        return "Gana la machine!";
    }

    //Si tienen trio o pareja, gana el que tenga el valor mas alto
    if (combinacion_jugador != "Ninguna combinación" && combinacion_maquina != "Ninguna combinación"){

        //Math.max nos devuelve el valor mas alto de los tres dados, que es el que se tiene en cuenta para ganar
        let valor_jugador = Math.max(dados_jugador[0], dados_jugador[1], dados_jugador[2]);
        let valor_maquina = Math.max(dados_maquina[0], dados_maquina[1], dados_maquina[2]);

        if (valor_jugador > valor_maquina){
            return "Ganasssss!";
        } else if (valor_maquina > valor_jugador){
            return "¡Gana la machine!";
        } else { 
            return "Empateee!";
        }

    }

    //Si ninguno tiene combinacion, gana el que tenga mayor suma
    let suma_jugador = dados_jugador[0] + dados_jugador[1] + dados_jugador[2];
    let suma_maquina = dados_maquina[0] + dados_maquina[1] + dados_maquina[2];

    if (suma_jugador > suma_maquina){
        return "Ganasssss!";
    } else if(suma_maquina > suma_jugador){
        return "Gana la machine!";
    } else {
        return "Empateee!";
    }

}

//Al pulsar lanzar dados, generamos una nueva partida
document.querySelector("#lanzar").addEventListener("click", lanzarDados);

//Al pulsar reiniciar el juego, borramos los resultados
document.querySelector("#reiniciar").addEventListener("click", function(){

    dados_jugador = [];
    dados_maquina = [];

    document.querySelector("#jugador").textContent = "oooo";
    document.querySelector("#maquina").textContent = "oooo";

    document.querySelector("#combinacion_jugador").textContent = "";
    document.querySelector("#combinacion_maquina").textContent = "";

    document.querySelector("#resultado").textContent = "Resultado:";

});
