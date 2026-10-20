"use strict";

let temperatura = prompt("Introduce temperatura: ");
let temperaturaNum = Number(temperatura);

let conversion = prompt("Introduce la conversión que quieres hacer: \n1. Celsius a Fahrenheit \n2. Fahrenheit a Celsius");

switch (conversion) {
    case "1":
        let fahrenheit = (temperaturaNum * 9/5) + 32;
        console.log(temperaturaNum + "°C son " + fahrenheit + "°F");
        break;
    case "2":
        let celsius = (temperaturaNum - 32) * 5/9;
        console.log(temperaturaNum + "°F son " + celsius + "°C");
        break;
    default:
        console.log("Opción que no vale");
}