// map


// The difference is that `.map()` will always return you a **new array** of the **same length** as the original array comprised of your return values

let numbers = [7, 4, 9, 4];

let squares = numbers.map((n) => {
    return n * n;
})

console.log(numbers);
console.log(squares);


let people = [
    { name: "Atallah", role: "Dad" },
    { name: "Messina", role: "Mom" },
    { name: "Razan", role: "Kid" },
    { name: "Zaid", role: "Kid" },
];

let QuranFamily = people.map((member) => {
    if (member.name.length < 6) {
        return member.name;
    }
})

console.log(QuranFamily);



// filter
// it will return a new array and it could be the same length of the original one or not
// the elements will be from the original array that match your criteria(your filter condition) 

let numbers2 = [1, 2, 6, 7, 8];
let evenNum = numbers2.filter((n) => {
    if (n % 2 === 0) {
        // return n;
        // return n*5;
        return true;
    }
    //    return !(n%2);
});

// let evenNum = numbers2.filter((n) => {
//     //    return !(n%2);
// });

// let evenNum = numbers2.filter( n =>  !(n%2) );

console.log(evenNum);


// == data
// 4 == '4' True
// === date + type
// 4 === '4' false

