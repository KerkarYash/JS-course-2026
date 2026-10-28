async function getData(){
  try{
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  console.log("Response Here: ",response)
  const data = await response.json()
  console.log("Data: ",data);
  }
  catch(error){
    console.log("Error: ",error.message);
  }
}

getData();

