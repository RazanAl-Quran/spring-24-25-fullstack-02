// References 
// https://www.w3schools.com/js/js_es6.asp
// https://www.w3schools.com/js/js_let.asp
// https://www.w3schools.com/js/js_const.asp
// https://www.w3schools.com/js/js_datatypes.asp
// https://www.w3schools.com/js/js_typeof.asp
// https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/
// https://www.w3schools.com/js/js_hoisting.asp
// https://www.w3schools.com/js/js_destructuring.asp


{
    var x1 = 5;
}
console.log(x1);

{
    let x2 = 8;
}
    
// console.log(x2);

const x3 = 7;
// x3 = 8;

console.log(sum(2,4));

function sum(x,y) {
    return x+y;
}


console.log(typeof x3);



x4 = 9;
console.log(x4);
var x4;


// let const/data types/hoisting/destructing


// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {firstName, lastName, age} = person;


// let first = person.firstName;
// let last = person.lastName;
// let age = person.age;
 
