// user routes
import express from 'express';
import pgclient from '../db.js';

const userRoutes = express.Router();


// get all users
// localhost:3001/api/users/
userRoutes.get('/', async (req, res) => {
    const users = await pgclient.query("SELECT * FROM users;");
    res.json(users.rows);
})

// localhost:3001/api/users/2
userRoutes.get('/:id', async (req, res) => {
    const result = await pgclient.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) {
        res.status(404).json({ message: "User not found" });
    }
    res.json(result.rows[0]);
})

// add new user
// localhost:3001/api/users/
// POST
// body >> {"id":12,"name":"sherry","age":7}
userRoutes.post('/', async (req, res) => {
    // const name = req.body.name;
    // const age = req.body.age;
    const { name, age } = req.body;
    const result = await pgclient.query("INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *", [name, age]);
    res.status(201).json(result.rows);
})

userRoutes.put("/:id", async (req, res) => {
  const { name, age } = req.body;
  try {
    const result = await pgclient.query(
      "UPDATE users SET name = $1, age = $2 WHERE id = $3 RETURNING *",[name, age, req.params.id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});



export default userRoutes;