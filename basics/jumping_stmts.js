/*
break: to break a condition or statment
continue: to skip a statment or condition
return: if a function is running, then to take that value outside from the function we used this.
*/

for(let i = 0; i<=6; i++){
  if(i === 3){
    continue;
  }
  console.log(i);
}

//function: reusable block of code designed to perform specific tasks.

function checkNum(num){
  if(num > 0){
    return "Positive"
  }
  return "Equal to Zero or Negatvie"
}

let result = checkNum(5);
console.log(result);