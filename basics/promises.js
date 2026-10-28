/*
promises: it is an Object that represents the result of an asynchronous operation - either resolve or reject. 
*/

console.log("Start");

const obj = new Promise((resolve, reject)=> {
  console.log("Promise <Pending>")
  setTimeout(() =>{
    const pin=2732
    if(pin === 2731){
      //promise resolve state code goes here.
      resolve("Promise resolved successfully.");
    }
    else{
      //promise reject state code goes here.
      reject(new Error("Promise Rejected."));
    }

  }, 4000)


})  //here promise is a class and we are creating an instance (object) of it.
obj.then(res => console.log(res))  //if everything goes well, then code will run
  .catch(err => console.error(err)) //if any problem occurs, the catch code will run.

console.log("End");