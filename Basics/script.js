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

let x = 13;
let y = 3;
var add = x + y;
let subt = x - y;
const mult = x * y;
let div = x / y;
let modulos = x % y;

document.getElementById("add").textContent = `Sum is ` + add;
document.getElementById("subt").textContent = `Subtraction is ` + subt;
document.getElementById("mult").textContent = `Multiplication is` + mult;
document.getElementById("div").textContent = `Division is` + div;
document.getElementById("modulos").textContent = `Modulos is` + modulos;
