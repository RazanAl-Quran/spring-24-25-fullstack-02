// All Resources
// https://www.geeksforgeeks.org/javascript-template-literals/
// https://www.w3schools.com/js/js_array_methods.asp
// https://www.w3schools.com/js/js_array_iteration.asp


// Template Literals
let x = 9;
let y = 8;

// 1- string interpolation
console.log("the sum of x and y is x+y");
console.log("the sum of" + x + "and " + y + "is" + (x + y));
console.log(`the sum of ${x} and ${y} is ${x + y}`);


// 2- multi line string
const s = `This is \`a multi-line
string that spans across
several lines.`;
console.log(s);


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(`before: ${fruits}`); // ["Banana", "Orange", "Apple", "Mango"];
const removedFruits = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(`after: ${fruits}`); // ["Banana", "Orange", "Lemon", "Kiwi"];
console.log(removedFruits); // ["Apple", "Mango"];


// ForEach
// Array.forEach is a method on an array that processes every element in the array with a callback
//forEach runs a CALLBACK function WITH every element of the array

let people = ['Razan', 'Sherry', 'Abdulrahman', 'Aisha'];
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.forEach((item) => {
    console.log(item);
});