const aged = 25; //number
const name = "Yash"; //string
const isTrue = true; //boolean
let value; //undefined


//Arithmetic operator
const a=10, b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Assignment operator
let c = 10;
c+=10;
c-=5;
c*=2;
c/=3;
c%=8;

console.log(c);

//Relational operator (Comparison)
const d = 10, e = 20;
console.log(d==e);
console.log(d===e);
console.log(d!=e);
console.log(d!==e);
console.log(d>e);
console.log(d<e);
console.log(d>=e);
console.log(d<=e);

//Logical operator: Two values are checked based on logical condition.

let p = true, q = false;
console.log(p && q);
console.log(p || q);
console.log(!q);

//Ternary: used to write condition. It is a short way to write if else operator.

let age = 12;
let result = (age >= 18 ? "You can have sex" : "You cannot have sex");
console.log(result);