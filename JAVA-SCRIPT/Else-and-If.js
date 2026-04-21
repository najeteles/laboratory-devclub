/*

IF (SE)
ELSE (SENÃO SE)
ELSE IF (SENÃO SE)

IF: Verifica se uma condição é verdadeira. Se for, o código dentro do bloco IF é executado.
ELSE: Fornece um bloco de código alternativo que é executado se a condição do IF for falsa.
ELSE IF: Permite verificar múltiplas condições sequencialmente. Se a condição do IF for falsa, o ELSE IF verifica outra condição, e assim por diante.
Exemplo:

const temperatura = 30;

if (temperatura > 25) {
    console.log("Está quente lá fora!");
} else if (temperatura === 25) {
    console.log("Está frio lá fora!");
} else {
    console.log("Está muito frio lá fora!");
}

Neste exemplo, o código verifica a temperatura e imprime uma mensagem diferente dependendo do valor da temperatura. Se a temperatura for maior que 25, ele imprime "Está quente lá fora!". Se a temperatura for exatamente 25, ele imprime "Está frio lá fora!". Caso contrário, ele imprime "Está muito frio lá fora!".    
   

*/





const temperatura = 30;

if (temperatura > 25) {
    console.log("Está quente lá fora!");
} else if (temperatura === 25) {
    console.log("Está frio lá fora!");
} else {
    console.log("Está muito frio lá fora!");
}