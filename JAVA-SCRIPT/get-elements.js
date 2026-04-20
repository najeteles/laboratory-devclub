/*
document -> HTML

getElementById() -> id Trás um elemento único, pois o id é único
getElementsByClassName() -> class Trás uma coleção de elementos, pois várias tags podem ter a mesma classe
getElementsByTagName() -> tag Trás uma coleção de elementos, pois várias tags podem ter a mesma tag
getElementsByName   -> name Trás uma coleção de elementos, pois várias tags podem ter o mesmo name

querySelector() -> CSS selector Trás um elemento, primeiro que encontrar 
querySelectorAll() -> CSS selector Trás uma coleção de elementos, todos que encontrar


Alterando e acessando Textos

textContent -> texto puro, sem formatação pega todo o conteúdo
innerText -> texto formatado, pega o conteúdo visível
innerHTML -> texto formatado, pega o conteúdo visível e o código HTML


 */


const input = document.getElementById("main-input");
console.log(input);

const elements = document.getElementsByClassName("paragraph-js")
console.log(elements);

const tags = document.getElementsByTagName("p");
console.log(tags);

const names = document.getElementsByName("main-input");
console.log(names);

const query = document.querySelector(".button.primeiro-paragrafo-js");
console.log(query);

const queryAll = document.querySelectorAll(".paragraph-js");
console.log(queryAll);





