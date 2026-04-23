
/*
  Function Arguments and Parameters in JavaScript
*/

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!
greet("Jane"); // Output: Hello, Jane!  

function sum(number1=0, number2=1) {
    console.log(number1 + number2);
}
sum(5, 10); // Output: 15
sum(7); // Output: 8 (number2 defaults to 1)
sum(); // Output: 1 (both number1 and number2 default to 0 and 1 respectively)

function displayInfo(name, age) {
    console.log("Name: " + name);
    console.log("Age: " + age);
}

displayInfo("Alice", 30); // Output: Name: Alice, Age: 30
displayInfo("Bob"); // Output: Name: Bob, Age: undefined (age is not provided)

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

let divisionResult = divide(10, 2);
console.log(divisionResult); // Output: 5

divisionResult = divide(10, 0); // Output: Cannot divide by zero!   
