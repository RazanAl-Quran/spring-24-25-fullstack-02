import express from "express";
import db from "../db.js";
const router = express.Router();

router.post("/cart", async (req, res) => {
  const { email, product_id } = req.body;
  await db.query(
    "INSERT INTO carts (user_email, product_id) VALUES ($1, $2)",
    [email, product_id]
  );
  const cart = await db.query(
    "SELECT p.* FROM carts c JOIN products p ON c.product_id = p.id WHERE c.user_email = $1",
    [email]
  );
  res.status(201).json({ cart: cart.rows });
});

router.get("/cart/:email", async (req, res) => {
  const result = await db.query(
    "SELECT p.* FROM carts c JOIN products p ON c.product_id = p.id WHERE c.user_email = $1",
    [req.params.email]
  );
  res.json(result.rows);
});

export default router;
