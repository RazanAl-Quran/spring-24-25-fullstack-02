// user routes
import express from 'express';

const userRoutes = express.Router();

let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 }
];

// get all users
// localhost:3001/api/users/
userRoutes.get('/', (req, res) => {
    res.json(users);
})

// localhost:3001/api/users/2
userRoutes.get('/:id', (req, res) => {
    const user = users.find((item) => {
        if (item.id == req.params.id) {
            return item;
        }
    });
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ 'message': "user not found" })
    }
})

// add new user
// localhost:3001/api/users/
// POST
// body >> {"id":12,"name":"sherry","age":7}
userRoutes.post('/', (req, res) => {
    // const name = req.body.name;
    // const age = req.body.age;
    // const {name,age} = req.body;
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age
    }
    users.push(newUser);
    res.json(users);
})

export default userRoutes;