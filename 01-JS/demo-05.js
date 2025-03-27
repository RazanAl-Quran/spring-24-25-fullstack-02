// OOP
// https://www.freecodecamp.org/news/object-oriented-javascript-for-beginners/

// Object Literals
const alien1 = {
    name: "Ali",
    species: "alien",
    phrase: () => console.log("I'm Ali the alien!"),
    fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
const alien2 = {
    name: "Lien",
    species: "alien",
    sayPhrase: () => console.log("Run for your lives!"),
    fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
console.log(alien1.name) // output: "Ali"


// Classes
class Alien { // Name of the class
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    // These will be the object's methods.
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}
const alien11 = new Alien("Ali", "I'm Ali the alien!")


// Inheritence
class Enemy {
    constructor(name, phrase, power, speed) {
        this.name = name
        this.phrase = phrase
        this.power = power
        this.speed = speed
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}

class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    attack = () => console.log(`Now I'm ${this.name} doing a different thing, HA!`) // Override the parent method.
}

const alien3 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
alien3.attack() // output: "Now I'm doing a different thing, HA!"