import express from "express";
import db from "../db.js";
import adminAuth from "../middleware/adminAuth.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM products ORDER BY id");
  res.json(result.rows);
});

router.post("/", adminAuth, async (req, res) => {
  const { name, price } = req.body;
  const result = await db.query(
    "INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *",
    [name, price]
  );
  res.status(201).json(result.rows[0]);
});

router.put("/:id", adminAuth, async (req, res) => {
  const { name, price } = req.body;
  const result = await db.query(
    "UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *",
    [name, price, req.params.id]
  );
  result.rows.length > 0
    ? res.json(result.rows[0])
    : res.status(404).json({ message: "Product not found" });
});

router.delete("/:id", adminAuth, async (req, res) => {
  const result = await db.query("DELETE FROM products WHERE id = $1 RETURNING *", [req.params.id]);
  result.rows.length > 0
    ? res.json({ deleted: result.rows[0] })
    : res.status(404).json({ message: "Product not found" });
});

export default router;
