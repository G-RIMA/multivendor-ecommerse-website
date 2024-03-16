const express = require("express");
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const Auth =require("../middleware/authCustomer");

const router = new express.Router()

//get cart
router.get("/cart", Auth,async(req, res) =>{
    const owner = req.customer._id;
    try{
        const cart = await Cart.findOne({ owner });
        if(cart && cart.products.length > 0){
            res.status(200).send(cart)
        } else{
            res.send(null)
        }

    } catch(error){
        res.status(500).send()

    }
});

//create cart
router.post("/cart", Auth, async (req, res) => {
    const owner = req.user._id;
    const { productId, quantity } = req.body;
    try {
        const cart = await Cart.findOne({ owner });
        const product = await Product.findOne({ _id: productId });
    if (!product) {
        res.status(404).send({ message: "product not found" });
        return;
    }
        const price = product.price;
        const name = product.name;
    //If cart already exists for user,
    if (cart) {
        const productIndex = cart.products.findIndex((product) => product.productId ==  productId);
    //check if product exists or not
    if (productIndex > -1) {
        let product = cart.products[productIndex];
        product.quantity += quantity;
        cart.bill = cart.products.reduce((acc, curr) => {
           return acc + curr.quantity * curr.price;
       },0)
    cart.products[productIndex] = product;
       await cart.save();
       res.status(200).send(cart);
    } else {
       cart.products.push({ productId, name, quantity, price });
       cart.bill = cart.products.reduce((acc, curr) => {
       return acc + curr.quantity * curr.price;
    },0)
       await cart.save();
       res.status(200).send(cart);
    }
    } else {
    //no cart exists, create one
    const newCart = await Cart.create({
       owner,
       products: [{ productId, name, quantity, price }],
        bill: quantity * price,
    });
    return res.status(201).send(newCart);
    }
    } catch (error) {
       console.log(error);
       res.status(500).send("something went wrong");
    }
});

//deleting cart products
router.delete("/cart/", Auth, async (req, res) => {
    const owner = req.user._id;
    const productId = req.query.productId;
    try {
       let cart = await Cart.findOne({ owner });
       const productIndex = cart.products.findIndex((product) => product.productId == productId);
    if (productIndex > -1) {
         let product = cart.products[productIndex];
         cart.bill -= product.quantity * product.price;
    if(cart.bill < 0) {
          cart.bill = 0
    }
         cart.products.splice(productIndex, 1);
         cart.bill = cart.products.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
    },0)
        cart = await cart.save();
        res.status(200).send(cart);
    } else {
        res.status(404).send("product not found");
    }
    } catch (error) {
       console.log(error);
       res.status(400).send();
    }
});

module.exports = router;
