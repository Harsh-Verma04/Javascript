const prompt = require("prompt-sync")();
let obj={
  arman:45,
  Harry:10,
  Rohan:20
}

//Question 1
for(let i=0;i<Object.keys(obj).length;i++){
  console.log(Object.keys(obj)[i]+" "+obj[Object.keys(obj)[i]])
}

//Question 2
for (key in obj){
  console.log(key +" "+obj[key])
}

//Question 3



const prompt = require("prompt-sync")();

let a = Number.parseInt(prompt("Enter no. "));
let i =Number.parseInt(prompt("Enter no."));
while(a!=i){

  console.log("Try again")
  i=Number.parseInt(prompt("Enter no."));
}
console.log("You have entered correct no.")


//Question 4

const prompt= require("prompt-sync")();
const mean=(a,b,c,d,e) => {
  let m=(a+b+c+d+e)/5;
  return m;
}
let a = Number.parseInt(prompt("Enter 1st no."));
let b = Number.parseInt(prompt("Enter 2nd no."));
let c = Number.parseInt(prompt("Enter 3rd no."));
let d = Number.parseInt(prompt("Enter 4th no."));
let e = Number.parseInt(prompt("Enter 5th no."));
console.log(mean(a,b,c,d,e));
