import express from "express";
import Product from "../models/products.js"

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json(products)
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

export default router;
