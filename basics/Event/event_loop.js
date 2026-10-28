// Event loop: it is nothing but just handle asynchronous task without blocking execution. 

console.log("Start")

setTimeout(() => {
  console.log("Execution after 2 secs")
}, 2000)

console.log("End")