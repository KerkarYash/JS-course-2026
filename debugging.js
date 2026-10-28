function first(){
  console.log("Result from another function.");
}

function add(a, b){
  first();
  console.log("Result of a and b is:")
  return a + b;
}

debugger;
let result = add(5,3);

console.log(result);  //8
console.log(++result);  //9
console.log(result++);  //9
console.log(++result); //11

document.getElementById("output").innerHTML = "Result:" + result;