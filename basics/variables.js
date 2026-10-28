//variable: container for storing data values. 

/*
Declaration:
i) const: used for values that should not be reassigned.
ii) let: it is used for values that may change over time.
iii) var: can be redeclared & get hoisted but initialized as undefined. 
*/

var a = 10;
console.log(a);  //10
var a = 20;  //var allows us to redeclare the variable
console.log(a); //20

a=30  //reassigning the value to the variable.
console.log(a);

//var: it allows both redeclaration and reassignment.

const c = 20;
console.log(c); //20

//const c = 30  //Cannot redeclare block scope variable
//c=40; //Type error: assignment to constant variable.
//console.log(c);

//const: in const, redeclaration and reassignment both are not allowed. 

let d = 10
console.log(d);

//let d = 20  //cannot redeclared block scope variable.

d = 20

console.log(d);

/*
var: can be redeclared and reassigned.
const: neither be redeclared nor be reassigned.
let: it cannot be redeclared but can be reassigned. 

Recommended is const.
const -> for best practice
let -> when value needs to change.
var -> due to scope issue, avoid to use it.


*/
