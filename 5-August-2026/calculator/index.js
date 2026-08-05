let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").innerText = num1;
document.getElementById("num2-el").innerText = num2;
function add() {
  let sum = num1 + num2;
  document.getElementById("sum-el").innerText = "Sum: " + sum;
}
function subtract() {
  let subtraction = num1 - num2;
  document.getElementById("sum-el").innerText = "Subtraction: " + subtraction;
}
function multiply() {
  let mutltiplication = num1 * num2;
  document.getElementById("sum-el").innerText =
    "Multiplication: " + mutltiplication;
}
function divide() {
  let divison = num1 / num2;
  document.getElementById("sum-el").innerText = "division: " + divison;
}
