/*
    arrow function -> () => {}
    function padrão -> function() {}

    A arrow function é uma forma mais concisa de escrever funções em JavaScript. 
    Ela é especialmente útil para funções anônimas e callbacks, tornando o código mais limpo e legível.

    Não escrevemos "function".
    Alem disso usamos o sinal "=>" para cria-la,
        e não precisamos usar a palavra "return" para retornar um valor,

    A arrow function é uma forma mais concisa de escrever funções em JavaScript. 
    Ela é especialmente útil para funções anônimas e callbacks, tornando o código mais limpo e legível.

    Exemplo de função tradicional:
    function soma(a, b) {
        return a + b;
    }

    Exemplo de arrow function:
    const soma = (a, b) => a + b;

    A arrow function também tem algumas diferenças em relação à função tradicional, como a forma como lida com o 'this' e a impossibilidade de ser usada como construtora.

    Em resumo, a arrow function é uma maneira moderna e eficiente de escrever funções em JavaScript, especialmente para casos onde a função é usada como callback ou não precisa de um contexto específico. 
    
*/

function sayMyName(name) {
    return `My name is ${name}`;
}

const sum = (number1, number2) => number1 + number2;

console.log(sayMyName('Jean'));
console.log(sum(5, 10));

