// All References
// https://www.w3schools.com/react/react_es6_spread.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_rest
// JavaScript Best Practices:
// https://www.w3schools.com/js/js_best_practices.asp
// HTML DOM:
// https://www.w3schools.com/js/js_htmldom.asp
// HTML BOM:

// JS Functions
// https://www.geeksforgeeks.org/different-ways-of-writing-functions-in-javascipt/
// https://www.geeksforgeeks.org/difference-between-function-declaration-and-function-expression-in-javascript/
// JavaScript Arrow Function
// https://www.w3schools.com/js/js_arrow_function.asp



let x = 5;
let y =x;
y=9;
console.log(x);
console.log(y);


let arr1 = [9,6,7];
let arr2 = arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);



// 1. Copying Arrays & Objects (Avoiding Mutations)
// Instead of modifying an existing array or object, we can create a copy using the spread operator

// a. Copying an Array
const arr3 = [3,6,8];
const arr4 = [...arr3];
arr4.push(99);
console.log(arr3);
console.log(arr4);

// b. Copying an Object
const obj1 = { name: "Alice", age: 25 };
const obj2 = { ...obj1 };
obj2.age = 88;
console.log(obj1);
console.log(obj2);


// 2. Merging Arrays & Objects
const arr11 = [1, 2, 3];
const arr22 = [4, 5, 6];
const newArr= [...arr11,...arr22];
console.log(newArr);

const user = { name: "John", age: 30 };
const details = { country: "USA", gender: "Male" };
let newObj = {...user,...details};
console.log(newObj);


// 3. Adding Elements to Arrays Easily
let arr6 = [5,6,7];
let arr7 = [22,...arr6,99];
console.log(arr7);


// 4- Converting string to array
let str1 = "Hello";
let word = [...str1];
console.log(word);



// Types of Function in JS 

// 1- Named functions/function declrations
function add(a, b) {         
    console.log(a + b);
}
add(4,6);

// 2- function expressions
const add2 = function (a, b) {
    console.log('welcome');
    console.log(a + b);
}
add2(6,8);


// 3- arrow functions
const add3 = (a,b) =>  a+b;
console.log(add3(4,9));







