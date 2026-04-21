/*
    Switch controlador de fluxo de execução, é uma alternativa ao if-else, quando temos muitas condições a serem verificadas.

    A sintaxe do switch é a seguinte:

    switch (expressão) {
        case valor1:
            // código a ser executado se a expressão for igual a valor1
            break;
        case valor2:
            // código a ser executado se a expressão for igual a valor2
            break;
        ...
        default:
            // código a ser executado se a expressão não for igual a nenhum dos valores anteriores
    }

    O switch avalia a expressão e compara seu resultado com os valores especificados em cada case. Se houver uma correspondência, o código dentro desse case será executado até encontrar um break ou o final do switch. Se nenhum case corresponder à expressão, o código dentro do default será executado (se houver).

    O uso do break é importante para evitar que o código continue sendo executado nos cases seguintes, o que pode levar a resultados indesejados.

*/

const temperatura = 30;

switch (temperatura) {
    case 0:
        console.log("A temperatura é zero.");
        break;
    case 10:
        console.log("A temperatura é dez.");
        break;
    case 20:
        console.log("A temperatura é vinte.");
        break;
    case 30:
        console.log("A temperatura é trinta.");
        break;
    default:
        console.log("Temperatura desconhecida.");
}

const user = "Jean";

switch (user) {
    case "Jean":
        console.log("O usuário é Jean.");
        break;
    case "Maria":
        console.log("O usuário é Maria.");
        break;
    default:
        console.log("Usuário desconhecido.");
}   