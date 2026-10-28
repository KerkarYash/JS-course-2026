//promises using api

console.log("Start")

const obj = new Promise((resolve, reject) => {
  console.log("Promise pending...")
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if(!response.ok){
      throw new Error("API error")
    }
    return response.json();
  })
  .then(data => {
    resolve(data);
  })
  .catch(err => {
    reject(err);
  })
})


console.log("End")

obj.then((res) => {
  console.log("Promise resolved: ",res);
})
.catch(err => {
  console.log("Error:", err);
})