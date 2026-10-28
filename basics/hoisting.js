//Hoisting is a phenomenon in javascript by which we can access these variables and functions even before we have initalized or declared it.

getName();
console.log(x); //undefined 
console.log(getName); //prints the function itself.

var x = 7;

function getName(){
  console.log("Hello Yash");
}

//Remember: in Js, undefined and not defined are two different things.

console.log(getName); //prints the function itself