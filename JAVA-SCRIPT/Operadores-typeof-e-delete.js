/*
Operadores typeof e delete

typeof: Retorna uma string indicando o tipo do operando.
delete: Remove uma propriedade de um objeto ou um elemento de um array.

Exemplo de uso do typeof:
let x = 42;
console.log(typeof x); // "number"

Exemplo de uso do delete:
let obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }
*/

const myObject = {
  name: "John",
  age: 30,
  address: "Rua do Developer, 123",
};



console.log(typeof myObject); // "object"

delete myObject.age;
console.log(myObject); // { name: "John", address: "Rua do Developer, 123" }