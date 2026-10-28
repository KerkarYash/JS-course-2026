//Synchronous code:

console.log("Start");

function fun(){
  console.log("Hello");
}

fun();
console.log("End");

//Asynchronous code:

console.log("First");

setTimeout(() => {
  console.log("Second");
},2000);

console.log("Third");