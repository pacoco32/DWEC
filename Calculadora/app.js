"use strict";

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");
const limpiar = document.querySelector("#limpiar");


formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();
    const num_1 = Number(num1.value);
    const num_2 = Number(num2.value);

    const suma = num_1 + num_2;

    resultado.textContent = suma;

});

//Evento limpiar la calculadora, valores a 0 y borrado de resultado
limpiar.addEventListener("click", function(evento) {

    evento.preventDefault();
    num1.value = 0;
    num2.value = 0;

    resultado.textContent = "";

});








