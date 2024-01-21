//question 1 
// age lies between 10 and 20

const prompt = require("prompt-sync")();

let a = Number.parseInt(prompt("Enter age of person"));
if(a<20 && a>10){
  console.log("between 10 to 20");
}else
  console.log("no its not")


------------------------------------------------------------------------------

//question 2
// calcultor using switch case
const prompt = require("prompt-sync")();

let a = Number.parseInt(prompt("Enter 1st no."));
let b = Number.parseInt(prompt("Enter 2nd no."));

let c = prompt("Enter the operator");
let d = null;
switch (c) {
  case "+":
    d = a + b;
    break;
  case "-":
    d = a - b;
    break;
  case "*":
    d = a * b;
    break;
  case "/":
    d = a / b;
    break;
  default:
    console.log("Invalid operator");
}
console.log(d);



------------------------------------------------------------------------------

// question 3
// divisible by 2 and 3
const prompt = require("prompt-sync")();

let a = Number.parseInt(prompt("Enter 1st no."));

if (a % 2 == 0 && a % 3 == 0) {
  console.log(true);
} else console.log(false);

------------------------------------------------------------------------------

// question 4
// divisible by 2 or 3
const prompt = require("prompt-sync")();

let a = Number.parseInt(prompt("Enter no. to be checked"));

if (a % 2 == 0 && a % 3 == 0) {
  console.log("divisible by both 2 and 3");
} else if(a%2==0){
  console.log("divisible by 2");
}else if(a%3==0){
  console.log("divisible by 3");
}else 
  console.log("not divisible by 2 and 3");


------------------------------------------------------------------------------

// question 5
// can drive or not 
const prompt = require("prompt-sync")();
let a = Number.parseInt(prompt("Enter age"));
if(a>=18){
  console.log("you can drive");
}else
  console.log("can't drive");
