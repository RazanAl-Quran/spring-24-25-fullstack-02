import express from 'express';
// import pgclient  from '../db';
import pgclient from '../db.js';

const router = express.Router();


// Read >>> get 
// insert create >> post 
// update >> put post 
// delete >> delete post 


// User Endpoints

// localhost:3001/api/users/
router.get("/", async (req, res) => {
    try {
        const users = await pgclient.query("SELECT * FROM users;");
        res.json(users.rows);
    } catch (error) {

    }
});



// localhost:3001/api/users/1
router.get("/:id", async (req, res) => {
    try {
        const result = await pgclient.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});


// localhost:3001/api/users/
// body {name:sherry, age:7}
// POST
router.post("/", async (req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    const newUser2 = await pgclient.query(
        "INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *", [name, age]
    );
    res.json(newUser2.rows[0]);
})

// localhost:3001/api/users/
// body {name:sherry2, age:9}
// PUT
router.put("/:id", async (req, res) => {
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

// localhost:3001/api/users/1
// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const result = await pgclient.query("DELETE FROM users WHERE id = $1 RETURNING *", [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted", user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});



export default router;