/**
 callback hell: to avoid callback hell promise was introduced. 
 To fix callback hell and make async code cleaner, readable and manageable, promise was introduced.

the problem was the code was written in a nested way.

task1(() => {
  task2(() => {
    task3(() => {
      console.log("Done");
      });
    });
  });
 */

  //Callback function

  function orderFood(customer, callback){
    console.log(`Order placed by ${customer}`)
    callback();
  }

  function deliveredFood(){
    console.log("Food delivered! You can enjoy your meal.")
  }


  orderFood("Yash", deliveredFood);

