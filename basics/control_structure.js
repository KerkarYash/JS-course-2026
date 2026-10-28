//Control structure:
//I) decision making

// const age = 18
// if(age >= 18){
//   console.log("You are legal to vote")
// }

// const age = 15;
// if(age >= 18){
//     console.log("You are legal to vote");
// }
// else{
//   console.log("You are not legal to vote")
// }

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {
  const rl = readline.createInterface({ input, output });


  const marks = await rl.question("Enter your marks:");
  if(marks >= 90){
    console.log("Grade A");
  }
  else if(marks >= 80){
    console.log("Grade B");
  }
  else if(marks >= 70){
    console.log("Grade C")
  }
  else if(marks >= 60){
    console.log("Grade D")
  }
  else if(marks >= 50){
    console.log("Grade E")
  }
  else if(marks >=40 && marks <=0){
    console.log("You are fail!");
  }
  else{
    console.log("Enter a valid input!");
  }

  rl.close(); // Remember to close the stream!


}

main();


