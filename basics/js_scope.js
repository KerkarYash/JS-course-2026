//Javascript scope: It defines where variables can be accessed in the code.
/*
Global scope: accessed everywheere
function scope: function only (ex: var)
block scope: block only (like if, conditional blocks, normal blocks and loops) (ex: let and const)
*/

let num = 10 //global scope: can be accessed anyhere in the code
const fixedValue = 22

function disp(){
  console.log(num);

  if(num){
    console.log(num);
  }
  console.log(fixedValue);
}

disp();