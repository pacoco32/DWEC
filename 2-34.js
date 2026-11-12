"use strict";

//1
function ejecutarSegun(decision, si, no) {
    if (decision) {
        return si();
    } else {
        return no();
    }
}

//2
const ejecutarSegun2 = (decision, si, no) => {
    if (decision) {
        return si();
    } else {
        return no();
    }
};

//3
const ejecutarSegun3 = (decision, si, no) => {
    if (decision) {
        return si();
    } else {
        return no();
    }
};

//Comprobar
const si = () => "Continuar";
const no = () => "Cancelar";

//ejecutarSegun
console.log(ejecutarSegun(true, si, no));//Continua
console.log(ejecutarSegun(false, si, no));//Se cancela

//ejecutarSegun2
console.log(ejecutarSegun2(true, si, no));//Continua
console.log(ejecutarSegun2(false, si, no));//Se cancela

//ejecutarSegun3
console.log(ejecutarSegun3(true, si, no));//Continua
console.log(ejecutarSegun3(false, si, no));//Se cancela
