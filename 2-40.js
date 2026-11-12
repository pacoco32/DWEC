"use strict"

//Formulario
const form = document.querySelector("#formulario");

//Valores de comida, alojamiento y ocio. Cogemos con QuerySelector los valores de id
const alojamiento = document.querySelector("#alojamiento");
const comida = document.querySelector("#comida");
const ocio = document.querySelector("#ocio");

//Parrafo donde se muestra el mensaje. QuerySelector para coger el id
const mensaje = document.querySelector("#mensaje");

//Evento listener submit del formulario, al pulsar se realiza las comprobaciones
form.addEventListener("submit", function(event){
    event.preventDefault();

    //Validacion para que no se introduzcan nulos o numeros negativos
if (alojamiento.value === "" || comida.value === "" || ocio.value === "" ||
    alojamiento.value < 0 || comida.value < 0 || ocio.value < 0){
    mensaje.textContent = "Rellena los campos y sin numeros negativos";

} else {

    //Convertimos los valores a números
    const gAlojamiento = Number(alojamiento.value);
    const gComida = Number(comida.value);
    const gOcio = Number(ocio.value);

    //Validamos que sean números finitos
    if (!Number.isFinite(gAlojamiento) || !Number.isFinite(gComida) || !Number.isFinite(gOcio)){

        mensaje.textContent = "Rellena con números";

    } else {
        //Sumamos gastos y mostramos mensaje en el html con textContent
        let total_gastos = gAlojamiento + gComida + gOcio;
        mensaje.textContent = "Total: " + total_gastos;

    }
}
    
});


 

