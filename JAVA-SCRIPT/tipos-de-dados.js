/* Tipo de Dados

1- String -> Textos
2- Numbers -> Números
3- Boolean -> true ou false
4- Objects -> objetos
5- Undefined -> indefinido
6- Null -> nulo
7- Array -> lista de dados / Vetores
8- Function -> função -executado somente quando for chamado
7- Symbol -> símbolo
8- BigInt -> números inteiros muito grandes
9- if(se) -> estrutura de controle de fluxo
10- else(senão) -> estrutura de controle de fluxo
Operadores de comparação
> maior que
< menor que
>= maior ou igual a
<= menor ou igual a
== igual a (comparação de valor)
=== estritamente igual a (comparação de valor e tipo)
!= diferente de (comparação de valor)
!== estritamente diferente de (comparação de valor e tipo)     

*/ 


const texto1 = "textos com aspas 'duplas'"
const texto2 = 'textos com aspas "simples"'
const texto3 = `textos
 com 
 a 
 crase` // Template literals ou Template Strings
 
 console.log(texto1)
 console.log(texto2)
 console.log(texto3)


const myAge = 46
const myCar = 'C3'
const myHome = 'no campo'

const mystring = `MInha idade é ${myAge} , meia idade é foda.
Quero vender meu ${myCar} e morar ${myHome}.`   

console.log(mystring)

const number1 = 1024 / 8
console.log(number1)

const Jean = {
    nome: "Jean Freud",
    idade: 46,
    profissao: "Programador",
    endereço: {
        rua: "Up na VIda",
        numero: 123,
        cidade: "Campo Grande",
        estado: "MS"
    }
}
console.log(Jean)

console.log(Jean.endereço.numero)

Jean.cidade = "Araguari"
console.log(Jean)

const user = {
    nome: Jean,
    idade: 46,
    profissao: "Programador",
    nomeDoConjuge: null,
    filhos: undefined
}
console.log(user)

const myAarrayUsers= [
    {
        nome: "Jean",
        idade: 46,
        profissao: "Programador"
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Designer"
    },
    {
        nome: "Carlos",
        idade: 25,
        profissao: "Analista de Dados"
    },
];
console.log(myAarrayUsers)
const Users = [
    { nome: 'Jean', idade: 46 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Carlos', idade: 25 }
    ]

    Users[2].idade = 26;     
console.log(Users[1].nome)

const notaDoAluno = 85
const notaDeCorte = 60

/* em linha*/
const resultado = notaDoAluno >= 60 ? "Aprovado" : "Reprovado"
console.log(resultado)  /* em linha*/

if(notaDoAluno > notaDeCorte) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}   

const senhaDoUsuario = 123456
const senhaDigitada = 123456

if(senhaDoUsuario == senhaDigitada) {
    console.log("Acesso concedido")
} else {
    console.log("Acesso negado")
}

const variavel = "Sempre roda"
console.log(variavel)

function slogan() {
    console.log("BE FREE!")
}
slogan()