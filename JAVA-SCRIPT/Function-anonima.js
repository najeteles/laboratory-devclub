/*
    Function Anônima

    São funções sem nome, geralmente atribuídas a variáveis ou usadas como argumentos para outras funções. Elas são úteis para criar funções rápidas e temporárias, especialmente em situações onde a função não precisa ser reutilizada.

    Exemplo de função anônima atribuída a uma variável:
    const greet = function(name) {
        return `Hello, ${name}!`;
    };

    Exemplo de função anônima usada como argumento para outra função:
    setTimeout(function() {
        console.log('This will be logged after 2 seconds');
    }, 2000);

    As funções anônimas são amplamente utilizadas em JavaScript, especialmente em contextos como callbacks, eventos e métodos de array. Elas permitem que os desenvolvedores criem código mais conciso e flexível, sem a necessidade de nomear cada função individualmente.
*/
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet('Jean'));

setTimeout(function() {
    console.log('Isso será logado após 2 segundos');
}, 2000);


const meuIntervalo = setInterval(() => {
    console.log('Rodando...');
}, 3000);

// Plano de contingência: Parar após 30 segundos automaticamente
setTimeout(() => {
    clearInterval(meuIntervalo);
    console.log('Processo encerrado pelo watchdog.');
}, 30000);

