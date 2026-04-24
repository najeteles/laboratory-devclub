/*
  while & do while loop in JavaScript

  A estrutura de repetição while é utilizada 
  para executar um bloco de código enquanto uma 
  condição especificada for verdadeira. O loop 
  do-while é semelhante, mas garante que o bloco 
  de código seja executado pelo menos uma vez, 
  mesmo que a condição seja falsa.    

  while -> Verifique a condição antes de executar
   o bloco de código. Se a condição for falsa desde
    o início, o bloco de código não será executado.

    do-while -> Execute o bloco de código pelo 
    menos. Faça, depois veja se é true ou false. 
    Se for true, execute novamente. Se for false,
    pare.
*/

let i=0

while (i < 5) {
    i++;
    console.log(i);
}


let j = 0;

do {
    j++;
    console.log(j);
} while (j < 5);

/*
   Saída:
   1
   2
   3
   4
   5
   1
   2
   3
   4
   5

*/  