const express = require('express');
const Product = require('../models/productModel');
const Auth = require('../middleware/authVendor');

const router = new express.Router();

//create new product
router.post('/product', Auth,async(req, res) => {
    try{
        const newProduct = new Product({
            ...req.body,
            owner: req.vendor._id
        })
        await newProduct.save()
        res.status(201).send(newProduct)
    } catch(error){
        res.status(400).send({message: "error"})
    }
});

//fetch a product
router.get('/product/:id', async(req, res) => {
    try{
        const product = await Product.findOne({_id: req.params.id})
        if(!product) {
            res.status(404).send({error: "Product not available"})
        }
        res.status(200).send(product)
    } catch(error) {
        res.status(400).send(error)
    }
})

//fetch all products
router.get('/products', async(req, res)=>{
    try{
        const products = await Product.find({})
        res.status(200).send(products)
    }catch{
        res.status(400).send(error)
    }
})

//update a product
router.patch('/product/:id',Auth, async(req, res)=>{
    const updates = Object.keys(req.body)

    const allowedUpdates = ['name', 'description', 'category', 'price','image']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error: 'invalid updates'})
    }
    try{
        const product = await Product.findOne({_id: req.params.id})
        if(!product){
            return res.status(404).send()
        }
        updates.forEach((update) => product[update] =req.body[update])
        await product.save()
        res.send(product)
    } catch(error){
        res.status(400).send(error)
    }
})

//delete product
router.delete('/product/:id', Auth, async(req, res) => {
    try{
        const deletedProduct = await Product.findOneAndDelete({_id:req.params.id})
        if(!deletedProduct){
            res.status(404).send({error: "Product not Found"})
        }
        res.send(deletedProduct)

    } catch(error){
        res.status(400).send(error)
    }
})

module.exports = router;