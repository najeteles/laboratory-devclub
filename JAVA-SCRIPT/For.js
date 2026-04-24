/*
  For
  1 -> INICIALIZAÇÃO - Criar uma variável de controle
  2 -> CONDIÇÃO - Verificar se a variável de controle atende a condição para continuar o loop
  Ele irá verificar antes de cada ITERAÇÃO se a condição é verdadeira, caso seja falsa o loop é encerrado
  3 -> INCREMENTO/DECREMENTO - Atualizar a variável de controle para evitar um loop infinito
  4 -> BLOCO DE CÓDIGOS - O código que será executado a cada iteração do loop   
  5 -> FIM DO LOOP - O loop termina quando a condição se torna falsa
  6 -> Expressao final - Opcional, pode ser usada para executar um código após o término do loop

  for {[inicialização]; [condição]; [expressão final]} {
*/

for(let i = 0; i < 15; i++) {
  console.log(i);
}

const users = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas'];

for(let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

// Loop infinito
// for(let i = 0; i >= 0; i++) {
//   console.log(i);
// }

// Loop infinito
// for(let i = 0; ; i++) {
//   console.log(i);
// }
