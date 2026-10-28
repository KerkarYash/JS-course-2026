//Hoisting moves variables and function declaration at the top of their scope before execution.


//variable hoisting.

console.log(num); //undefined, it means var is hoisted variable.
var num = 20

//let and const are not hoisted variables, before accessing them even before the declaration and initialization, can leads to error.

//function hoisting

disp();  //Function decalration is hoisted, a function can be called even before it is declared.

function disp(){
  console.log("Hello")
}

//Function expression is not hoisted.
hello()

var hello = function(){
  console.log("Hii")
}

hello();
