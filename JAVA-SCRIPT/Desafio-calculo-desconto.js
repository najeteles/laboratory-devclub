/*
    Calcular o desconto de um produto, onde o usuário irá informar o valor 
    do produto e a porcentagem de desconto. O programa deve exibir o valor 
    do desconto e o valor final do produto após o desconto.

    Todos os produtos acima de R$50,00 terão um desconto adicional de 5%.
*/

const cart = [10, 72, 30, 45, 60];

let total = 0;

cart.forEach(value => {
    total += value;
});

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100;
    return result;
}

cart.forEach((value) => {
    if (value > 50) {
        const discount = calculateDiscount(value, 5);
        total = total + (value - discount);
    } else {
        total += value;
        }});

console.log(`Valor total do carrinho: R$${total.toFixed(2)}`);
console.log('-----------------------------');

cart.forEach(value => {

    if (value > 50) {
        const discount = calculateDiscount(value, 5);
        const finalPrice = value - discount;
        console.log(`Valor do produto: R$${value.toFixed(2)}`);
        console.log(`Desconto adicional: R$${discount.toFixed(2)}`);
        console.log(`Valor final do produto: R$${finalPrice.toFixed(2)}`);
        console.log('-----------------------------');
    } else {
        console.log(`Valor do produto: R$${value.toFixed(2)}`);
        console.log('Sem desconto adicional');
        console.log('-----------------------------');
    }
});