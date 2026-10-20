"use strict";

let numero = prompt("Introduce numero dni: ");
let numeroNum = Number(numero);

let calculoDNI = numeroNum % 23;

switch (calculoDNI) {
    case 0:
        console.log(numeroNum + "-T");
        break;
    case 1:
        console.log(numeroNum + "-R");
        break;
    case 2:
        console.log(numeroNum + "-W");
        break;
    case 3:
        console.log(numeroNum + "-A");
        break;
    case 4:
        console.log(numeroNum + "-G");
        break;
    case 5:
        console.log(numeroNum + "-M");
        break;
    case 6:
        console.log(numeroNum + "-Y");
        break;
    case 7:
        console.log(numeroNum + "-F");
        break;
    case 8:
        console.log(numeroNum + "-P");
        break;
    case 9:
        console.log(numeroNum + "-D");
        break;
    case 10:
        console.log(numeroNum + "-X");
        break;
    case 11:
        console.log(numeroNum + "-B");
        break;
    case 12:
        console.log(numeroNum + "-N");
        break;
    case 13:
        console.log(numeroNum + "-J");
        break;
    case 14:
        console.log(numeroNum + "-Z");
        break;
    case 15:
        console.log(numeroNum + "-S");
        break;
    case 16:
        console.log(numeroNum + "-Q");
        break;
    case 17:
        console.log(numeroNum + "-V");
        break;
    case 18:
        console.log(numeroNum + "-H");
        break;
    case 19:
        console.log(numeroNum + "-L");
        break;
    case 20:
        console.log(numeroNum + "-C");
        break;
    case 21:
        console.log(numeroNum + "-K");
        break;
    case 22:
        console.log(numeroNum + "-E");
        break;
    default:
        console.log("Nop");
        break;
}    