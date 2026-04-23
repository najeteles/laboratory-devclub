/*
   For-each(item, index, array)
*/

const users = [
    { name: 'John', age: 25, contact: '(34) 123-4567' },
    { name: 'Jane', age: 30, contact: '(34) 987-6543' },
    { name: 'Doe', age: 35, contact: '(34) 555-5555' }
];

users.forEach(function (item) {
    console.log(item);
});

users.forEach(function (item, index) {
    console.log(index + ': ' + item.name);
});

users.forEach(function (item, index, array) {
    console.log('Index: ' + index);
    console.log('Item: ' + item.name);
    console.log('Array Length: ' + array.length);
});