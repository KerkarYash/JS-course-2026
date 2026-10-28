//Error handling: It prevent us to manage runtime errors.
//by using try, catch and finally.
// in try: risky code is written, error is catched in catch block, closing code is written in finally, because finally always execute.


try{
  const num = 10
  console.log(num);
}
catch(error){
  console.log("An error occurred: ",error.message)
}