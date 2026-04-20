const input = document.querySelector("#main-input");

function cliqueiNoBotao(){
// 1. Captura o que foi digitado
    const valorDoInput = input.value;

    // 2. Seleciona o primeiro parágrafo (a nossa referência)
    const primeiroP = document.querySelector(".primeiro-paragrafo-js");

    // 3. Cria um novo elemento de parágrafo na memória
    const novoParagrafo = document.createElement("p");
    
    // 4. Coloca o texto do input dentro desse novo parágrafo
    novoParagrafo.innerText = valorDoInput;
    
    // 5. Estilização opcional (para destacar o que foi injetado)
    novoParagrafo.style.color = "#2102b8";
    novoParagrafo.style.fontWeight = "bold";

    // 6. A MÁGICA: Insere o novo parágrafo LOGO APÓS o primeiro
    // Isso fará com que ele fique entre o primeiro e o segundo.
    primeiroP.after(novoParagrafo);
    
    // 7. Limpa o input para a próxima digitação
    input.value = "";
}

function digitouNoInput() {
    console.log("Digitou no input");
}

