/*
   EStrutura de repetição for in - LOOP
    A estrutura de repetição for in é utilizada para iterar sobre as propriedades de um objeto ou os índices de um array. Ela é especialmente útil quando queremos acessar cada elemento de um objeto ou array sem precisar conhecer o número exato de elementos.
  
*/

const users = {
    name: 'John',
    age: 30,
    city: 'New York'
};

console.log(users.name);    
// Usando for in para iterar sobre as propriedades do objeto

//users.name -> Acessa a propriedade 'name' do objeto 'users' e retorna o valor 'John'.
//users['name'] -> Acessa a propriedade 'name' do objeto 'users' usando a notação de colchetes e retorna o valor 'John'.

for (const key in users) {
      console.log(key + users[key]);
}

for (const key in users) {
      console.log(`${key}: ${users[key]}`);
}


for (const key in users) {
    if (Object.hasOwnProperty.call(users, key)) {
        const element = users[key];
        console.log(`${key}: ${users[key]}`);
    }
}

// Saída:
// name: John
// age: 30
// city: New York

const fruits = ['Apple', 'Banana', 'Cherry'];

// Usando for in para iterar sobre os índices do array
for (const index in fruits) {
    console.log(index + ': ' + fruits[index]);
}

// Saída:
// 0: Apple
// 1: Banana
// 2: Cherry

/*
   Observação: Embora seja possível usar for in para iterar sobre arrays, é recomendado usar o loop for tradicional ou métodos de array como forEach, map, etc., para evitar problemas com propriedades herdadas ou índices não numéricos.
*/
