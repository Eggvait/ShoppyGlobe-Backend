const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

/* CREATE PRODUCT */
router.post("/products", async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;

    if (!name || !price || !stock) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = await Product.create({
      name,
      price,
      description,
      stock
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* GET ALL PRODUCTS */
router.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

/* GET PRODUCT BY ID */
router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

module.exports = router;
