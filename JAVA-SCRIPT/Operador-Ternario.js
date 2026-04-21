/*

Operador Ternário

O operador ternário é uma forma concisa de escrever uma expressão condicional. Ele é composto por três partes: a condição, o valor retornado se a condição for verdadeira e o valor retornado se a condição for falsa.

A sintaxe do operador ternário é a seguinte:

condição ? valor_se_verdadeiro : valor_se_falso;
? if(se)
: else(senão)
&& (if sem else)

Exemplo:

Vamos supor que queremos verificar se um salário é maior ou igual a 3000. Se for, queremos retornar "Salário alto", caso contrário, queremos retornar "Salário baixo".
 

*/
const salary = 5000;
/*
// if(salary < 3000) {
//     console.log("Salário baixo");
// } else {
//     console.log("Salário alto");
// }

*/

salary < 3000 ? console.log("Salário baixo") : console.log("Salário alto");

// Podemos também armazenar o resultado do operador ternário em uma variável:

const salaryStatus = salary < 3000 ? "Salário baixo" : "Salário alto";
console.log(salaryStatus);
