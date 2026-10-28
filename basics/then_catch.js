//In then catch no need to use async await. Its a simple and shorter way without using async await.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error.message));