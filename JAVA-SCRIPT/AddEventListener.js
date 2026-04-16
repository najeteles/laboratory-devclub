const input = document.querySelector("#main-input");
const select = document.querySelector("select");
const button = document.querySelector(".main-button");

function trocandoOValor(){
    console.log("Trocando de Valor");

}

input.addEventListener("keypress", trocandoOValor);

select.addEventListener("change", trocandoOValor);

button.addEventListener("click", trocandoOValor);