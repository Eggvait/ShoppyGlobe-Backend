const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

/* ADD TO CART */
router.post("/cart", protect, async (req, res) => {
  const { productId, quantity } = req.body;

  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const cartItem = await Cart.create({
    userId: req.user.id,
    productId,
    quantity
  });

  res.json(cartItem);
});

/* UPDATE CART */
router.put("/cart/:id", protect, async (req, res) => {
  const cartItem = await Cart.findByIdAndUpdate(
    req.params.id,
    { quantity: req.body.quantity },
    { new: true }
  );

  res.json(cartItem);
});

/* DELETE CART ITEM */
router.delete("/cart/:id", protect, async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item removed from cart" });
});

module.exports = router;
