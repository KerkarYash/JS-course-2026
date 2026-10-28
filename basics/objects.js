/*
Objects:-
i) stores data as properties, in the form of key & value pairs.
ii) Accessing data: use dot notation or brack notation obj["name"]
 */

const users = [
  {
    id:1,
    name:"Yash",
    gender:"male",
    email:"kerkaryash5@gmailcom",
  },
  {
    id:1,
    name:"Aarushi",
    gender:"female",
    email:"chavanaarushi5@gmailcom",
  },
  {
    id:3,
    name:"Aahana",
    gender:"female",
    email:"chavanaahana5@gmailcom",
  },

];

console.log(users.length);
users.forEach(user => console.log(user.name));

const upperCaseName = users.map(user => user.name.toLocaleUpperCase());
console.log(upperCaseName);

const filteredName = users
  .filter(user => user.gender === "female")
  .map(u => u.email)
console.log(filteredName);


