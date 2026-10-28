const users = ["Yash", "Aarushi", "Aahana", "Omkar"]

//forEach(): loops and print the data
console.log("For each:")
users.forEach(user => console.log(user))
console.log();

// map(): transform the data
console.log("Map:")
const upperCaseUserValue = users.map(user => user.toLocaleUpperCase())
console.log(upperCaseUserValue) //returns a new transformed array.
console.log();

// filter: Select specific items and returns a new array.
console.log("Filter:")
const fruits = ["Apple", "Banana", "Mango", "Apple", "Orange"];
const filteredValue = fruits.filter(fruit => fruit === "Apple");
console.log(filteredValue)
