// filename: complexCode.js
// Description: A complex JavaScript code example demonstrating advanced concepts and functionality

// -------------------------------------
// Section 1: Constants and Variables
// -------------------------------------
const PI = Math.PI;
const MAX_VALUE = 100;

let counter = 0;
let isRunning = true;
let message = "";

// -------------------------------------
// Section 2: Functions
// -------------------------------------

// Function to calculate the factorial of a number
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to generate a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -------------------------------------
// Section 3: Classes and Objects
// -------------------------------------

// Class representing a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating object instances of Person class
const person1 = new Person("John", 30, "male");
const person2 = new Person("Jane", 25, "female");

// -------------------------------------
// Section 4: Loops and Conditions
// -------------------------------------

// A for loop to print even numbers from 1 to 10
console.log("Even numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Using a while loop to count down from 10 to 1
console.log("Counting down from 10 to 1:");
let countdown = 10;
while (countdown >= 1) {
  console.log(countdown);
  countdown--;
}

// -------------------------------------
// Section 5: Advanced Operations
// -------------------------------------

// Sorting an array of objects based on a property
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

console.log("Sorting users by age:");
users.sort((a, b) => a.age - b.age);
console.log(users);

// Performing mathematical operations
const num1 = 10;
const num2 = 2;

console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`);
console.log(`Difference between ${num1} and ${num2} is ${num1 - num2}`);
console.log(`Product of ${num1} and ${num2} is ${num1 * num2}`);
console.log(`Quotient of ${num1} divided by ${num2} is ${num1 / num2}`);

// -------------------------------------
// Section 6: Complex Data Structures
// -------------------------------------

// Using Sets and Maps
const set = new Set([1, 2, 3, 4, 5]);
const map = new Map([
  ["name", "John"],
  ["age", 30],
  ["gender", "male"],
]);

console.log("Set elements:");
for (const element of set) {
  console.log(element);
}

console.log("Map entries:");
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// -------------------------------------
// Section 7: Event Handling
// -------------------------------------

// Adding an event listener to a button
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  console.log("Button clicked!");
});

// -------------------------------------
// Section 8: More Advanced Concepts
// -------------------------------------

// Asynchronous function using Promises
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data fetched from ${url}`);
    }, 2000);
  });
}

fetchData("https://api.example.com/data")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// ...

// -------------------------------------
// Section 9: Code Summary
// -------------------------------------

console.log("Code execution completed.");