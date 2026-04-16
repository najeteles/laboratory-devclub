/*

Alterando e acessando Textos

textContent -> texto puro, sem formatação pega todo o conteúdo
innerText -> texto formatado, pega o conteúdo visível
innerHTML -> texto formatado, pega o conteúdo visível e o código HTML


 */


const element = document.querySelector(".primeiro-paragrafo-js")

console.log(element.textContent); // só HTML
console.log(element.innerText); // só o que é visível leva em conta op CSS
console.log(element.innerHTML); // o que é visível + o código HTML 
// TRAŚ TUDO O CONTEÚDO, INCLUSIVE O QUE ESTÁ OCULTO PELO CSS E DEIXA ADICIONAR HTML

element.textContent = "Texto alterado com textContent";
element.innerText = "Texto alterado com innerText";
element.innerHTML = "Texto alterado com innerHTML <strong>com negrito</strong>";    

