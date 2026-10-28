import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
  let initial_bal = 1000;


  const rl = readline.createInterface({input, output});
  let option = Number(
    await rl.question("What you want to do? 1. Check Balance, 2. Deposit, 3. Withdraw, 4. Exit:")
  ); 

  while(option != 4){
    switch(option){
    case 1:
      console.log("Check Balance option selected");
      console.log("Your balance is:", initial_bal);
      break;
    case 2:
      console.log("Deposit Money option selected");
      const deposit = Number(
        await rl.question("Enter the amount to deposit:")
      ); 
      if(isNaN(deposit)){
        console.log("Amount should be a valid number.")
      }
      else{
        if(deposit < 100){
        console.log("Unable to Deposit your Money. Amount should be greater than or equal to 100.")
      }
      else{
        initial_bal+=deposit;
        console.log("Money Deposited Successfully");
      }
      break;
      }  
    case 3:
      console.log("Withdraw money option selected");
      const withdraw = Number(
        await rl.question("Enter the amount to withdraw:")
      ); 

      if(isNaN(withdraw)){
        console.log("Amount should be a valid number.")
      }
      else{
        if(withdraw < 100){
        console.log("Entered Amount should be greater than or equal to 100.")
      }
      else{
        if(initial_bal < withdraw){
          console.log("Insufficient Balance.")
        }
        else if(initial_bal <= 100){
          console.log("Insufficient Funds remaining.")
        }
        else{
          initial_bal-=withdraw;
          console.log("Amount withdrawn successfully.")
        }
      }
      }

      break;
    case 4:
      console.log("Thank you visit again...");
      break;
    default:
      console.log("Please enter a valid input!")
      break;
  } 
  option = Number(
    await rl.question("What you want to do? 1. Check Balance, 2. Deposit, 3. Withdraw, 4. Exit:")
  ); 
}
  rl.close();
}

main();


