// Accessing DOM elements
// Element Selector | Tag name Selector
// console.log(document.getElementsByTagName("h1"));

// // Class selector
// console.log(document.getElementsByClassName("test"));

// // id selector
// // console.log(document.getElementByID("t"));

// // Manipulate DOM Element

// // Change Style
// document.getElementsByTagName("h1")[0].style.color = "blue";

// // Change the text content
// document.getElementById("para").textContent = "updated p content";
// document.getElementById("para").innerText = "updated P content with inner text";
// document.getElementById("para").innerHTML = "Thakur";
// ("<h1> P content with inner text</h1>");

// // handling DOM events
// document.getElementById("btn").onclick = function () {
//   alert("Button Clicked");
// };

// Interview Questions
// Explain DOM to a seven years old kid

// JS Variables
// variable declaration
// Auomatically
// x = 1;

// // Using Var
// var y = 2;
// document.getElementById("output").textContent = y;

// var name = "Dented Code";
// document.getElementById("output").textContent = name;

// // use let
// let z = 100;
// document.getElementById("output").textContent = z;

// // Using const
// const age = 55;
// document.getElementById("output").textContent = age;

// var y = 3;
// document.getElementById("output").textContent = y;

// let z = 1000;
// document.getElementById("output").textContent = z;

// const age = 50;
// document.getElementById("output").textContent = age;

// let x = 13;
// let y = 3;
// var add = x + y;
// let subt = x - y;
// const mult = x * y;
// let div = x / y;
// let modulos = x % y;

// document.getElementById("add").textContent = `Sum is :` + add;
// document.getElementById("subt").textContent = `Subtraction is :` + subt;
// document.getElementById("mult").textContent = `Multiplication is :` + mult;
// document.getElementById("div").textContent = `Division is :` + div;
// document.getElementById("modulos").textContent = `Modulos is :` + modulos;

// interview questions
// 1) What is variable?
// 2)What is a syntax in programming language?
// 3)Comments in JS.
// 4)what are the different ways of declaring variables in JS?
// 5)When to use var let or const?
// 6)How to name a variable?
// 7)Garbage Collection.

// Data Types
// primitive                                                     Reference
// String , number, boolean , undefined, null                     -Object, Array, Function

// // STRING
// const name= "Dented Code"
// const city ='Sydney'
// const gender =`Male`
// const language = String(1);

// document.getElementById("output").textContent=type of name

// // NUMBER
// const number= 100
// var n1= 5.5
// const num = -55
// const num2 = 123456787889

// // Boolean
// const bool1= false
// const bool2= true
// const bool3= 1===1;

// // undefined Data Type
// var thakur;
// const stupid = undefined;

// // Null type
// let stupid2 = null;

// // Symbol
// let id = Symbol('id')

// Big Int

// Array Object and Functions
// Array

// const Arg = ["milk", "egg", "banana", "papaya"];
// const randomarray = [1, 2, 2.4, false, [hello], 1000, "string"];

// Array index
// Traversing arrays

// Object
// const object1 = {
//   name: "Thakur",
//   age: 22,
//   address: Newtown,
//   1: "string",
// };
// const jsbook = {
//   name: "jsbook",
//   Author: "brendoneich",
//   Edition: "third",
//   Pages: 500,
// };
// document.getElementById("add").textContent = jsbook.Author;

// // Date
// console.log(newDate());

// // Math
// console.log(Math.random());

// Interview Questios
// What are data types ?
// What are the diffrent types of data types in js ?
// What is an Array?
// What is an Object?

// Assignment
// Create a simple html page using html and js to explain about operators, variables and data types.
// Build a simple calculator.

// Control Statements/ Conditional Statments
// let output = document.getElementById("output");
// let output2 = document.getElementById("output2");
// IF STATEMENT
// const weekend = true;
// if (weekend) {
//   output.textContent = "Come to class";
// }
// if (!weekend) {
//   output.textContent = "Sleep!!!!";
// }

// IF ELSE STATEMENT
// Find if a number is odd or even
// const num = 8;
// if (num % 2 === 0) {
//   output.textContent = "It is even Number";
// } else {
//   output.textContent = "It is odd Number";
// }

// If-Else_if Statement
// Implement grading system using if-else-if
// const grade = 70;
// if (grade >= 90) {
//   output.textContent = "A+, Brilliant";
// } else if (grade >= 80) {
//   output.textContent = "A, Excellent";
// } else if (grade >= 70) {
//   output.textContent = "B+ , Good ";
// } else {
//   output.textContent = "You failed ";
// }

// Build a pricing catalogue for these items : Monitor, Mouse, Keyboard, CPU, Printer
// let items = "Monitor";

// if ((items = "Monitor")) {
//   output.textContent = "The price of Monior is : $3000 ";
// } else if ((items = "Mouse")) {
//   output.textContent = "The price of Mouse is : $300";
// } else if ((items = "Keyboard")) {
//   output.textContent = "The price of Keyboard is : $300";
// } else if ((items = "CPU")) {
//   output.textContent = "The price of CPU is : $300";
// } else if ((items = "Printer")) {
//   output.textContent = "The price of Printer is : $300";
// } else {
//   output.textContent = "Item not found";
// }

// Switch Statement
// const item = "Mouse";
// switch (item) {
//   case "Monitor":
//     output.textContent = "Monitor: $500";
//     break;
//   case "Mouse":
//     output.textContent = "Mouse : $300";
//     break;
//   case "CPU":
//     output.textContent = "CPU : $1000";
//     break;
//   case "Prnter":
//     output.textContent = "Printer : $100";
//     break;
//   default:
//     output.textContent = "No value found";
// }

// Ternary Operator
// 2 === 2 ? "true" : "false";
// 4 % 2 === 0
//   ? (output.textContent = "Even Number")
//   : (output.textContent = "Odd Number");

// Nested if
// const isRaining = true;
// const isWindy = false;
// if (isRaining) {
//   output.textContent = "It is raining";
//   if (isWindy) {
//     output.textContent = "It is also Windy";
//   } else {
//     output.textContent = "It is not windy";
//   }
// } else {
//   output.textContent = "It is not raining";
// }

// Interview Questions
// What is conditional statement in programming?
// What is control statement in programming?
// Can you talk about different cond. statement in js?
// Explain the diffrerence between if and if else?
// How does the order of else-if statement affect the execution of code?
// Define Switch Case
// What are the advantages of switch case over if else  if?
// Can you explain about fallthrough in SwitchCase?
// Why you use break in SwitchCase?
// What is Condition nesting?
// What is Ternary Operators?

// LOOPS
let output = document.getElementById("output");
let output2 = document.getElementById("output2");

// FOR LOOP
// Initializer, Condition, Increment
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 10; ) {
//   i += 1;
//   console.log(i);
// }

// WHILE LOOP
// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// Do While Loop
// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j <= 5);

// For of and For in loop
// For In -----------Object Iterables
// const syam = {
//   name: "Shyam",
//   age: 25,
//   address: "Sydney",
// };
// for (let key in syam) {
//   console.log(syam[key]);
// }

// For of -------------Works for Array and String
// let groceryList = ["apple", "milk", "Chicken"];
// for (let groceryItem of groceryList) {
//   console.log(groceryItem);
// }

// // let name = "THAKUR";
// for (let letter of "THAKUR") {
//   console.log(letter);
// }

// const syam = {
//   name: "Shyam",
//   age: 25,
//   address: "Sydney",
// };
// for (let key of syam) {
//   console.log(syam);
// }

// Pattern Printing
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= i; j++) {
//     output.innerHTML = output.innerHTML + "*";
//   }
//   output.innerHTML = output.innerHTML + "<br/>";
// }

// for (let i = 1; i <= 4; i++) {
//   for (let j = 4; j >= i; j--) {
//     output.innerHTML = output.innerHTML + "*";
//   }
//   output.innerHTML = output.innerHTML + "<br/>";
// }

// Read and write about breaks in loops
// Explain Loops in programming
// what are different types of loops in JSON
// use for loop to iterate over an array item and print them
// Explain what for in and for of loop in js.
// What is the difference between while and dowhile.
// Explain what is break and continue

// Assignment
// website using as many patterns as you can

// Build a website to list the students record using html,js

// FUNCTIONS
// function greeting(name = "Thakur") {
//   document.getElementById("output").innerHTML =
//     document.getElementById("output").innerHTML + "<h1>HELLO ${name}</h1>";
// }
// greeting("Thakur");
// greeting();
// greeting();
// greeting();

// try {
//   //code
//   const name = "prem";
//   console.log(name);
//   //   console.log(first);
//   //   ..

//   throw new Error("token expired");
// } catch (error) {
//   console.log(error.message);

//   if (error.message.includes("token expired")) {
//     console.log("text sent");
//   }
//   // send text
// } finally {
//   //   console.log(Date(), "function executed");
// }
JS - Scheduling;
// setTimeout
// console.log("before st");
// setTimeout(() => {
//   console.log("wait is over");
// }, 3000); //1s

// clearTimeout
// setInterval

// let counter = 0;
// const counterInterval = setInterval(() => {
//   console.log(counter++);

//   if (counter == 10) {
//     clearInterval(counterInterval);
//   }
// }, 1000);

// clearInterval
