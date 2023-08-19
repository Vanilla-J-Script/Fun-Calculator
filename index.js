// Output display
const displayScreen = document.getElementById("output");

const btn1 = document.getElementById("number1-btn");
const btn2 = document.getElementById("number2-btn");
const btn3 = document.getElementById("number3-btn");
const btn4 = document.getElementById("number4-btn");
const btn5 = document.getElementById("number5-btn");
const btn6 = document.getElementById("number6-btn");
const btn7 = document.getElementById("number7-btn");
const btn8 = document.getElementById("number8-btn");
const btn9 = document.getElementById("number9-btn");
const btn0 = document.getElementById("number0-btn");


const btnAllClear = document.getElementById("all-clear-btn");
const btnDelete = document.getElementById("delete-btn");
const btnDecimal = document.getElementById("decimal-btn");
const btnEqualTo = document.getElementById("equal-to-btn");


const btnAdd = document.getElementById("add-btn");
const btnSubtract = document.getElementById("subtract-btn");
const btnMultiply = document.getElementById("multiply-btn");
const btnDivide = document.getElementById("divide-btn");


//handler functions for button click events.
btn1.onclick = function () {
    displayScreen.value += "1";
}
btn2.onclick = function () {
    displayScreen.value += "2";
}
btn3.onclick = function () {
    displayScreen.value += "3";
}
btn4.onclick = function () {
    displayScreen.value += "4";
}
btn5.onclick = function () {
    displayScreen.value += "5";
}
btn6.onclick = function () {
    displayScreen.value += "6";
}
btn7.onclick = function () {
    displayScreen.value += "7";
}
btn8.onclick = function () {
    displayScreen.value += "8";
}
btn9.onclick = function () {
    displayScreen.value += "9";
}
btn0.onclick = function () {
    displayScreen.value += "0";
}
btnAllClear.onclick = function () {
    displayScreen.value="";
}
btnDelete.onclick = function () {
    displayScreen.value = displayScreen.value.toString().slice(0,-1);
}
btnAdd.onclick = function () {
    displayScreen.value += "+";
}
btnSubtract.onclick = function () {
    displayScreen.value += "-";
}
btnMultiply.onclick = function () {
    displayScreen.value += "*";
}
btnDivide.onclick = function () {
    displayScreen.value += "/";
}
btnDecimal.onclick = function () {
    displayScreen.value += ".";
}
btnEqualTo.onclick = function () {
    displayScreen.value = eval(displayScreen.value);
}


