// Resources
// https://developer.okta.com/blog/2019/01/16/history-and-future-of-async-javascript
// https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
// http://callbackhell.com/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ


// function calculateSquare(number, callback) {
//     console.log('inside calculateSquare');
//     let result = number * number;
//     callback(result);
// }

// function displayResult(result) {
//     console.log("The square is:", result);
// }

// // Calling the function with a callback
// calculateSquare(5, displayResult);


// callback
console.log('hi 1');
function cb() {
    console.log('hi 2');
}
setTimeout(cb, 0);
console.log('hi 3');


// log hi 1
// fetch data from api or db
// render data
// log hi 2


// ************ callback 3
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 done");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 done");
        callback();
    }, 2000);
}

function step3() {
    setTimeout(() => {
        console.log("Step 3 done");
    }, 1000);
}

step1(() => {
    step2(() => {
        step3();
    });
});