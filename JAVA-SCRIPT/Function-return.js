function sum(value1, value2) {
    const result = value1 + value2;
    return result;
}

let total = sum(10, 20);
console.log(total); // Output: 30

function greet(name) {
    return "Hello, " + name + "!";
}

let greeting = greet("Alice");
console.log(greeting); // Output: Hello, Alice!

function isEven(number) {
    return number % 2 === 0;
}

let checkEven = isEven(4);
console.log(checkEven); // Output: true

checkEven = isEven(7);
console.log(checkEven); // Output: false



function multiply(a, b) {
    return a * b;
}

let result = multiply(4, 5);
console.log(result); // Output: 20

function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero!");
        return;
    }
    return a / b;
}