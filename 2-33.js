"use strict";

let intentos = 6;
let palabraSecreta = "";
let letrasDescubiertas = [];

function elegirPalabra() {
    palabraSecreta = prompt("Introduce una palabrita secreta:").toLowerCase();

    let palabraSeparada = palabraSecreta.split("");
    letrasDescubiertas = [];

    for (let i = 0; i < palabraSeparada.length; i++) {
        letrasDescubiertas[i] = "_";
    }
}

function adivinarLetra() {
    let letra = prompt("Introduce una letra:").toLowerCase();

    if (palabraSecreta.includes(letra)) {
        let posicion = palabraSecreta.indexOf(letra);

        while (posicion !== -1) {
            letrasDescubiertas[posicion] = letra;
            posicion = palabraSecreta.indexOf(letra, posicion + 1);
        }
    } else {
        intentos--;
        console.log("La letra no está.");
    }
}

function juegoTerminado() {
    return !letrasDescubiertas.includes("_") || intentos === 0;
}

function mostrarEstado() {
    console.log("Palabra: " + letrasDescubiertas.join(""));
    console.log("Intentos restantes: " + intentos);
}

function jugar() {
    elegirPalabra();
    mostrarEstado();

    while (!juegoTerminado()) {
        adivinarLetra();
        mostrarEstado();
    }

    if (!letrasDescubiertas.includes("_")) {
        console.log("Ganastessss!!!!");
    } else {
        console.log("Has perdido. La palabra era: " + palabraSecreta);
    }
}

jugar();
