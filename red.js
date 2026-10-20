"use strict";

let ip1 = 172;
let ip2 = 16;
let ip3 = 25;
let ip4 = 10;

let mas1 = 255;
let mas2 = 255;
let mas3 = 192;
let mas4 = 0;

//Dirección de red
let r1 = ip1 & mas1;//& compara los bits: devuelve 1 solo si ambos bits son 1.
let r2 = ip2 & mas2;
let r3 = ip3 & mas3;
let r4 = ip4 & mas4;

console.log("Red:", r1 + "." + r2 + "." + r3 + "." + r4);

//Complemento de la máscara
let c1 = (~mas1) & 255;//~ invierte los bits de la máscara y & 255 limita el resultado a 8 bits.
let c2 = (~mas2) & 255;
let c3 = (~mas3) & 255;
let c4 = (~mas4) & 255;

//Host
let h1 = ip1 & c1;
let h2 = ip2 & c2;
let h3 = ip3 & c3;
let h4 = ip4 & c4;

console.log("Parte de host:", h1 + "." + h2 + "." + h3 + "." + h4);