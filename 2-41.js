"use strict"

const elementos = document.getElementsByClassName('item');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].outerHTML = '<p class="nuevo">Editado</p>';
}

