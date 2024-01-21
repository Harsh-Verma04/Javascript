const prompt = require("prompt-sync")();
  
let a = Number.parseInt(prompt("Enter 1st no."))
let b = Number.parseInt(prompt("Enter 2nd no."))

let c = prompt("Enter the operator");
let d=null;
switch(c){
  case '+':
    d=a+b;
    break
  case '-':
    d=a-b;
    break
  case '*':
    d=a*b;
    break
  case '/':
    d=a/b;
    break
  default:
    console.log("Invalid operator");
}
console.log(d);

