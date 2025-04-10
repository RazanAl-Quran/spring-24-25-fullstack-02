// *************************************************
// PROMISES
// A Promise is an object that represents a value that may be available now, in the future, or never.


// ***************** What is fetch:
// It's a built-in promised-based JavaScript function that lets you request data from a server, such as: JSON APIs, Files, and Web pages
// Introduced in ES6, fetch() replaces the older XMLHttpRequest method with a simpler and cleaner syntax.
// The fetch() method returns a Promise, which resolves to a Response object.


// ***************** What is 3rd party API and how to read their documentation
// A third-party API is an API (Application Programming Interface) that is built and maintained by someone else, usually a company or organization, and you can use it in your own applications to access specific data or services
// 🧠 In Simple Terms:
// It's like borrowing functionality from another website or service instead of building it yourself.

// 🧱 Why Use a Third-Party API?
// 1- Save time and effort
// 2- Get reliable data or services
// 3- Add powerful features without coding them yourself

// 🔐 Some APIs Require Keys
// Popular or sensitive APIs often require an API key



// let city = 'amman';

// fetch(`http://api.weatherapi.com/v1/current.json?key=683cf4bb5e1446b0a39193413250804&q=${city}`)
// .then((response)=>{
//     console.log(response);

// })

fetch(`https://digimon-api.vercel.app/api/digimon`)
    .then((response) => {
        // console.log(response);
        return response.json(); //promise-based
    }).then((digimons) => {
        // console.log(digimons);
        let digimonNames = digimons.map((item) => {
            return item.name;
        });
        return digimonNames;
    }).then((digmonArrayNames) => {
        console.log(digmonArrayNames);
    })
    .catch((error) => {
        console.error(error);
    })


// Promises chaining
// we use when you're chaining asynchronous operations.
// fetch(...)
//   .then(...)  // 1st Promise
//   .then(...)  // 2nd Promise, using result from 1st
//   .then(...)  // 3rd Promise, using result from 2nd
//   .catch(...) // handles errors in any of the above




// ************* Promises 2 (Create your own promises)
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data fetched");
            } else {
                reject("Error fetching data");
            }
        }, 2000);
    });
}

fetchData()
    .then(response => {
        console.log(response);  // "Data fetched"
    })
    .catch(error => {
        console.error(error);
    });




