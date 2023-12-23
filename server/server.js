const express = require("express");
const fs = require('fs');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/addProduct", (req, res) => {
  const newProduct = req.body;
  jsonServerRouter.db.get('product').push(newProduct).write();
  res.status(200).json({ message: 'Product added successfully' });
});

// Custom endpoint for handling a shopping cart
let cartItems = []; // Store cart items in memory, you can use a database for persistent storage

app.get("/cart", (req, res) => {
  res.json(cartItems);
});

app.post("/cart/add", (req, res) => {
  const newItem = req.body;
  cartItems.push(newItem);
  res.status(200).json({ message: 'Item added to cart successfully' });
});

app.post("/cart/remove", (req, res) => {
  const { itemId } = req.body;
  cartItems = cartItems.filter(item => item.id !== itemId);
  res.status(200).json({ message: 'Item removed from cart successfully' });
});

// Mount JSON Server middleware
app.use("/api", middlewares, jsonServerRouter);


app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
