/*
&& -> E (AND)
true && true -> true
true && false -> false
false && true -> false
false && false -> false

|| -> OU (OR)
true || true -> true
true || false -> true
false || true -> true
false || false -> false

! -> NÃO (NOT)
!true -> false
!false -> true

*/

const digitarASEnha = true;
const digitarOToken = true;
const numeroDaConta = true;

if (digitarASEnha && digitarOToken && numeroDaConta) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}