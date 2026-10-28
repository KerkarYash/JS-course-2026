const num1 = 10;
const num2 = 0;
const operator='/';

switch(operator){
  case '+':
    console.log(num1 + num2);
    break;
  case '-':
    console.log(num1 - num2);
    break;
  case '*':
    console.log(num1 * num2);
    break;
  case '/':
    if(num2 === 0){
      console.log("Can't divide by zero")
    }
    else{
      console.log(num1 / num2);
    }
    break;
  default:
    console.log("Invalid Operator");
    break;
}