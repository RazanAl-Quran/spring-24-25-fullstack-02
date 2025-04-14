console.log('before');

async function fetchDigimon() {
    try {
        let response = await fetch(`https://digimon-api.vercel.app/api/digimon`);
        let digimons = await response.json();
        let digimonNames = digimons.map((item) => item.name );
        console.log(digimonNames);
    } catch(error) {
        console.error(error);    
    }

}
fetchDigimon();
console.log('after');





// console.log('before');

// fetch(`https://digimon-api.vercel.app/api/digimon`)
//     .then((response) => {
//         // console.log(response);
//         return response.json(); //promise-based
//     }).then((digimons) => {
//         // console.log(digimons);
//         let digimonNames = digimons.map((item) => {
//             return item.name;
//         });
//         return digimonNames;
//     }).then((digmonArrayNames) => {
//         console.log(digmonArrayNames);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


// console.log('after');

