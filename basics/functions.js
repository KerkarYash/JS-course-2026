//Default Function

// function fun(){
//   console.log("Welcome");

//   return 2;
// }

// let result = fun();
// console.log(result);

//Parameterized function

// function add( a, b ){
//   return "Additon of a and b is:"+(a + b);
// }

// let result = add(5,6);
// console.log(result);

//Arrow function: most used function. Its a shorthand function. Its a simple way to create a function. 

// const result = (name) => "Hello " + name
// console.log(result("Yash"));


//Function with default set parameter;

// function subtract(a = 2, b = 6){
//   return a - b;
// }

// console.log(subtract());


//Anonymous function: a function which doesn't have name

// const result = function(name){
//   return "Hello " + name;
// }

// console.log(result("Yash"));

//Callback: a function in which inside its parameter only we passed another function, that is called as callback function.

function user(name, callback){
  console.log(name);
  callback();
}

user("Yash", () => console.log("Done"))
